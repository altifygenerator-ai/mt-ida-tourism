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

const featuredMineTitles = featuredMines.map((mine) => mine.title);

const crystalMines = attractions.filter(
  (item) =>
    item.category === "Crystal Mining" &&
    !featuredMineTitles.includes(item.title)
);

const crystalSections = [
  {
    title: "Why Mount Ida Is Called the Quartz Capital of the World",
    text: "Mount Ida sits in one of the best-known quartz crystal regions in the country. The Ouachita Mountains around town are rich with crystal deposits, which helped turn this quiet Arkansas mountain town into a destination for rockhounds, families, collectors, and visitors looking for something different than a normal lake trip.",
    image: "/images/mt-ida-crystals.jpg",
  },
  {
    title: "Family-Friendly Crystal Digging Near Mount Ida",
    text: "Several nearby mines give visitors the chance to search for their own quartz crystals. Some locations are more family-friendly and guided, while others feel more rugged and natural. Either way, crystal digging gives people a hands-on reason to stop in Mount Ida and spend time exploring the area instead of just passing through.",
    image: "/images/twin-creek-crystal.jpg",
  },
  {
    title: "Crystal Vista and Outdoor Quartz Hunting",
    text: "Crystal Vista is one of the better-known outdoor quartz hunting areas near Mount Ida. It mixes the crystal-mining appeal with the natural scenery of the Ouachita National Forest, giving visitors a more outdoorsy way to experience the area.",
    image: "/images/crystal-vista.jpg",
  },
];

const planningTips = [
  "Check mine hours, fees, and digging rules before you drive out.",
  "Bring water, gloves, sturdy shoes, sunscreen, and clothes that can get dirty.",
  "Some mines are better for families and first-time visitors than others.",
  "Plan food, cabins, and Lake Ouachita time around your crystal digging stop.",
  "Ask each mine what tools are allowed before bringing your own.",
  "If you want a more natural outdoor stop, look into Crystal Vista too.",
];

const faqs = [
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
];

export default function CrystalMinesPage() {
  const mainMine = featuredMines[0];
  const sideMines = featuredMines.slice(1);

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[76vh] flex items-center justify-center overflow-hidden text-center dark-section">
        <Image
          src="/images/mt-ida-crystals.jpg"
          alt="Mount Ida Arkansas quartz crystals"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Quartz Capital of the World
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Crystal Mining in Mount Ida, Arkansas
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Explore quartz crystal mines, digging spots, rock shops, Crystal
            Vista, cabins, Lake Ouachita, and outdoor stops around Mount Ida and
            the Ouachita Mountains.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/cabins"
              className="rounded-full bg-white px-6 py-3 font-medium text-black shadow transition hover:opacity-90"
            >
              Find Cabins
            </Link>

            <Link
              href="/things-to-do"
              className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
            >
              More Things To Do
            </Link>
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
                Mount Ida Crystal Guide
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Quartz digging is one of Mount Ida’s strongest reasons to visit.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                Crystal mining is one of Mount Ida’s biggest draws. Visitors
                come from around Arkansas and beyond to dig for quartz, explore
                local mines, shop rock stores, and experience why Mount Ida is
                known as the Quartz Capital of the World.
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                The area also works well for combining crystal digging with{" "}
                <Link href="/lake-ouachita" className="underline hover:opacity-70">
                  Lake Ouachita
                </Link>
                ,{" "}
                <Link href="/cabins" className="underline hover:opacity-70">
                  cabins
                </Link>
                , restaurants, scenic drives, fishing, and outdoor weekends in
                the Ouachita Mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MINES */}
      <section className="section pt-0">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-accent)" }}
            >
              Featured Crystal Mines
            </p>

            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Start with these Mount Ida area crystal digging stops.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              These highlighted crystal mining stops are useful starting points
              for visitors planning a Mount Ida trip around quartz digging,
              rockhounding, Lake Ouachita, cabins, restaurants, and the Ouachita
              Mountains.
            </p>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] border bg-[color:var(--bg-card)] shadow-lg">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[460px]">
                  <Image
                    src={mainMine.image}
                    alt={mainMine.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Featured Crystal Mine
                  </p>

                  <h2 className="mb-4 text-4xl font-semibold leading-tight">
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
                      className="rounded-md bg-black px-6 py-3 text-white"
                    >
                      Find Nearby Stays
                    </Link>

                    <Link href="/restaurants" className="rounded-md border px-6 py-3">
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
                  className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-72">
                    <Image
                      src={mine.image}
                      alt={mine.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--color-accent)" }}
                    >
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
        </div>
      </section>

      {/* OTHER MINES - FILTERED SO FEATURED DO NOT REPEAT */}
      {crystalMines.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="mb-8 max-w-3xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--color-accent)" }}
              >
                More Crystal Stops
              </p>

              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                More crystal digging and rockhounding near Mount Ida.
              </h2>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                These additional crystal digging areas, quartz mines, rock shops,
                and outdoor stops help make Mount Ida one of Arkansas’ best-known
                destinations for quartz hunting and rockhounding.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {crystalMines.map((mine) => (
                <article
                  key={mine.title}
                  className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56">
                    <Image
                      src={mine.image}
                      alt={mine.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {mine.category}
                    </p>

                    <h3 className="text-2xl font-semibold">{mine.title}</h3>

                    <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                      {mine.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GUIDE SECTIONS */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
            {crystalSections.map((section, index) => (
              <div
                key={section.title}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-lg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Crystal Mining Guide
                  </p>

                  <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
                    {section.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING TIPS */}
      <section className="section">
        <div className="container">
          <div className="rounded-[2rem] border bg-[color:var(--bg-card)] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Before You Go
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  A little planning makes crystal digging easier.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Crystal digging is hands-on, outdoors, and weather-dependent.
                  Check rules, hours, and conditions before you drive out.
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

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="mb-6 text-3xl font-semibold">
            Mount Ida Crystal Mining FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border bg-[color:var(--bg-card)] p-6"
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
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