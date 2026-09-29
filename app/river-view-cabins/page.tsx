import Link from "next/link";

export const metadata = {
  title: "River View Cabins & Canoes on the Ouachita River | Mount Ida Arkansas Guide",
  description:
    "Discover River View Cabins & Canoes near Mount Ida: 14 Ouachita River cabins with river views, hot tubs, a pool, horseback riding, canoe and kayak trips, private hiking trails, fireplaces, and direct river access.",
  alternates: { canonical: "/river-view-cabins" },
};

const highlights = [
  "14 unique cabins along the Ouachita River",
  "River views and direct river access",
  "Hot tubs and a swimming pool",
  "Horseback riding on the property",
  "Kayak and canoe rentals with shuttle service",
  "Private hiking trails through quartz-crystal country",
  "Modern kitchens, bathrooms, Smart TVs, and cabin comforts",
  "Pet-friendly stays plus options for couples, families, and large groups",
];

const photos = [
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/AMENITIES1%2B%2849%29-1920w.jpg",
    alt: "River View cabin and hot tub deck in Oden Arkansas",
  },
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/IMG_5581-1920w.jpg",
    alt: "Wood cabin kitchen and dining area at River View Cabins",
  },
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/river%2Bview%2B%289%29-1920w.jpg",
    alt: "Hot tub deck overlooking the wooded Ouachita River setting",
  },
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/IMG_1297-1920w.png",
    alt: "Horseback riding at River View Cabins in the Ouachita Mountains",
  },
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/516403704_721230293998249_28317375412696257_n-1920w.jpg",
    alt: "Kayaking on the Ouachita River near River View Cabins",
  },
  {
    src: "https://irp.cdn-website.com/3c00cf11/dms3rep/multi/opt/arkansas-rocky-shoals_4d15fffc55828fc725eeff0637aa02a1-1920w.webp",
    alt: "Ouachita River paddling near River View Cabins",
  },
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
              "Fourteen cabins on the Ouachita River with river views, hot tubs, pool, horseback riding, kayak and canoe trips, hiking trails, river access, and seasonal fireplaces.",
            telephone: "870-326-4630",
            email: "riverviewcabins.canoes@outlook.com",
            url: "https://www.riverviewcabins-canoes.com/",
            amenityFeature: highlights.map((name) => ({
              "@type": "LocationFeatureSpecification",
              name,
              value: true,
            })),
          }),
        }}
      />

      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-amber-300">
            Featured Cabin Partner
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            River View Cabins on the Ouachita River
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 !text-white/85">
            A riverfront cabin getaway that fits naturally into a Mount Ida and Ouachita Mountains trip, with 14 cabins, river views, hot tubs,
            a pool, horseback riding, kayak and canoe trips, hiking trails, and
            direct access to the Ouachita River.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.riverviewcabins-canoes.com/"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm no-underline transition hover:-translate-y-0.5"
              style={{ color: "#1c1917", fontFamily: "inherit", fontWeight: 800 }}
            >
              Visit Website ↗
            </a>
            <a
              href="tel:8703264630"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-black/20 px-6 py-3 text-sm no-underline transition hover:bg-black/30"
              style={{ color: "#ffffff", fontFamily: "inherit", fontWeight: 800 }}
            >
              Call 870-326-4630
            </a>
            <Link
              href="/cabins"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-black/20 px-6 py-3 text-sm no-underline transition hover:bg-black/30"
              style={{ color: "#ffffff", fontFamily: "inherit", fontWeight: 800 }}
            >
              More Cabins Near Mount Ida
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
                Nov 1–Mar 1
              </p>
              <p className="mt-2 font-bold text-amber-900">Fireplace season</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-stone-900 md:text-4xl">
                The cabins have built-in fireplaces for the cooler months.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
                River View Cabins opens the fireplaces for guest use from
                November 1 through March 1, giving fall and winter stays a warm,
                classic cabin feel after a day on the river, trails, or around
                the Ouachita Mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              More Than A Place To Sleep
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
              Build the whole getaway around the property.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-[color:var(--color-muted)]">
            <p>
              River View Cabins combines lodging and outdoor activities in one
              place. Guests can stay beside the Ouachita River, get on the water,
              spend time at the pool, ride horses, or walk the property trails.
            </p>
            <p>
              The hiking trails are also a fun Arkansas touch: quartz crystals
              can be found along the trails on the property. For families,
              couples, and groups, that gives the stay plenty to do without
              having to build every day around a long drive.
            </p>
            <p>
              The cabins range from smaller couple-friendly stays to large-group
              options. Possible amenities include full kitchens, decks, hot tubs,
              grills, Smart TVs, fire pits, fireplaces, Wi-Fi, and river views.
              River View is also pet-friendly.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-[color:var(--bg-card)] p-5 shadow-sm"
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
            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                On The Water
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                Kayak, canoe, and river access
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Plan a river day right around the stay with kayak and canoe trips
                plus access to the Ouachita River from the property.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                On The Property
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                Pool, hot tubs, horses, and trails
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Slow the trip down with time at the pool or hot tub, horseback
                riding, and hiking trails where guests can look for quartz.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                In The Cabin
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                River views and seasonal fireplaces
              </h3>
              <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                Come back to the cabin after the day outside, settle in with the
                river nearby, and enjoy fireplace season from November 1 through March 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em]" style={{ color: "var(--color-accent, #315947)" }}>
            Photo Preview
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl" style={{ color: "var(--color-text, #292524)" }}>
            Cabins, river views, hot tubs, horses, and time on the water.
          </h2>
        </div>

        <div className="grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={"overflow-hidden rounded-3xl border border-black/10 bg-stone-200 shadow-sm " + (index === 0 ? "sm:col-span-2 sm:row-span-2" : "")}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em]" style={{ color: "var(--color-accent, #315947)" }}>
            Cabins For Different Group Sizes
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl" style={{ color: "var(--color-text, #292524)" }}>
            From a couple's weekend to a full group getaway.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold" style={{ color: "var(--color-text, #292524)" }}>Couples & families</h3>
            <p className="mt-3 leading-7" style={{ color: "var(--color-muted, #57534e)" }}>
              Fourteen unique cabins give visitors a range of layouts, from cozy smaller stays to larger family cabins with kitchens, decks, hot tubs, fireplaces, and river views depending on the cabin.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold" style={{ color: "var(--color-text, #292524)" }}>The Hideout</h3>
            <p className="mt-3 leading-7" style={{ color: "var(--color-muted, #57534e)" }}>
              A large river-edge cabin option that sleeps up to 24 guests and works well for reunions, multi-family trips, and bigger gatherings.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/85 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold" style={{ color: "var(--color-text, #292524)" }}>The Bunk House</h3>
            <p className="mt-3 leading-7" style={{ color: "var(--color-muted, #57534e)" }}>
              A 52-bed group option with a modern kitchen plus enough bathrooms and showers for church camps, team builders, and other large-group stays.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-stone-950 p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                Plan Your Stay
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Check current cabin availability directly with River View Cabins.
              </h2>
              <p className="mt-4 max-w-3xl leading-7 !text-white/80">
                For current rates, cabin availability, activity details, and
                booking information, visit River View Cabins directly or call
                870-326-4630.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://www.riverviewcabins-canoes.com/"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm no-underline"
                style={{ color: "#1c1917", fontFamily: "inherit", fontWeight: 800 }}
              >
                Visit Website ↗
              </a>
              <a
                href="mailto:riverviewcabins.canoes@outlook.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm no-underline"
                style={{ color: "#ffffff", fontFamily: "inherit", fontWeight: 800 }}
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
