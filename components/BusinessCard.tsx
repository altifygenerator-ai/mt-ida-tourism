import type { Business } from "@/types"

export default function BusinessCard({ business }: { business: Business }) {
  return (
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
  )
}