import Link from "next/link"

type CTASectionProps = {
  title: string
  text: string
  buttonText: string
  buttonHref: string
}

export default function CTASection({
  title,
  text,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="section dark-section">
      <div className="container intro">
        <h2>{title}</h2>
        <p>{text}</p>

        <Link href={buttonHref} className="btn btn-light">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}