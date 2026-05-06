import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mt-ida-tourism.vercel.app";

  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/things-to-do`, priority: 0.9 },
    { url: `${baseUrl}/crystal-mines`, priority: 0.95 },
    { url: `${baseUrl}/lake-ouachita`, priority: 0.95 },
    { url: `${baseUrl}/cabins`, priority: 0.9 },
    { url: `${baseUrl}/restaurants`, priority: 0.85 },
    { url: `${baseUrl}/local-business`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.75 },
    { url: `${baseUrl}/history`, priority: 0.7 },
  ];
}