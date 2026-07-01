import Link from "next/link";
import type { Business } from "@/types";

export default function BusinessCard({ business }: { business: Business }) {
  const card = (
    <article className="card">
      <div className="image-card">
        <img src={business.image} alt={business.name} />
      </div>

      <div className="card-content">
        <h3>{business.name}</h3>
        <p>{business.category}</p>
        <p>{business.description}</p>
      </div>
    </article>
  );

  if (!business.href) return card;

  return (
    <Link href={business.href} className="block text-inherit no-underline">
      {card}
    </Link>
  );
}
