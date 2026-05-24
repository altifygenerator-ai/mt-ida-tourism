import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import CTASection from "@/components/CTASection";
import HomeCrystalGuideFeature from "@/components/HomeCrystalGuideFeature";
import { homeCategories } from "@/data/categories";
import Link from "next/link";
import RecentUpdates from "@/components/RecentUpdates";
export default function HomePage() {
  return (
    <main>
      <Hero />
<RecentUpdates/>
      <section className="section">
        <div className="container intro">
          <h2>Explore Mount Ida, Arkansas</h2>

          <p>
            Mount Ida is known as the Quartz Capital of the World, tucked into
            the Ouachita Mountains and close to{" "}
            <Link href="/lake-ouachita" className="underline hover:opacity-70">
              Lake Ouachita
            </Link>
            . Visitors come for{" "}
            <Link href="/crystal-mining" className="underline hover:opacity-70">
              crystal mining
            </Link>
            , lake days, quiet cabins, fishing, local food, scenic drives, and a
            slower side of Arkansas.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-4">
          <Link href="/crystal-mining" className="btn">
            Crystal Mining Guide
          </Link>

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
      </section>

      <HomeCrystalGuideFeature />

      <section className="section pt-0">
        <div className="container">
          <div className="section-heading">
            <h2>Plan Your Mount Ida Trip</h2>
            <p>
              Start with crystal digging, Lake Ouachita, cabins, restaurants,
              local businesses, scenic drives, and quiet mountain stops around
              town.
            </p>
          </div>

          <div className="grid grid-3">
            {homeCategories.map((category) => (
              <CategoryCard key={category.href} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/mt-ida-crystals.jpg"
          alt="Quartz crystals in Mount Ida Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/58 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] !text-white/70">
              Quartz Capital of the World
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Dig for quartz in the Ouachita Mountains.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/82">
              Crystal digging is one of the biggest reasons people visit Mount
              Ida. Some stops are great for families and first-timers, while
              others are better for folks who want a more hands-on day outside.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/crystal-mining"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Read the Crystal Mining Guide
              </Link>

              <Link
                href="/crystal-mines"
                className="rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Crystal Mines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3 text-[color:var(--color-accent)]">
                Stay, Eat & Explore
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
                Find cabins, restaurants, and things to do around Mount Ida.
              </h2>

              <p className="text-[color:var(--color-muted)] leading-relaxed">
                Use these local guides to plan a Mount Ida trip around Lake
                Ouachita, quartz crystal mines, wooded cabins, lake resorts,
                restaurants, local businesses, history, and scenic drives
                through the Ouachita Mountains.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Link
                href="/cabins"
                className="card overflow-hidden bg-white/35 hover:shadow-lg transition"
              >
                <div className="image-card">
                  <img
                    src="/images/mountain-harbor-resort.webp"
                    alt="Cabins and resorts near Mount Ida Arkansas"
                  />
                </div>

                <div className="card-content">
                  <h3>Cabins & Places to Stay</h3>
                  <p>
                    Browse lake resorts, cabins, inns, cottages, and places to
                    stay near Mount Ida and Lake Ouachita.
                  </p>
                  <span className="inline-block mt-4 font-medium text-[color:var(--color-accent)]">
                    View places to stay →
                  </span>
                </div>
              </Link>

              <Link
                href="/restaurants"
                className="card overflow-hidden bg-white/35 hover:shadow-lg transition"
              >
                <div className="image-card">
                  <img
                    src="/images/mt-ida-restaurants.jpg"
                    alt="Restaurants in Mount Ida Arkansas"
                  />
                </div>

                <div className="card-content">
                  <h3>Restaurants</h3>
                  <p>
                    Find cafes, lake dining, Mexican food, pizza, burgers,
                    quick stops, and local places to eat.
                  </p>
                  <span className="inline-block mt-4 font-medium text-[color:var(--color-accent)]">
                    View restaurants →
                  </span>
                </div>
              </Link>

              <Link
                href="/things-to-do"
                className="card overflow-hidden bg-white/35 hover:shadow-lg transition md:col-span-2"
              >
                <div className="image-card">
                  <img
                    src="/images/things-to-do.jpg"
                    alt="Things to do in Mount Ida Arkansas"
                  />
                </div>

                <div className="card-content">
                  <h3>Things To Do in Mount Ida</h3>
                  <p>
                    Explore crystal mines, Lake Ouachita, hiking, museums,
                    scenic drives, shops, local history, fishing, and outdoor
                    recreation.
                  </p>
                  <span className="inline-block mt-4 font-medium text-[color:var(--color-accent)]">
                    Explore things to do →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] flex items-end overflow-hidden dark-section">
        <img
          src="/images/lake-ouachita-boating.jpg"
          alt="Lake Ouachita near Mount Ida Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/58 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] !text-white/70">
              Lake Ouachita
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Spend the day on one of Arkansas’ clearest lakes.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed !text-white/82">
              Lake Ouachita is one of the biggest reasons people stay near Mount
              Ida, with boating, fishing, kayaking, swimming, camping, marina
              stops, and quiet shoreline views.
            </p>

            <Link
              href="/lake-ouachita"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Explore Lake Ouachita
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Build an Easy Mount Ida Weekend</h2>
            <p>
              Mix crystal digging, lake time, scenic drives, local food, and
              small-town stops into one simple Arkansas mountain trip.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card bg-white/35 p-6">
              <h3>Find a Place to Stay</h3>
              <p>
                Look for cabins, lake resorts, inns, and quiet stays near Lake
                Ouachita, crystal mines, and the Ouachita Mountains.
              </p>
              <Link href="/cabins" className="btn mt-5">
                View Cabins
              </Link>
            </div>

            <div className="card bg-white/35 p-6">
              <h3>Plan Your Day</h3>
              <p>
                Mix crystal digging, lake time, scenic drives, local history,
                museums, shops, and mountain views into one easy visit.
              </p>
              <Link href="/things-to-do" className="btn mt-5">
                Things To Do
              </Link>
            </div>

            <div className="card bg-white/35 p-6">
              <h3>Eat Local</h3>
              <p>
                Find local cafes, lake dining, pizza, Mexican food, burgers, and
                quick food options while visiting Mount Ida.
              </p>
              <Link href="/restaurants" className="btn mt-5">
                Restaurants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Promote Your Mount Ida Business"
        text="Have a cabin, restaurant, shop, attraction, guide service, or local business near Mount Ida? Get listed in front of visitors planning trips around Lake Ouachita, crystal mines, and the Ouachita Mountains."
        buttonText="Get Listed"
        buttonHref="/contact"
      />

      <section className="section pt-0">
        <div className="container flex flex-wrap justify-center gap-4">
          <a
            href="https://amityarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[color:var(--color-accent)] text-white px-5 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
          >
            Explore Nearby Town: Amity →
          </a>

          <a
            href="https://glenwoodarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] px-5 py-3 rounded-md font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition"
          >
            Visit Glenwood →
          </a>
        </div>
      </section>
    </main>
  );
}