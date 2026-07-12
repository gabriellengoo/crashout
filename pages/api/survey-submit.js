import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { answerableScreens } from '../../data/surveyQuestions';
import { appendSharePointListSubmission } from '../../lib/microsoftGraphStorage';
import { stripUnsafeText, validateAll } from '../../lib/validation';

const submissionsDir = path.join(process.cwd(), 'submissions');
const jsonlPath = path.join(submissionsDir, 'survey-submissions.jsonl');
const csvPath = path.join(submissionsDir, 'survey-submissions.csv');

function cleanPayload(formData) {
  const allowed = new Set(answerableScreens.map((screen) => screen.id));
  return Object.fromEntries(
    Object.entries(formData || {})
      .filter(([key]) => allowed.has(key))
      .map(([key, value]) => {
        if (Array.isArray(value)) return [key, value.map(stripUnsafeText).slice(0, 30)];
        return [key, stripUnsafeText(value)];
      })
  );
}

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join('; ') : String(value ?? '');
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
    ...answerableScreens.map((screen) => screen.id),
    'rawJson'
  ];
  const row = [
    record.timestamp,
    record.submissionId,
    record.eventSource,
    record.email,
    record.consent,
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  if (body.website) return res.status(200).json({ ok: true });

  const answers = cleanPayload(body.formData);
  const validationError = validateAll(answers);
  if (validationError) return res.status(400).json({ error: validationError.message, field: validationError.id });

  const eventSource = stripUnsafeText(body.metadata?.eventSource || '');
  const timestamp = new Date().toISOString();
  const submissionId = crypto.randomUUID();

  const record = {
    timestamp,
    submissionId,
    eventSource,
    email: answers.email || '',
    consent: Boolean(answers.consent),
    answers,
    rawMetadata: {
      eventSource,
      activeQuestionIndex: Number(body.metadata?.activeQuestionIndex ?? 0)
    }
  };

  const usedConfiguredStorage = await appendConfiguredSubmission(record);
  if (!usedConfiguredStorage) {
    if (process.env.VERCEL === '1' || process.env.NODE_ENV === 'production') {
      return res.status(200).json({ ok: true, submissionId, storageConfigured: false });
    }
    await appendLocalSubmission(record);
  }

  return res.status(200).json({ ok: true, submissionId });
}
