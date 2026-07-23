import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { crystalMiningGuide } from "@/data/crystalMining";

export const metadata = {
  title: "Crystal Mines Near Mount Ida, Arkansas | Quartz Digging Stops",
  description:
    "Find currently operating crystal mines, quartz digging options, official links, visitor notes, and public rockhounding areas near Mount Ida, Arkansas.",
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
  alternates: {
    canonical: "/crystal-mines",
  },
};

const allStops = [
  ...crystalMiningGuide.mines,
  ...crystalMiningGuide.lesserKnownStops,
];

const mineGuideLinks: Record<string, string> = {
  "Wegner Quartz Crystal Mines": "/wegner-quartz-crystal-mines",
  "Avant Mining / Fisher Mountain": "/avant-mining-fisher-mountain",
  "Sweet Surrender Crystal Mine": "/sweet-surrender-crystal-mine",
  "Twin Creek Crystal Mine": "/twin-creek-crystal-mine",
  "Crystal Vista Recreation Area": "/crystal-vista-recreation-area",
};

const quickTips = [
  "Check the mine directly before driving out. Operating status, fees, road conditions, reservations, and digging access can change.",
  "Bring shoes and clothes that can get dirty, plus gloves, water, sunscreen, and something to carry crystals in.",
  "Ask each mine what tools are allowed before bringing your own. Some sell or rent tools, and some do not allow power tools.",
  "Bring cash. Rural cell service and card payment can be unreliable around some mine roads.",
  "Use the full crystal mining guide if you need help choosing between family-friendly, serious, rugged, and public forest options.",
];

export default function CrystalMinesPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Crystal Mines Near Mount Ida, Arkansas",
            description:
              "Quartz crystal mines, public crystal digging, rockhounding, Crystal Vista, and outdoor crystal hunting attractions near Mount Ida, Arkansas.",
            itemListElement: allStops.map((mine, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: mine.name,
              url: `https://mountidaarkansas.org/crystal-mines#${mine.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`,
            })),
          }),
        }}
      />

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden text-center dark-section">
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
            A factual directory of quartz digging stops, official sources, trip fit,
            and what to confirm before crystal hunting around Mount Ida,
            Arkansas.
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
                This page is the quick directory version of the Mount Ida crystal
                guide. It gives visitors the basics: what each stop is, who it
                fits, the official source to check, and what to confirm before
                the drive.
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                For help choosing the right mine, packing for the day, bringing
                kids, or turning crystal digging into a full weekend, use the{" "}
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

          <div className="mt-10 rounded-[1.75rem] border border-black/10 bg-[color:var(--color-accent)] p-7 shadow-sm md:p-9">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              {crystalMiningGuide.notice.title}
            </p>
            <p className="max-w-4xl text-lg leading-8 !text-white/90">
              {crystalMiningGuide.notice.text}
            </p>
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
                  Full planning guide
                </p>

                <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Not sure which crystal mine to pick?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/80">
                  The full guide breaks down family-friendly mines, serious
                  public digs, primitive stops, Crystal Vista, what to bring,
                  and how to build a simple Mount Ida weekend around crystal
                  digging.
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
              Crystal mine stops
            </p>

            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Mount Ida area crystal digging directory.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              Use these cards as a starting point, then call or check each mine’s
              current updates before driving out. Details are written carefully
              so visitors know the difference between a staffed mine, a rugged
              call-ahead dig, and a public forest rockhounding area.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {allStops.map((mine) => (
              <article
                id={mine.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                key={mine.name}
                className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/55 shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={mine.image}
                    alt={mine.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {mine.label}
                  </p>

                  <h3 className="text-2xl font-semibold md:text-3xl">
                    {mine.name}
                  </h3>

                  <div className="mt-3 space-y-1 text-sm font-bold text-[color:var(--color-text)]">
                    <div>{mine.location}</div>
                      <div>Check the official source for current directions and access.</div>
                  </div>

                  <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                    {mine.summary}
                  </p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-4">
                      <h4 className="mb-2 text-lg">Trip fit</h4>
                      <ul className="space-y-2">
                        {mine.bestFor.slice(0, 4).map((item) => (
                          <li key={item} className="text-sm leading-6 text-[color:var(--color-muted)]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-4">
                      <h4 className="mb-2 text-lg">Confirm before going</h4>
                      <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                        Check operating status, reservations or waivers, directions,
                        road conditions, facilities, fees, and allowed tools directly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {mineGuideLinks[mine.name] ? (
                      <Link href={mineGuideLinks[mine.name]} className="btn">
                        Visitor guide
                      </Link>
                    ) : null}

                    {mine.website && (
                      <a
                        href={mine.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[color:var(--color-text)] transition hover:bg-white/80"
                      >
                        Website / updates
                      </a>
                    )}

                    <Link
                      href="/crystal-mining#where-to-dig"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[color:var(--color-text)] transition hover:bg-white/80"
                    >
                      Full details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-white/55 p-8 md:p-10">
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

            <div className="seo-guide-link-strip mt-8">
              <Link href="/best-crystal-mines-mount-ida">Best crystal mines</Link>
              <Link href="/best-crystal-mines-for-kids-mount-ida">Crystal mines for kids</Link>
              <Link href="/crystal-vista-recreation-area">Crystal Vista</Link>
              <Link href="/cabins-near-crystal-mines-mount-ida">Cabins near crystal mines</Link>
              <Link href="/wegner-quartz-crystal-mines">Wegner guide</Link>
              <Link href="/avant-mining-fisher-mountain">Fisher Mountain guide</Link>
              <Link href="/twin-creek-crystal-mine">Twin Creek guide</Link>
              <Link href="/sweet-surrender-crystal-mine">Sweet Surrender guide</Link>
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
