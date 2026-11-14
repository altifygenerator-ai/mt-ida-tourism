import Link from "next/link";

const featuredGuides = [
  {
    label: "Start digging",
    title: "Choose a Crystal Mine",
    text: "Compare visitor-friendly quartz mines and decide where to spend your time.",
    href: "/best-crystal-mines-mount-ida",
  },
  {
    label: "Slow down",
    title: "Mount Ida Weekend Guide",
    text: "Build a relaxed weekend around the lake, crystal country and local food.",
    href: "/mount-ida-weekend-guide",
  },
  {
    label: "Stay a while",
    title: "Lake Ouachita Cabins",
    text: "Find cabins, resorts and easy bases for exploring the lake and mountains.",
    href: "/lake-ouachita-cabins",
  },
];

export default function RecentUpdates() {
  return (
    <section className="section py-12">
      <div className="container">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
              Plan your visit
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Start with what brought you here.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[color:var(--color-muted)]">
              Crystals, lake mornings and quiet roads through the Ouachitas.
            </p>
          </div>
          <Link href="/things-to-do"
            className="text-sm font-semibold text-[color:var(--color-accent)] underline underline-offset-4">
            All visitor guides
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link key={guide.href} href={guide.href}
              className="group flex h-full flex-col rounded-[18px] border border-black/10 bg-[color:var(--bg-card)] p-5 transition hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
                {guide.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-[color:var(--color-text)]">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--color-muted)]">
                {guide.text}
              </p>
              <span className="mt-5 text-sm font-semibold text-[color:var(--color-accent)] group-hover:underline">
                Read guide →
              </span>
            </Link>
          ))}
        </div>

        <nav aria-label="More Mount Ida guides"
          className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-5">
          <Link href="/best-crystal-mines-for-kids-mount-ida" className="text-sm font-medium underline-offset-4 hover:underline">
            Crystal mining with kids
          </Link>
          <Link href="/hot-springs-to-mount-ida-day-trip" className="text-sm font-medium underline-offset-4 hover:underline">
            From Hot Springs
          </Link>
          <Link href="/restaurants" className="text-sm font-medium underline-offset-4 hover:underline">
            Restaurants
          </Link>
          <Link href="/events" className="text-sm font-medium underline-offset-4 hover:underline">
            Events
          </Link>
        </nav>
      </div>
    </section>
  );
}
