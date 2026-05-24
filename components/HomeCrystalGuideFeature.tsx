import Image from "next/image";
import Link from "next/link";

export default function HomeCrystalGuideFeature() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#2d2a26] shadow-xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/crystal-hero.jpg"
                alt="Quartz crystal mining in Mount Ida Arkansas"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] !text-white/55">
                Featured Mount Ida guide
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                A down-to-earth guide to crystal mining around Mount Ida.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/75">
                Mount Ida is known as the Quartz Capital of the World, but not
                every crystal digging stop is the same. The new guide breaks
                down where to go, what to bring, which mine fits your trip, and
                how to turn crystal digging into a full Mount Ida weekend.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/crystal-mining"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Read the Guide
                </Link>

                <Link
                  href="/crystal-mines"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Crystal Mines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}