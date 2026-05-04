import Image from "next/image"
import CTASection from "@/components/CTASection"
import { attractions } from "@/data/attractions"
import Link from "next/link"
export const metadata = {
  title: "Mount Ida Crystal Mines | Quartz Digging in Arkansas",
  description:
    "Explore Mount Ida crystal mines, quartz digging, rockhounding, Crystal Vista, and why Mount Ida is known as the Quartz Capital of the World.",
  keywords: [
    "Mount Ida crystal mines",
    "quartz digging Arkansas",
    "Quartz Capital of the World",
    "Mount Ida Arkansas quartz",
    "crystal mining near Lake Ouachita",
  ],
}

const crystalMines = attractions.filter(
  (item) => item.category === "Crystal Mining"
)

const crystalSections = [
  {
    title: "Why Mount Ida Is Known for Quartz",
    text: "Mount Ida sits in one of the best-known quartz crystal regions in the country. The Ouachita Mountains around town are rich with crystal deposits, which helped turn this quiet Arkansas mountain town into a destination for rockhounds, families, collectors, and visitors looking for something different than a normal lake trip.",
    images: [
      "/images/mt-ida-crystals.jpg",
      "/images/mt-ida-quartz-history.jpg",
      "/images/crystal-vista.jpg",
    ],
  },
  {
    title: "Dig Your Own Crystals",
    text: "Several nearby mines give visitors the chance to search for their own quartz crystals. Some locations are more family-friendly and guided, while others feel more rugged and natural. Either way, it gives people a hands-on reason to stop in Mount Ida and spend time exploring the area instead of just passing through.",
    images: [
      "/images/wegner-quartz.jpg",
      "/images/twin-creek-crystal.jpg",
      "/images/avatar-crystal-mine.jpg",
    ],
  },
  {
    title: "Crystal Vista and Outdoor Rockhounding",
    text: "Crystal Vista is one of the better-known outdoor quartz hunting areas near Mount Ida. It mixes the crystal-mining appeal with the natural scenery of the Ouachita National Forest, giving visitors a more outdoorsy way to experience the area. It is a good fit for people who want a scenic stop, a short adventure, and a chance to look for quartz in a more natural setting.",
    images: [
      "/images/crystal-vista.jpg",
      "/images/ouachita-national-forest.jpg",
      "/images/mt-ida-mountains.jpg",
    ],
  },
  {
    title: "A Different Kind of Arkansas Trip",
    text: "Crystal mining gives Mount Ida a strong identity that most small towns do not have. Visitors can spend the morning digging for quartz, eat in town, shop local galleries or rock shops, and still be close enough to Lake Ouachita for an afternoon on the water. That combination is what makes Mount Ida such a useful travel base.",
    images: [
      "/images/mt-ida-downtown.jpg",
      "/images/ouachita-artists-gallery.jpg",
      "/images/lake-ouachita.jpg",
    ],
  },
]

export default function CrystalMinesPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: "Mount Ida Crystal Mines",
            description:
              "Crystal mines and quartz digging attractions near Mount Ida, Arkansas, known as the Quartz Capital of the World.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mount Ida",
              addressRegion: "AR",
              addressCountry: "US",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center dark-section">
        <Image
          src="/images/mt-ida-crystals.jpg"
          alt="Mount Ida Arkansas quartz crystals"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Mount Ida Crystal Mines
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            Dig for quartz, explore local mines, and see why Mount Ida is known
            as the Quartz Capital of the World.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container intro">
          <h2>Quartz Digging in Mount Ida</h2>
        <p>
  Crystal mining is one of Mount Ida’s biggest draws. Whether you are
  visiting with family, planning a{" "}
  <Link href="/lake-ouachita" className="underline hover:opacity-70">
    Lake Ouachita trip
  </Link>, or looking for a unique Arkansas stop, the{" "}
  <Link href="/crystal-mines" className="underline hover:opacity-70">
    quartz mines around Mount Ida
  </Link>{" "}
  give the area a clear reason to visit.
</p>
        </div>
      </section>

      {/* MINE CARDS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Crystal Mining Stops</h2>
            <p>
              These local and nearby crystal stops are part of what makes Mount
              Ida stand out from other small towns in Arkansas.
            </p>
          </div>

          <div className="grid grid-3">
            {crystalMines.map((mine) => (
              <article key={mine.title} className="card">
                <div className="image-card">
                  <img src={mine.image} alt={mine.title} />
                </div>

                <div className="card-content">
                  <h3>{mine.title}</h3>
                  <p>{mine.category}</p>
                  <p>{mine.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLENWOOD STYLE CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {crystalSections.map((section, index) => (
          <div
            key={section.title}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {section.images.slice(1).map((img, i) => (
                  <div
                    key={img}
                    className="relative h-[120px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${section.title} ${i + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </section>

      <CTASection
        title="Make It a Full Mount Ida Trip"
        text="After crystal digging, spend time at Lake Ouachita, find a nearby cabin, grab food in town, or explore more outdoor stops around Montgomery County."
        buttonText="Explore Lake Ouachita"
        buttonHref="/lake-ouachita"
      />
    </main>
  )
}