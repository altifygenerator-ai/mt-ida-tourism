import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export default function CrystalWeekendSection() {
  const { weekend, links } = crystalMiningGuide;

  return (
    <section className="section bg-white/35">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Make a trip out of it
            </div>

            <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
              {weekend.title}
            </h2>

            <p className="mb-8 text-lg leading-8">{weekend.text}</p>

            <div className="space-y-4">
              {weekend.days.map((item) => (
                <div
                  key={item.day}
                  className="rounded-2xl border border-black/10 bg-[color:var(--color-bg)] p-5"
                >
                  <h3 className="mb-2 text-2xl">{item.day}</h3>
                  <p className="leading-7">{item.plan}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={weekend.image}
              alt="Lake Ouachita near Mount Ida Arkansas"
              className="h-[520px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>

        <div className="mt-14 rounded-[28px] bg-[#2d2a26] p-7 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-4xl leading-tight text-white">
                Planning a crystal digging trip to Mount Ida?
              </h2>

              <div className="text-base leading-8 !text-white/75">
                Check mine hours before you go, pack for dirt and weather, and
                leave yourself time to enjoy more than just the dig. Mount Ida
                is at its best when you slow down a little.
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2d2a26]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}