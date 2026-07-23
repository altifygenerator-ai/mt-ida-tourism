import type { MetadataRoute } from "next";

const siteUrl = "https://mountidaarkansas.org";
const contentUpdated = "2026-07-23";

const guideSlugs = [
  "mount-ida-weekend-guide",
  "best-crystal-mines-mount-ida",
  "best-crystal-mines-for-kids-mount-ida",
  "crystal-vista-recreation-area",
  "lake-ouachita-cabins",
  "lake-ouachita-marinas-boat-rentals",
  "cabins-near-crystal-mines-mount-ida",
  "hot-springs-to-mount-ida-day-trip",
  "glenwood-to-mount-ida-day-trip",
  "wegner-quartz-crystal-mines",
  "twin-creek-crystal-mine",
  "avant-mining-fisher-mountain",
  "sweet-surrender-crystal-mine",
  "lake-ouachita-fishing-near-mount-ida",
  "lake-ouachita-swimming-beaches",
  "mountain-harbor-resort-lake-ouachita",
  "shangri-la-resort-lake-ouachita",
] as const;

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry["changeFrequency"]>;

function route(
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified: SitemapEntry["lastModified"] = contentUpdated,
): SitemapEntry {
  return {
    url: path ? `${siteUrl}/${path}` : siteUrl,
    lastModified,
    changeFrequency,
    priority,
  };
}

const coreRoutes: MetadataRoute.Sitemap = [
  route("", "weekly", 1),
  route("things-to-do", "weekly", 0.9),
  route("things-to-do-with-kids", "monthly", 0.86),
  route("crystal-mining", "weekly", 0.95),
  route("crystal-mines", "weekly", 0.92),
  route("lake-ouachita", "weekly", 0.92),
  route("brady-mountain-lake-ouachita", "monthly", 0.87),
  route("hickory-nut-mountain-mount-ida", "monthly", 0.86),
  route("cabins", "weekly", 0.9),
  route("restaurants", "weekly", 0.9),
  route("events", "daily", 0.95),
  route("this-weekend", "daily", 0.9),
  route("submit-event", "monthly", 0.6),
  route("local-business", "weekly", 0.86),
  route("shopping", "weekly", 0.82),
  route("services", "monthly", 0.78),
  route("history", "monthly", 0.8),
  route("contact", "monthly", 0.6),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes: MetadataRoute.Sitemap = guideSlugs.map((slug) =>
    route(
      slug,
      "monthly",
      slug.includes("crystal") || slug.includes("lake-ouachita")
        ? 0.89
        : 0.84,
    ),
  );

  return Array.from(
    new Map(
      [...coreRoutes, ...guideRoutes].map((entry) => [entry.url, entry]),
    ).values(),
  );
}