import Link from "next/link";

export default function MountIdaFourthOfJulyFeature() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#2d2a26] shadow-xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/holiday/mount-ida-fourth-of-july-hero.jpg"
                alt="Fourth of July around Mount Ida Arkansas and Lake Ouachita"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                Seasonal Guide
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] !text-white/55">
                Fourth of July around Mount Ida
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Fireworks over Lake Ouachita, lake days, and quiet mountain
                weekend plans.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/75">
                Planning July 4 around Mount Ida? Start with the verified
                Mountain Harbor holiday celebration, then build the rest of the
                weekend around Lake Ouachita, crystal mines, cabins, local food,
                and simple Ouachita Mountain stops.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <strong className="block text-2xl leading-none text-white">
                    July 4
                  </strong>
                  <span className="mt-2 block text-sm font-bold !text-white/65">
                    Holiday guide
                  </span>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <strong className="block text-2xl leading-none text-white">
                    Lake
                  </strong>
                  <span className="mt-2 block text-sm font-bold !text-white/65">
                    Ouachita fireworks
                  </span>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                  <strong className="block text-2xl leading-none text-white">
                    Local
                  </strong>
                  <span className="mt-2 block text-sm font-bold !text-white/65">
                    Event updates
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mount-ida-fourth-of-july"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  View July 4 Guide
                </Link>

                <Link
                  href="/events"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Events
                </Link>

                <Link
                  href="/lake-ouachita"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Lake Ouachita Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
