import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["cabins-near-crystal-mines-mount-ida"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: "/cabins-near-crystal-mines-mount-ida",
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.mountidaarkansas.org/cabins-near-crystal-mines-mount-ida`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
