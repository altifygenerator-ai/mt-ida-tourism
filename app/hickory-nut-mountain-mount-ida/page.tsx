import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hickory Nut Mountain Near Mount Ida Arkansas | Lake Ouachita Overlook & Scenic Drive Guide",
  description:
    "Plan a Hickory Nut Mountain stop near Mount Ida, Arkansas with practical notes on the Lake Ouachita overlook, gravel road access, picnic area, scenery, photos, Lake Ouachita Vista Trail access, and what to check before going.",
  keywords: [
    "Hickory Nut Mountain Mount Ida Arkansas",
    "Hickory Nut Mountain Vista",
    "Lake Ouachita overlook",
    "Mount Ida scenic drive",
    "things to do near Mount Ida Arkansas",
    "Lake Ouachita Vista Trail",
    "Ouachita National Forest",
    "Mount Ida Arkansas day trip",
    "Arkansas scenic overlook",
    "Lake Ouachita views",
  ],
  alternates: {
    canonical: "/hickory-nut-mountain-mount-ida",
  },
};

const quickLinks = [
  { href: "/lake-ouachita", label: "Lake Ouachita" },
  { href: "/brady-mountain-lake-ouachita", label: "Brady Mountain" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/cabins", label: "Cabins & Stays" },
];

const guideSections = [
  {
    title: "Go for the view, not a packed attraction schedule.",
    eyebrow: "Why People Go",
    text: "Hickory Nut Mountain is the kind of stop that makes sense when you want a simple mountain-road break near Lake Ouachita. It is not a big paid attraction with a full visitor center. The draw is the overlook, the trees, the quiet, and getting a higher view over the lake country without turning the day into a production.",
    image: "/images/lake-ouachita-view.webp",
  },
  {
    title: "The road is part of the experience, so treat it that way.",
    eyebrow: "Getting There",
    text: "This is a forest-road kind of stop. Expect a slower climb, gravel, curves, and the need to pay attention to weather and road conditions. It is usually a better fit when you are not in a rush and your group is okay with a little back-road driving.",
    image: "/images/mt-ida-scenic-drive.jpeg",
  },
  {
    title: "Pair it with the lake, a cabin day, or a slower Mount Ida loop.",
    eyebrow: "How It Fits",
    text: "Hickory Nut Mountain fits best as part of a Lake Ouachita day, a cabin weekend, or a scenic loop between Mount Ida, the lake, and the Ouachita National Forest. It is the kind of place you add when you want a view, a picnic break, or a quiet stop between bigger plans.",
    image: "/images/ouachita-national-forest.jpg",
  },
];

const goodFor = [
  "Visitors who want a Lake Ouachita overlook without a full hike",
  "Couples, families, photographers, and quiet-road travelers",
  "Cabin weekends where you want a simple scenic drive",
  "People already planning Lake Ouachita, Brady Mountain, or Mount Ida",
  "Visitors who like low-key outdoor stops more than crowded attractions",
];

const maybeSkip = [
  "If your group does not like gravel roads",
  "If the weather is bad or the road is in rough shape",
  "If you are short on time and only came for crystal digging",
  "If you need restrooms, food, shops, or services close by",
  "If you are uncomfortable driving forest roads without clear current conditions",
];

const checkBefore = [
  "Weather and road conditions",
  "Current Ouachita National Forest notices",
  "Whether your vehicle is a good fit for gravel roads",
  "Daylight, because this is not a place to figure out in the dark",
  "Water, snacks, and fuel before leaving town",
  "Phone signal, maps, and directions saved ahead of time",
  "Trail access if you plan to connect with the Lake Ouachita Vista Trail",
  "Any posted rules at the picnic area or overlook",
];

const nearbyPlanning = [
  {
    title: "Lake Ouachita",
    text: "Use Hickory Nut Mountain as the view stop, then build the rest of the day around boating, fishing, swimming, kayaking, marinas, or a cabin stay near Lake Ouachita.",
    href: "/lake-ouachita",
  },
  {
    title: "Brady Mountain",
    text: "If your day is centered more on camping, a swim beach, boat ramp access, marina needs, or lake facilities, the Brady Mountain guide is the better next page.",
    href: "/brady-mountain-lake-ouachita",
  },
  {
    title: "Mount Ida Restaurants",
    text: "Eat before you go or have a plan for after. Scenic stops are better when nobody is hungry and you are not trying to find food on a back road.",
    href: "/restaurants",
  },
];

const faqs = [
  {
    question: "Is Hickory Nut Mountain worth visiting from Mount Ida?",
    answer:
      "Yes, if you want a quiet scenic overlook, Lake Ouachita views, and a simple Ouachita National Forest stop. It is best for visitors who are comfortable with slower gravel-road driving and want a view more than a full attraction setup.",
  },
  {
    question: "Is Hickory Nut Mountain good for families?",
    answer:
      "It can be, especially for families that like overlooks, picnics, photos, and quiet outdoor stops. It may not be the best fit for very young kids if the group needs lots of services, food, bathrooms, or a highly structured activity.",
  },
  {
    question: "Can you pair Hickory Nut Mountain with Lake Ouachita?",
    answer:
      "Yes. That is one of the cleanest ways to use it. Hickory Nut Mountain works as a scenic stop before or after a Lake Ouachita day, especially if you are already staying around Mount Ida or the lake.",
  },
  {
    question: "What should I check before going?",
    answer:
      "Check weather, forest road conditions, current forest notices, daylight, directions, fuel, water, and whether your vehicle and group are comfortable with gravel-road access.",
  },
];

export default function HickoryNutMountainPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Hickory Nut Mountain Near Mount Ida Arkansas",
              description:
                "A practical local guide to visiting Hickory Nut Mountain, Lake Ouachita views, and scenic driving near Mount Ida, Arkansas.",
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

      <section className="relative flex min-h-[720px] items-end overflow-hidden dark-section">
        <Image
          src="/images/lake-ouachita-view.webp"
          alt="Hickory Nut Mountain and Lake Ouachita views near Mount Ida Arkansas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-transparent" />

        <div className="container relative z-10 pb-16 pt-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Hickory Nut Mountain Guide
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
              A quiet Lake Ouachita overlook for a slower Mount Ida day.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/85 md:text-xl">
              Hickory Nut Mountain is not the kind of stop you plan because you
              need a full attraction. You go for the view, the piney mountain
              road, a simple picnic break, and a different angle on Lake
              Ouachita when your Mount Ida trip has room to slow down.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lake-ouachita" className="btn btn-light">
                Lake Ouachita Guide
              </Link>

              <Link href="/things-to-do" className="btn">
                More Things To Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Start Here
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Should Hickory Nut Mountain be part of your Mount Ida trip?
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                If you are already coming to Mount Ida for crystals, cabins, or
                Lake Ouachita, Hickory Nut Mountain can be a good extra stop. It
                is best treated like a scenic side trip, not the main reason for
                the whole day.
              </p>

              <p className="leading-7 text-[color:var(--color-muted)]">
                The right group will like the simple parts of it: a slower
                drive, a higher view, quiet woods, and a chance to look over the
                lake country instead of staying down at water level all day. The
                wrong group may feel like it is too much gravel road for one
                overlook. Both can be true.
              </p>

              <p className="leading-7 text-[color:var(--color-muted)]">
                That is why this works best when you have a little time, a full
                tank, water in the vehicle, and a group that is okay with simple
                outdoor stops. If your Mount Ida day is already packed, save it
                for another trip.
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

      <section className="section pt-0">
        <div className="container">
          <div className="space-y-16">
            {guideSections.map((section, index) => (
              <div
                key={section.title}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                    {section.eyebrow}
                  </p>

                  <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                    {section.title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                    {section.text}
                  </p>
                </div>

                <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-black/10 shadow-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Good Fit
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Hickory Nut Mountain is a good add-on if...
              </h2>

              <ul className="mt-6 space-y-3">
                {goodFor.map((item) => (
                  <li
                    key={item}
                    className="leading-7 text-[color:var(--color-muted)]"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Maybe Skip It
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Save it for later if...
              </h2>

              <ul className="mt-6 space-y-3">
                {maybeSkip.map((item) => (
                  <li
                    key={item}
                    className="leading-7 text-[color:var(--color-muted)]"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden dark-section">
        <Image
          src="/images/mt-ida-scenic-drive.jpeg"
          alt="Scenic road near Mount Ida Arkansas"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/58 to-black/25" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl rounded-2xl bg-black/58 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Plain Advice
            </p>

            <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
              Do not save this one for the end of a worn-out day.
            </h2>

            <p className="mt-5 text-lg leading-8 !text-white/86">
              Scenic gravel roads are better when you are not rushing, not low
              on fuel, and not trying to beat dark. If your group is already
              tired from crystal digging or lake time, it may be smarter to keep
              this stop for the next morning.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Check Before You Go
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  The boring checks matter more on a back-road stop.
                </h2>

                <p className="mt-5 leading-7 text-[color:var(--color-muted)]">
                  Hickory Nut Mountain is simple, but simple does not mean you
                  should wing it. A little planning keeps the drive from turning
                  into a headache.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {checkBefore.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white/55 p-4 font-semibold text-[color:var(--color-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Keep Planning
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Pair the overlook with the right part of your trip.
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
              Hickory Nut Mountain is better when it fits naturally into the
              rest of your Mount Ida plans. Use it with lake, cabin, food, and
              scenic-drive planning instead of treating it like a standalone
              attraction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {nearbyPlanning.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  {item.text}
                </p>

                <span className="mt-5 inline-block font-bold text-[color:var(--color-accent)]">
                  View guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hickory Nut Mountain FAQs
            </h2>
            <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
              Quick answers for visitors deciding whether this overlook belongs
              in a Mount Ida, Lake Ouachita, or cabin weekend.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 p-8 shadow-sm md:p-10 bg-[color:var(--color-accent)]">
            <div className="relative z-10 max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
                Build The Day
              </p>

              <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
                Keep it simple and let the view be the point.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 !text-white/85">
                Use this with the Mount Ida cabins, Lake Ouachita, restaurants,
                and nearby guide pages to build a day that fits your group
                without turning the whole trip into a checklist.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/cabins" className="btn btn-light">
                  Cabins & Stays
                </Link>

                <Link href="/restaurants" className="btn">
                  Restaurants
                </Link>

                <Link href="/brady-mountain-lake-ouachita" className="btn">
                  Brady Mountain Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
