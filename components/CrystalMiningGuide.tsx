import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export default function CrystalMiningGuide() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="max-w-3xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              A practical local-style guide
            </div>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              What to know before you go digging crystals around Mount Ida.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[color:var(--color-muted)]">
              {crystalMiningGuide.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p>
                After you pick a mine, you can build the rest of the trip around{" "}
                <Link
                  href="/cabins"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  cabins and places to stay
                </Link>
                ,{" "}
                <Link
                  href="/restaurants"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  local restaurants
                </Link>
                ,{" "}
                <Link
                  href="/lake-ouachita"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  Lake Ouachita
                </Link>
                , or other{" "}
                <Link
                  href="/things-to-do"
                  className="font-bold text-[color:var(--color-accent)] underline"
                >
                  things to do around Mount Ida
                </Link>
                .
              </p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white/60 shadow-sm">
            <img
              src="/images/quartz-closeup.jpg"
              alt="Close up of quartz crystals"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-3 text-2xl">Quick facts</h3>

              <ul className="space-y-3">
                {crystalMiningGuide.facts.map((fact) => (
                  <li
                    key={fact}
                    className="border-b border-black/10 pb-3 text-sm leading-6 text-[color:var(--color-muted)] last:border-0 last:pb-0"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[color:var(--color-accent)] p-7 shadow-sm md:p-10">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] !text-white/65">
            {crystalMiningGuide.notice.title}
          </div>

          <div className="max-w-4xl text-xl leading-9 !text-white/90">
            {crystalMiningGuide.notice.text}
          </div>
        </div>
      </div>
    </section>
  );
}
