import type { MetadataRoute } from "next";
import { seoGuideList } from "@/data/seoGuides";

const siteUrl = "https://mountidaarkansas.org";
const contentUpdated = new Date("2026-07-23T12:00:00-05:00");

const coreRoutes: MetadataRoute.Sitemap = [
  { url: siteUrl, lastModified: contentUpdated, changeFrequency: "weekly", priority: 1 },
  { url: `${siteUrl}/things-to-do`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.9 },
  { url: `${siteUrl}/things-to-do-with-kids`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.86 },
  { url: `${siteUrl}/crystal-mining`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.95 },
  { url: `${siteUrl}/crystal-mines`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.92 },
  { url: `${siteUrl}/lake-ouachita`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.92 },
  { url: `${siteUrl}/brady-mountain-lake-ouachita`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.87 },
  { url: `${siteUrl}/hickory-nut-mountain-mount-ida`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.86 },
  { url: `${siteUrl}/cabins`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.9 },
  { url: `${siteUrl}/restaurants`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.9 },
  { url: `${siteUrl}/events`, lastModified: new Date(), changeFrequency: "daily", priority: 0.95 },
  { url: `${siteUrl}/this-weekend`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  { url: `${siteUrl}/submit-event`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.6 },
  { url: `${siteUrl}/local-business`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.86 },
  { url: `${siteUrl}/shopping`, lastModified: contentUpdated, changeFrequency: "weekly", priority: 0.82 },
  { url: `${siteUrl}/services`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.78 },
  { url: `${siteUrl}/history`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/contact`, lastModified: contentUpdated, changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes: MetadataRoute.Sitemap = seoGuideList.map((guide) => ({
    url: `${siteUrl}/${guide.slug}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: guide.slug.includes("crystal") || guide.slug.includes("lake-ouachita") ? 0.89 : 0.84,
  }));

  return [...coreRoutes, ...guideRoutes];
}
