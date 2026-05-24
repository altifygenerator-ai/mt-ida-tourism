import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { attractions } from "@/data/attractions";

export const metadata = {
  title:
    "Crystal Mines Near Mount Ida Arkansas | Quartz Digging Stops & Rockhounding",
  description:
    "Find crystal mines, quartz digging stops, rock shops, and outdoor crystal hunting areas near Mount Ida, Arkansas.",
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
    title: "Avant Mining / Fisher Mountain",
    category: "Featured Crystal Mine",
    description:
      "A Mount Ida area quartz crystal destination for visitors looking for a more serious public digging and rockhounding experience.",
    image: "/images/avatar-crystal-mine.jpg",
  },
];

const featuredMineTitles = featuredMines.map((mine) => mine.title);

const crystalMines = attractions.filter(
  (item) =>
    item.category === "Crystal Mining" &&
    !featuredMineTitles.includes(item.title)
);

const quickTips = [
  "Check current hours, fees, and weather before driving out.",
  "Bring shoes and clothes that can get dirty.",
  "Ask each mine what tools are allowed before bringing your own.",
  "Bring water, gloves, sunscreen, and something to carry your crystals in.",
  "For a fuller trip plan, use the crystal mining guide before you go.",
];

export default function CrystalMinesPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: "Crystal Mines Near Mount Ida, Arkansas",
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

      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden text-center dark-section">
        <Image
          src="/images/mt-ida-crystals.jpg"
          alt="Mount Ida Arkansas quartz crystals"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] !text-white/75">
            Quartz Capital of the World
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Crystal Mines Near Mount Ida
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed !text-white/85">
            A quick directory-style look at quartz digging stops, rockhounding
            areas, and crystal mine options around Mount Ida, Arkansas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/crystal-mining"
              className="rounded-full bg-white px-6 py-3 font-bold text-black shadow transition hover:opacity-90"
            >
              Read the Full Guide
            </Link>

            <Link
              href="/cabins"
              className="rounded-full border border-white/70 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Find Cabins
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Crystal mine directory
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Looking for where to dig? Start here.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                This page is the simpler crystal mine directory. Use it to find
                Mount Ida area crystal digging stops, quartz mine options, and
                rockhounding areas without digging through a long trip article.
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                If you want help choosing the right stop, packing for the day,
                bringing kids, or turning crystal digging into a full weekend,
                use the{" "}
                <Link
                  href="/crystal-mining"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  full Mount Ida crystal mining guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#2d2a26] shadow-xl">
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              <div className="relative min-h-[380px]">
                <Image
                  src="/images/crystal-hero.jpg"
                  alt="Crystal mining guide for Mount Ida Arkansas"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] !text-white/55">
                  New full guide
                </p>

                <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Not sure which crystal mine to pick?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/75">
                  The full guide breaks down the main mine stops, what each one
                  is best for, what to bring, tips for kids, and how to build a
                  simple Mount Ida weekend around crystal digging.
                </p>

                <Link
                  href="/crystal-mining"
                  className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Read the Crystal Mining Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Featured Crystal Mines
            </p>

            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Mount Ida area crystal digging stops.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              These are useful starting points for visitors planning a Mount Ida
              trip around quartz digging, rockhounding, cabins, Lake Ouachita,
              and the Ouachita Mountains.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredMines.map((mine) => (
              <article
                key={mine.title}
                className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/45 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={mine.image}
                    alt={mine.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {mine.category}
                  </p>

                  <h3 className="text-2xl font-semibold">{mine.title}</h3>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {mine.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {crystalMines.length > 0 && (
        <section className="section pt-0">
          <div className="container">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                More Crystal Stops
              </p>

              <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                More crystal digging and rockhounding near Mount Ida.
              </h2>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                These additional crystal digging areas, quartz mines, rock
                shops, and outdoor stops help make Mount Ida one of Arkansas’
                best-known destinations for quartz hunting and rockhounding.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {crystalMines.map((mine) => (
                <article
                  key={mine.title}
                  className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/45 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
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

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-white/45 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Before You Go
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  A few quick crystal digging notes.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Crystal digging is hands-on, outdoors, and weather-dependent.
                  A little planning makes the day go a lot smoother.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {quickTips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-5"
                  >
                    <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/crystal-mining" className="btn">
                Read Full Guide
              </Link>

              <Link href="/lake-ouachita" className="btn">
                Lake Ouachita
              </Link>

              <Link href="/cabins" className="btn">
                Places to Stay
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan a Full Mount Ida Crystal Mining Trip"
        text="After crystal digging, spend time at Lake Ouachita, stay in nearby cabins, explore local restaurants, scenic drives, and other outdoor stops around Mount Ida and the Ouachita Mountains."
        buttonText="Read the Crystal Mining Guide"
        buttonHref="/crystal-mining"
      />
    </main>
  );
}