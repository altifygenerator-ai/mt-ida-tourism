# Mount Ida event-system audit — 2026-07-23

- Existing public queries filter approved events to `site = mount-ida`.
- `/events`, `/this-weekend`, and the public API pass current or bounded date ranges, so expired events are not requested for the public listings.
- Existing Supabase tables, admin pages, middleware/proxy behavior, imports, and API routes were left intact.
- Event routes retain the Mount Ida canonical host through the root metadata configuration.
- No Murfreesboro database or event functionality was introduced.
