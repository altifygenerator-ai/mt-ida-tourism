import Link from "next/link";
import { cabins } from "@/data/cabins";

export const metadata = {
  title: "Cabins in Mount Ida, Arkansas | Lake Ouachita Cabins & Stays",
  description:
    "Find cabins, resorts, inns, cottages, and places to stay near Mount Ida, Lake Ouachita, crystal mines, Brady Mountain, and the Ouachita Mountains.",
  alternates: {
    canonical: "/cabins",
  },
};

const featuredCabins = cabins.filter((stay) => stay.featured);
const standardCabins = cabins.filter((stay) => !stay.featured);

export default function CabinsPage() {
  const mainStay = featuredCabins[0];
  const sideStays = featuredCabins.slice(1, 3);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cabins and Places to Stay in Mount Ida, Arkansas",
            description:
              "Cabins, resorts, inns, cottages, and lodging near Mount Ida, Arkansas, Lake Ouachita, crystal mines, and the Ouachita Mountains.",
            itemListElement: cabins.map((stay, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "LodgingBusiness",
                name: stay.name,
                description: stay.description,
                address: stay.address,
                telephone: stay.phone,
                url: stay.website ?? stay.directions,
              },
            })),
          }),
        }}
      />

      <h1 className="text-4xl md:text-5xl font-semibold mb-6">
        Cabins and Places to Stay in Mount Ida, Arkansas
      </h1>

      <p className="text-lg text-[color:var(--color-muted)] mb-12 max-w-3xl leading-relaxed">
        Mount Ida is a strong base for cabin stays near{" "}
        <Link href="/lake-ouachita" className="underline hover:opacity-70">
          Lake Ouachita
        </Link>
        ,{" "}
        <Link href="/crystal-mines" className="underline hover:opacity-70">
          crystal mines
        </Link>
        , scenic drives, fishing, boating, and the Ouachita Mountains. Visitors
        can find lake resorts, cabins, cottages, inns, guest rooms, and quiet
        wooded stays close to the area’s main attractions.
      </p>

      <section className="mb-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Featured Cabins and Lake Stays Near Mount Ida
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These featured stays are useful starting points for visitors
            planning a Mount Ida trip around Lake Ouachita, crystal mines,
            boating, fishing, cabins, and the Ouachita Mountains.
          </p>
        </div>

        <div className="space-y-8">
          {mainStay && (
            <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className="min-h-[420px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${mainStay.image}')`,
                  }}
                />

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Premium Featured Stay
                  </p>

                  <h2 className="mb-4 text-4xl font-semibold">
                    {mainStay.name}
                  </h2>

                  <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                    {mainStay.type}
                  </p>

                  <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                    {mainStay.description}
                  </p>

                  <div className="mb-8 space-y-2 text-sm text-[color:var(--color-muted)]">
                    <p>📍 {mainStay.address}</p>
                    {mainStay.phone && <p>📞 {mainStay.phone}</p>}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {mainStay.phone && (
                      <a
                        href={`tel:${mainStay.phone.replace(/[^\d]/g, "")}`}
                        className="bg-black text-white px-6 py-3 rounded-md"
                      >
                        Call Now
                      </a>
                    )}

                    {mainStay.website && (
                      <a
                        href={mainStay.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-6 py-3 rounded-md"
                      >
                        View Website
                      </a>
                    )}

                    <a
                      href={mainStay.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-6 py-3 rounded-md"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            {sideStays.map((stay) => (
              <div
                key={stay.name}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${stay.image}')`,
                  }}
                />

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Featured Stay
                  </p>

                  <h3 className="text-2xl font-semibold">{stay.name}</h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {stay.type}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {stay.description}
                  </p>

                  <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                    📍 {stay.address}
                  </p>

                  {stay.phone && (
                    <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                      📞 {stay.phone}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    {stay.phone && (
                      <a
                        href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
                        className="bg-black text-white px-4 py-2 rounded-md text-sm"
                      >
                        Call
                      </a>
                    )}

                    {stay.website && (
                      <a
                        href={stay.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-4 py-2 rounded-md text-sm"
                      >
                        Website
                      </a>
                    )}

                    <a
                      href={stay.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-4 py-2 rounded-md text-sm"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            More Cabins, Inns, and Places to Stay Near Mount Ida
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These additional lodging options are useful for visitors comparing
            lake cabins, guest rooms, inns, cottages, wooded stays, and places
            to stay near Lake Ouachita, crystal mines, scenic drives, and the
            Ouachita Mountains.
          </p>
        </div>

        <div className="space-y-6">
          {standardCabins.map((stay, index) => (
            <div
              key={stay.name}
              className="p-6 rounded-xl bg-[color:var(--bg-card)] border"
            >
              <h2 className="text-2xl font-semibold">
                {index + 1}. {stay.name}
              </h2>

              <p className="text-sm text-[color:var(--color-muted)] mt-1">
                {stay.type}
              </p>

              <p className="mt-4 text-[color:var(--color-muted)] leading-relaxed">
                {stay.description}
              </p>

              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                📍 {stay.address}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {stay.phone && (
                  <a
                    href={`tel:${stay.phone.replace(/[^\d]/g, "")}`}
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    Call {stay.phone}
                  </a>
                )}

                {stay.website && (
                  <a
                    href={stay.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    View Website
                  </a>
                )}

                <a
                  href={stay.directions}
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
          Staying Near Lake Ouachita and Mount Ida
        </h2>

        <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
          Many visitors stay near Mount Ida because it gives easy access to Lake
          Ouachita, crystal mines, scenic drives, forest roads, fishing,
          kayaking, boating, and quiet mountain country. Lake-area stays can
          fill up quickly during busy weekends, holidays, and summer travel, so
          booking earlier is usually better.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Mount Ida Cabin and Lodging FAQs
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "Where can I stay near Mount Ida, Arkansas?",
              answer:
                "Visitors can find lake resorts, cabins, inns, cottages, guest rooms, and wooded stays near Mount Ida, Lake Ouachita, crystal mines, and the Ouachita Mountains.",
            },
            {
              question: "Are there cabins near Lake Ouachita?",
              answer:
                "Yes. The Mount Ida and Lake Ouachita area has cabins, cottages, resorts, and lake-area lodging for boating, fishing, kayaking, swimming, and weekend trips.",
            },
            {
              question: "When should I book a cabin near Mount Ida?",
              answer:
                "Spring, summer, holidays, and lake weekends can book up faster. Booking earlier is usually better if you want a cabin or lake-area stay near Mount Ida.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-xl border bg-[color:var(--bg-card)] p-6"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-3xl border bg-[color:var(--bg-card)] p-8 md:p-10">
          <h2 className="text-3xl font-semibold mb-4">
            Add Your Cabin, Resort, Inn, or Vacation Rental
          </h2>

          <p className="text-[color:var(--color-muted)] mb-6 max-w-3xl leading-relaxed">
            This Mount Ida lodging guide helps visitors find cabins, resorts,
            inns, cottages, and places to stay near Lake Ouachita, crystal
            mines, and the Ouachita Mountains. If you own a rental or lodging
            property in the area, you can request a listing or ask about
            featured placement.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-md"
            >
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