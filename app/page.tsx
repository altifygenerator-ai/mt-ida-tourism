import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import CTASection from "@/components/CTASection";
import HomeCrystalGuideFeature from "@/components/HomeCrystalGuideFeature";
import MountIdaFourthOfJulyFeature from "@/components/MountIdaFourthOfJulyFeature";
import RecentUpdates from "@/components/RecentUpdates";
import { homeCategories } from "@/data/categories";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <RecentUpdates />

      <MountIdaFourthOfJulyFeature />

      <section className="section mount-ida-intro-section">
        <div className="container intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">Quartz Capital of the World</p>

            <h2>Explore Mount Ida, Arkansas</h2>

            <p>
              Mount Ida sits in the Ouachita Mountains near{" "}
              <Link href="/lake-ouachita" className="text-link">
                Lake Ouachita
              </Link>
              , with a slower kind of Arkansas trip built around quartz crystal
              digging, lake days, wooded cabins, fishing, scenic drives, local
              food, and quiet mountain stops.
            </p>

            <p>
              Whether you’re coming for a crystal mine, a cabin weekend, a lake
              trip, or just a small-town reset, this guide is built to help you
              find the places that make the Mount Ida area worth slowing down
              for.
            </p>
          </div>

          <div className="intro-stone-card">
            <span>Plan around</span>
            <h3>Crystals, cabins, lake days, and mountain roads.</h3>
            <p>
              Start with the main visitor guides below, then branch out into
              restaurants, stays, local businesses, events, and nearby Arkansas
              towns.
            </p>
          </div>
        </div>
      </section>

      <section className="quick-links-section">
        <div className="container quick-links-wrap">
          <Link href="/crystal-mining" className="quick-link-card primary">
            <span>01</span>
            <strong>Crystal Mining Guide</strong>
          </Link>

          <Link href="/crystal-mines" className="quick-link-card">
            <span>02</span>
            <strong>Crystal Mines</strong>
          </Link>

          <Link href="/lake-ouachita" className="quick-link-card">
            <span>03</span>
            <strong>Lake Ouachita</strong>
          </Link>

          <Link href="/cabins" className="quick-link-card">
            <span>04</span>
            <strong>Cabins & Stays</strong>
          </Link>

          <Link href="/restaurants" className="quick-link-card">
            <span>05</span>
            <strong>Restaurants</strong>
          </Link>

          <Link href="/events" className="quick-link-card">
            <span>06</span>
            <strong>Events</strong>
          </Link>
        </div>
      </section>

      <HomeCrystalGuideFeature />

      <section className="section plan-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Visitor Guides</p>
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

      <section className="crystal-feature-section">
        <img
          src="/images/mt-ida-crystals.jpg"
          alt="Quartz crystals in Mount Ida Arkansas"
          className="crystal-feature-image"
        />

        <div className="crystal-feature-overlay" />

        <div className="container crystal-feature-content">
          <div className="crystal-feature-card">
            <p className="eyebrow">Quartz Capital of the World</p>

            <h2>Dig for quartz in the Ouachita Mountains.</h2>

            <p>
              Crystal digging is one of the biggest reasons people visit Mount
              Ida. Some stops are great for families and first-timers, while
              others are better for folks who want a more hands-on day outside.
            </p>

            <div className="feature-actions">
              <Link href="/crystal-mining" className="btn btn-bright">
                Read the Crystal Mining Guide
              </Link>

              <Link href="/crystal-mines" className="btn btn-glass">
                View Crystal Mines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section explore-pair-section">
        <div className="container">
          <div className="explore-pair-grid">
            <div className="explore-pair-copy">
              <p className="eyebrow">Stay, Eat & Explore</p>

              <h2>Find cabins, restaurants, and things to do around Mount Ida.</h2>

              <p>
                Use these local guides to plan a Mount Ida trip around Lake
                Ouachita, quartz crystal mines, wooded cabins, lake resorts,
                restaurants, local businesses, history, and scenic drives through
                the Ouachita Mountains.
              </p>
            </div>

            <div className="featured-link-grid">
              <Link href="/cabins" className="featured-link-card">
                <img
                  src="/images/mountain-harbor-resort.webp"
                  alt="Cabins and resorts near Mount Ida Arkansas"
                />

                <div>
                  <h3>Cabins & Places to Stay</h3>
                  <p>
                    Browse lake resorts, cabins, inns, cottages, and places to
                    stay near Mount Ida and Lake Ouachita.
                  </p>
                  <span>View places to stay →</span>
                </div>
              </Link>

              <Link href="/restaurants" className="featured-link-card">
                <img
                  src="/images/mt-ida-restaurants.jpg"
                  alt="Restaurants in Mount Ida Arkansas"
                />

                <div>
                  <h3>Restaurants</h3>
                  <p>
                    Find cafes, lake dining, Mexican food, pizza, burgers, quick
                    stops, and local places to eat.
                  </p>
                  <span>View restaurants →</span>
                </div>
              </Link>

              <Link href="/things-to-do" className="featured-link-card wide">
                <img
                  src="/images/things-to-do.jpg"
                  alt="Things to do in Mount Ida Arkansas"
                />

                <div>
                  <h3>Things To Do in Mount Ida</h3>
                  <p>
                    Explore crystal mines, Lake Ouachita, hiking, museums,
                    scenic drives, shops, local history, fishing, and outdoor
                    recreation.
                  </p>
                  <span>Explore things to do →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lake-feature-section">
        <img
          src="/images/lake-ouachita-boating.jpg"
          alt="Lake Ouachita near Mount Ida Arkansas"
          className="lake-feature-image"
        />

        <div className="lake-feature-overlay" />

        <div className="container lake-feature-content">
          <div className="lake-feature-card">
            <p className="eyebrow">Lake Ouachita</p>

            <h2>Spend the day on one of Arkansas’ clearest lakes.</h2>

            <p>
              Lake Ouachita is one of the biggest reasons people stay near Mount
              Ida, with boating, fishing, kayaking, swimming, camping, marina
              stops, and quiet shoreline views.
            </p>

            <Link href="/lake-ouachita" className="btn btn-bright">
              Explore Lake Ouachita
            </Link>
          </div>
        </div>
      </section>

      <section className="section weekend-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Easy Weekend Planning</p>
            <h2>Build an Easy Mount Ida Weekend</h2>
            <p>
              Mix crystal digging, lake time, scenic drives, local food, and
              small-town stops into one simple Arkansas mountain trip.
            </p>
          </div>

          <div className="weekend-card-grid">
            <div className="weekend-card">
              <span>Stay</span>
              <h3>Find a Place to Stay</h3>
              <p>
                Look for cabins, lake resorts, inns, and quiet stays near Lake
                Ouachita, crystal mines, and the Ouachita Mountains.
              </p>
              <Link href="/cabins" className="text-link">
                View Cabins →
              </Link>
            </div>

            <div className="weekend-card">
              <span>Explore</span>
              <h3>Plan Your Day</h3>
              <p>
                Mix crystal digging, lake time, scenic drives, local history,
                museums, shops, and mountain views into one easy visit.
              </p>
              <Link href="/things-to-do" className="text-link">
                Things To Do →
              </Link>
            </div>

            <div className="weekend-card">
              <span>Eat</span>
              <h3>Eat Local</h3>
              <p>
                Find local cafes, lake dining, pizza, Mexican food, burgers, and
                quick food options while visiting Mount Ida.
              </p>
              <Link href="/restaurants" className="text-link">
                Restaurants →
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

      <section className="nearby-town-section">
        <div className="container nearby-town-links">
          <a
            href="https://amityarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="nearby-town-card"
          >
            <span>Nearby Town</span>
            <strong>Explore Amity →</strong>
          </a>

          <a
            href="https://glenwoodarkansas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="nearby-town-card outline"
          >
            <span>More Area Guides</span>
            <strong>Visit Glenwood →</strong>
          </a>
        </div>
      </section>
    </main>
  );
}