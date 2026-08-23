import type { Metadata } from "next";
import CrystalMiningHero from "@/components/CrystalMiningHero";
import CrystalMiningGuide from "@/components/CrystalMiningGuide";
import CrystalMineStops from "@/components/CrystalMineStops";
import CrystalTripTips from "@/components/CrystalTripTips";
import CrystalWeekendSection from "@/components/CrystalWeekendSection";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { crystalMiningGuide } from "@/data/crystalMining";

export const metadata: Metadata = {
  title: "Crystal Mining in Mount Ida, Arkansas | Quartz Digging Guide",
  description:
    "A practical Mount Ida crystal mining guide with what to bring, weather and road planning, family advice, current mine links, Crystal Vista, food, lodging, and weekend ideas.",
  alternates: {
    canonical: "/crystal-mining",
  },
};

export default function CrystalMiningPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          name: "Crystal Mining in Mount Ida, Arkansas",
          description:
            "A practical guide to quartz digging, crystal mines, Crystal Vista, what to bring, and planning a Mount Ida crystal mining trip.",
          url: "https://www.mountidaarkansas.org/crystal-mining",
          mainEntity: {
            "@type": "ItemList",
            name: "Mount Ida crystal mining stops",
            itemListElement: [
              ...crystalMiningGuide.mines,
              ...crystalMiningGuide.lesserKnownStops,
            ].map((mine, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristAttraction",
                name: mine.name,
                description: mine.description,
              },
            })),
          },
        }}
      />
      <CrystalMiningHero />

      <section className="section py-12">
        <div className="container">
          <div className="seo-guide-link-strip">
            <Link href="/best-crystal-mines-mount-ida">Best crystal mines near Mount Ida</Link>
            <Link href="/best-crystal-mines-for-kids-mount-ida">Crystal mines for kids</Link>
            <Link href="/crystal-vista-recreation-area">Crystal Vista Recreation Area</Link>
            <Link href="/cabins-near-crystal-mines-mount-ida">Cabins near crystal mines</Link>
            <Link href="/wegner-quartz-crystal-mines">Wegner visitor guide</Link>
            <Link href="/avant-mining-fisher-mountain">Fisher Mountain visitor guide</Link>
            <Link href="/twin-creek-crystal-mine">Twin Creek visitor guide</Link>
            <Link href="/sweet-surrender-crystal-mine">Sweet Surrender visitor guide</Link>
          </div>
        </div>
      </section>

      <CrystalMiningGuide />
      <CrystalMineStops />
      <CrystalTripTips />
      <CrystalWeekendSection />
    </main>
  );
}
