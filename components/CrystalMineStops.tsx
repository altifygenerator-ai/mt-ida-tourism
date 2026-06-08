import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
      <h4 className="mb-3 text-xl text-[color:var(--color-text)]">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm leading-6 text-[color:var(--color-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MineLinks({ mine }: { mine: { phone?: string; website?: string } }) {
  return (
    <div className="flex flex-wrap gap-3">
      {mine.phone && (
        <a href={`tel:${mine.phone.split("/")[0].replace(/[^0-9]/g, "")}`} className="btn">
          Call {mine.phone.split("/")[0].trim()}
        </a>
      )}

      {mine.website && (
        <a
          href={mine.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[color:var(--color-text)] transition hover:bg-white/80"
        >
          Website / updates
        </a>
      )}
    </div>
  );
}

export default function CrystalMineStops() {
  const mainMines = crystalMiningGuide.mines;
  const otherStops = crystalMiningGuide.lesserKnownStops;

  return (
    <section id="where-to-dig" className="section bg-white/35">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Where to dig
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            The main crystal mining stops to know around Mount Ida.
          </h2>

          <p className="text-lg leading-8 text-[color:var(--color-muted)]">
            These are not all the same kind of stop. Some are set up for
            families and first-timers, some are better for collectors, and some
            are rugged outdoor digs where you need to call ahead and come
            prepared.
          </p>
        </div>

        <div className="space-y-10">
          {mainMines.map((mine, index) => (
            <article
              key={mine.name}
              className="grid overflow-hidden rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] shadow-sm lg:grid-cols-[0.85fr_1.15fr]"
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

                <div className="mb-5 space-y-1 text-sm font-bold text-[color:var(--color-text)]">
                  <div>{mine.location}</div>
                  {mine.address && <div>{mine.address}</div>}
                  {mine.phone && <div>Phone: {mine.phone}</div>}
                  {mine.email && <div>Email: {mine.email}</div>}
                </div>

                <p className="mb-4 text-base leading-8 text-[color:var(--color-muted)]">
                  {mine.summary}
                </p>

                <p className="mb-6 text-base leading-8 text-[color:var(--color-muted)]">
                  {mine.description}
                </p>

                <MineLinks mine={mine} />

                <div className="mt-7 mb-7">
                  <h4 className="mb-3 text-xl">Good for</h4>

                  <div className="flex flex-wrap gap-2">
                    {mine.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-semibold text-[color:var(--color-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <DetailList title="Hours" items={mine.hours} />
                  <DetailList title="Cost" items={mine.costs} />
                  <DetailList title="How digging works" items={mine.howToDig} />
                  <DetailList title="What to bring" items={mine.bring} />
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
                  <DetailList title="Notes" items={mine.notes} />

                  <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
                    <h4 className="mb-2 text-xl text-[color:var(--color-text)]">
                      Local tip
                    </h4>
                    <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                      {mine.tip}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 mb-10 max-w-3xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Other crystal stops
          </div>

          <h2 className="mb-5 text-4xl leading-tight md:text-5xl">
            Public forest rockhounding and more primitive mine options.
          </h2>

          <p className="text-lg leading-8 text-[color:var(--color-muted)]">
            These stops are worth knowing about, but they need clearer visitor
            expectations. Crystal Vista is a Forest Service recreation area,
            while Avatar and Twin Creek are more call-ahead style mine stops.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {otherStops.map((stop) => (
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

                <div className="mb-4 space-y-1 text-sm font-bold text-[color:var(--color-text)]">
                  <div>{stop.location}</div>
                  {stop.phone && <div>Phone: {stop.phone}</div>}
                  {stop.email && <div>Email: {stop.email}</div>}
                </div>

                <p className="mb-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {stop.summary}
                </p>

                <p className="mb-5 text-sm leading-7 text-[color:var(--color-muted)]">
                  {stop.description}
                </p>

                <MineLinks mine={stop} />

                <div className="mt-6 mb-5">
                  <h4 className="mb-3 text-lg">Good for</h4>

                  <div className="flex flex-wrap gap-2">
                    {stop.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/75 px-3 py-2 text-xs font-semibold text-[color:var(--color-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <DetailList title="Hours" items={stop.hours} />
                  <DetailList title="Cost" items={stop.costs} />
                  <DetailList title="Bring" items={stop.bring} />
                </div>

                <div className="mt-4 rounded-2xl border border-black/10 bg-white/80 p-4">
                  <h4 className="mb-2 text-lg text-[color:var(--color-text)]">
                    Heads up
                  </h4>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                    {stop.tip}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {crystalMiningGuide.choose.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-black/10 bg-white/70 p-6"
            >
              <h3 className="mb-2 text-2xl">{item.question}</h3>
              <p className="leading-7 text-[color:var(--color-muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[color:var(--color-bg)] p-7 md:p-10">
          <h2 className="mb-4 text-3xl md:text-4xl">
            Want the shorter directory version?
          </h2>

          <p className="mb-6 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
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
