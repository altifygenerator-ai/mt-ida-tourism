import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export default function CrystalMiningHero() {
  const { hero } = crystalMiningGuide;

  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--color-accent)]">
        <img
          src={hero.image}
          alt="Quartz crystals and the Mount Ida Arkansas crystal mining area"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/55" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl rounded-[22px] bg-black/75 p-8 md:p-12">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/65">
            {hero.eyebrow}
          </div>

          <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
            {hero.title}
          </h1>

          <div className="max-w-2xl text-lg leading-8 !text-white/75">
            {hero.subtitle}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primaryCta.href} className="btn">
              {hero.primaryCta.label}
            </Link>

            <Link href={hero.secondaryCta.href} className="btn btn-light">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}