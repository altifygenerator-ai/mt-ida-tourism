# Mount Ida Events Setup

This project now has Mount Ida-specific event pages wired to the shared Supabase `public.events` table.

## Added routes

- `/events` — lists approved Mount Ida events
- `/events/[slug]` — detail page for one approved Mount Ida event
- `/this-weekend` — shows approved Mount Ida events for Friday through Sunday
- `/submit-event` — public event submission form
- `/api/events` — GET approved Mount Ida events, POST pending Mount Ida submissions

## Supabase filtering

Mount Ida uses the same `events` table as Glenwood, but every query and submission is scoped with:

```txt
site = 'mount-ida'
```

Public submissions are inserted as:

```txt
status = 'pending'
site = 'mount-ida'
city = 'Mount Ida'
source_type = 'public-submit'
needs_review = true
```

Approved public display requires:

```txt
status = 'approved'
site = 'mount-ida'
```

## Environment variables needed

Add these to the Mount Ida project in Vercel/local `.env.local`:

```txt
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## SQL

Run `supabase-mount-ida-events.sql` if the shared events table already exists from Glenwood. It adds the `site` column safely if needed and creates indexes for scoped event queries.

## Admin approval flow

Added routes:

- `/admin/events` — private admin review page for Mount Ida event submissions
- `/api/admin/events` — loads Mount Ida events by status for the admin page
- `/api/admin/events/[id]` — saves edits and approves/rejects Mount Ida events

The admin routes are scoped to:

```txt
site = 'mount-ida'
```

That keeps the Mount Ida approval flow separate from Glenwood events even though they share the same `public.events` table.

Add these extra environment variables before using the admin page:

```txt
SUPABASE_SERVICE_ROLE_KEY=your_private_service_role_key
MOUNT_IDA_ADMIN_SECRET=make-a-long-private-password
```

Use `/admin/events`, enter the admin secret, load pending events, edit details if needed, then approve or reject. Approved events publish because the public pages only read rows where:

```txt
site = 'mount-ida'
status = 'approved'
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code. This project only uses it inside server API routes.
