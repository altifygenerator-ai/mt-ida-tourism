import Link from "next/link";

const updates = [
  {
    label: "New guide",
    title: "Crystal Mining in Mount Ida",
    text: "A practical guide to quartz digging, what to bring, lesser-known stops, and how to build a Mount Ida weekend around crystal hunting.",
    href: "/crystal-mining",
  },
  {
    label: "Trip planning",
    title: "Crystal Mines Directory Updated",
    text: "The crystal mines page now works as a quicker directory for visitors looking for quartz digging stops near Mount Ida.",
    href: "/crystal-mines",
  },
  {
    label: "Local guide",
    title: "Lake, cabins, food, and things to do",
    text: "Browse Mount Ida trip planning pages for Lake Ouachita, local restaurants, cabins, scenic drives, and outdoor stops.",
    href: "/things-to-do",
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
            </div>

            <Link
              href="/things-to-do"
              className="text-sm font-bold text-[color:var(--color-accent)] underline"
            >
              Explore more guides
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
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
                  View update →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}