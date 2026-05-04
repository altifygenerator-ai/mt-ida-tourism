import Link from "next/link"
import type { Category } from "@/types"

export default function CategoryCard({
  category,
}: {
  category: Category
}) {
  return (
    <Link href={category.href} className="card">
      <div className="image-card">
        <img src={category.image} alt={category.title} />
      </div>

      <div className="card-content">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>
    </Link>
  )
}