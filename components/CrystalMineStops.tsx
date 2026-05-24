import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export default function CrystalMineStops() {
  return (
    <section id="where-to-dig" className="section bg-white/35">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Where to dig
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            Three main crystal mining stops to know around Mount Ida.
          </h2>

          <p className="text-lg leading-8">
            These are not all the same kind of stop. One may be better for
            families, another for collectors, and another for folks who want a
            more rugged dig. That is why it helps to know what you are getting
            into before you go.
          </p>
        </div>

        <div className="space-y-10">
          {crystalMiningGuide.mines.map((mine, index) => (
            <article
              key={mine.name}
              className="grid overflow-hidden rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={mine.image}
                  alt={mine.name}
                  className="h-80 w-full object-cover lg:h-full"
                />
              </div>

              <div className="p-7 md:p-10">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  {mine.label}
                </div>

                <h3 className="mb-2 text-3xl md:text-4xl">{mine.name}</h3>

                <div className="mb-5 text-sm font-bold text-[color:var(--color-text)]">
                  {mine.location}
                </div>

                <p className="mb-6 text-base leading-8">
                  {mine.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 text-xl">Good for</h4>

                  <div className="flex flex-wrap gap-2">
                    {mine.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 p-5">
                  <h4 className="mb-2 text-xl">Local tip</h4>
                  <p className="text-sm leading-7">{mine.tip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Lesser-known stops
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            More rugged crystal hunting options.
          </h2>

          <p className="text-lg leading-8">
            These stops are worth knowing about, but they are not all polished
            tourist attractions. Some are better for outdoorsy visitors,
            rockhounds, or people who do not mind checking current access and
            showing up prepared.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {crystalMiningGuide.lesserKnownStops.map((stop) => (
            <article
              key={stop.name}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] shadow-sm"
            >
              <img
                src={stop.image}
                alt={stop.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  {stop.label}
                </div>

                <h3 className="mb-2 text-2xl">{stop.name}</h3>

                <div className="mb-4 text-sm font-bold text-[color:var(--color-text)]">
                  {stop.location}
                </div>

                <p className="mb-5 text-sm leading-7">{stop.description}</p>

                <div className="mb-5">
                  <h4 className="mb-3 text-lg">Good for</h4>

                  <div className="flex flex-wrap gap-2">
                    {stop.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold text-[color:var(--color-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <h4 className="mb-2 text-lg">Heads up</h4>
                  <p className="text-sm leading-7">{stop.tip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {crystalMiningGuide.choose.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-black/10 bg-white/65 p-6"
            >
              <h3 className="mb-2 text-2xl">{item.question}</h3>
              <p className="leading-7">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-7 md:p-10">
          <h2 className="mb-4 text-3xl md:text-4xl">
            Want the shorter directory version?
          </h2>

          <p className="mb-6 max-w-3xl text-lg leading-8">
            This page is the longer planning guide. You can also use the regular{" "}
            <Link
              href="/crystal-mines"
              className="font-bold text-[color:var(--color-accent)] underline"
            >
              Crystal Mines page
            </Link>{" "}
            for the simpler directory-style list of quartz digging stops around
            Mount Ida.
          </p>

          <Link href="/crystal-mines" className="btn">
            View Crystal Mines
          </Link>
        </div>
      </div>
    </section>
  );
}