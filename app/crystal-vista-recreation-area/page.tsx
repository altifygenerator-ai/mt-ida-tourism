import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["crystal-vista-recreation-area"];

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: "/crystal-vista-recreation-area",
  },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.mountidaarkansas.org/crystal-vista-recreation-area`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
