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
- `SURVEY_STORAGE_WEBHOOK_URL`: server-side webhook that receives validated survey submission JSON and stores it in a spreadsheet/database.
- `SURVEY_STORAGE_WEBHOOK_SECRET`: optional bearer token sent to the storage webhook.

In production, the app does not persist survey responses to the Vercel filesystem. If `SURVEY_STORAGE_WEBHOOK_URL` is missing, `/api/survey-submit` returns a storage configuration error rather than silently losing responses.
