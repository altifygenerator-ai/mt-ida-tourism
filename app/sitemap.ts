import type { MetadataRoute } from "next";

const siteUrl = "https://mountidaarkansas.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}`,
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
      url: `${siteUrl}/mount-ida-fourth-of-july`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.86,
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
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/history`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
