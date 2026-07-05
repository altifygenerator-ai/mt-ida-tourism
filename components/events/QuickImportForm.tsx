"use client";

import { useState } from "react";

export default function QuickImportForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/events/import/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: String(formData.get("text") || ""),
        sourceUrl: String(formData.get("sourceUrl") || ""),
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      setStatus("error");
      setMessage(data?.error || "Could not import this event.");
      return;
    }

    const eventId = data?.event?.id;
    setStatus("success");
    setMessage("Event saved as pending.");

    if (eventId) {
      window.location.href = "/admin/events?status=pending";
    }
  }

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-2xl bg-[#f7f0e3] p-5">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            Paste a Facebook post, flyer text, venue listing, or messy event copy.
            AI will turn it into a pending event so you can review it before publishing.
          </p>
        </div>

        <label className="block space-y-2">
          <span className="block text-sm font-semibold text-[color:var(--color-text)]">
            Event Text *
          </span>
          <textarea
            name="text"
            required
            rows={12}
            placeholder="Paste event post or flyer text here..."
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
          />
        </label>

        <label className="block space-y-2">
          <span className="block text-sm font-semibold text-[color:var(--color-text)]">
            Source Link
          </span>
          <input
            name="sourceUrl"
            type="url"
            placeholder="Facebook event, venue page, ticket link, etc."
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
          />
        </label>

        <button
          className="rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Importing..." : "Create Pending Event"}
        </button>

        {message && (
          <p
            className={`rounded-xl p-4 text-sm font-medium ${
              status === "success"
                ? "bg-[rgba(63,92,74,0.12)] text-[color:var(--color-accent)]"
                : status === "error"
                  ? "bg-red-50 text-red-800"
                  : "bg-[#f7f0e3]"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
