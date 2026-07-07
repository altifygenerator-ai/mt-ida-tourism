import Link from "next/link";

const updates = [
  {
    label: "Weekend planning",
    title: "Mount Ida Weekend Guide",
    text: "A new weekend guide helps visitors plan a slower Mount Ida trip around crystal digging, Lake Ouachita, cabins, local food, scenic drives, and small-town stops.",
    href: "/mount-ida-weekend-guide",
  },
  {
    label: "Crystal guide",
    title: "Best Crystal Mines Near Mount Ida",
    text: "A cleaner guide for choosing between visitor-friendly mines, more serious quartz stops, Crystal Vista, and check-ahead crystal digging options around Mount Ida.",
    href: "/best-crystal-mines-mount-ida",
  },
  {
    label: "Family guide",
    title: "Crystal Mines for Kids",
    text: "A practical family guide for parents and grandparents planning a Mount Ida crystal digging day with kids, including what to bring and how to keep the day manageable.",
    href: "/best-crystal-mines-for-kids-mount-ida",
  },
  {
    label: "Lake stays",
    title: "Lake Ouachita Cabins",
    text: "A lodging guide for visitors comparing Lake Ouachita cabins, Mount Ida stays, marina access, crystal mine trips, and quiet Ouachita Mountain weekends.",
    href: "/lake-ouachita-cabins",
  },
  {
    label: "Day trip guide",
    title: "Hot Springs to Mount Ida",
    text: "A simple day-trip guide for Hot Springs visitors who want to add quartz digging, Lake Ouachita, and a quieter mountain-town stop to their Arkansas trip.",
    href: "/hot-springs-to-mount-ida-day-trip",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="rounded-[2rem] border border-black/10 bg-white/40 p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Recent updates
              </p>

              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                New and updated Mount Ida guides.
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)]">
                New local guides are being added around crystal mines, Lake
                Ouachita, cabin stays, family trips, marinas, food, scenic drives,
                and nearby Arkansas routes into Mount Ida.
              </p>
            </div>

            <Link
              href="/things-to-do"
              className="text-sm font-bold text-[color:var(--color-accent)] underline"
            >
              Explore more guides
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update) => (
              <Link
                key={update.title}
                href={update.href}
                className="group rounded-[1.4rem] border border-black/10 bg-[color:var(--color-bg)] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {update.label}
                </p>

                <h3 className="mb-3 text-2xl font-semibold leading-tight">
                  {update.title}
                </h3>

                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {update.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[color:var(--color-accent)]">
                  View guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
