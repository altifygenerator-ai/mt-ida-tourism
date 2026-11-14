# Mount Ida Event Automation Setup

This adds the same semi-automated event importer pattern used on the Glenwood and Hot Springs guides, scoped for Mount Ida.

Imported events do not publish automatically. They save as `pending`, then you review and approve them in `/admin/events`.

## Routes

Admin:

```txt
/admin/events
/admin/events/import
/admin/events/sources
```

API:

```txt
/api/cron/import-events
/api/events/import/run
/api/events/import/paste
/api/events/sources
/api/events/sources/[id]
```

## Site scoping

All imported events and event sources are scoped to:

```txt
site = mount-ida
```

That keeps Mount Ida events separate from Glenwood even though the sites share the same Supabase project and `events` table.

## Env vars

Vercel and local `.env.local` need:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MOUNT_IDA_ADMIN_SECRET=
NATURAL_STATE_ADMIN_SECRET=
OPENAI_API_KEY=
CRON_SECRET=
SITE_KEY=mount-ida
```

`OPENAI_API_KEY` is used for regular website-page extraction and quick paste imports. ICS/RSS/JSON-LD sources can still work without AI if the source has structured event data.

## Database

If `event_sources` and `event_import_runs` do not already exist in the shared Supabase database, run:

```txt
mount-ida-event-automation-update.sql
```

## Vercel cron

`vercel.json` runs the importer once daily:

```json
{
  "crons": [
    {
      "path": "/api/cron/import-events",
      "schedule": "0 11 * * *"
    }
  ]
}
```

The cron route requires `CRON_SECRET`.


## Verified auto-publication upgrade — November 2026

The importer now registers curated public event URLs automatically when a
daily import runs. Event candidates are checked for upcoming dates,
guide-area location evidence, same-event duplicates, source provenance, and
structured-data confidence. Verified eligible listings are rewritten in
short, factual language and published as \`approved\`; doubtful or incomplete
records remain \`pending\` and do not display to visitors. Manually submitted
events still require approval.

The system does not invent dates, cities, or admission prices.
UTC calendar timestamps are converted to America/Chicago local time.

Important limitations:
- A source URL listed in code is not proof that the remote page still provides
  machine-readable event dates. Test every source with the production importer.
- A cancellation or reschedule after publication is not yet automatically
  synchronized; reconciliation and source-health alerts are still needed.
- Production deploys require the existing Supabase event tables and correct
  OPENAI_API_KEY, CRON_SECRET, and service-role environment variables.
- The shared Glenwood project runs scheduled imports and provides a read-only
  public event feed for the Amity and Murfreesboro sites. Deploy and test that
  service before relying on the two consuming sites.
- Do not enable unattended publication until a clean Next.js build and a
  successful production sample import have been verified.

