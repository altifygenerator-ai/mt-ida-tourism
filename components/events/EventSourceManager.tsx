"use client";

import { useState } from "react";

type EventSource = {
  id: string;
  site?: string | null;
  name: string;
  source_type: string;
  url: string;
  city?: string | null;
  category_hint?: string | null;
  venue_hint?: string | null;
  enabled: boolean;
  last_checked_at?: string | null;
  last_status?: string | null;
};

type ImportRun = {
  id: string;
  status: string;
  started_at?: string | null;
  finished_at?: string | null;
  found_count?: number | null;
  inserted_count?: number | null;
  skipped_count?: number | null;
  error_message?: string | null;
  event_sources?: { name?: string | null } | null;
};

export default function EventSourceManager({
  sources,
  runs,
}: {
  sources: EventSource[];
  runs: ImportRun[];
}) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function createSource(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/events/sources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(formData.get("name") || ""),
        url: String(formData.get("url") || ""),
        source_type: String(formData.get("source_type") || "website"),
        city: String(formData.get("city") || "Mount Ida"),
        category_hint: String(formData.get("category_hint") || ""),
        venue_hint: String(formData.get("venue_hint") || ""),
        notes: String(formData.get("notes") || ""),
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setMessage(data?.error || "Could not add source.");
      setBusy(false);
      return;
    }

    form.reset();
    window.location.reload();
  }

  async function runImport(sourceId?: string) {
    setBusy(true);
    setMessage("Running import...");

    const res = await fetch("/api/events/import/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceId }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setBusy(false);
      setMessage(data?.error || "Import failed.");
      return;
    }

    const summary = data?.summary;
    setMessage(
      `Checked ${summary?.checked || 0} source(s). Added ${summary?.inserted || 0}. Skipped ${summary?.skipped || 0}.`
    );
    setBusy(false);
  }

  async function toggleSource(source: EventSource) {
    setBusy(true);

    const res = await fetch(`/api/events/sources/${source.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: !source.enabled }),
    });

    if (!res.ok) {
      setMessage("Could not update source.");
      setBusy(false);
      return;
    }

    window.location.reload();
  }

  async function deleteSource(source: EventSource) {
    if (!window.confirm(`Delete ${source.name}?`)) return;
    setBusy(true);

    const res = await fetch(`/api/events/sources/${source.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      setMessage("Could not delete source.");
      setBusy(false);
      return;
    }

    window.location.reload();
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
        <form className="space-y-6" onSubmit={createSource}>
          <div className="rounded-2xl bg-[#f7f0e3] p-5">
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
              Add trusted event pages or calendars once. The importer checks enabled
              sources and saves new Mount Ida area events as pending.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                Source Name *
              </span>
              <input name="name" required placeholder="Caddo River Festival" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                Source Type
              </span>
              <select name="source_type" defaultValue="website" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3">
                <option value="website">Website page</option>
                <option value="json_ld">Website with Event schema</option>
                <option value="ics">iCal / ICS feed</option>
                <option value="rss">RSS feed</option>
              </select>
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                URL *
              </span>
              <input name="url" type="url" required placeholder="https://..." className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                City
              </span>
              <input name="city" defaultValue="Mount Ida" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                Category Hint
              </span>
              <input name="category_hint" placeholder="Live Music, Festival, Outdoor" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                Venue Hint
              </span>
              <input name="venue_hint" placeholder="Use when one page is for one venue" className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="block text-sm font-semibold text-[color:var(--color-text)]">
                Notes
              </span>
              <textarea name="notes" rows={3} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3" />
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-md bg-black px-6 py-3 font-medium text-white disabled:opacity-60" type="submit" disabled={busy}>
              Add Source
            </button>
            <button type="button" onClick={() => runImport()} disabled={busy || !sources.length} className="rounded-md border px-6 py-3 disabled:opacity-60">
              Run All Sources Now
            </button>
          </div>

          {message && <p className="rounded-xl bg-[#f7f0e3] p-4 text-sm font-medium">{message}</p>}
        </form>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-semibold">Saved Sources</h2>
        <div className="space-y-4">
          {sources.length ? (
            sources.map((source) => (
              <article key={source.id} className="rounded-2xl border border-black/10 p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#f7f0e3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
                        {source.enabled ? "Enabled" : "Disabled"}
                      </span>
                      <span className="rounded-full border border-black/10 px-3 py-1 text-xs">
                        {source.source_type}
                      </span>
                      {source.category_hint && (
                        <span className="rounded-full border border-black/10 px-3 py-1 text-xs">
                          {source.category_hint}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold">{source.name}</h3>
                    <a href={source.url} target="_blank" rel="noreferrer" className="break-all text-sm text-[color:var(--color-accent)] underline underline-offset-4">
                      {source.url}
                    </a>
                    <p className="mt-2 text-sm">
                      Last run: {source.last_checked_at ? new Date(source.last_checked_at).toLocaleString() : "Never"}
                    </p>
                    {source.last_status && <p className="text-sm">{source.last_status}</p>}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => runImport(source.id)} disabled={busy || !source.enabled} className="rounded-md border px-4 py-2 text-sm disabled:opacity-60">
                      Run
                    </button>
                    <button type="button" onClick={() => toggleSource(source)} disabled={busy} className="rounded-md border px-4 py-2 text-sm disabled:opacity-60">
                      {source.enabled ? "Disable" : "Enable"}
                    </button>
                    <button type="button" onClick={() => deleteSource(source)} disabled={busy} className="rounded-md border border-red-200 px-4 py-2 text-sm text-red-700 disabled:opacity-60">
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No sources added yet.</p>
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-3xl font-semibold">Recent Import Runs</h2>
        <div className="space-y-4">
          {runs.length ? (
            runs.map((run) => (
              <article key={run.id} className="rounded-2xl border border-black/10 p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{run.event_sources?.name || "Unknown source"}</h3>
                    <p className="text-sm">
                      Found {run.found_count || 0}, added {run.inserted_count || 0}, skipped {run.skipped_count || 0}
                    </p>
                    {run.error_message && <p className="text-sm text-red-700">{run.error_message}</p>}
                  </div>
                  <div className="text-sm">
                    <p>{run.status}</p>
                    <p>{run.finished_at ? new Date(run.finished_at).toLocaleString() : "Still running"}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No import runs yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
