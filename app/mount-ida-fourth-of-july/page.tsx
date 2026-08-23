import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Fourth of July in Mount Ida, Arkansas | Lake Ouachita Holiday Guide",
  description:
    "Plan a Fourth of July trip around Mount Ida, Arkansas with Lake Ouachita, crystal mines, cabins, local food, and an archive of the verified 2026 Mountain Harbor holiday event.",
  keywords: [
    "Fourth of July Mount Ida Arkansas",
    "Mount Ida Arkansas fireworks 2026",
    "Lake Ouachita fireworks",
    "Mountain Harbor Fourth of July",
    "Mount Ida July 4 events",
    "Lake Ouachita July 4",
    "Mount Ida Independence Day",
  ],
  alternates: {
    canonical: "/mount-ida-fourth-of-july",
  },
};

const verifiedEvents = [
  {
    name: "Mountain Harbor Fourth of July Celebration",
    label: "2026 Event Archive",
    date: "Saturday, July 4, 2026",
    time: "Daytime parade and evening fireworks",
    location: "Mountain Harbor Resort & Spa, 994 Mountain Harbor Road, Mount Ida, AR 71957",
    description:
      "Mountain Harbor Resort listed a July 4, 2026 Patriotic 4-Wheeler Parade and a Fourth of July celebration with fireworks over Lake Ouachita. This listing is kept as a verified 2026 archive while future holiday details are confirmed from current host sources.",
    details: [
      "The 2026 Patriotic 4-Wheeler Parade was listed for July 4",
      "Fireworks over Lake Ouachita were part of the verified 2026 celebration details",
      "Guests can view from land or from the lake",
      "Fireworks are prohibited on Harbor property outside the official show",
    ],
    image: "/images/holiday/mountain-harbor-fourth-of-july.webp",
    href: "https://mountainharborresort.com/activities/holidays/",
    cta: "View Mountain Harbor holidays",
  },
];

const dayPlan = [
  {
    time: "Morning",
    title: "Start with town, breakfast, or a crystal stop",
    text: "Mount Ida works best when the day starts slow. Grab food, check supplies, or plan a morning crystal mine visit before the lake heat and holiday traffic build.",
  },
  {
    time: "Afternoon",
    title: "Head toward Lake Ouachita",
    text: "Use the afternoon for swimming, boating, fishing, kayaking, marina stops, cabin time, or a shaded break before the evening fireworks crowd gathers.",
  },
  {
    time: "Evening",
    title: "Plan around Mountain Harbor and the lake",
    text: "If you are going for the fireworks, give yourself extra time for parking, lake access, boat traffic, and finding a safe viewing spot before dark.",
  },
];

const tripTips = [
  {
    title: "Check the host first",
    text: "Weather, lake conditions, parking, and event details can change. Check Mountain Harbor before leaving for the celebration.",
  },
  {
    title: "Book stays early",
    text: "Cabins, resort rooms, and lake-area stays can fill up around holiday weekends near Lake Ouachita.",
  },
  {
    title: "Give yourself lake time",
    text: "The best Mount Ida July 4 plans usually leave room for water, shade, food, and a slower pace instead of rushing from stop to stop.",
  },
  {
    title: "Respect firework rules",
    text: "Mountain Harbor notes that personal fireworks are prohibited on Harbor property, including Harbor South and Harbor East.",
  },
];

const nearbyGuides = [
  {
    title: "Lake Ouachita",
    text: "Build the holiday around boating, swimming, fishing, kayaking, marina stops, and one of Arkansas' clearest lakes.",
    href: "/lake-ouachita",
  },
  {
    title: "Crystal Mines",
    text: "Turn the weekend into a Mount Ida trip with quartz digging, rock shops, and family-friendly crystal stops.",
    href: "/crystal-mines",
  },
  {
    title: "Cabins & Places to Stay",
    text: "Find cabins, resorts, lake stays, and quiet places to land after a long holiday day outside.",
    href: "/cabins",
  },
  {
    title: "Restaurants",
    text: "Plan food before heading to the lake, after a mine visit, or on the way back from the fireworks.",
    href: "/restaurants",
  },
];

const faqs = [
  {
    question: "Are there Fourth of July fireworks near Mount Ida?",
    answer:
      "The verified 2026 Mountain Harbor listing included a Patriotic 4-Wheeler Parade and a Fourth of July celebration with fireworks over Lake Ouachita. That date has passed; check current event and host pages for future plans.",
  },
  {
    question: "Where is the verified Mount Ida July 4 event?",
    answer:
      "The archived 2026 Mount Ida-area listing was at Mountain Harbor Resort & Spa on Lake Ouachita, 994 Mountain Harbor Road, Mount Ida, Arkansas. Check current sources before planning a future holiday visit.",
  },
  {
    question: "Should visitors check before going?",
    answer:
      "Yes. Holiday schedules, parking, weather, lake access, and resort details can change, so visitors should check the event host before leaving.",
  },
  {
    question: "What else can you do around Mount Ida on July 4 weekend?",
    answer:
      "Many visitors build the weekend around Lake Ouachita, crystal mines, cabins, local restaurants, scenic drives, and quiet Ouachita Mountain time.",
  },
];

function EventCard({ event }: { event: (typeof verifiedEvents)[number] }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 shadow-xl">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <a
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-[360px] overflow-hidden bg-[#2d2a26] lg:min-h-[540px]"
        >
          <img
            src={event.image}
            alt={event.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-transparent" />

          <div className="absolute left-5 top-5 rounded-full bg-black/72 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
            {event.label}
          </div>
        </a>

        <div className="flex flex-col p-7 md:p-10 lg:p-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            {event.date} • {event.time}
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {event.name}
          </h2>

          <p className="mt-3 text-sm font-bold text-[color:var(--color-text)]">
            {event.location}
          </p>

          <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
            {event.description}
          </p>

          <ul className="mt-6 grid gap-3">
            {event.details.map((detail) => (
              <li
                key={detail}
                className="rounded-2xl border border-black/10 bg-white/65 p-4 text-sm font-semibold leading-6 text-[color:var(--color-text)]"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-7">
            <a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              {event.cta}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MountIdaFourthOfJulyPage() {
  const mainEvent = verifiedEvents[0];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Event",
              name: mainEvent.name,
              description: mainEvent.description,
              startDate: "2026-07-04",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventCompleted",
              location: {
                "@type": "Place",
                name: "Mountain Harbor Resort & Spa",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "994 Mountain Harbor Road",
                  addressLocality: "Mount Ida",
                  addressRegion: "AR",
                  postalCode: "71957",
                  addressCountry: "US",
                },
              },
              url: mainEvent.href,
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

      <section className="relative flex min-h-[760px] items-end overflow-hidden bg-[#2d2a26] pb-16 pt-32">
        <img
          src="/images/holiday/mount-ida-fourth-of-july-hero.jpg"
          alt="Fourth of July around Mount Ida Arkansas and Lake Ouachita"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.26em] !text-white/70">
              Fourth of July in Mount Ida
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Lake Ouachita fireworks, mountain cabins, and a slower July 4
              weekend.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/82">
              Use this guide for Mount Ida holiday trip ideas and the archived 2026
              Mountain Harbor celebration. The 2026 holiday has passed, so check
              current Events and host pages before making plans around a future date.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#verified-events"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                See 2026 Event Archive
              </a>

              <a
                href="#day-plan"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Plan the Day
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-8">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm">
              <strong className="block text-4xl leading-none text-[color:var(--color-accent)]">
                July 4
              </strong>
              <p className="mt-2 font-bold text-[color:var(--color-text)]">
                2026 holiday date
              </p>
              <p className="mt-3">
                Independence Day fell on Saturday in 2026. That date is kept here
                as part of the archived holiday reference.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm">
              <strong className="block text-4xl leading-none text-[color:var(--color-accent)]">
                1
              </strong>
              <p className="mt-2 font-bold text-[color:var(--color-text)]">
                archived listing
              </p>
              <p className="mt-3">
                The verified 2026 Mount Ida-area listing is kept here for reference.
                Use current event and host pages for future holiday dates.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm">
              <strong className="block text-4xl leading-none text-[color:var(--color-accent)]">
                Lake
              </strong>
              <p className="mt-2 font-bold text-[color:var(--color-text)]">
                Ouachita focus
              </p>
              <p className="mt-3">
                The holiday makes the most sense when planned around lake time,
                shade, cabins, food, and a safe fireworks viewing plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="verified-events" className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              2026 Event Archive
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Archived Fourth of July event information near Mount Ida.
            </h2>

            <p className="mt-4 text-lg leading-8">
              The event below was verified for 2026 and is now kept as an archive.
              For future Fourth of July plans, check the current Events page and
              the event host before relying on a date, time, or fireworks schedule.
            </p>
          </div>

          <EventCard event={mainEvent} />
        </div>
      </section>

      <section id="day-plan" className="section bg-white/35">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Simple Day Plan
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Build the holiday around the lake, not a rushed schedule.
              </h2>

              <p className="mt-5 text-lg leading-8">
                Around Mount Ida, the Fourth of July works best as a lake and
                cabin weekend. Make room for water, shade, food, and travel time
                instead of trying to force too many stops into one day.
              </p>
            </div>

            <div className="grid gap-4">
              {dayPlan.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/10 bg-white/65 p-6 shadow-sm"
                >
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {item.time}
                  </p>

                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-3 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Trip Tips
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Things to know before you go.
            </h2>

            <p className="mt-4 text-lg leading-8">
              Lake-area holiday weekends are easier when you plan the basics
              before you leave home.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tripTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{tip.title}</h3>
                <p className="mt-3 leading-7">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 shadow-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[360px]">
                <img
                  src="/images/holiday/lake-ouachita-fourth-of-july.jpg"
                  alt="Lake Ouachita near Mount Ida Arkansas"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-7 md:p-10 lg:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Lake Weekend
                </p>

                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                  Make it more than fireworks.
                </h2>

                <p className="mt-5 text-lg leading-8">
                  Mount Ida is a good July 4 base because the holiday can turn
                  into a full weekend: a cabin, a crystal mine, a lake day,
                  dinner nearby, and fireworks over Lake Ouachita.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/lake-ouachita" className="btn">
                    Lake Ouachita Guide
                  </Link>

                  <Link href="/cabins" className="btn btn-light">
                    Cabins & Stays
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Build Around the Holiday
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Helpful Mount Ida guides for July 4 weekend.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {nearbyGuides.map((guide) => (
              <Link
                href={guide.href}
                key={guide.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold">{guide.title}</h3>

                <p className="mt-3 leading-7">{guide.text}</p>

                <span className="mt-5 inline-block font-black text-[color:var(--color-accent)]">
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-white/55 p-7 shadow-sm md:p-9 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Local Event Help
              </p>

              <h2 className="text-4xl font-semibold leading-tight">
                Know another verified July 4 event?
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8">
                If a local business, church, marina, venue, town, or community
                group announces a verified Fourth of July event around Mount
                Ida, send it in so this guide can stay current.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/submit-event" className="btn">
                  Submit an Event
                </Link>

                <Link href="/events" className="btn btn-light">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Questions
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Fourth of July around Mount Ida FAQ
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/10 bg-white/55 p-6"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>

                <p className="mt-3 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
