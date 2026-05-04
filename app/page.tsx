import Hero from "@/components/Hero"
import CategoryCard from "@/components/CategoryCard"
import FeatureSection from "@/components/FeatureSection"
import CTASection from "@/components/CTASection"
import { homeCategories } from "@/data/categories"
import Link from "next/link"
export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container intro">
          <h2>Explore Mount Ida, Arkansas</h2>
          <p>
  Mount Ida is known as the Quartz Capital of the World, surrounded by
  the Ouachita Mountains and just minutes from{" "}
  <Link href="/lake-ouachita" className="underline hover:opacity-70">
    Lake Ouachita
  </Link>. Visitors come for{" "}
  <Link href="/crystal-mines" className="underline hover:opacity-70">
    crystal mining
  </Link>, lake days,{" "}
  <Link href="/cabins" className="underline hover:opacity-70">
    cabins
  </Link>, fishing, hiking, and a quieter side of Arkansas.
</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Things to Do in Mount Ida</h2>
            <p>
              Start with crystal mines, Lake Ouachita, cabins, restaurants,
              history, and local stops around town.
            </p>
          </div>

          <div className="grid grid-3">
            {homeCategories.map((category) => (
              <CategoryCard key={category.href} category={category} />
            ))}
          </div>
        </div>
      </section>

   {/* Crystal Image Feature */}
<section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
  <img
    src="/images/mt-ida-crystals.jpg"
    alt="Quartz crystals in Mount Ida Arkansas"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

  <div className="relative z-10 container pb-16">
    <div className="max-w-3xl rounded-2xl bg-black/55 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
        Quartz Capital of the World
      </p>

      <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
        Dig for quartz in the Ouachita Mountains
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
        Mount Ida is one of the best-known places in Arkansas for quartz crystal
        digging. Visitors can explore nearby mines, hunt for crystals, and turn
        a simple mountain trip into something a little more memorable.
      </p>

      <a
        href="/crystal-mines"
        className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
      >
        Explore Crystal Mines
      </a>
    </div>
  </div>
</section>

{/* Trip Planning Section */}
<section className="section">
  <div className="container">
    <div className="grid grid-3">
      <div className="card p-6">
        <h3>Find a Place to Stay</h3>
        <p>
          Look for cabins, resorts, and quiet stays near Lake Ouachita, crystal
          mines, and the Ouachita Mountains.
        </p>
        <a href="/cabins" className="btn mt-5">
          View Cabins
        </a>
      </div>

      <div className="card p-6">
        <h3>Plan Your Day</h3>
        <p>
          Mix crystal digging, lake time, scenic drives, local food, and small
          town stops into one easy Mount Ida trip.
        </p>
        <a href="/things-to-do" className="btn mt-5">
          Things To Do
        </a>
      </div>

      <div className="card p-6">
        <h3>Eat Local</h3>
        <p>
          Find simple local restaurants and casual food options while you are
          visiting Mount Ida and Lake Ouachita.
        </p>
        <a href="/restaurants" className="btn mt-5">
          Restaurants
        </a>
      </div>
    </div>
  </div>
</section>
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
  )
}