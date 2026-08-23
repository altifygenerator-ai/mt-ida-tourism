import type { Metadata } from "next";
import Link from "next/link";
import { restaurants, type Restaurant } from "@/data/restaurants";
import { businessClickTracking, getFeaturedLabel } from "@/lib/tracking";

const siteUrl = "https://www.mountidaarkansas.org";
const pagePath = "/restaurants";

export const metadata: Metadata = {
  title: "Restaurants in Mount Ida, Arkansas | Food Near Lake Ouachita",
  description:
    "Find restaurants in Mount Ida, including cafes, lake dining, Mexican food, pizza, burgers, quick stops, and places to eat near Lake Ouachita and crystal mines.",
  keywords: [
    "Mount Ida restaurants",
    "restaurants in Mount Ida Arkansas",
    "food near Lake Ouachita",
    "Mount Ida cafe",
    "Lake Ouachita restaurants",
    "places to eat near Mount Ida AR",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Restaurants in Mount Ida, Arkansas | Food Near Lake Ouachita",
    description:
      "Find cafes, lake dining, Mexican food, pizza, burgers, coffee, quick stops, and local places to eat near Mount Ida and Lake Ouachita.",
    url: `${siteUrl}${pagePath}`,
    images: ["/images/mt-ida-restaurants.jpg"],
  },
};

const featuredRestaurants = restaurants.filter((place) => place.featured);
const standardRestaurants = restaurants.filter((place) => !place.featured);

function ActionLinks({ place, placement }: { place: Restaurant; placement: string }) {
  const placementType = place.placementType ?? "editorial";

  return (
    <div className="flex flex-wrap gap-3">
      {place.phone ? (
        <a
          href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
          className="bg-black text-white px-4 py-2 rounded-md text-sm"
          {...businessClickTracking({
            action: "call",
            business: place.name,
            page: pagePath,
            placement,
            placementType,
          })}
        >
          Call
        </a>
      ) : null}

      {place.website ? (
        <a
          href={place.website}
          target="_blank"
          rel="noopener noreferrer"
          className="border px-4 py-2 rounded-md text-sm"
          {...businessClickTracking({
            action: "website",
            business: place.name,
            page: pagePath,
            placement,
            placementType,
          })}
        >
          Website
        </a>
      ) : null}

      <a
        href={place.directions}
        target="_blank"
        rel="noopener noreferrer"
        className="border px-4 py-2 rounded-md text-sm"
        {...businessClickTracking({
          action: "directions",
          business: place.name,
          page: pagePath,
          placement,
          placementType,
        })}
      >
        Directions
      </a>
    </div>
  );
}

export default function RestaurantsPage() {
  const mainRestaurant = featuredRestaurants[0];
  const sideRestaurants = featuredRestaurants.slice(1, 3);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Restaurants in Mount Ida, Arkansas",
            description:
              "Restaurants, cafes, lake dining, Mexican food, pizza, burgers, sandwiches, and places to eat near Mount Ida, Arkansas and Lake Ouachita.",
            itemListElement: restaurants.map((place, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Restaurant",
                name: place.name,
                servesCuisine: place.type,
                description: place.description,
                address: place.address,
                telephone: place.phone,
                url: place.website ?? place.directions,
              },
            })),
          }),
        }}
      />

      <p className="eyebrow">Food, coffee, and lake-day stops</p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Restaurants in Mount Ida, Arkansas
      </h1>

      <p className="text-lg text-[color:var(--color-muted)] mb-12 max-w-3xl leading-relaxed">
        Mount Ida has small-town cafes, lake-area dining, Mexican food, pizza,
        burgers, quick stops, and casual restaurants for visitors heading to{" "}
        <Link href="/lake-ouachita" className="underline hover:opacity-70">
          Lake Ouachita
        </Link>
        ,{" "}
        <Link href="/crystal-mines" className="underline hover:opacity-70">
          crystal mines
        </Link>
        ,{" "}
        <Link href="/cabins" className="underline hover:opacity-70">
          cabins
        </Link>
        , scenic drives, and the Ouachita Mountains.
      </p>

      <section className="mb-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Featured Places to Eat Near Mount Ida
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These local food stops are useful starting points for visitors planning
            a Mount Ida trip around Lake Ouachita, crystal mines, cabins, local
            shops, and the Ouachita Mountains.
          </p>
        </div>

        <div className="space-y-8">
          {mainRestaurant ? (
            <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg featured-listing-card">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className="min-h-[420px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${mainRestaurant.image}')`,
                  }}
                />

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="listing-badge mb-3">
                    {getFeaturedLabel(mainRestaurant.name, mainRestaurant.placementType ?? "editorial")}
                  </p>

                  <h2 className="mb-4 text-4xl font-semibold">
                    {mainRestaurant.name}
                  </h2>

                  <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                    {mainRestaurant.type}
                  </p>

                  <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                    {mainRestaurant.description}
                  </p>

                  <div className="mb-8 space-y-2 text-sm text-[color:var(--color-muted)]">
                    <p>📍 {mainRestaurant.address}</p>
                    {mainRestaurant.phone ? <p>📞 {mainRestaurant.phone}</p> : null}
                  </div>

                  <ActionLinks place={mainRestaurant} placement="featured-primary-restaurant" />
                </div>
              </div>
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2">
            {sideRestaurants.map((place) => (
              <div
                key={place.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)] featured-listing-card"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${place.image}')`,
                  }}
                />

                <div className="p-6">
                  <p className="listing-badge mb-3">
                    {getFeaturedLabel(place.name, place.placementType ?? "editorial")}
                  </p>

                  <h3 className="text-2xl font-semibold">{place.name}</h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {place.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {place.description}
                  </p>

                  <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                    📍 {place.address}
                  </p>

                  {place.phone ? (
                    <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                      📞 {place.phone}
                    </p>
                  ) : null}

                  <div className="mt-5">
                    <ActionLinks place={place} placement="featured-secondary-restaurant" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">More Places to Eat Near Mount Ida</h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These additional restaurants and quick food options are helpful for
            visitors comparing Mexican food, pizza, burgers, sandwiches, cafes,
            carryout, and casual meals near Lake Ouachita, crystal mines,
            cabins, campgrounds, and scenic drives.
          </p>
        </div>

        <div className="space-y-6">
          {standardRestaurants.map((place, index) => (
            <div key={place.name} className="p-6 rounded-xl bg-[color:var(--bg-card)] border">
              <h2 className="text-2xl font-semibold">
                {index + 1}. {place.name}
              </h2>

              <p className="text-sm text-[color:var(--color-muted)] mt-1">{place.type}</p>

              <p className="mt-4 text-[color:var(--color-muted)] leading-relaxed">
                {place.description}
              </p>

              <p className="mt-4 text-sm text-[color:var(--color-muted)]">📍 {place.address}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {place.phone ? (
                  <a
                    href={`tel:${place.phone.replace(/[^\d]/g, "")}`}
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call {place.phone}
                  </a>
                ) : null}

                {place.website ? (
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    View Website
                  </a>
                ) : null}

                <a
                  href={place.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded-md text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Where to Eat Near Lake Ouachita and Mount Ida
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Mount Ida is a useful food stop for visitors coming in for Lake
          Ouachita trips, crystal mining, cabin weekends, camping, scenic
          drives, and outdoor travel through the Ouachita Mountains. Most food
          options in town are casual, simple, and easy to work into a weekend
          itinerary.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Mount Ida Restaurant FAQs</h2>

        <div className="space-y-4">
          {[
            {
              question: "What are the best restaurants in Mount Ida, Arkansas?",
              answer:
                "Mount Ida has cafes, lake dining, Mexican food, pizza, burgers, sandwiches, and casual food options for visitors and locals.",
            },
            {
              question: "Where can I eat near Lake Ouachita?",
              answer:
                "Mount Ida has several restaurants and quick food options near Lake Ouachita, including local cafes, resort dining, pizza, Mexican food, and casual meals.",
            },
            {
              question: "Are there family-friendly restaurants in Mount Ida?",
              answer:
                "Yes. Most restaurants around Mount Ida are casual and family-friendly, making them useful for lake trips, cabin stays, crystal mine visits, and weekend travel.",
            },
          ].map((item) => (
            <div key={item.question} className="rounded-xl border bg-[color:var(--bg-card)] p-6">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10">
          <h2 className="text-3xl font-semibold mb-4">Add Your Restaurant or Local Food Spot</h2>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
            This Mount Ida restaurant guide helps visitors find local places to
            eat while exploring Lake Ouachita, crystal mines, cabins,
            campgrounds, and the Ouachita Mountains. Restaurants, cafes, food
            trucks, bakeries, and local dining spots can request a free basic
            listing or ask about featured placement.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
              Get Listed
            </Link>

            <Link href="/contact" className="border px-6 py-3 rounded-md">
              Ask About Featured Placement
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
