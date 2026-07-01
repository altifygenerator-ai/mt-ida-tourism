import type { Metadata } from "next";
import CrystalMiningHero from "@/components/CrystalMiningHero";
import CrystalMiningGuide from "@/components/CrystalMiningGuide";
import CrystalMineStops from "@/components/CrystalMineStops";
import CrystalTripTips from "@/components/CrystalTripTips";
import CrystalWeekendSection from "@/components/CrystalWeekendSection";
import JsonLd from "@/components/JsonLd";
import { crystalMiningGuide } from "@/data/crystalMining";

export const metadata: Metadata = {
  title: "Crystal Mining in Mount Ida, Arkansas | Quartz Digging Guide",
  description:
    "A practical Mount Ida crystal mining guide with quartz mine details, hours, costs, phone numbers, what to bring, family advice, Crystal Vista, and weekend trip ideas.",
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
          "@type": "TravelGuide",
          name: "Crystal Mining in Mount Ida, Arkansas",
          description:
            "A practical guide to quartz digging, crystal mines, Crystal Vista, what to bring, and planning a Mount Ida crystal mining trip.",
          url: "https://mountidaarkansas.org/crystal-mining",
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
      <CrystalMiningGuide />
      <CrystalMineStops />
      <CrystalTripTips />
      <CrystalWeekendSection />
    </main>
  );
}
