import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { attractions } from "@/data/attractions";

export const metadata = {
  title:
    "Crystal Mining in Mount Ida Arkansas | Quartz Mines, Crystal Digging & Rockhounding",
  description:
    "Explore crystal mining in Mount Ida, Arkansas with quartz mines, crystal digging, rockhounding, Crystal Vista, rock shops, Lake Ouachita, cabins, and outdoor attractions.",
  keywords: [
    "Mount Ida crystal mines",
    "crystal mining Mount Ida Arkansas",
    "quartz digging Arkansas",
    "quartz mines Mount Ida",
    "Quartz Capital of the World",
    "Mount Ida Arkansas quartz",
    "crystal mining near Lake Ouachita",
    "crystal hunting Arkansas",
    "rockhounding Arkansas",
    "Crystal Vista Arkansas",
  ],
};

const crystalMines = attractions.filter(
  (item) => item.category === "Crystal Mining"
);

const featuredMines = [
  {
    title: "Wegner Quartz Crystal Mines",
    category: "Featured Crystal Mine",
    description:
      "One of the best-known crystal mining stops near Mount Ida, with quartz digging experiences, mine trips, and crystal hunting for families, collectors, and visitors.",
    image: "/images/wegner-quartz.jpg",
  },
  {
    title: "Twin Creek Crystal Mine",
    category: "Featured Crystal Mine",
    description:
      "A Mount Ida area crystal digging stop where visitors can search for quartz and enjoy a hands-on rockhounding experience in the Ouachita Mountains.",
    image: "/images/twin-creek-crystal.jpg",
  },
  {
    title: "Avatar Crystal Mine",
    category: "Featured Crystal Mine",
    description:
      "A quartz crystal digging destination near Mount Ida for visitors looking for a memorable Arkansas crystal hunting experience.",
    image: "/images/avatar-crystal-mine.jpg",
  },
];

const crystalSections = [
  {
    title: "Why Mount Ida Is Called the Quartz Capital of the World",
    text: "Mount Ida sits in one of the best-known quartz crystal regions in the country. The Ouachita Mountains around town are rich with crystal deposits, which helped turn this quiet Arkansas mountain town into a destination for rockhounds, families, collectors, and visitors looking for something different than a normal lake trip.",
    images: [
      "/images/mt-ida-crystals.jpg",
      "/images/mt-ida-quartz-history.png",
      "/images/crystal-vista.jpg",
    ],
  },
  {
    title: "Family-Friendly Crystal Digging Near Mount Ida",
    text: "Several nearby mines give visitors the chance to search for their own quartz crystals. Some locations are more family-friendly and guided, while others feel more rugged and natural. Either way, crystal digging gives people a hands-on reason to stop in Mount Ida and spend time exploring the area instead of just passing through.",
    images: [
      "/images/wegner-quartz.jpg",
      "/images/twin-creek-crystal.jpg",
      "/images/avatar-crystal-mine.jpg",
    ],
  },
  {
    title: "Crystal Vista and Outdoor Quartz Hunting",
    text: "Crystal Vista is one of the better-known outdoor quartz hunting areas near Mount Ida. It mixes the crystal-mining appeal with the natural scenery of the Ouachita National Forest, giving visitors a more outdoorsy way to experience the area. It is a good fit for people who want a scenic stop, a short adventure, and a chance to look for quartz in a more natural setting.",
    images: [
      "/images/crystal-vista.jpg",
      "/images/ouachita-national-forest.jpg",
      "/images/mt-ida-mountains.jpg",
    ],
  },
  {
    title: "Building a Mount Ida Weekend Around Crystal Mining",
    text: "Crystal mining gives Mount Ida a strong identity that most small towns do not have. Visitors can spend the morning digging for quartz, eat in town, shop local galleries or rock shops, and still be close enough to Lake Ouachita for an afternoon on the water. That combination is what makes Mount Ida such a useful travel base.",
    images: [
      "/images/mt-ida-downtown.jpg",
      "/images/ouachita-artists-gallery.jpg",
      "/images/lake-ouachita.webp",
    ],
  },
];

export default function CrystalMinesPage() {
  const mainMine = featuredMines[0];
  const sideMines = featuredMines.slice(1, 3);

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: "Crystal Mining in Mount Ida, Arkansas",
            description:
              "Quartz crystal mines, crystal digging, rockhounding, Crystal Vista, and outdoor crystal hunting attractions near Mount Ida, Arkansas.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mount Ida",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      <section className="relative h-[70vh] flex items-center justify-center text-center dark-section">
        <Image
          src="/images/mt-ida-crystals.jpg"
          alt="Mount Ida Arkansas quartz crystals"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Crystal Mining in Mount Ida, Arkansas
          </h1>

          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            Explore quartz crystal mines, digging spots, rock shops, and outdoor
            crystal hunting near Mount Ida and the Ouachita Mountains.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/cabins"
              className="bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:opacity-90 transition"
            >
              Find Cabins
            </Link>

            <Link
              href="/things-to-do"
              className="border border-white px-6 py-3 rounded-md font-medium text-white hover:bg-white hover:text-black transition"
            >
              More Things To Do
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro">
          <h2>Quartz Crystal Digging Near Mount Ida</h2>

          <p>
            Crystal mining is one of Mount Ida’s biggest draws. Visitors come
            from around Arkansas and beyond to dig for quartz, explore local
            mines, shop rock stores, and experience why Mount Ida is known as
            the Quartz Capital of the World. The area also works well for
            combining crystal digging with{" "}
            <Link href="/lake-ouachita" className="underline hover:opacity-70">
              Lake Ouachita
            </Link>
            ,{" "}
            <Link href="/cabins" className="underline hover:opacity-70">
              cabins
            </Link>
            , scenic drives, fishing, and outdoor weekends in the Ouachita
            Mountains.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Featured Crystal Mines Near Mount Ida
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These featured crystal mining stops are useful starting points for
            visitors planning a Mount Ida trip around quartz digging,
            rockhounding, Lake Ouachita, cabins, restaurants, and the Ouachita
            Mountains.
          </p>
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-lg">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="min-h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${mainMine.image}')`,
                }}
              />

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                  Premium Featured Mine
                </p>

                <h2 className="mb-4 text-4xl font-semibold">
                  {mainMine.title}
                </h2>

                <p className="mb-5 text-sm text-[color:var(--color-muted)]">
                  {mainMine.category}
                </p>

                <p className="mb-6 leading-relaxed text-[color:var(--color-muted)]">
                  {mainMine.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/cabins"
                    className="bg-black text-white px-6 py-3 rounded-md"
                  >
                    Find Nearby Stays
                  </Link>

                  <Link href="/restaurants" className="border px-6 py-3 rounded-md">
                    Find Food Nearby
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sideMines.map((mine) => (
              <div
                key={mine.title}
                className="overflow-hidden rounded-2xl border bg-[color:var(--bg-card)]"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${mine.image}')`,
                  }}
                />

                <div className="p-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
                    Featured Crystal Mine
                  </p>

                  <h3 className="text-2xl font-semibold">{mine.title}</h3>

                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {mine.category}
                  </p>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {mine.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            More Crystal Digging and Rockhounding Near Mount Ida
          </h2>

          <p className="text-[color:var(--color-muted)] leading-relaxed">
            These additional crystal digging areas, quartz mines, rock shops,
            and outdoor stops help make Mount Ida one of Arkansas’ best-known
            destinations for quartz hunting and rockhounding.
          </p>
        </div>

        <div className="grid grid-3">
          {crystalMines.map((mine) => (
            <article key={mine.title} className="card">
              <div className="image-card">
                <img src={mine.image} alt={mine.title} />
              </div>

              <div className="card-content">
                <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
                  {mine.category}
                </p>

                <h3>{mine.title}</h3>
                <p>{mine.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        {crystalSections.map((section, index) => (
          <div
            key={section.title}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <div
                    key={img}
                    className="relative h-[120px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${section.title} ${i + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>

              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Mount Ida Crystal Mining FAQs
        </h2>

        <div className="space-y-4">
          {[
            {
              question: "Where can you dig for crystals in Arkansas?",
              answer:
                "Mount Ida is one of the best-known areas in Arkansas for quartz crystal digging, with nearby mines, rock shops, and outdoor crystal hunting areas in the Ouachita Mountains.",
            },
            {
              question: "Can you keep crystals you find near Mount Ida?",
              answer:
                "Many paid crystal mines allow visitors to keep crystals they find, but rules can vary by location. Always check directly with the mine before visiting.",
            },
            {
              question: "What should I bring crystal digging?",
              answer:
                "Visitors should usually bring water, gloves, sturdy shoes, sunscreen, weather-appropriate clothing, and containers or buckets for crystals. Some mines may provide tools or have rules about what tools are allowed.",
            },
            {
              question: "Is crystal mining family friendly?",
              answer:
                "Yes. Several Mount Ida area crystal mines are family-friendly and work well for kids, first-time visitors, rockhounds, and casual travelers.",
            },
            {
              question: "What is Mount Ida known for?",
              answer:
                "Mount Ida is known as the Quartz Capital of the World and is popular for quartz crystal digging, Lake Ouachita, cabins, outdoor recreation, scenic drives, and the Ouachita Mountains.",
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

      <CTASection
        title="Plan a Full Mount Ida Crystal Mining Trip"
        text="After crystal digging, spend time at Lake Ouachita, stay in nearby cabins, explore local restaurants, scenic drives, hiking, and other outdoor stops around Mount Ida and the Ouachita Mountains."
        buttonText="Find Cabins & Places To Stay"
        buttonHref="/cabins"
      />
    </main>
  );
}