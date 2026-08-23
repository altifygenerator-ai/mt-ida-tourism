import type { Metadata } from "next";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { businesses, businessesByCategory, featuredBusinesses } from "@/data/businesses";

const siteUrl = "https://www.mountidaarkansas.org";

export const metadata: Metadata = {
  title: "Mount Ida Local Businesses | Shops, Services, Attractions & Visitor Stops",
  description:
    "Find Mount Ida local businesses, shops, services, restaurants, resorts, crystal mines, marinas, galleries, museums, and visitor-friendly stops near Lake Ouachita.",
  keywords: [
    "Mount Ida local businesses",
    "Mount Ida shops",
    "Mount Ida services",
    "Mount Ida business directory",
    "Lake Ouachita local businesses",
    "Mount Ida Arkansas guide",
  ],
  alternates: {
    canonical: "/local-business",
  },
  openGraph: {
    title: "Mount Ida Local Businesses | Shops, Services, Attractions & Visitor Stops",
    description:
      "Browse Mount Ida local businesses, shops, restaurants, services, galleries, resorts, marinas, and visitor-friendly stops near Lake Ouachita.",
    url: `${siteUrl}/local-business`,
    images: ["/images/mt-ida-downtown.jpg"],
  },
};

const categorySections = [
  {
    key: "stays" as const,
    title: "Cabins, Resorts, and Places to Stay",
    text: "Lake resorts, cabins, inns, and lodging options that help visitors plan a Mount Ida or Lake Ouachita trip.",
  },
  {
    key: "restaurants" as const,
    title: "Restaurants, Coffee, and Local Food",
    text: "Cafes, lake dining, quick stops, coffee, food trucks, and local places to eat while visiting the area.",
  },
  {
    key: "attractions" as const,
    title: "Attractions, Museums, and Crystal Stops",
    text: "Crystal mines, museums, galleries, and visitor stops that help people experience the Mount Ida area.",
  },
  {
    key: "shopping" as const,
    title: "Shopping, Art, Gifts, and Local Finds",
    text: "Galleries, shops, gifts, supplies, and local places to browse during a Mount Ida or Lake Ouachita trip.",
  },
  {
    key: "outdoor" as const,
    title: "Lake, Outdoor, and Recreation Businesses",
    text: "Marinas, overlooks, outdoor recreation, lake-day stops, and businesses tied to the Ouachita Mountains.",
  },
  {
    key: "services" as const,
    title: "Local Services",
    text: "Useful local services for visitors, cabin owners, property owners, lake travelers, and people spending time around Mount Ida.",
  },
];

export default function LocalBusinessPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Mount Ida Local Businesses",
          description:
            "Local businesses, shops, services, restaurants, resorts, museums, marinas, galleries, crystal stops, and visitor-friendly places around Mount Ida and Lake Ouachita.",
          url: `${siteUrl}/local-business`,
          mainEntity: {
            "@type": "ItemList",
            name: "Mount Ida local business listings",
            itemListElement: businesses.map((business, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "LocalBusiness",
                name: business.name,
                description: business.description,
                telephone: business.phone,
                address: business.address,
                url: business.website ?? (business.href ? `${siteUrl}${business.href}` : `${siteUrl}/local-business`),
              },
            })),
          },
        }}
      />

      <section className="directory-hero-section">
        <div className="container directory-hero-grid">
          <div>
            <p className="eyebrow">Local Business Guide</p>
            <h1>Mount Ida local businesses, shops, services, and visitor stops.</h1>
            <p>
              Browse places to stay, eat, shop, explore, and get help around
              Mount Ida, Lake Ouachita, crystal mines, and the Ouachita
              Mountains. This guide is built to make local businesses easier for
              visitors and locals to find.
            </p>
          </div>

          <div className="directory-hero-card">
            <span>Get listed</span>
            <h2>Own a local business?</h2>
            <p>
              Basic listings are available for local businesses that fit the
              guide. Featured spots are tracked so partners can see activity
              from calls, websites, directions, and listing clicks.
            </p>
            <Link href="/contact" className="btn">
              Request a Listing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Top Guide Placements</p>
            <h2>Featured local picks</h2>
            <p>
              Start with these useful local stops for lake days, crystal digging,
              food, cabins, visitor supplies, and small-town exploring around
              Mount Ida.
            </p>
          </div>

          <div className="grid grid-3">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.name} business={business} />
            ))}
          </div>
        </div>
      </section>

      {categorySections.map((section) => {
        const items = businessesByCategory[section.key];
        if (!items.length) return null;

        return (
          <section key={section.key} className="section directory-category-section">
            <div className="container">
              <div className="section-heading compact-heading">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>

              <div className="grid grid-3">
                {items.map((business) => (
                  <BusinessCard key={business.name} business={business} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container intro">
          <h2>Why Promote Your Business Here</h2>
          <p>
            People searching for Mount Ida cabins, restaurants, crystal mines,
            Lake Ouachita, local shops, services, and things to do are already
            planning around the area. This guide gives businesses another clean
            place to be found outside of only Facebook or word of mouth.
          </p>
          <p>
            Featured placements can be tracked for calls, website visits,
            directions, and listing clicks, which makes it easier to understand
            what the spot is actually doing.
          </p>
        </div>
      </section>

      <CTASection
        title="Get Your Mount Ida Business Listed"
        text="Have a cabin, restaurant, shop, service, attraction, guide business, or local stop near Mount Ida? Request a listing or ask about featured placement."
        buttonText="Contact Natural State Tourism Project"
        buttonHref="/contact"
      />
    </main>
  );
}
