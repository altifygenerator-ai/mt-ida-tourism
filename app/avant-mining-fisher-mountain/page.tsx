import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["avant-mining-fisher-mountain"];
const pageUrl = `https://www.mountidaarkansas.org/${guide.slug}`;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: `/${guide.slug}` },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: pageUrl,
    type: "article",
    images: [{ url: guide.heroImage, alt: guide.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.metaTitle,
    description: guide.metaDescription,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
