type SectionHeadingProps = {
  title: string
  text: string
}

export default function SectionHeading({ title, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}