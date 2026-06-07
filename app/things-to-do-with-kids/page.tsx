import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Things To Do in Mount Ida With Kids | Crystal Mines, Lake Ouachita & Family Stops",
  description:
    "Plan a family-friendly Mount Ida trip with kids around crystal mines, Lake Ouachita, cabins, easy food stops, local history, scenic drives, and outdoor time in the Ouachita Mountains.",
  keywords: [
    "things to do in Mount Ida with kids",
    "Mount Ida family trip",
    "Mount Ida Arkansas kids",
    "Lake Ouachita with kids",
    "crystal mining with kids Mount Ida",
    "family things to do Mount Ida Arkansas",
  ],
  alternates: {
    canonical: "/things-to-do-with-kids",
  },
};

const familyStops = [
  {
    title: "Crystal Mines",
    category: "Hands-On Outdoor Stop",
    text: "Crystal digging is one of the easiest Mount Ida activities to explain to kids: dig, search, rinse, and see what you found. Choose a mine that fits your family's age range and energy level.",
    image: "/images/crystal-family.webp",
    href: "/crystal-mines",
    cta: "View crystal mines",
  },
  {
    title: "Lake Ouachita",
    category: "Lake Day",
    text: "Build a slower family day around swimming, kayaking, boating, fishing, picnics, marina stops, and quiet shoreline views near Mount Ida.",
    image: "/images/lake-ouachita-boating.jpg",
    href: "/lake-ouachita",
    cta: "Open lake guide",
  },
  {
    title: "Cabins & Lake Stays",
    category: "Family Basecamp",
    text: "A cabin or resort stay makes the trip easier with kids because you can build in breaks, snacks, naps, lake time, and a slower evening after a day outside.",
    image: "/images/mt-ida-cabins.webp",
    href: "/cabins",
    cta: "Find places to stay",
  },
  {
    title: "Heritage House Museum",
    category: "Short Indoor Stop",
    text: "A local history stop can work well when you need something quieter, especially if your family likes small museums, local stories, and Montgomery County history.",
    image: "/images/heritage-house-museum.jpg",
    href: "/history",
    cta: "Read local history",
  },
  {
    title: "Ouachita National Forest",
    category: "Nature & Scenery",
    text: "Use the forest and mountain roads for simple outdoor time, scenic drives, short walks, and quiet stops that do not need a packed schedule.",
    image: "/images/ouachita-national-forest.jpg",
    href: "/things-to-do",
    cta: "Explore things to do",
  },
  {
    title: "Local Restaurants",
    category: "Easy Food Breaks",
    text: "Keep the day realistic by planning where to eat before or after crystal digging, lake time, or scenic drives around Mount Ida.",
    image: "/images/mt-ida-restaurants.jpg",
    href: "/restaurants",
    cta: "Find restaurants",
  },
];

const dayPlans = [
  {
    title: "Crystal + Food Day",
    text: "Start with a crystal mine in the morning, clean up, then keep the rest of the day simple with lunch, a rock shop, and a quiet cabin evening.",
  },
  {
    title: "Lake Day",
    text: "Plan around Lake Ouachita with swimming, fishing, kayaking, boating, a marina stop, and enough downtime so the day does not feel rushed.",
  },
  {
    title: "Weekend Basecamp",
    text: "Stay in or near Mount Ida, do one bigger activity each day, and use restaurants, scenic drives, and cabin time to keep the trip easier for kids.",
  },
];

const tips = [
  "Bring clothes and shoes that can get dirty if crystal digging is on the plan.",
  "Pack water, snacks, sunscreen, towels, bug spray, and backup clothes for lake or mine days.",
  "Do one main activity per day instead of trying to fit everything into one afternoon.",
  "Check hours before visiting smaller museums, mines, restaurants, or local businesses.",
  "Build in quiet time if you are staying in a cabin or lake resort.",
  "Keep a weather backup plan for hot, rainy, or stormy mountain days.",
];

const faqs = [
  {
    question: "Is Mount Ida good for a family trip?",
    answer:
      "Yes. Mount Ida works well for families who like outdoor trips, crystal digging, lake days, cabins, fishing, scenic drives, and a quieter Arkansas mountain pace.",
  },
  {
    question: "Can kids go crystal mining near Mount Ida?",
    answer:
      "Many families visit the Mount Ida area for crystal digging. The best stop depends on the ages of the kids, the weather, and how hands-on your family wants the experience to be.",
  },
  {
    question: "What should families bring for a Mount Ida day?",
    answer:
      "Bring water, sunscreen, snacks, outdoor shoes, towels, extra clothes, and anything you need for a lake, mine, or cabin day. Crystal digging and lake trips are easier when you plan ahead.",
  },
  {
    question: "What is a simple Mount Ida family weekend?",
    answer:
      "A simple weekend could include one crystal mine, one Lake Ouachita day, local food, a cabin stay, and a short scenic or history stop without overpacking the schedule.",
  },
];

export default function ThingsToDoWithKidsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <section className="relative flex min-h-[740px] items-end overflow-hidden bg-[#2d2a26] pb-16 pt-32">
        <img
          src="/images/crystal-family.webp"
          alt="Family friendly crystal mining around Mount Ida Arkansas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-transparent to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.26em] !text-white/70">
              Family Guide
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Things to do in Mount Ida with kids.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 !text-white/82">
              Plan a family-friendly Mount Ida trip around crystal mines, Lake
              Ouachita, cabins, local food, simple outdoor stops, and a slower
              Ouachita Mountain pace that works better with kids.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#family-stops"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                See Family Stops
              </a>

              <Link
                href="/crystal-mines"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Crystal Mines
              </Link>

              <Link
                href="/lake-ouachita"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Lake Ouachita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Simple Family Planning
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Keep the trip simple: one big activity, then food, water, and
                downtime.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8">
                Mount Ida is not a packed amusement-park kind of family trip.
                That is part of the appeal. It works better as a slower outdoor
                getaway with crystal digging, lake time, scenic drives, cabins,
                and easy local stops.
              </p>

              <p className="leading-8">
                For families, the best plan is usually to pick one main thing
                each day and leave room for snacks, weather, water, and rest.
                That makes the trip feel like a break instead of a checklist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="family-stops" className="section bg-white/35">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Family-Friendly Stops
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Good starting points for a Mount Ida trip with kids.
            </h2>

            <p className="mt-4 text-lg leading-8">
              These are the kinds of stops that fit families best: hands-on,
              outdoors, easy to understand, or useful for slowing the day down.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {familyStops.map((stop) => (
              <Link
                key={stop.title}
                href={stop.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#2d2a26]">
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {stop.category}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {stop.title}
                  </h3>

                  <p className="mt-3 leading-7">{stop.text}</p>

                  <span className="mt-auto pt-5 font-black text-[color:var(--color-accent)]">
                    {stop.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Easy Day Ideas
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Three ways to make a family trip work.
              </h2>
            </div>

            <div className="grid gap-4">
              {dayPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-[1.5rem] border border-black/10 bg-white/55 p-6 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="mt-3 leading-7">{plan.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/35">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-white/55 p-7 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Good To Know
                </p>

                <h2 className="text-4xl font-semibold leading-tight">
                  A little planning helps with kids.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {tips.map((tip) => (
                  <div key={tip} className="rounded-2xl bg-white/70 p-5">
                    <p className="text-sm leading-7">{tip}</p>
                  </div>
                ))}
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
              Mount Ida family trip FAQ
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
