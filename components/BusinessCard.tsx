import Link from "next/link";
import type { Business } from "@/types";
import { businessClickTracking, getFeaturedLabel } from "@/lib/tracking";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function BusinessCard({ business }: { business: Business }) {
  const isFeatured = Boolean(business.featured);
  const placementType = business.placementType ?? "editorial";
  const tracked = (action: string) =>
    isFeatured
      ? businessClickTracking({
          action,
          business: business.name,
          placement: "featured-business-card",
          placementType,
        })
      : {};

  return (
    <article className={`card business-directory-card ${isFeatured ? "featured-business-card" : ""}`}>
      <div className="image-card">
        <img src={business.image} alt={business.name} />
      </div>

      <div className="card-content">
        {isFeatured ? (
          <span className="listing-badge">{getFeaturedLabel(business.name, placementType)}</span>
        ) : null}
        <h3>{business.name}</h3>
        <p>{business.category}</p>
        <p>{business.description}</p>

        <div className="business-mini-actions">
          {business.phone ? (
            <a href={`tel:${business.phone.replace(/[^\d]/g, "")}`} {...tracked("call")}>
              Call
            </a>
          ) : null}

          {business.website ? (
            <a href={business.website} target="_blank" rel="noopener noreferrer" {...tracked("website")}>
              Website
            </a>
          ) : null}

          {business.directions ? (
            <a href={business.directions} target="_blank" rel="noopener noreferrer" {...tracked("directions")}>
              Directions
            </a>
          ) : null}

          {business.href ? (
            isExternalHref(business.href) ? (
              <a href={business.href} target="_blank" rel="noopener noreferrer" {...tracked("view-details")}>
                View Details
              </a>
            ) : (
              <Link href={business.href} {...tracked("view-details")}>
                View Details
              </Link>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}
