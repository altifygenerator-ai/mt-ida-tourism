import type { MetadataRoute } from "next";
import { seoGuideList } from "@/data/seoGuides";

const siteUrl = "https://www.mountidaarkansas.org";
const contentUpdated = new Date("2026-08-21");

const coreRoutes: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${siteUrl}/things-to-do`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/things-to-do-with-kids`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/crystal-mining`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${siteUrl}/crystal-mines`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/lake-ouachita`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/brady-mountain-lake-ouachita`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.87,
  },
  {
    url: `${siteUrl}/hickory-nut-mountain-mount-ida`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    url: `${siteUrl}/cabins`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/restaurants`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/events`,
    lastModified: contentUpdated,
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${siteUrl}/this-weekend`,
    lastModified: contentUpdated,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/submit-event`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${siteUrl}/local-business`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    url: `${siteUrl}/shopping`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.82,
  },
  {
    url: `${siteUrl}/services`,
    lastModified: contentUpdated,
    changeFrequency: "weekly",
    priority: 0.78,
  },
  {
    url: `${siteUrl}/history`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/contact`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

const additionalRoutes: MetadataRoute.Sitemap = [
  {
    url: `${siteUrl}/wegner-quartz-crystal-mines`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/twin-creek-crystal-mine`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/avant-mining-fisher-mountain`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/sweet-surrender-crystal-mine`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/lake-ouachita-fishing-near-mount-ida`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/lake-ouachita-swimming-beaches`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/mountain-harbor-resort-lake-ouachita`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/shangri-la-resort-lake-ouachita`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: 0.88,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const additionalUrls = new Set(
    additionalRoutes.map((route) => route.url),
  );

  const guideRoutes: MetadataRoute.Sitemap = seoGuideList
    .map((guide) => ({
      url: `${siteUrl}/${guide.slug}`,
      lastModified: contentUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    }))
    .filter((route) => !additionalUrls.has(route.url));

  return [...coreRoutes, ...additionalRoutes, ...guideRoutes];
}