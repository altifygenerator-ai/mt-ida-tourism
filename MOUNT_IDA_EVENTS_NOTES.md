# Mount Ida Events and Admin Setup

This project uses the shared Natural State Tourism Project Supabase `public.events` table, the same table used by Glenwood.

## Mount Ida event scoping

Every public event query, admin event query, and public event submission is scoped to:

```txt
site = 'mount-ida'
```

That keeps Mount Ida events separate from Glenwood events even though both sites share the same table.

Approved public display requires:

```txt
site = 'mount-ida'
status = 'approved'
```

Public submissions are inserted as:

```txt
site = 'mount-ida'
city = 'Mount Ida'
status = 'pending'
source_type = 'public-submit'
needs_review = true
```

## Public event routes

- `/events` lists approved Mount Ida events
- `/events/[slug]` shows a single approved Mount Ida event
- `/this-weekend` shows approved Mount Ida events for the upcoming Friday through Sunday
- `/submit-event` inserts pending Mount Ida submissions
- `/api/events` handles Mount Ida event reads and public submissions

## Admin routes

- `/admin/events` private admin screen
- `/api/admin/events` loads Mount Ida events by status
- `/api/admin/events/[id]` saves, approves, rejects, and edits Mount Ida events

The admin UI is protected with `proxy.ts` using Basic Auth.

Admin username:

```txt
altifygenerator@gmail.com
```

Admin password:

```txt
MOUNT_IDA_ADMIN_SECRET
```

The admin API also accepts the same secret through the page form and `x-admin-secret` header.

## Environment variables

Add these to Vercel/local `.env.local`:

```txt
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_private_service_role_key
MOUNT_IDA_ADMIN_SECRET=make-a-long-private-password
RESEND_API_KEY=your_resend_key
NATURAL_STATE_CONTACT_EMAIL=naturalstatetourismproject@gmail.com
```

`SUPABASE_SERVICE_ROLE_KEY` is used only in server routes and server utilities. Do not expose it in client code.

## Contact forms

The Mount Ida contact form posts to `/api/contact` and sends to:

```txt
NATURAL_STATE_CONTACT_EMAIL
```

If that variable is missing, it falls back to:

```txt
naturalstatetourismproject@gmail.com
```

A blind copy is sent to:

```txt
altifygenerator@gmail.com
```

## SQL

Run `supabase-mount-ida-events.sql` if the shared events table needs the `site` column or scoped indexes.
