import Link from "next/link"
const restaurants = [
  {
    name: "Mount Ida Cafe",
    type: "Cafe / Diner",
    description:
      "A simple local cafe option for breakfast, lunch, and casual meals while visiting Mount Ida.",
    phone: "870-867-2283",
    address: "978 US-270, Mount Ida, AR 71957",
  },
  {
    name: "El Diamante Mexican Restaurant",
    type: "Mexican Restaurant",
    description:
      "A local Mexican restaurant in Mount Ida for visitors looking for a casual sit-down meal.",
    phone: "870-867-6253",
    address: "125 West St, Mount Ida, AR 71957",
  },
  {
    name: "Shangri-La Café",
    type: "Cafe / Lake Dining",
    description:
      "Homestyle dining near Lake Ouachita, located at Shangri-La Resort outside Mount Ida.",
    phone: "870-867-2011",
    address: "987 Shangri-La Dr, Mount Ida, AR 71957",
  },
  {
    name: "Dairyette",
    type: "Casual Food",
    description:
      "A casual local food stop on Highway 270 for visitors passing through Mount Ida.",
    phone: "870-867-2312",
    address: "717 Hwy 270 E, Mount Ida, AR 71957",
  },
  {
    name: "Victory Pie Co.",
    type: "Local Food / Desserts",
    description:
      "A local Mount Ida food stop listed by nearby lodging resources for visitors in town.",
    phone: "870-985-9892",
    address: "404 Bridge St, Mount Ida, AR 71957",
  },
  {
    name: "270 Diner",
    type: "Diner",
    description:
      "A small-town diner option on Highway 270 for travelers, lake visitors, and locals.",
    phone: "870-867-0141",
    address: "514 Hwy 270, Mount Ida, AR 71957",
  },
  {
    name: "Subway at Mountain Harbor",
    type: "Quick Food",
    description:
      "A quick food option located at Mountain Harbor Resort & Spa near Lake Ouachita.",
    phone: "870-867-1266",
    address: "34 Marina Dr, Mount Ida, AR 71957",
  },
]

export const metadata = {
  title: "Restaurants in Mount Ida Arkansas | Local Food & Dining",
  description:
    "Find restaurants, cafes, diners, Mexican food, and casual dining options in Mount Ida, Arkansas near Lake Ouachita and the crystal mines.",
}

export default function RestaurantsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-4">
        Restaurants in Mount Ida, Arkansas
      </h1>

     

<p className="text-lg text-[color:var(--color-muted)] mb-10">
  Mount Ida has a small-town food scene with cafes, diners, Mexican food,
  quick stops, and lake-area dining. These are useful places for visitors
  heading to{" "}
  <Link href="/lake-ouachita" className="underline hover:opacity-70">
    Lake Ouachita
  </Link>,{" "}
  <Link href="/crystal-mines" className="underline hover:opacity-70">
    crystal mines
  </Link>,{" "}
  <Link href="/cabins" className="underline hover:opacity-70">
    cabins
  </Link>, and the Ouachita Mountains.
</p>

      <div className="space-y-6">
        {restaurants.map((place) => (
          <div key={place.name} className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)] mb-2">
              {place.type}
            </p>

            <h2 className="text-2xl font-semibold mb-2">{place.name}</h2>

            <p className="mb-4">{place.description}</p>

            <div className="space-y-1 text-sm">
              <p>
                <strong>Phone:</strong> {place.phone}
              </p>
              <p>
                <strong>Address:</strong> {place.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}