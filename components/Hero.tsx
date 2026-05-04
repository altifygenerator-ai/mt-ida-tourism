import Image from "next/image"
import Link from "next/link"

const heroData = {
  eyebrow: "Ouachita Mountains",
  title: "Visit Mount Ida, Arkansas",
  description:
    "Explore the Quartz Capital of the World, Lake Ouachita, crystal mines, quiet cabins, local restaurants, and the natural beauty of the Ouachita Mountains.",
  image: "/images/mt-ida-hero.webp",
}

export default function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[560px] overflow-hidden">
      <Image
        src={heroData.image}
        alt={heroData.title}
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/15" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-12 md:px-10">
          <div className="max-w-3xl rounded-2xl bg-black/60 p-8 text-white shadow-2xl backdrop-blur-md md:p-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/75">
              {heroData.eyebrow}
            </p>

            <h1 className="text-4xl font-semibold leading-tight drop-shadow-xl md:text-6xl">
              {heroData.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/95 drop-shadow-md md:text-xl">
              {heroData.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/restaurants"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                View Restaurants
              </Link>

              <Link
                href="/cabins"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Find Cabins
              </Link>

              <Link
                href="/things-to-do"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Things To Do
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}