import type { Metadata } from "next";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import { businessesByCategory } from "@/data/businesses";

const siteUrl = "https://www.mountidaarkansas.org";
const serviceBusinesses = businessesByCategory.services;

export const metadata: Metadata = {
  title: "Mount Ida Services | Local Services for Visitors & Property Owners",
  description:
    "Find Mount Ida local services for visitors, cabin guests, property owners, lake travelers, and people spending time near Lake Ouachita.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Mount Ida Services | Local Services for Visitors & Property Owners",
    description:
      "Browse Mount Ida local services for visitors, cabin owners, lake travelers, and people around Lake Ouachita.",
    url: `${siteUrl}/services`,
    images: ["/images/mt-ida-downtown.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Mount Ida Services",
          description:
            "Local services around Mount Ida, Lake Ouachita, cabins, property owners, and visitor needs.",
          url: `${siteUrl}/services`,
        }}
      />

      <section className="directory-hero-section">
        <div className="container directory-hero-grid">
          <div>
            <p className="eyebrow">Local services</p>
            <h1>Mount Ida services for visitors, cabins, and local needs.</h1>
            <p>
              Find local and regional services for property owners, cabin hosts,
              lake travelers, and residents around Mount Ida and Lake Ouachita.
              Check with each provider for current scheduling and coverage.
            </p>
          </div>
          <div className="directory-hero-card">
            <span>Service business?</span>
            <h2>Be found by people in the area.</h2>
            <p>
              Useful local service businesses can request a basic listing, and
              local partners can ask about higher visibility as the guide grows.
            </p>
            <Link href="/contact" className="btn">Request a Listing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Services Around Mount Ida</h2>
            <p>
              Property cleanup, brush hogging, dirt work, hauling, and
              cleaning or rental turnover help. Contact providers for a quote
              and to confirm service-area availability.
            </p>
          </div>

          <div className="grid grid-3">
            {serviceBusinesses.map((business) => (
              <BusinessCard key={business.name} business={business} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
