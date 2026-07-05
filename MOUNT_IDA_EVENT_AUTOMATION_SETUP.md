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
