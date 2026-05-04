import Link from "next/link"
const cabins = [
  {
    name: "Mountain Harbor Resort & Spa",
    type: "Lake Resort / Cabins",
    description:
      "A well-known Lake Ouachita resort near Mount Ida with lodging, marina access, lake recreation, and resort-style stays.",
    phone: "870-867-2191",
    address: "994 Mountain Harbor Rd, Mount Ida, AR 71957",
  },
  {
    name: "Shangri-La Resort",
    type: "Lodge / Cabins / Lake Stay",
    description:
      "A Lake Ouachita area resort with lodging, cabins, dining, and access to outdoor recreation near Mount Ida.",
    phone: "870-867-2011",
    address: "987 Shangri-La Dr, Mount Ida, AR 71957",
  },
  {
    name: "Royal Oak Inn",
    type: "Inn / Lodging",
    description:
      "A Mount Ida lodging option for visitors who want a simple place to stay close to restaurants, crystal mines, and Lake Ouachita.",
    phone: "870-867-2169",
    address: "Mount Ida, AR",
  },
  {
    name: "Lake Ouachita Cabin Stays",
    type: "Cabins Near the Lake",
    description:
      "Visitors often look for cabin rentals around Lake Ouachita for boating, fishing, kayaking, swimming, and quiet weekends.",
    phone: "Contact property directly",
    address: "Mount Ida / Lake Ouachita Area",
  },
  {
    name: "Ouachita Mountain Cabin Stays",
    type: "Mountain Cabins",
    description:
      "Wooded cabin stays around Mount Ida work well for people visiting crystal mines, scenic drives, and the Ouachita National Forest.",
    phone: "Contact property directly",
    address: "Mount Ida, AR",
  },
]

export const metadata = {
  title: "Cabins in Mount Ida Arkansas | Lake Ouachita Cabins & Stays",
  description:
    "Find cabins, resorts, inns, and places to stay near Mount Ida, Arkansas and Lake Ouachita.",
}

export default function CabinsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-4">
        Cabins in Mount Ida, Arkansas
      </h1>

     

<p className="text-lg text-[color:var(--color-muted)] mb-10">
  Mount Ida is a strong base for cabin stays near{" "}
  <Link href="/lake-ouachita" className="underline hover:opacity-70">
    Lake Ouachita
  </Link>,{" "}
  <Link href="/crystal-mines" className="underline hover:opacity-70">
    crystal mines
  </Link>, scenic drives, and the Ouachita Mountains. Visitors can find lake
  resorts,{" "}
  <Link href="/cabins" className="underline hover:opacity-70">
    cabins
  </Link>, inns, and quiet wooded stays close to the area’s main attractions.
</p>

      <div className="space-y-6">
        {cabins.map((stay) => (
          <div key={stay.name} className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
              {stay.type}
            </p>

            <h2 className="text-2xl font-semibold mb-2">{stay.name}</h2>

            <p className="mb-4">{stay.description}</p>

            <div className="space-y-1 text-sm">
              <p>
                <strong>Phone:</strong> {stay.phone}
              </p>
              <p>
                <strong>Address:</strong> {stay.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}