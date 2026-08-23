import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["lake-ouachita-marinas-boat-rentals"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: "/lake-ouachita-marinas-boat-rentals",
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.mountidaarkansas.org/lake-ouachita-marinas-boat-rentals`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
