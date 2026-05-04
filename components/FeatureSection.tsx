import Link from "next/link"

type FeatureSectionProps = {
  title: string
  text: string
  image: string
  imageAlt: string
  buttonText: string
  buttonHref: string
  imageOffset?: boolean
}

export default function FeatureSection({
  title,
  text,
  image,
  imageAlt,
  buttonText,
  buttonHref,
  imageOffset = false,
}: FeatureSectionProps) {
  return (
    <section className="section">
      <div className="container feature">
        <div className="feature-content">
          <h2>{title}</h2>
          <p>{text}</p>

          <Link href={buttonHref} className="btn">
            {buttonText}
          </Link>
        </div>

        <div className={`image-card ${imageOffset ? "mt-8" : ""}`}>
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}