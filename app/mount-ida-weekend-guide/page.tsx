import type { Metadata } from "next";
import SeoGuidePage from "@/components/SeoGuidePage";
import { seoGuides } from "@/data/seoGuides";

const guide = seoGuides["mount-ida-weekend-guide"];

export const metadata: Metadata = {
  title: { absolute: "Mount Ida Weekend Guide | Crystals, Lake Ouachita & Food" },
  description: "Build a relaxed Mount Ida weekend around quartz digging, Lake Ouachita, cabins and local meals. Use practical guides and check details before your trip.",
  alternates: {
    canonical: "/mount-ida-weekend-guide",
  },
  openGraph: {
    title: "Mount Ida Weekend Guide | Crystals, Lake Ouachita & Food",
    description: "Build a relaxed Mount Ida weekend around quartz digging, Lake Ouachita, cabins and local meals. Use practical guides and check details before your trip.",
    url: `https://www.mountidaarkansas.org/mount-ida-weekend-guide`,
    images: [guide.heroImage],
  },
};

export default function Page() {
  return <SeoGuidePage guide={guide} />;
}
