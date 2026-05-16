import Image from "next/image";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata = {
  title:
    "Lake Ouachita Near Mount Ida Arkansas | Boating, Fishing, Cabins & Lake Guide",
  description:
    "Plan a Lake Ouachita trip near Mount Ida, Arkansas with boating, fishing, swimming, kayaking, islands, marinas, cabins, resorts, crystal mines, restaurants, and scenic mountain views.",
  keywords: [
    "Lake Ouachita Mount Ida",
    "Lake Ouachita Arkansas",
    "Lake Ouachita cabins",
    "Mount Ida Arkansas lake",
    "Lake Ouachita boating",
    "Lake Ouachita fishing",
    "Lake Ouachita swimming",
    "Lake Ouachita kayaking",
    "Lake Ouachita marinas",
    "Lake Ouachita resorts",
    "cabins near Lake Ouachita",
    "things to do near Lake Ouachita",
    "Mount Ida Arkansas cabins",
    "Arkansas lake vacations",
    "Lake Ouachita weekend trip",
  ],
};

const quickLinks = [
  { label: "Cabins & Stays", href: "/cabins" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Crystal Mines", href: "/crystal-mines" },
  { label: "Things To Do", href: "/things-to-do" },
];

const lakeHighlights = [
  {
    title: "Boating & Marinas",
    text: "Lake Ouachita is built for long lake days, with marina access, boat ramps, rentals, wide open water, islands, and forested shoreline near Mount Ida.",
    image: "/images/lake-ouachita-boating.jpg",
  },
  {
    title: "Fishing",
    text: "The lake is a strong fishing destination for visitors looking for quiet coves, deep water, mountain scenery, and a slower outdoor trip.",
    image: "/images/lake-ouachita-fishing.jpg",
  },
  {
    title: "Swimming & Kayaking",
    text: "Clear water, peaceful shoreline, islands, and mountain views make Lake Ouachita a good fit for swimming, kayaking, paddling, and relaxing.",
    image: "/images/lake-ouachita-kayaking.jpg",
  },
];

const tripTypes = [
  {
    title: "Lake Weekend",
    text: "Best for visitors planning boating, swimming, fishing, lake views, marinas, cabins, and quiet evenings close to the water.",
  },
  {
    title: "Crystal + Lake Trip",
    text: "Spend part of the trip digging quartz near Mount Ida, then use Lake Ouachita for the slower outdoor side of the weekend.",
  },
  {
    title: "Cabin Getaway",
    text: "Use Mount Ida as a calm home base with cabins, lake access, restaurants, crystal mines, scenic drives, and outdoor stops nearby.",
  },
];

const lakeSections = [
  {
    title: "Clear Water and Mountain Views",
    eyebrow: "Why Visitors Come",
    text: "Lake Ouachita is one of the biggest reasons people visit the Mount Ida area. The lake is known for clear water, forested shoreline, islands, and quiet coves that feel different from busier lake towns. Mount Ida gives visitors a calmer base while still keeping them close to the water.",
    image: "/images/lake-ouachita.webp",
  },
  {
    title: "Boating, Fishing, and Lake Days",
    eyebrow: "Outdoor Recreation",
    text: "Visitors come to Lake Ouachita for boating, fishing, kayaking, swimming, and long days outside. The lake has enough space for people who want activity, but it also works well for quieter trips where the goal is just to get away, sit by the water, and enjoy the Ouachita Mountains.",
    image: "/images/lake-ouachita-fishing-2.webp",
  },
  {
    title: "Cabins and Resorts Near the Water",
    eyebrow: "Places To Stay",
    text: "The Mount Ida area has cabins, resorts, and lake stays that make it easy to build a full weekend around Lake Ouachita. Visitors can stay close to the water, drive into town for food or supplies, and still be near crystal mines, scenic drives, and local stops.",
    image: "/images/mt-ida-cabins.webp",
  },
  {
    title: "A Better Base for a Quiet Arkansas Getaway",
    eyebrow: "Mount Ida as a Base",
    text: "Mount Ida works well for travelers who want access to Lake Ouachita without feeling like they are in a crowded tourist strip. You can spend one day on the lake, another digging crystals, and still have time for local restaurants, small shops, and scenic drives through Montgomery County.",
    image: "/images/lake-ouachita-clear.webp",
  },
];

const planningTips = [
  "Book cabins, resorts, and lake stays early for warm-weather weekends.",
  "Plan marina stops, boat rentals, and lake access before you arrive.",
  "Bring sunscreen, water, towels, lake shoes, and dry bags for boat days.",
  "Pair Lake Ouachita with crystal digging for a fuller Mount Ida weekend.",
  "Use Mount Ida for food, supplies, restaurants, and a quieter small-town base.",
  "Check weather and lake plans before heading out for boating, fishing, or kayaking.",
];

const suggestedStops = [
  {
    title: "Cabins Near Lake Ouachita",
    text: "Find cabins, resorts, and quiet stays near Mount Ida and Lake Ouachita.",
    href: "/cabins",
  },
  {
    title: "Mount Ida Restaurants",
    text: "Look for local food before or after lake days, crystal mines, or scenic drives.",
    href: "/restaurants",
  },
  {
    title: "Crystal Mines",
    text: "Add quartz digging to your Lake Ouachita weekend for a true Mount Ida trip.",
    href: "/crystal-mines",
  },
];

const faqs = [
  {
    question: "Is Lake Ouachita close to Mount Ida?",
    answer:
      "Yes. Mount Ida is one of the main small-town bases visitors use for Lake Ouachita trips, cabins, marinas, fishing, boating, crystal mining, and outdoor weekends.",
  },
  {
    question: "What can you do on Lake Ouachita?",
    answer:
      "Popular things to do on Lake Ouachita include boating, fishing, swimming, kayaking, camping, visiting marinas, relaxing near the shoreline, and exploring quiet coves and islands.",
  },
  {
    question: "Are there cabins near Lake Ouachita?",
    answer:
      "Yes. The Mount Ida and Lake Ouachita area has cabins, resorts, lake stays, and vacation rentals that work well for weekend trips and outdoor getaways.",
  },
  {
    question: "Is Mount Ida a good place to stay for Lake Ouachita?",
    answer:
      "Mount Ida is a good base if you want a quieter Arkansas lake trip with access to cabins, restaurants, crystal mines, scenic drives, and Lake Ouachita recreation.",
  },
  {
    question: "Can you combine Lake Ouachita and crystal mining in one trip?",
    answer:
      "Yes. Many visitors build a Mount Ida weekend around both Lake Ouachita and quartz crystal digging because the lake, mines, restaurants, and cabins are all part of the same regional trip.",
  },
];

export default function LakeOuachitaPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LakeBodyOfWater",
              name: "Lake Ouachita",
              description:
                "A clear mountain lake near Mount Ida, Arkansas known for boating, fishing, swimming, kayaking, islands, cabins, resorts, marinas, and scenic outdoor recreation.",
              containedInPlace: {
                "@type": "Place",
                name: "Arkansas",
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
      <section className="relative min-h-[76vh] flex items-center overflow-hidden dark-section">
        <Image
          src="/images/lake-ouachita-also.jpg"
          alt="Lake Ouachita near Mount Ida Arkansas"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 container py-24">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Lake Ouachita Guide
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Lake Ouachita Near Mount Ida
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Plan a Lake Ouachita trip with boating, fishing, swimming,
              kayaking, cabins, resorts, marinas, crystal mines, local
              restaurants, and quiet Ouachita Mountain scenery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cabins"
                className="rounded-full bg-white px-6 py-3 font-medium text-black shadow transition hover:opacity-90"
              >
                Find Cabins
              </Link>

              <Link
                href="/crystal-mines"
                className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              >
                Crystal Mines
              </Link>

              <Link
                href="/restaurants"
                className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              >
                Restaurants
              </Link>
            </div>
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
                Mount Ida Lake Trip Planning
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                A quiet lake trip with cabins, clear water, and mountain views.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                Lake Ouachita gives Mount Ida one of its strongest visitor
                draws. People come for the water, but the town also gives them
                access to cabins, crystal mines, restaurants, scenic drives, and
                the slower pace of the Ouachita Mountains.
              </p>

              <p className="leading-relaxed text-[color:var(--color-muted)]">
                Use this page to plan the lake side of your Mount Ida trip, then
                connect it with{" "}
                <Link href="/cabins" className="underline hover:opacity-70">
                  cabins
                </Link>
                ,{" "}
                <Link
                  href="/crystal-mines"
                  className="underline hover:opacity-70"
                >
                  crystal mines
                </Link>
                ,{" "}
                <Link href="/restaurants" className="underline hover:opacity-70">
                  restaurants
                </Link>
                , and other nearby outdoor stops.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRIP TYPE CARDS */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {tripTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-accent)" }}
            >
              Lake Activities
            </p>

            <h2>Things To Do on Lake Ouachita</h2>
            <p>
              Whether you are staying for a weekend or just passing through,
              Lake Ouachita gives visitors plenty of ways to spend time outside.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {lakeHighlights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border bg-[color:var(--bg-card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="relative min-h-[620px] flex items-end overflow-hidden dark-section">
        <Image
          src="/images/lake-ouachita-boating.jpg"
          alt="Boating on Lake Ouachita near Mount Ida Arkansas"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 container pb-16">
          <div className="max-w-3xl rounded-2xl bg-black/60 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              Clear Water, Islands & Quiet Coves
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Lake Ouachita is the outdoor anchor for many Mount Ida trips.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Build the day around boating, fishing, swimming, paddling, or just
              finding a quiet place near the shoreline, then use Mount Ida for
              food, cabins, crystals, and supplies.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
            {lakeSections.map((section, index) => (
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
                    {section.eyebrow}
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

      {/* SUGGESTED STOPS */}
      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-accent)" }}
            >
              Suggested Nearby Stops
            </p>

            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Pair Lake Ouachita with more of Mount Ida.
            </h2>

            <p className="leading-relaxed text-[color:var(--color-muted)]">
              A strong Lake Ouachita trip usually includes more than just the
              water. These nearby guide sections help visitors find cabins,
              local restaurants, crystal mines, and other useful stops.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {suggestedStops.map((stop) => (
              <Link
                key={stop.title}
                href={stop.href}
                className="rounded-3xl border bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{stop.title}</h3>

                <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">
                  {stop.text}
                </p>

                <span
                  className="mt-5 inline-block font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  View guide →
                </span>
              </Link>
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
                  Lake Trip Tips
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  Plan the lake day first, then build the rest around it.
                </h2>

                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  Lake Ouachita trips go smoother when you know where you are
                  staying, how you are getting on the water, and where you will
                  eat before or after your lake time.
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
            Lake Ouachita Near Mount Ida FAQs
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
        title="Stay Close to the Lake"
        text="Find cabins, resorts, local restaurants, crystal mines, and other Mount Ida stops near Lake Ouachita."
        buttonText="Explore Cabins"
        buttonHref="/cabins"
      />
    </main>
  );
}