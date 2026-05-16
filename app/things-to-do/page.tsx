import Link from "next/link";
import CTASection from "@/components/CTASection";
import { attractions } from "@/data/attractions";

export const metadata = {
  title:
    "Things To Do in Mount Ida Arkansas | Crystal Mines, Lake Ouachita & Outdoor Attractions",
  description:
    "Explore things to do in Mount Ida, Arkansas including crystal mines, Lake Ouachita, hiking, scenic drives, museums, local shops, cabins, restaurants, fishing, and outdoor recreation.",
};

const tripStyles = [
  {
    title: "Crystal Digging Trip",
    text: "Start with one of the Mount Ida area quartz mines, then add rock shops, local food, and a cabin or lake stay.",
    href: "/crystal-mines",
    label: "Explore Crystal Mines",
  },
  {
    title: "Lake Ouachita Day",
    text: "Plan around boating, fishing, swimming, kayaking, marinas, lake views, and quiet shoreline stops near Mount Ida.",
    href: "/lake-ouachita",
    label: "Visit Lake Ouachita",
  },
  {
    title: "Cabin Weekend",
    text: "Use Mount Ida as a slower mountain base with cabins, local restaurants, scenic drives, and outdoor stops nearby.",
    href: "/cabins",
    label: "Find Cabins & Stays",
  },
];

const planningTips = [
  "Crystal mines are usually best planned earlier in the day.",
  "Lake Ouachita works well for boating, fishing, swimming, kayaking, and scenic drives.",
  "Cabins and lake stays can book faster on weekends and warm-weather dates.",
  "Mount Ida is a good base for quiet outdoor trips, not just one quick stop.",
  "Pair crystal digging with local restaurants, shops, and Lake Ouachita for a fuller weekend.",
  "Bring outdoor clothes, water, sunscreen, and shoes that can handle dirt, rocks, or lake stops.",
];

export default function ThingsToDoPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[76vh] flex items-center overflow-hidden dark-section">
        <img
          src="/images/lake-ouachita-view.webp"
          alt="Things to do near Mount Ida Arkansas and Lake Ouachita"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

        <div className="relative z-10 container py-24">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Mount Ida Arkansas Guide
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Things To Do in Mount Ida
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Plan a Mount Ida trip around quartz crystal mines, Lake Ouachita,
              cabins, restaurants, scenic drives, local history, fishing,
              hiking, and quiet Ouachita Mountain scenery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/crystal-mines"
                className="rounded-full bg-white px-6 py-3 font-medium text-black shadow transition hover:opacity-90"
              >
                Crystal Mines
              </Link>

              <Link
                href="/lake-ouachita"
                className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              >
                Lake Ouachita
              </Link>

              <Link
                href="/cabins"
                className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              >
                Cabins & Stays
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--color-accent)" }}
              >
                Ouachita Mountain Trip Planning
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Mount Ida is best planned around crystals, lake days, and quiet
                outdoor time.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                Mount Ida is a quiet Arkansas mountain town with a simple but
                strong travel identity. Visitors come for quartz crystal digging,
                Lake Ouachita, cabins, fishing, scenic drives, outdoor
                recreation, and small-town stops in the Ouachita Mountains.
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                This guide helps visitors decide what kind of Mount Ida trip
                they want to build, whether that is a crystal mining day, a lake
                weekend, a cabin stay, or a slower outdoor getaway.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/crystal-mines" className="btn">
              Crystal Mines
            </Link>

            <Link href="/lake-ouachita" className="btn">
              Lake Ouachita
            </Link>

            <Link href="/cabins" className="btn">
              Cabins & Stays
            </Link>

            <Link href="/restaurants" className="btn">
              Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* TRIP STYLE CARDS */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {tripStyles.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {item.text}
                </p>

                <span
                  className="mt-5 inline-block font-semibold transition group-hover:translate-x-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {item.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTION GRID */}
      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-accent)" }}
            >
              Local Highlights
            </p>

            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Popular things to do around Mount Ida.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              These are some of the main attractions and outdoor stops visitors
              look for when planning a Mount Ida trip, from crystal mines and
              Lake Ouachita to local history, scenic areas, shops, and mountain
              recreation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p
                    className="mb-2 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL FEATURE */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/mt-ida-crystals.jpg"
          alt="Quartz crystals and crystal mining near Mount Ida Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/60 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              Quartz Capital of the World
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Crystal digging gives Mount Ida a reason to stand out.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Few small towns have a travel identity as clear as Mount Ida. The
              quartz mines, rock shops, crystal digging experiences, and
              Ouachita Mountain scenery give visitors something memorable to
              build a trip around.
            </p>

            <Link
              href="/crystal-mines"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore Crystal Mines
            </Link>
          </div>
        </div>
      </section>

      {/* PLANNING BLOCK */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--color-accent)" }}
              >
                Simple Trip Ideas
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Build a Mount Ida weekend without overcomplicating it.
              </h2>

              <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                A good Mount Ida trip usually starts with one anchor: crystals,
                the lake, or a cabin. From there, it is easy to add restaurants,
                local shops, scenic drives, and quiet outdoor time.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Morning",
                  text: "Start with breakfast or coffee, then visit a quartz mine or local crystal shop before the day gets busy.",
                },
                {
                  title: "Afternoon",
                  text: "Head toward Lake Ouachita for fishing, boating, kayaking, swimming, sightseeing, or a quiet picnic near the water.",
                },
                {
                  title: "Evening",
                  text: "Grab dinner nearby, check into a cabin or lake resort, and enjoy a slower mountain evening close to town.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-[color:var(--color-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LAKE VISUAL */}
      <section className="relative min-h-[560px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/lake-ouachita-boating.jpg"
          alt="Lake Ouachita boating near Mount Ida Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/55 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              Lake Ouachita & Ouachita Mountains
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Build a weekend around the lake, crystals, and mountain scenery.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Mount Ida works well for simple weekend trips. Spend one day
              crystal digging, one day on Lake Ouachita, then mix in local food,
              scenic drives, museums, shops, and quiet cabin time.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="section">
        <div className="container">
          <div className="rounded-[2rem] border bg-[color:var(--bg-card)] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Good To Know
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  A little planning helps the trip go smoother.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Mount Ida is spread out enough that it helps to plan your main
                  stop first, then build the rest of the day around food, fuel,
                  lake access, cabins, or crystal digging.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {planningTips.map((tip) => (
                  <div key={tip} className="rounded-2xl bg-white/70 p-5">
                    <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start With the Local Highlights"
        text="Crystal mines and Lake Ouachita are two of the biggest reasons people visit Mount Ida, but the area also has quiet trails, local shops, museums, cabins, restaurants, and plenty of scenic mountain country."
        buttonText="Explore Crystal Mines"
        buttonHref="/crystal-mines"
      />
    </main>
  );
}