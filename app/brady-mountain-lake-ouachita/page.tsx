import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Brady Mountain Lake Ouachita Guide | Camping, Marina, Swim Beach & Food Near Mount Ida",
  description:
    "Plan a Brady Mountain and Lake Ouachita day near Mount Ida, Arkansas with practical notes on camping, swim beach, boat ramp, Safe Harbor Brady Mountain, Brady Mountain Grill, family lake days, and what to check before going.",
  keywords: [
    "Brady Mountain Lake Ouachita",
    "Brady Mountain near Mount Ida",
    "Safe Harbor Brady Mountain",
    "Brady Mountain campground",
    "Brady Mountain swim beach",
    "Lake Ouachita camping",
    "Lake Ouachita marina",
    "things to do near Mount Ida Arkansas",
    "Lake Ouachita family trip",
    "Arkansas lake weekend",
  ],
  alternates: {
    canonical: "/brady-mountain-lake-ouachita",
  },
};

const quickLinks = [
  { href: "/lake-ouachita", label: "Lake Ouachita" },
  { href: "/hickory-nut-mountain-mount-ida", label: "Hickory Nut Mountain" },
  { href: "/cabins", label: "Cabins & Stays" },
  { href: "/restaurants", label: "Restaurants" },
];

const dayStyles = [
  {
    title: "Campground and swim beach day",
    text: "Brady Mountain works well when the day is built around a campground, swim beach, boat ramp, picnic time, and keeping the lake plan fairly simple for the group.",
  },
  {
    title: "Marina and boat day",
    text: "Safe Harbor Brady Mountain gives visitors a named marina stop to check for fuel, boat needs, rentals, slips, store items, lodging, and current lake services before planning the day around the water.",
  },
  {
    title: "Lake food and easy reset",
    text: "Brady Mountain Grill on Wheels can fit the lake-day feel when it is operating, but food hours should always be checked before you count on it as the whole meal plan.",
  },
];

const mainStops = [
  {
    name: "Brady Mountain Recreation Area",
    label: "Camping • Swim Beach • Boat Ramp",
    text: "A U.S. Army Corps of Engineers area on Lake Ouachita with camping, lake access, a swim beach, boat ramp, playground, showers, and practical facilities for a family lake day or camping trip.",
    href: "https://www.recreation.gov/camping/campgrounds/233434",
  },
  {
    name: "Brady Mountain Day-Use Area",
    label: "Day Use • Picnic • Swim Beach",
    text: "A useful option when you want a Lake Ouachita day without turning it into a full camping trip. Check current access, pavilion details, swim beach conditions, and weather before building the whole day around it.",
    href: "https://www.recreation.gov/camping/campgrounds/10120789",
  },
  {
    name: "Safe Harbor Brady Mountain",
    label: "Marina • Fuel • Store • Lodging",
    text: "A marina on Lake Ouachita in Royal with boat-related services, fuel, a ship's store, lodging information, rental partners, and Brady Mountain Grill on Wheels onsite. Check current hours and availability before you go.",
    href: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
  },
  {
    name: "Brady Mountain Grill on Wheels",
    label: "Lake Food • Check Current Hours",
    text: "A waterside food option connected with Safe Harbor Brady Mountain. It is best treated as a check-ahead stop because restaurant and food-truck style hours can change with season, staffing, and lake traffic.",
    href: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
  },
];

const goodFor = [
  "Families who want a swim beach, campground, and lake facilities",
  "Boat days where marina access matters",
  "Campers who want Lake Ouachita close instead of just a scenic drive",
  "Visitors staying between Mount Ida, Royal, Hot Springs, and Lake Ouachita",
  "People who want a clearer plan than just driving around looking for water access",
];

const maybeSkip = [
  "If you want everything right in Mount Ida",
  "If the weather is rough or lake plans are uncertain",
  "If your group does not want to check campground, marina, or day-use details ahead of time",
  "If you only have time for a quick crystal mine visit",
  "If food, rentals, or lake access are not available when you need them",
];

const checkBefore = [
  "Campground reservations and current availability",
  "Day-use access, pavilion details, and swim beach conditions",
  "Safe Harbor Brady Mountain hours",
  "Boat rental availability and fuel dock hours",
  "Brady Mountain Grill on Wheels current hours",
  "Weather, wind, and lake conditions",
  "Fishing rules and license needs",
  "What food, water, towels, shade, and dry clothes your group needs",
];

const nearbyPlanning = [
  {
    title: "Lake Ouachita Guide",
    text: "Use the main Lake Ouachita page if you are still deciding between Brady Mountain, Mountain Harbor, Shangri-La, Crystal Springs, and other lake-area stops.",
    href: "/lake-ouachita",
  },
  {
    title: "Hickory Nut Mountain",
    text: "Add the overlook if your group wants a slower scenic stop and is comfortable with gravel-road driving near Lake Ouachita.",
    href: "/hickory-nut-mountain-mount-ida",
  },
  {
    title: "Mount Ida Restaurants",
    text: "Have a backup food plan before the lake wears everyone out. Lake food can be seasonal, and small-town hours can change.",
    href: "/restaurants",
  },
];

const faqs = [
  {
    question: "Is Brady Mountain a good Lake Ouachita stop for families?",
    answer:
      "Yes, it can be a good family lake stop because the area has camping, day-use options, a swim beach, boat ramp, playground, and practical facilities. Check current conditions and availability before planning around it.",
  },
  {
    question: "Is Brady Mountain close enough for a Mount Ida trip?",
    answer:
      "Yes, it fits the broader Mount Ida and Lake Ouachita region, especially for visitors building a lake weekend around camping, boating, fishing, marinas, cabins, and scenic drives.",
  },
  {
    question: "Can you eat around Brady Mountain?",
    answer:
      "Brady Mountain Grill on Wheels is listed onsite at Safe Harbor Brady Mountain, but current hours should be checked before you count on it. It is smart to have a backup meal plan.",
  },
  {
    question: "What should I check before going to Brady Mountain?",
    answer:
      "Check campground reservations, day-use access, swim beach conditions, marina hours, boat rental availability, fuel dock hours, restaurant hours, fishing rules, and weather before going.",
  },
];

export default function BradyMountainLakeOuachitaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Brady Mountain Lake Ouachita Guide",
              description:
                "A practical local guide to Brady Mountain, Safe Harbor Brady Mountain, camping, swim beach access, marina stops, and Lake Ouachita planning near Mount Ida, Arkansas.",
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
          src="/images/lake-ouachita-boating.jpg"
          alt="Brady Mountain and Lake Ouachita near Mount Ida Arkansas"
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
              Brady Mountain Lake Ouachita Guide
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] !text-white md:text-7xl">
              A practical Lake Ouachita stop for camping, swimming, boats, and
              marina days.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 !text-white/85 md:text-xl">
              Brady Mountain is one of those Lake Ouachita places that makes
              more sense when you think about the whole day: where you are
              getting on the water, where the kids can swim, whether you need a
              boat ramp, where food might fit, and what you should check before
              driving out.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lake-ouachita" className="btn btn-light">
                Lake Ouachita Guide
              </Link>

              <Link href="/cabins" className="btn">
                Cabins & Stays
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
                Brady Mountain is best when you need real lake-day pieces in one
                place.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg leading-8 text-[color:var(--color-text)]">
                Some Lake Ouachita days are simple scenic drives. Brady Mountain
                is more useful when you are trying to actually use the lake. It
                can fit camping, swimming, boating, fishing, marina needs, and a
                longer day outside.
              </p>

              <p className="leading-7 text-[color:var(--color-muted)]">
                That does not mean you should roll in without a plan. Campground
                availability, day-use access, food hours, rental details, fuel,
                swim beach conditions, and weather can all change how the day
                feels. A quick check before leaving Mount Ida can save a lot of
                aggravation.
              </p>

              <p className="leading-7 text-[color:var(--color-muted)]">
                For the right group, Brady Mountain can be the difference
                between “we drove around and looked at the lake” and “we
                actually had a lake day.”
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
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              How It Fits
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Three ways people usually use Brady Mountain.
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
              The best version depends on your group. A camper, a family with
              kids, and somebody hauling a boat are not planning the same kind
              of lake day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {dayStyles.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden dark-section">
        <Image
          src="/images/lake-ouachita-clear.webp"
          alt="Clear Lake Ouachita water near Brady Mountain Arkansas"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/58 to-black/25" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl rounded-2xl bg-black/58 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/75">
              Lake Day Reality
            </p>

            <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
              The lake is better when the little stuff is handled first.
            </h2>

            <p className="mt-5 text-lg leading-8 !text-white/86">
              Towels, water, food, shade, a boat plan, a swim plan, and a backup
              meal plan matter more than people think. Brady Mountain can make
              the day easier, but only if you know what is open and what your
              group actually needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Main Stops
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Brady Mountain places and details worth checking.
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
              Use these as starting points before you build your Lake Ouachita
              day around Brady Mountain. Details can change by season, so it is
              still worth checking directly before you drive out.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mainStops.map((stop) => (
              <article
                key={stop.name}
                className="flex h-full flex-col rounded-3xl border border-black/10 bg-[color:var(--bg-card)] p-6 shadow-sm"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {stop.label}
                </p>

                <h3 className="text-2xl font-semibold">{stop.name}</h3>

                <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
                  {stop.text}
                </p>

                <a
                  href={stop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex pt-5 font-bold text-[color:var(--color-accent)]"
                >
                  Check current info →
                </a>
              </article>
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
                Brady Mountain is a good fit if...
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
                Save it for another plan if...
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

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] border border-black/10 bg-[color:var(--bg-card)] p-7 shadow-sm md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  Check Before You Go
                </p>

                <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Lake days fall apart when the basics get skipped.
                </h2>

                <p className="mt-5 leading-7 text-[color:var(--color-muted)]">
                  Before you drive out, check the pieces that actually decide
                  whether the day works: access, weather, food, rentals, fuel,
                  and whether your group is prepared for sun and water.
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
              Build Around It
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Pair Brady Mountain with the rest of the Mount Ida area.
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--color-muted)]">
              Brady Mountain can be the lake anchor, but the trip usually works
              better when food, lodging, scenic stops, and backup plans are easy
              to find.
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
              Brady Mountain Lake Ouachita FAQs
            </h2>
            <p className="mt-3 leading-7 text-[color:var(--color-muted)]">
              Quick answers for visitors building a Mount Ida and Lake Ouachita
              day around Brady Mountain.
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
                Keep Planning
              </p>

              <h2 className="text-4xl font-semibold leading-tight !text-white md:text-6xl">
                Plan the lake day before everyone is tired and hungry.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 !text-white/85">
                Use this with the Mount Ida cabins, restaurants, Lake Ouachita,
                and nearby scenic guides to build a lake weekend that fits your
                group.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/cabins" className="btn btn-light">
                  Cabins & Stays
                </Link>

                <Link href="/restaurants" className="btn">
                  Restaurants
                </Link>

                <Link href="/hickory-nut-mountain-mount-ida" className="btn">
                  Hickory Nut Mountain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
