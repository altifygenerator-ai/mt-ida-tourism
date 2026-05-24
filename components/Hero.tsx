import Image from "next/image";
import Link from "next/link";

const heroData = {
  eyebrow: "Ouachita Mountains",
  title: "Visit Mount Ida, Arkansas",
  description:
    "Plan a quiet Arkansas mountain trip around quartz crystal digging, Lake Ouachita, cabins, local food, scenic drives, and the natural beauty of the Ouachita Mountains.",
  image: "/images/mt-ida-hero.webp",
};

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[600px] overflow-hidden">
      <Image
        src={heroData.image}
        alt={heroData.title}
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(63,92,74,0.5),transparent_35%)]" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-12 md:px-10 md:pb-16">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/62 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              {heroData.eyebrow}
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] drop-shadow-xl md:text-7xl">
              {heroData.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 !text-white/86 drop-shadow-md md:text-xl">
              {heroData.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/crystal-mining"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Crystal Mining Guide
              </Link>

              <Link
                href="/lake-ouachita"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Lake Ouachita
              </Link>

              <Link
                href="/cabins"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Find Cabins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}