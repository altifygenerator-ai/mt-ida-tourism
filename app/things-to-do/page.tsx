import SectionHeading from "@/components/SectionHeading"
import CTASection from "@/components/CTASection"
import { attractions } from "@/data/attractions"

export const metadata = {
  title: "Things To Do in Mount Ida Arkansas | Crystal Mines, Lake Ouachita & More",
  description:
    "Explore things to do in Mount Ida, Arkansas including crystal mines, Lake Ouachita, hiking, local shops, scenic drives, museums, and outdoor recreation.",
}

export default function ThingsToDoPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Things To Do in Mount Ida"
            text="Mount Ida is a quiet Arkansas mountain town with crystal mines, lake access, hiking, scenic drives, local history, and small-town stops worth exploring."
          />

          <div className="grid grid-3">
            {attractions.map((item) => (
              <article key={item.title} className="card">
                <div className="image-card">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start With the Local Highlights"
        text="Crystal mines and Lake Ouachita are two of the biggest reasons people visit Mount Ida, but the area also has quiet trails, local shops, and plenty of scenic mountain country."
        buttonText="Explore Crystal Mines"
        buttonHref="/crystal-mines"
      />
    </main>
  )
}