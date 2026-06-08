import type { Metadata } from "next";
import CrystalMiningHero from "@/components/CrystalMiningHero";
import CrystalMiningGuide from "@/components/CrystalMiningGuide";
import CrystalMineStops from "@/components/CrystalMineStops";
import CrystalTripTips from "@/components/CrystalTripTips";
import CrystalWeekendSection from "@/components/CrystalWeekendSection";

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
      <CrystalMiningHero />
      <CrystalMiningGuide />
      <CrystalMineStops />
      <CrystalTripTips />
      <CrystalWeekendSection />
    </main>
  );
}
