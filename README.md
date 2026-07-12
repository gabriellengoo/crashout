# Crash Out

Editorial website, events RSVP flow, and survey platform for Crash Out.

## Local development

```bash
npm install
npm run dev
```

The survey API writes local development submissions to `submissions/survey-submissions.jsonl` and `submissions/survey-submissions.csv`. Those generated files are ignored by git.

## Vercel

This is a standard Next.js app and builds on Vercel with:

```bash
npm run build
```

Set these environment variables in Vercel:

- `NEXT_PUBLIC_FORMSPREE_EVENT_ENDPOINT`: public Formspree endpoint for event RSVPs.
- `SURVEY_STORAGE_PROVIDER`: use `sharepoint-list` for the main research survey in production.
- `MS_GRAPH_TENANT_ID`: Central/Microsoft tenant ID.
- `MS_GRAPH_CLIENT_ID`: Microsoft Entra application/client ID for the approved storage integration.
- `MS_GRAPH_CLIENT_SECRET`: client secret for the approved Microsoft Entra app. Keep this server-only.
- `SHAREPOINT_SITE_ID`: Microsoft Graph site ID for the approved SharePoint site.
- `SHAREPOINT_LIST_ID`: Microsoft Graph list ID for the approved SharePoint List.
- `SURVEY_SHAREPOINT_COLUMN_MAP`: optional JSON map if the SharePoint internal column names differ from the defaults.
- `SURVEY_STORAGE_WEBHOOK_URL`: optional fallback server-side webhook that receives validated survey submission JSON and stores it in an approved database.
- `SURVEY_STORAGE_WEBHOOK_SECRET`: optional bearer token sent to the storage webhook.

In production, the app does not persist survey responses to the Vercel filesystem. If no production storage provider is configured, `/api/survey-submit` returns `storageConfigured: false` rather than silently treating the local filesystem as durable storage.

## Main survey storage

The event RSVP form can use Formspree separately, but the main research survey should use an approved server-side storage route because it contains special-category and potentially identifiable research data.

The preferred Microsoft route is a SharePoint List accessed through Microsoft Graph:

1. Ask Central IT to create or approve a project SharePoint site/list for the research survey.
2. Create these list columns, or provide a `SURVEY_SHAREPOINT_COLUMN_MAP` that maps the code's defaults to Central's internal column names:
   - `Title`
   - `SubmissionId`
   - `SubmittedAt`
   - `EventSource`
   - `Email`
   - `Consent`
   - `AnswersJson`
   - `RawMetadataJson`
3. Ask Central IT to create a Microsoft Entra app registration for this website's server-side survey submission route.
4. Grant the app Microsoft Graph application access to write to the approved SharePoint list. Use the narrowest Central-approved permission model available for the project.
5. Add the Microsoft Graph and SharePoint values above to Vercel as server-side environment variables.

Each submission is written as one SharePoint List item. The complete survey answer object is stored in `AnswersJson`, which keeps export simple while avoiding a fragile dependency on a wide workbook schema.
