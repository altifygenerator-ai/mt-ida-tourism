import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["lake-ouachita-cabins"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: "/lake-ouachita-cabins",
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.mountidaarkansas.org/lake-ouachita-cabins`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
