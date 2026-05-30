"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const initialForm = {
  title: "",
  description: "",
  location_name: "",
  address: "",
  start_date: "",
  end_date: "",
  start_time: "",
  end_time: "",
  category: "",
  source_url: "",
  submitter_name: "",
  submitter_email: "",
};

export default function SubmitEventPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Event submission failed.");
      }

      setStatus("success");
      setMessage("Thanks — your event was submitted and will be reviewed before it appears on the site.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Event submission failed.");
    }
  }

  return (
    <main>
      <section className="events-hero submit-event-hero">
        <div className="container events-hero-grid">
          <div>
            <p className="eyebrow">Submit an Event</p>
            <h1>Share a Mount Ida event with the community.</h1>
            <p>
              Use this form to send in Mount Ida area events, Lake Ouachita
              happenings, seasonal markets, local music, festivals, fundraisers,
              community activities, and visitor-friendly events.
            </p>
          </div>

          <div className="events-hero-card">
            <p className="eyebrow">Local Calendar</p>
            <h2>Help keep the events page useful.</h2>
            <p>
              Submitted events are reviewed before being published so the calendar
              stays helpful, accurate, and focused on real local happenings.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container submit-event-grid">
          <form onSubmit={handleSubmit} className="event-form">
            <div className="form-grid">
              <label>
                Event Title *
                <input
                  required
                  value={form.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  placeholder="Example: Mount Ida Farmers Market"
                />
              </label>

              <label>
                Category
                <input
                  value={form.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  placeholder="Festival, market, music, outdoors..."
                />
              </label>

              <label>
                Start Date *
                <input
                  required
                  type="date"
                  value={form.start_date}
                  onChange={(event) => updateField("start_date", event.target.value)}
                />
              </label>

              <label>
                End Date
                <input
                  type="date"
                  value={form.end_date}
                  onChange={(event) => updateField("end_date", event.target.value)}
                />
              </label>

              <label>
                Start Time
                <input
                  type="time"
                  value={form.start_time}
                  onChange={(event) => updateField("start_time", event.target.value)}
                />
              </label>

              <label>
                End Time
                <input
                  type="time"
                  value={form.end_time}
                  onChange={(event) => updateField("end_time", event.target.value)}
                />
              </label>

              <label>
                Location Name
                <input
                  value={form.location_name}
                  onChange={(event) => updateField("location_name", event.target.value)}
                  placeholder="Venue, park, business, marina..."
                />
              </label>

              <label>
                Address
                <input
                  value={form.address}
                  onChange={(event) => updateField("address", event.target.value)}
                  placeholder="Street address if available"
                />
              </label>
            </div>

            <label>
              Description
              <textarea
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                placeholder="Add the important details locals or visitors need to know."
                rows={6}
              />
            </label>

            <div className="form-grid">
              <label>
                Event Link
                <input
                  type="url"
                  value={form.source_url}
                  onChange={(event) => updateField("source_url", event.target.value)}
                  placeholder="Facebook event, website, flyer link..."
                />
              </label>

              <label>
                Your Name
                <input
                  value={form.submitter_name}
                  onChange={(event) => updateField("submitter_name", event.target.value)}
                  placeholder="Optional"
                />
              </label>

              <label>
                Your Email
                <input
                  type="email"
                  value={form.submitter_email}
                  onChange={(event) => updateField("submitter_email", event.target.value)}
                  placeholder="Optional, for follow-up questions"
                />
              </label>
            </div>

            <button type="submit" className="btn" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Event"}
            </button>

            {message ? <p className={`form-message ${status}`}>{message}</p> : null}
          </form>

          <aside className="submit-event-note">
            <h2>Good event info helps.</h2>
            <p>
              A strong submission usually includes the exact date, time, location,
              a short description, and a source link where details can be checked.
            </p>
            <p>
              Local markets, music nights, festivals, fundraisers, outdoor events,
              lake-related activities, and family-friendly community happenings
              are a good fit for this calendar.
            </p>
            <Link href="/events" className="event-card-link">
              Back to events →
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}