import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export default function CrystalTripTips() {
  return (
    <section id="what-to-bring" className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Pack for dirt and weather
            </div>

            <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
              What to bring crystal mining.
            </h2>

            <p className="mb-5 text-lg leading-8 text-[color:var(--color-muted)]">
              Do not show up like you are walking through a gift shop. Even a
              beginner-friendly mine can be hot, dusty, muddy, or rough under
              your feet. Bring the basics and check with the mine before you go.
            </p>

            <p className="text-base leading-8 text-[color:var(--color-muted)]">
              The two things visitors forget most are water and something to
              carry crystals home in. Rural cell service can also be spotty, so
              bring cash and save directions before you leave town.
            </p>

            <img
              src="/images/crystal-digging.jpg"
              alt="Crystal digging near Mount Ida Arkansas"
              className="mt-8 h-80 w-full rounded-[22px] object-cover"
            />
          </div>

          <div className="rounded-[24px] border border-black/10 bg-white/60 p-7 shadow-sm md:p-9">
            <h3 className="mb-5 text-3xl">Simple packing list</h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {crystalMiningGuide.packingList.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-[color:var(--color-bg)] px-4 py-3 text-sm font-semibold text-[color:var(--color-text)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-[color:var(--color-muted)]">
              The big thing is to check with the mine before you go. Some places
              provide more than others, some allow or sell tools onsite, and
              primitive stops may expect you to bring nearly everything.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[24px] bg-[color:var(--color-accent)] p-7 md:p-10">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] !text-white/65">
              Bringing kids?
            </div>

            <h2 className="mb-5 text-4xl leading-tight text-white md:text-5xl">
              Crystal digging can feel like treasure hunting.
            </h2>

            <div className="mb-6 text-lg leading-8 !text-white/85">
              Kids can have a great time crystal digging, but it is still an
              outdoor activity. They can get tired, hot, muddy, or frustrated if
              the day is too packed. Keep it simple and let the small finds
              count.
            </div>

            <ul className="space-y-3">
              {crystalMiningGuide.kidTips.map((tip) => (
                <li
                  key={tip}
                  className="border-b border-white/15 pb-3 text-sm leading-6 !text-white/90 last:border-0 last:pb-0"
                >
                  {tip}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/things-to-do"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[color:var(--color-text)]"
              >
                See More Things To Do
              </Link>
            </div>
          </div>

          <img
            src="/images/crystal-family.webp"
            alt="Family friendly crystal digging trip"
            className="h-96 w-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
