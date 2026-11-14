import type { Metadata } from "next";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import JsonLd from "@/components/JsonLd";
import { businessesByCategory } from "@/data/businesses";

const siteUrl = "https://www.mountidaarkansas.org";
const shoppingBusinesses = businessesByCategory.shopping;

export const metadata: Metadata = {
  title: "Mount Ida Shopping | Art, Gifts, Galleries & Local Finds",
  description:
    "Find Mount Ida shopping, art galleries, gifts, local finds, supplies, and visitor-friendly shops near Lake Ouachita and the Ouachita Mountains.",
  alternates: { canonical: "/shopping" },
  openGraph: {
    title: "Mount Ida Shopping | Art, Gifts, Galleries & Local Finds",
    description:
      "Browse shopping, art, gifts, galleries, local finds, and visitor-friendly stops around Mount Ida and Lake Ouachita.",
    url: `${siteUrl}/shopping`,
    images: ["/images/ouachita-artists-gallery.jpg"],
  },
};

export default function ShoppingPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Mount Ida Shopping",
          description:
            "Shopping, art galleries, gifts, supplies, and local finds around Mount Ida and Lake Ouachita.",
          url: `${siteUrl}/shopping`,
        }}
      />

      <section className="directory-hero-section">
        <div className="container directory-hero-grid">
          <div>
            <p className="eyebrow">Shopping and local finds</p>
            <h1>Mount Ida shopping, art, gifts, and local stops.</h1>
            <p>
              Find places to browse around Mount Ida, including galleries,
              gifts, local finds, visitor supplies, and small-town stops that
              fit a Lake Ouachita or crystal mining trip.
            </p>
          </div>
          <div className="directory-hero-card">
            <span>Own a shop?</span>
            <h2>Get included in the guide.</h2>
            <p>
              We are building this section around shops visitors can actually use.
              Local shops can request a basic listing or ask about higher
              visibility on the guide.
            </p>
            <Link href="/contact" className="btn">Request a Listing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>More stops from the local chamber</h2>
            <p>For crystal shoppers and local gifts, the Mount Ida Area Chamber lists these businesses. Confirm current hours and availability directly before visiting.</p>
          </div>
          <div className="grid grid-3">
            <article className="rounded-2xl border p-5">
              <h3>Blue Moon Crystals & Jewelry</h3>
              <p>Crystal and jewelry shop · 6328 Hwy 270 E, Mount Ida</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Blue+Moon+Crystals+Jewelry+Mount+Ida+AR" target="_blank" rel="noopener noreferrer">Directions</a>
            </article>
            <article className="rounded-2xl border p-5">
              <h3>Rose Petals and More</h3>
              <p>Flowers and locally made gift options · 138 S East St, Mount Ida</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Rose+Petals+and+More+Mount+Ida+AR" target="_blank" rel="noopener noreferrer">Directions</a>
            </article>
          </div>
          <p className="mt-5"><a href="https://www.mountidachamber.com/member-directory-2/" target="_blank" rel="noopener noreferrer">See the Chamber's full business directory</a></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Shopping Around Mount Ida</h2>
            <p>
              This section will keep growing with local shops, galleries, gifts,
              and useful visitor stops around town.
            </p>
          </div>

          <div className="grid grid-3">
            {shoppingBusinesses.map((business) => (
              <BusinessCard key={business.name} business={business} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
