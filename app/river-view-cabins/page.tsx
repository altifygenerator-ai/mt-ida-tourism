import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "River View Cabins on the Ouachita River | Mount Ida Arkansas Guide",
  description:
    "Discover River View Cabins near Mount Ida: 14 Ouachita River cabins with hot tubs, pool, horseback riding, kayak and canoe trips, hiking, river access, and fireplaces November through March.",
  alternates: { canonical: "/river-view-cabins" },
};

const highlights = [
  "14 cabins on the Ouachita River",
  "River views and direct river access",
  "Hot tubs and a pool on the property",
  "Horseback riding",
  "Kayak and canoe trips",
  "Quartz crystals along the property hiking trails",
  "Built-in fireplaces available November through March",
];

export default function RiverViewCabinsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "River View Cabins",
            description:
              "Fourteen Ouachita River cabins with river views, hot tubs, pool, horseback riding, kayak and canoe trips, hiking trails, river access, and seasonal fireplaces.",
            telephone: "870-326-4630",
            email: "riverviewcabins.canoes@outlook.com",
            url: "https://riverviewcabins.com/",
            amenityFeature: highlights.map((name) => ({
              "@type": "LocationFeatureSpecification",
              name,
              value: true,
            })),
          }),
        }}
      />

      <section className="bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-amber-300">
            Featured Cabin Partner
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            River View Cabins on the Ouachita River
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 !text-white/85">
            A riverfront stay that fits naturally into a Mount Ida and Ouachita
            Mountains trip, with 14 cabins, river views, hot tubs, a pool,
            horseback riding, kayak and canoe trips, hiking trails, and direct
            access to the Ouachita River.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://riverviewcabins.com/"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-stone-950 transition hover:-translate-y-0.5"
            >
              Visit Website ↗
            </a>
            <a
              href="tel:8703264630"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20"
            >
              Call 870-326-4630
            </a>
            <Link
              href="/cabins"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20"
            >
              More Mount Ida Cabins
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-800">
                Cooler-Weather Highlight
              </p>
              <p className="mt-3 text-5xl font-semibold text-stone-900">
                Nov–Mar
              </p>
              <p className="mt-2 font-bold text-amber-900">Fireplace season</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">
                Built-in fireplaces make the cabins especially appealing in the cooler months.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
                The cabin fireplaces are available for guest use from November
                through March. That makes River View a strong fall and winter
                option after a day exploring the Ouachita Mountains, crystal
                country, trails, or the river.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Stay & Explore
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              An Ouachita River stay with plenty to do right on the property.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>
              River View Cabins gives visitors more than a room at the end of the
              day. The property itself can be part of the trip, with river
              access, canoe and kayak outings, horseback riding, a pool, hot
              tubs, and wooded trails.
            </p>
            <p>
              Guests can even look for quartz crystals along the hiking trails,
              which fits perfectly with a Mount Ida trip built around crystal
              country and the Ouachita Mountains.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-[color:var(--color-surface,#fff)] p-5 shadow-sm"
            >
              <div className="mb-3 h-1 w-10 rounded-full bg-[color:var(--color-accent)]" />
              <p className="font-semibold leading-7 text-[color:var(--color-text)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/25 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-white/75 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                River Days
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                Kayak, canoe, and river access
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Stay close to the water and build a day around the Ouachita
                River without having to leave the property first.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/75 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Property Time
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                Pool, hot tubs, horses, and trails
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Mix active days with slower ones: ride horses, walk the trails,
                look for quartz, or spend time at the pool or hot tub.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/75 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Cabin Season
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                River views and fireplaces
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Cooler-weather stays get an extra cabin touch with fireplaces
                available from November through March.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-stone-950 p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                Book Direct
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Check availability and current details with River View Cabins.
              </h2>
              <p className="mt-4 max-w-3xl leading-7 !text-white/80">
                Visit the River View Cabins website for current rates, available
                cabins, trip details, and booking information, or call
                870-326-4630.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://riverviewcabins.com/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-stone-950"
              >
                Visit Website ↗
              </a>
              <a
                href="mailto:riverviewcabins.canoes@outlook.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white"
              >
                Email River View
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
