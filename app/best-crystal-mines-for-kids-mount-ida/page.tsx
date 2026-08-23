import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["best-crystal-mines-for-kids-mount-ida"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: "/best-crystal-mines-for-kids-mount-ida",
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.mountidaarkansas.org/best-crystal-mines-for-kids-mount-ida`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
