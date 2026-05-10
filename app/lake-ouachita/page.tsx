import Image from "next/image"
import CTASection from "@/components/CTASection"
import Link from "next/link"
export const metadata = {
  title: "Lake Ouachita Near Mount Ida Arkansas | Boating, Fishing & Cabins",
  description:
    "Explore Lake Ouachita near Mount Ida, Arkansas with boating, fishing, swimming, kayaking, islands, cabins, resorts, and scenic mountain views.",
  keywords: [
    "Lake Ouachita Mount Ida",
    "Lake Ouachita cabins",
    "Mount Ida Arkansas lake",
    "Lake Ouachita boating",
    "Lake Ouachita fishing",
    "Arkansas lake vacations",
  ],
}

const lakeHighlights = [
  {
    title: "Boating & Marinas",
    text: "Spend the day on Lake Ouachita with marina access, boat ramps, rentals, and wide open water surrounded by forested shoreline.",
    image: "/images/lake-ouachita-boating.jpg",
  },
  {
    title: "Fishing",
    text: "Lake Ouachita is a strong fishing destination with quiet coves, deep water, and plenty of room for slower days outdoors.",
    image: "/images/lake-ouachita-fishing.jpg",
  },
  {
    title: "Swimming & Kayaking",
    text: "Clear water, peaceful shoreline, islands, and mountain views make the lake a good fit for swimming, paddling, and relaxing.",
    image: "/images/lake-ouachita-kayaking.jpg",
  },
]

const lakeSections = [
  {
    title: "Clear Water and Mountain Views",
    text: "Lake Ouachita is one of the biggest reasons people visit the Mount Ida area. The lake is known for clear water, forested shoreline, islands, and quiet coves that feel different from busier lake towns. Mount Ida gives visitors a calmer base while still keeping them close to the water.",
    images: [
      "/images/lake-ouachita.webp",
      "/images/lake-ouachita-boating.jpg",
      "/images/ouachita-national-forest.jpg",
    ],
  },
  {
    title: "Boating, Fishing, and Lake Days",
    text: "Visitors come to Lake Ouachita for boating, fishing, kayaking, swimming, and long days outside. The lake has enough space for people who want activity, but it also works well for quieter trips where the goal is just to get away, sit by the water, and enjoy the Ouachita Mountains.",
    images: [
      "/images/lake-ouachita-fishing.jpg",
      "/images/lake-ouachita-kayaking.jpg",
      "/images/lake-ouachita-boating.jpg",
    ],
  },
  {
    title: "Cabins and Resorts Near the Water",
    text: "The Mount Ida area has cabins, resorts, and lake stays that make it easy to build a full weekend around Lake Ouachita. Visitors can stay close to the water, drive into town for food or supplies, and still be near crystal mines, scenic drives, and local stops.",
    images: [
      "/images/mt-ida-cabins.webp",
      "/images/mountain-harbor-resort.webp",
      "/images/shangri-la-resort.jpg",
    ],
  },
  {
    title: "A Better Base for a Quiet Arkansas Getaway",
    text: "Mount Ida works well for travelers who want access to Lake Ouachita without feeling like they are in a crowded tourist strip. You can spend one day on the lake, another digging crystals, and still have time for local restaurants, small shops, and scenic drives through Montgomery County.",
    images: [
      "/images/mt-ida-downtown.jpg",
      "/images/mt-ida-scenic-drive.jpg",
      "/images/mt-ida-mountains.jpg",
    ],
  },
]

export default function LakeOuachitaPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LakeBodyOfWater",
            name: "Lake Ouachita",
            description:
              "A clear mountain lake near Mount Ida, Arkansas known for boating, fishing, swimming, kayaking, islands, cabins, and scenic outdoor recreation.",
            containedInPlace: {
              "@type": "Place",
              name: "Arkansas",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center dark-section">
        <Image
          src="/images/lake-ouachita.webp"
          alt="Lake Ouachita near Mount Ida Arkansas"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Lake Ouachita Near Mount Ida
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            Clear water, quiet coves, boating, fishing, cabins, and mountain
            views just minutes from Mount Ida.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container intro">
          <h2>A Quiet Lake Trip Close to Mount Ida</h2>
          <p>
  <Link href="/lake-ouachita" className="underline hover:opacity-70">
    Lake Ouachita
  </Link>{" "}
  gives Mount Ida one of its strongest visitor draws. People come for the
  water, but the town also gives them access to{" "}
  <Link href="/cabins" className="underline hover:opacity-70">
    cabins
  </Link>,{" "}
  <Link href="/crystal-mines" className="underline hover:opacity-70">
    crystal mines
  </Link>,{" "}
  <Link href="/restaurants" className="underline hover:opacity-70">
    local restaurants
  </Link>, scenic drives, and the slower pace of the Ouachita Mountains.
</p>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Things To Do on Lake Ouachita</h2>
            <p>
              Whether you are staying for a weekend or just passing through,
              Lake Ouachita gives visitors plenty of ways to spend time outside.
            </p>
          </div>

          <div className="grid grid-3">
            {lakeHighlights.map((item) => (
              <article key={item.title} className="card">
                <div className="image-card">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLENWOOD STYLE CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {lakeSections.map((section, index) => (
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
        title="Stay Close to the Lake"
        text="Find cabins, resorts, local restaurants, and crystal mines near Mount Ida and Lake Ouachita."
        buttonText="Explore Cabins"
        buttonHref="/cabins"
      />
    </main>
  )
}