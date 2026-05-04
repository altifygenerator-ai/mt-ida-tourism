import SectionHeading from "@/components/SectionHeading"
import CTASection from "@/components/CTASection"
import BusinessCard from "@/components/BusinessCard"
import { businesses } from "@/data/businesses"

export const metadata = {
  title: "Mount Ida Local Businesses | Promote Your Business",
  description:
    "List and promote your Mount Ida business. Get found by visitors searching for cabins, restaurants, and things to do near Lake Ouachita.",
}

export default function LocalBusinessPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Mount Ida Local Businesses"
            text="This page helps visitors find real local businesses while planning trips to Mount Ida, Lake Ouachita, and the Ouachita Mountains."
          />

          <div className="grid grid-3">
            {businesses.map((business) => (
              <BusinessCard key={business.name} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY PROMOTE */}
      <section className="section">
        <div className="container intro">
          <h2>Why Promote Your Business Here</h2>
          <p>
            People searching for Mount Ida cabins, restaurants, and things to do
            are already planning a trip. This site is built to show up for those
            searches and send them directly to local businesses.
          </p>
          <p>
            Instead of relying only on Facebook or word of mouth, this puts your
            business in front of people actively looking for places to stay, eat,
            and visit in the area.
          </p>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="section">
        <div className="container intro">
          <h2>Get Your Business Listed</h2>
          <p>
            If you want your business added or featured on this site, reach out
            and I’ll walk you through it. Nothing complicated, just getting you
            in front of the right people.
          </p>

          <p style={{ marginTop: "16px", fontWeight: 700 }}>
            Call or Text: 870-260-4880
          </p>
        </div>
      </section>

      <CTASection
        title="Start Getting Found Online"
        text="Get your business listed so people planning a trip to Mount Ida can actually find you when they search."
        buttonText="Contact Me"
        buttonHref="/contact"
      />
    </main>
  )
}