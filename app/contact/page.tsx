"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "Mount Ida Tourism",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Could not send your request.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-wide text-[color:var(--color-accent)] mb-3">
          Local Business Promotion
        </p>

        <h1 className="text-4xl font-semibold mb-6">
          Promote Your Business in Mount Ida
        </h1>

        <p className="text-[color:var(--color-muted)] leading-relaxed">
          Get your business in front of visitors looking for cabins, restaurants,
          crystal mines, Lake Ouachita, local shops, services, and things to do
          around Mount Ida and the Ouachita Mountains.
        </p>

        <div className="mt-6">
          <a
            href="tel:5014636543"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition hover:scale-[1.02]"
          >
            Call or Text: (501) 463-6543
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-14">
        <div className="card p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Basic Listing</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Get your business listed with a visitor-friendly description,
            category, contact info, link, and basic details.
          </p>
        </div>

        <div className="card p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Featured Spot</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Be placed higher on relevant cabin, restaurant, shopping, service,
            local business, or homepage sections with click tracking included.
          </p>
        </div>

        <div className="card p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Business Spotlight</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            Get a full dedicated page write-up with more details, photos, links,
            and a stronger breakdown of why visitors should find you.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Who this is for</h2>

          <ul className="space-y-3 text-[color:var(--color-muted)]">
            <li>• Restaurants, cafes, diners, coffee shops, and food trucks</li>
            <li>• Cabins, resorts, Airbnbs, inns, RV parks, and lodging</li>
            <li>• Crystal mines, rock shops, guides, and outdoor attractions</li>
            <li>• Local shops, galleries, boutiques, and visitor supplies</li>
            <li>• Local services, lake businesses, rentals, and visitor stops</li>
          </ul>

          <p className="mt-6 text-sm text-[color:var(--color-muted)]">
            Not sure if your business fits? Reach out and we’ll help point you
            toward the best listing option.
          </p>

          <div className="mt-6">
            <a
              href="tel:5014636543"
              className="inline-block text-sm underline text-[color:var(--color-accent)]"
            >
              Or call/text (501) 463-6543 →
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Request a Listing</h2>

          {submitted ? (
            <p className="text-green-700 font-medium bg-green-50 border border-green-100 rounded-xl p-4">
              Thanks. Your request was sent to Natural State Tourism Project and
              we’ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Name"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                placeholder="Business Name"
                className="w-full border border-black/10 p-3 rounded-lg bg-white"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />

              <textarea
                required
                placeholder="Tell us about your business and what you're interested in"
                className="w-full border border-black/10 p-3 rounded-lg bg-white min-h-[140px]"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                className="w-full bg-[color:var(--color-accent)] text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-lg transition"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Submit Request"}
              </button>

              {error ? <p className="form-message error">{error}</p> : null}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
