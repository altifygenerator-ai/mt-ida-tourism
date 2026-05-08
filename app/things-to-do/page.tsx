import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { attractions } from "@/data/attractions";

export const metadata = {
  title:
    "Things To Do in Mount Ida Arkansas | Crystal Mines, Lake Ouachita & Outdoor Attractions",
  description:
    "Explore things to do in Mount Ida, Arkansas including crystal mines, Lake Ouachita, hiking, scenic drives, museums, local shops, cabins, restaurants, fishing, and outdoor recreation.",
};

export default function ThingsToDoPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Things To Do in Mount Ida"
            text="Mount Ida is a quiet Arkansas mountain town known for crystal mines, Lake Ouachita, scenic drives, local history, small-town shops, fishing, hiking, and outdoor recreation in the Ouachita Mountains."
          />

          <div className="mb-10 flex flex-wrap gap-3">
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

          <div className="grid grid-3">
            {attractions.map((item) => (
              <article key={item.title} className="card">
                <div className="image-card">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="card-content">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
                    {item.category}
                  </p>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-3">
            <div className="card p-6">
              <h3>Crystal Mine Trips</h3>
              <p>
                Mount Ida is called the Quartz Capital of the World for a
                reason. Visitors can dig for quartz, tour local mines, and shop
                for crystals around town.
              </p>
              <Link href="/crystal-mines" className="btn mt-5">
                Explore Crystal Mines
              </Link>
            </div>

            <div className="card p-6">
              <h3>Lake Ouachita Days</h3>
              <p>
                Plan a lake day with boating, fishing, kayaking, swimming,
                camping, marina stops, and quiet shoreline views near Mount Ida.
              </p>
              <Link href="/lake-ouachita" className="btn mt-5">
                Visit Lake Ouachita
              </Link>
            </div>

            <div className="card p-6">
              <h3>Cabins & Local Food</h3>
              <p>
                Make the trip easier by finding nearby cabins, lake resorts,
                restaurants, cafes, and quick food stops before you visit.
              </p>
              <Link href="/cabins" className="btn mt-5">
                Find Places to Stay
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Plan a Simple Mount Ida Trip</h2>
            <p>
              A good Mount Ida visit usually starts with crystal mines and Lake
              Ouachita, then adds local restaurants, cabins, history, and scenic
              drives around the Ouachita Mountains.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card p-6">
              <h3>Morning</h3>
              <p>
                Start with breakfast in town, then visit a quartz mine or local
                crystal shop before the day gets busy.
              </p>
            </div>

            <div className="card p-6">
              <h3>Afternoon</h3>
              <p>
                Head toward Lake Ouachita for fishing, boating, kayaking,
                swimming, sightseeing, or a quiet picnic near the water.
              </p>
            </div>

            <div className="card p-6">
              <h3>Evening</h3>
              <p>
                Grab dinner nearby, check into a cabin or lake resort, and enjoy
                a slower mountain evening close to town.
              </p>
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