import type { MetadataRoute } from "next";
import { seoGuideList } from "@/data/seoGuides";

const siteUrl = "https://mountidaarkansas.org";

const coreRoutes: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${siteUrl}/things-to-do`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/things-to-do-with-kids`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/crystal-mining`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${siteUrl}/crystal-mines`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/lake-ouachita`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/brady-mountain-lake-ouachita`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.87,
  },
  {
    url: `${siteUrl}/hickory-nut-mountain-mount-ida`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    url: `${siteUrl}/cabins`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/restaurants`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/events`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.95,
  },
  {
    url: `${siteUrl}/this-weekend`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${siteUrl}/submit-event`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${siteUrl}/local-business`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.86,
  },
  {
    url: `${siteUrl}/shopping`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.82,
  },
  {
    url: `${siteUrl}/services`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.78,
  },
  {
    url: `${siteUrl}/history`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/search`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${siteUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

const additionalRoutes: MetadataRoute.Sitemap = [
  {
    url: `${siteUrl}/wegner-quartz-crystal-mines`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/twin-creek-crystal-mine`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/avant-mining-fisher-mountain`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/sweet-surrender-crystal-mine`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/lake-ouachita-fishing-near-mount-ida`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/lake-ouachita-swimming-beaches`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/mountain-harbor-resort-lake-ouachita`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${siteUrl}/shangri-la-resort-lake-ouachita`,
    lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.88,
    }))
    .filter((route) => !additionalUrls.has(route.url));

  return [...coreRoutes, ...additionalRoutes, ...guideRoutes];
}