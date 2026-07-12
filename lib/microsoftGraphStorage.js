const GRAPH_BASE_URL = 'https://graph.microsoft.com/v1.0';

const defaultColumnMap = {
  title: 'Title',
  submissionId: 'SubmissionId',
  timestamp: 'SubmittedAt',
  eventSource: 'EventSource',
  email: 'Email',
  consent: 'Consent',
  answersJson: 'AnswersJson',
  rawMetadataJson: 'RawMetadataJson'
};

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function getColumnMap() {
  if (!process.env.SURVEY_SHAREPOINT_COLUMN_MAP) return defaultColumnMap;

  try {
    return {
      ...defaultColumnMap,
      ...JSON.parse(process.env.SURVEY_SHAREPOINT_COLUMN_MAP)
    };
  } catch {
    throw new Error('SURVEY_SHAREPOINT_COLUMN_MAP must be valid JSON');
  }
}

async function getMicrosoftGraphToken() {
  const tenantId = getRequiredEnv('MS_GRAPH_TENANT_ID');
  const body = new URLSearchParams({
    client_id: getRequiredEnv('MS_GRAPH_CLIENT_ID'),
    client_secret: getRequiredEnv('MS_GRAPH_CLIENT_SECRET'),
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials'
  });

  const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Microsoft Graph token request failed with ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  if (!data.access_token) throw new Error('Microsoft Graph token response did not include an access token');
  return data.access_token;
}

function buildSharePointFields(record) {
  const columns = getColumnMap();

  return {
    [columns.title]: `Survey submission ${record.submissionId}`,
    [columns.submissionId]: record.submissionId,
    [columns.timestamp]: record.timestamp,
    [columns.eventSource]: record.eventSource,
    [columns.email]: record.email,
    [columns.consent]: record.consent,
    [columns.answersJson]: JSON.stringify(record.answers),
    [columns.rawMetadataJson]: JSON.stringify(record.rawMetadata)
  };
}

export async function appendSharePointListSubmission(record) {
  const siteId = getRequiredEnv('SHAREPOINT_SITE_ID');
  const listId = getRequiredEnv('SHAREPOINT_LIST_ID');
  const token = await getMicrosoftGraphToken();

  const response = await fetch(`${GRAPH_BASE_URL}/sites/${siteId}/lists/${listId}/items`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: buildSharePointFields(record)
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SharePoint List write failed with ${response.status}: ${errorText}`);
  }

  return true;
}
