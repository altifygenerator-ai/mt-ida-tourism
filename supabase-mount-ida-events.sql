-- Mount Ida event support for the shared Natural State Tourism Project events table.
-- This assumes the Glenwood events table already exists.

alter table public.events
add column if not exists site text default 'glenwood';

update public.events
set site = 'glenwood'
where site is null;

create index if not exists events_site_idx on public.events(site);
create index if not exists events_site_status_start_date_idx on public.events(site, status, start_date);

-- Optional safety check if you want to enforce known site values later.
-- Leave commented until all existing rows are cleaned up.
-- alter table public.events
-- add constraint events_site_check
-- check (site in ('glenwood', 'mount-ida', 'hot-springs', 'amity'));

-- Mount Ida approved public events should be inserted with:
-- site = 'mount-ida'
-- city = 'Mount Ida'
-- status = 'approved'

-- Public submissions from the Mount Ida site are inserted as:
-- site = 'mount-ida'
-- status = 'pending'
