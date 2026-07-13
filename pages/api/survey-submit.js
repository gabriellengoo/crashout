import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { answerableScreens, surveyScreens } from '../../data/surveyQuestions';
import { appendSharePointListSubmission } from '../../lib/microsoftGraphStorage';
import { stripUnsafeText, validateAll } from '../../lib/validation';

const submissionsDir = path.join(process.cwd(), 'submissions');
const jsonlPath = path.join(submissionsDir, 'survey-submissions.jsonl');
const csvPath = path.join(submissionsDir, 'survey-submissions.csv');

function cleanValue(value) {
  if (Array.isArray(value)) return value.map(cleanValue).slice(0, 30);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [stripUnsafeText(key), cleanValue(item)]));
  }
  return stripUnsafeText(value);
}

function getVisibleScreens(formData) {
  return surveyScreens.filter((screen) => !screen.visibleWhen || screen.visibleWhen(formData || {}));
}

function cleanPayload(formData, visibleScreens) {
  const visibleAnswerableScreens = visibleScreens.filter((screen) => screen.type !== 'fact');
  const allowed = new Set(visibleAnswerableScreens.map((screen) => screen.id));
  for (const screen of visibleAnswerableScreens) {
    if (screen.otherField) allowed.add(`${screen.id}__other`);
  }

  return Object.fromEntries(
    Object.entries(formData || {})
      .filter(([key]) => allowed.has(key))
      .map(([key, value]) => [key, cleanValue(value)])
  );
}

function splitIdentifiableAnswers(answers, visibleScreens) {
  const identifyingFields = visibleScreens.filter((screen) => screen.identifying).map((screen) => screen.id);
  const identifyingFieldSet = new Set(identifyingFields);
  const anonymousAnswers = {};
  const identifiableAnswers = {};

  for (const [key, value] of Object.entries(answers)) {
    if (identifyingFieldSet.has(key)) {
      identifiableAnswers[key] = value;
    } else {
      anonymousAnswers[key] = value;
    }
  }

  return { anonymousAnswers, identifiableAnswers, identifyingFields };
}

function getScaleLabels(visibleScreens, metadata) {
  const labels = visibleScreens
    .filter((screen) => screen.scaleLabels)
    .reduce((current, screen) => ({ ...current, [screen.id]: screen.scaleLabels }), {});
  if (Object.keys(labels).length > 0) return labels;
  return cleanValue(metadata?.scaleLabels || {});
}

function csvEscape(value) {
  const text = Array.isArray(value)
    ? value.join('; ')
    : value && typeof value === 'object'
      ? JSON.stringify(value)
      : String(value ?? '');
  return `"${text.replace(/"/g, '""')}"`;
}

async function appendLocalSubmission(record) {
  await fs.mkdir(submissionsDir, { recursive: true });
  await fs.appendFile(jsonlPath, `${JSON.stringify(record)}\n`, 'utf8');

  const headers = [
    'timestamp',
    'submissionId',
    'eventSource',
    'email',
    'consent',
    'identifiableAnswersJson',
    'scaleLabelsJson',
    ...answerableScreens.map((screen) => screen.id),
    'rawJson'
  ];
  const row = [
    record.timestamp,
    record.submissionId,
    record.eventSource,
    record.email,
    record.consent,
    record.identifiableAnswers,
    record.rawMetadata.scaleLabels,
    ...answerableScreens.map((screen) => record.answers[screen.id]),
    JSON.stringify(record)
  ];

  try {
    await fs.access(csvPath);
  } catch {
    await fs.writeFile(csvPath, `${headers.map(csvEscape).join(',')}\n`, 'utf8');
  }
  await fs.appendFile(csvPath, `${row.map(csvEscape).join(',')}\n`, 'utf8');
}

async function appendWebhookSubmission(record) {
  const webhookUrl = process.env.SURVEY_STORAGE_WEBHOOK_URL;
  if (!webhookUrl) return false;
  const headers = { 'Content-Type': 'application/json' };
  if (process.env.SURVEY_STORAGE_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.SURVEY_STORAGE_WEBHOOK_SECRET}`;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(record)
  });

  if (!response.ok) {
    throw new Error(`Storage webhook failed with ${response.status}`);
  }

  return true;
}

async function appendConfiguredSubmission(record) {
  const provider = process.env.SURVEY_STORAGE_PROVIDER || 'webhook';

  if (provider === 'sharepoint-list') {
    return appendSharePointListSubmission(record);
  }

  if (provider === 'webhook') {
    return appendWebhookSubmission(record);
  }

  if (provider === 'local') {
    return false;
  }

  throw new Error(`Unsupported SURVEY_STORAGE_PROVIDER: ${provider}`);
}

export function prepareSubmissionRecord(body, submissionId = crypto.randomUUID(), timestamp = new Date().toISOString()) {
  const visibleScreens = getVisibleScreens(body.formData);
  const answers = cleanPayload(body.formData, visibleScreens);
  const validationError = validateAll(answers, visibleScreens);
  if (validationError) return { validationError };
  const { anonymousAnswers, identifiableAnswers, identifyingFields } = splitIdentifiableAnswers(answers, visibleScreens);

  const eventSource = stripUnsafeText(body.metadata?.eventSource || '');

  return {
    record: {
      timestamp,
      submissionId,
      eventSource,
      email: identifiableAnswers.follow_up_contact || '',
      consent: Boolean(answers.consent),
      answers: anonymousAnswers,
      identifiableAnswers,
      rawMetadata: {
        eventSource,
        activeQuestionIndex: Number(body.metadata?.activeQuestionIndex ?? 0),
        visibleScreenIds: visibleScreens.map((screen) => screen.id),
        scaleLabels: getScaleLabels(visibleScreens, body.metadata),
        identifyingFields,
        otherTextFields: visibleScreens.filter((screen) => screen.otherField).map((screen) => `${screen.id}__other`)
      }
    }
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  if (body.website) return res.status(200).json({ ok: true });

  const { record, validationError } = prepareSubmissionRecord(body);
  if (validationError) return res.status(400).json({ error: validationError.message, field: validationError.id });
  const submissionId = record.submissionId;

  const usedConfiguredStorage = await appendConfiguredSubmission(record);
  if (!usedConfiguredStorage) {
    if (process.env.VERCEL === '1' || process.env.NODE_ENV === 'production') {
      return res.status(200).json({ ok: true, submissionId, storageConfigured: false });
    }
    await appendLocalSubmission(record);
  }

  return res.status(200).json({ ok: true, submissionId });
}
