import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata = {
  title:
    "History of Mount Ida Arkansas | Quartz, Montgomery County & Lake Ouachita",
  description:
    "Discover the history of Mount Ida, Arkansas — from Montgomery County roots and quartz mining to Lake Ouachita, timber, and Ouachita Mountain culture.",
  keywords: [
    "Mount Ida Arkansas history",
    "Montgomery County Arkansas history",
    "Mount Ida AR tourism",
    "Quartz Capital of the World",
    "Lake Ouachita history",
    "Arkansas small towns",
  ],
};

const historySections = [
  {
    title: "Montgomery County Roots",
    text: "Mount Ida has long served as the county seat of Montgomery County, sitting in the Ouachita Mountains of western Arkansas. The town grew as a small but important local center for surrounding mountain communities, with courthouse activity, local trade, churches, schools, and family-owned businesses shaping much of its identity. Like many Arkansas towns, Mount Ida was built slowly over time by people tied closely to the land around them.",
    images: [
      "/images/montgomery-county-history.jpg",
      "/images/mt-ida-downtown.jpg",
      "/images/mt-ida-courthouse.jpg",
    ],
  },
  {
    title: "Quartz and Mountain Geology",
    text: "Mount Ida is best known today as the Quartz Capital of the World. The surrounding Ouachita Mountains are rich with quartz crystal deposits, and that natural resource became a major part of the town’s identity. What started as a regional mineral resource grew into a tourism draw, bringing rockhounds, families, collectors, and visitors from across the country to dig, shop, and explore the local crystal mines.",
    images: [
      "/images/mt-ida-quartz-history.png",
      "/images/mt-ida-crystals.jpg",
      "/images/crystal-vista.jpg",
    ],
  },
  {
    title: "Timber, Trails, and Ouachita Mountain Life",
    text: "Before tourism became a major part of the area, Mount Ida and the surrounding communities were closely tied to timber, farming, hunting, fishing, and outdoor work. The Ouachita National Forest helped define the landscape, with wooded hills, gravel roads, creeks, wildlife, and scenic mountain country surrounding the town. That rugged outdoor setting still gives Mount Ida much of its character today.",
    images: [
      "/images/ouachita-national-forest.jpg",
      "/images/mt-ida-mountains.jpg",
      "/images/mt-ida-scenic-drive.jpeg",
    ],
  },
  {
    title: "Lake Ouachita and Visitor Growth",
    text: "Lake Ouachita helped shape Mount Ida into a stronger visitor destination. With clear water, islands, fishing, boating, swimming, cabins, and resorts nearby, the lake brought more travelers into the area. Today, many people discover Mount Ida while looking for a quieter place to stay near Lake Ouachita, then find the town’s crystal mines, shops, restaurants, and local history along the way.",
    images: [
      "/images/lake-ouachita.webp",
      "/images/lake-ouachita-boating.jpg",
      "/images/mt-ida-cabins.webp",
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Mount Ida, Arkansas",
            description:
              "A small Arkansas mountain town known for quartz crystals, Lake Ouachita access, Montgomery County history, and Ouachita Mountain culture.",
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
          src="/images/mt-ida-history.jpg"
          alt="Mount Ida Arkansas history"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            History of Mount Ida, Arkansas
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            From Montgomery County roots and quartz mining to Lake Ouachita and
            Ouachita Mountain life, Mount Ida has a story shaped by the land
            around it.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {historySections.map((section, index) => (
          <div
            key={section.title}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            {/* IMAGES */}
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

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </section>

      <CTASection
        title="Explore More Around Mount Ida"
        text="After learning the history, explore crystal mines, Lake Ouachita, local businesses, cabins, and things to do around town."
        buttonText="View Things To Do"
        buttonHref="/things-to-do"
      />
    </main>
  );
}
