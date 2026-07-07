"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import type { EventRecord } from "@/lib/supabase/events";
import { formatEventDate, formatEventTime, makeEventSlug } from "@/lib/supabase/events";

export const dynamic = "force-dynamic";

type AdminStatus = "pending" | "approved" | "rejected" | "draft" | "all";

type EditableEvent = EventRecord & {
  saving?: boolean;
  message?: string;
  error?: string;
};

const statuses: AdminStatus[] = ["pending", "approved", "rejected", "draft", "all"];

function toInputTime(value: string | null) {
  return value ? value.slice(0, 5) : "";
}

function eventToForm(event: EditableEvent) {
  return {
    title: event.title || "",
    slug: event.slug || "",
    description: event.description || event.raw_description || event.ai_summary || "",
    city: event.city || "Mount Ida",
    location_name: event.location_name || "",
    address: event.address || "",
    start_date: event.start_date || "",
    end_date: event.end_date || "",
    start_time: toInputTime(event.start_time),
    end_time: toInputTime(event.end_time),
    category: event.category || "",
    image_url: event.image_url || "",
    source_url: event.source_url || "",
    featured: Boolean(event.featured),
    status: event.status || "pending",
  };
}

export default function AdminEventsPage() {
  const [secret, setSecret] = useState("");
  const [statusFilter, setStatusFilter] = useState<AdminStatus>("pending");
  const [events, setEvents] = useState<EditableEvent[]>([]);
  const [forms, setForms] = useState<Record<string, ReturnType<typeof eventToForm>>>({});
  const [loading, setLoading] = useState(false);
  const [pageMessage, setPageMessage] = useState("");
  const [pageError, setPageError] = useState("");

  const pendingCount = useMemo(
    () => events.filter((event) => event.status === "pending").length,
    [events],
  );

  async function loadEvents(nextStatus = statusFilter) {
    setLoading(true);
    setPageMessage("");
    setPageError("");

    try {
      const response = await fetch(`/api/admin/events?status=${nextStatus}`, {
        headers: { "x-admin-secret": secret },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not load events.");
      }

      const nextEvents = (data.events || []) as EditableEvent[];
      setEvents(nextEvents);
      setForms(
        Object.fromEntries(
          nextEvents.map((event) => [event.id, eventToForm(event)]),
        ),
      );
      setPageMessage(`Loaded ${nextEvents.length} Mount Ida event${nextEvents.length === 1 ? "" : "s"}.`);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : "Could not load events.");
    } finally {
      setLoading(false);
    }
  }

  function updateForm(id: string, field: string, value: string | boolean) {
    setForms((current) => ({
      ...current,
      [id]: {
        ...current[id],
        [field]: value,
      },
    }));
  }

  function updateEventState(id: string, patch: Partial<EditableEvent>) {
    setEvents((current) => current.map((event) => (event.id === id ? { ...event, ...patch } : event)));
  }

  async function saveEvent(id: string, nextStatus?: EventRecord["status"]) {
    const form = forms[id];
    if (!form) return;

    updateEventState(id, { saving: true, message: "", error: "" });

    try {
      const payload = {
        ...form,
        status: nextStatus || form.status,
        slug: form.slug || makeEventSlug(form.title, form.start_date),
      };

      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": secret,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not save event.");
      }

      const updated = data.event as EventRecord;
      updateEventState(id, {
        ...updated,
        saving: false,
        message: nextStatus === "approved" ? "Approved and published." : nextStatus === "rejected" ? "Rejected." : "Saved.",
      });
      setForms((current) => ({ ...current, [id]: eventToForm(updated as EditableEvent) }));

      if (statusFilter !== "all" && updated.status !== statusFilter) {
        setEvents((current) => current.filter((event) => event.id !== id));
      }
    } catch (error) {
      updateEventState(id, {
        saving: false,
        error: error instanceof Error ? error.message : "Could not save event.",
      });
    }
  }

  function handleLoad(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loadEvents();
  }

  return (
    <main>
      <section className="admin-hero">
        <div className="container admin-hero-grid">
          <div>
            <p className="eyebrow">Mount Ida Admin</p>
            <h1>Review and approve submitted events.</h1>
            <p>
              This admin screen only loads events with <strong>site = mount-ida</strong>. Approving an event changes
              its status to approved, which publishes it on the public Mount Ida event pages.
            </p>
          </div>

          <div className="admin-note-card">
            <h2>Private route</h2>
            <p>
              This route is protected for <code>altifygenerator@gmail.com</code>. Set <code>MOUNT_IDA_ADMIN_SECRET</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> in Vercel. Every admin query stays scoped to <code>site = mount-ida</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container admin-shell">
          <form onSubmit={handleLoad} className="admin-toolbar">
            <label>
              Admin Secret
              <input
                type="password"
                value={secret}
                onChange={(event) => setSecret(event.target.value)}
                placeholder="Same password used for the admin route"
                required
              />
            </label>

            <label>
              Status
              <select
                value={statusFilter}
                onChange={(event) => {
                  const nextStatus = event.target.value as AdminStatus;
                  setStatusFilter(nextStatus);
                  if (secret) loadEvents(nextStatus);
                }}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Loading..." : "Load Events"}
            </button>

            <Link href="/admin/events/sources" className="btn btn-light">
              Event Sources
            </Link>

            <Link href="/admin/events/import" className="btn btn-light">
              Quick Import
            </Link>

            <Link href="/events" className="btn btn-light">
              Public Events
            </Link>
          </form>

          {pageMessage ? <p className="form-message success">{pageMessage}</p> : null}
          {pageError ? <p className="form-message error">{pageError}</p> : null}

          {events.length > 0 ? (
            <div className="admin-summary-card">
              <strong>{pendingCount}</strong> pending event{pendingCount === 1 ? "" : "s"} currently shown in this view.
            </div>
          ) : null}

          <div className="admin-events-list">
            {events.map((event) => {
              const form = forms[event.id];
              if (!form) return null;

              return (
                <article key={event.id} className="admin-event-card">
                  <div className="admin-event-topline">
                    <div>
                      <span className={`admin-status status-${event.status}`}>{event.status}</span>
                      <h2>{event.title}</h2>
                      <p>
                        {formatEventDate(event)} {formatEventTime(event) ? `• ${formatEventTime(event)}` : ""}
                      </p>
                    </div>

                    <div className="admin-event-actions">
                      <button type="button" className="btn" onClick={() => saveEvent(event.id, "approved")} disabled={event.saving}>
                        Approve
                      </button>
                      <button type="button" className="btn btn-light" onClick={() => saveEvent(event.id, "rejected")} disabled={event.saving}>
                        Reject
                      </button>
                    </div>
                  </div>

                  <div className="admin-form-grid">
                    <label>
                      Title
                      <input value={form.title} onChange={(e) => updateForm(event.id, "title", e.target.value)} />
                    </label>

                    <label>
                      Slug
                      <input value={form.slug} onChange={(e) => updateForm(event.id, "slug", e.target.value)} />
                    </label>

                    <label>
                      Status
                      <select value={form.status} onChange={(e) => updateForm(event.id, "status", e.target.value)}>
                        <option value="draft">Draft</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </label>

                    <label>
                      Category
                      <input value={form.category} onChange={(e) => updateForm(event.id, "category", e.target.value)} />
                    </label>

                    <label>
                      Start Date
                      <input type="date" value={form.start_date} onChange={(e) => updateForm(event.id, "start_date", e.target.value)} />
                    </label>

                    <label>
                      End Date
                      <input type="date" value={form.end_date} onChange={(e) => updateForm(event.id, "end_date", e.target.value)} />
                    </label>

                    <label>
                      Start Time
                      <input type="time" value={form.start_time} onChange={(e) => updateForm(event.id, "start_time", e.target.value)} />
                    </label>

                    <label>
                      End Time
                      <input type="time" value={form.end_time} onChange={(e) => updateForm(event.id, "end_time", e.target.value)} />
                    </label>

                    <label>
                      Location Name
                      <input value={form.location_name} onChange={(e) => updateForm(event.id, "location_name", e.target.value)} />
                    </label>

                    <label>
                      Address
                      <input value={form.address} onChange={(e) => updateForm(event.id, "address", e.target.value)} />
                    </label>

                    <label>
                      City
                      <input value={form.city} onChange={(e) => updateForm(event.id, "city", e.target.value)} />
                    </label>

                    <label>
                      Image URL
                      <input value={form.image_url} onChange={(e) => updateForm(event.id, "image_url", e.target.value)} />
                    </label>

                    <label>
                      Source URL
                      <input value={form.source_url} onChange={(e) => updateForm(event.id, "source_url", e.target.value)} />
                    </label>

                    <label className="admin-checkbox-label">
                      <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) => updateForm(event.id, "featured", e.target.checked)}
                      />
                      Featured event
                    </label>
                  </div>

                  <label className="admin-full-label">
                    Description
                    <textarea
                      rows={5}
                      value={form.description}
                      onChange={(e) => updateForm(event.id, "description", e.target.value)}
                    />
                  </label>

                  <div className="admin-submit-row">
                    <button type="button" className="btn" onClick={() => saveEvent(event.id)} disabled={event.saving}>
                      {event.saving ? "Saving..." : "Save Changes"}
                    </button>

                    {event.status === "approved" ? (
                      <Link href={`/events/${event.slug}`} className="event-card-link" target="_blank">
                        View public page →
                      </Link>
                    ) : null}
                  </div>

                  {event.message ? <p className="form-message success">{event.message}</p> : null}
                  {event.error ? <p className="form-message error">{event.error}</p> : null}
                </article>
              );
            })}
          </div>

          {!loading && events.length === 0 && !pageError ? (
            <div className="events-empty-card">
              <h3>No events loaded yet.</h3>
              <p>Enter the admin secret and load pending events to review Mount Ida submissions.</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
