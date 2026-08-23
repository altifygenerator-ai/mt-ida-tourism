export type Cabin = {
  name: string;
  type: string;
  description: string;
  phone?: string;
  address: string;
  image?: string;
  website?: string;
  directions: string;
  featured?: boolean;
  placementType?: "paid" | "editorial";
};

export const cabins: Cabin[] = [
  {
    name: "Mountain Harbor Resort & Spa",
    type: "Lake Resort • Cabins • Marina • Spa",
    description:
      "A major Lake Ouachita resort near Mount Ida with cabins, guest rooms, cottages, marina access, boat rentals, lake dining, spa services, pools, and resort-style amenities.",
    phone: "870-867-2191",
    address: "994 Mountain Harbor Rd, Mount Ida, AR 71957",
    image: "/images/mountain-harbor-resort.webp",
    website: "https://mountainharborresort.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mountain+Harbor+Resort+994+Mountain+Harbor+Rd+Mount+Ida+AR+71957",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Shangri-La Resort",
    type: "Lake Resort • Cabins • Motel Rooms • Marina",
    description:
      "A Lake Ouachita resort near Mount Ida with cabins, lakeside lodging, motel rooms, marina access, homestyle dining, fishing, boating, and outdoor recreation.",
    phone: "870-867-2011",
    address: "987 Shangri-La Dr, Mount Ida, AR 71957",
    image: "/images/shang-ri-la-resort.jpg",
    website: "https://www.shangrilaresortar.net/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Shangri-La+Resort+987+Shangri-La+Dr+Mount+Ida+AR+71957",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Joplin Inn",
    type: "Inn • Lake Ouachita Area • Mountain Harbor Entrance",
    description:
      "A lodging option near the entrance to Mountain Harbor and Lake Ouachita with guest rooms close to the lake, marina, forest, and nearby recreation.",
    phone: "870-867-2191",
    address: "Mountain Harbor Road, Mount Ida, AR 71957",
    image: "/images/mt-ida-cabins.webp",
    website: "https://mountainharborresort.com/lodging/joplin-inn/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Joplin+Inn+Mount+Ida+AR",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Royal Oak Inn",
    type: "Inn • Local Lodging • Mount Ida Stay",
    description:
      "A local Mount Ida inn for visitors wanting a simple place to stay close to restaurants, crystal mines, Lake Ouachita, Highway 270, and the Ouachita Mountains.",
    phone: "870-867-2169",
    address: "936 Hwy 270 E, Mount Ida, AR 71957",
    image: "/images/mt-ida-cabins.webp",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Royal+Oak+Inn+936+Hwy+270+E+Mount+Ida+AR+71957",
  },
  {
    name: "Lake Ouachita State Park Cabins",
    type: "State Park Cabins • Camper Cabins • Lake Ouachita",
    description:
      "Lake Ouachita State Park offers full-service cabins and camper cabins on the eastern side of the lake. It is a practical option for visitors who want state park access, a swim beach, trails, marina services, and Lake Ouachita activities in the same trip.",
    phone: "501-767-9366",
    address: "5451 Mountain Pine Rd, Mountain Pine, AR 71956",
    image: "/images/lake-ouachita.webp",
    website: "https://www.arkansas.com/state-parks/explore/parks/lake-ouachita-state-park",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lake+Ouachita+State+Park+5451+Mountain+Pine+Rd+Mountain+Pine+AR+71956",
  },
  {
    name: "Safe Harbor Brady Mountain",
    type: "Lake Ouachita Marina • Lodging • Boat Rentals",
    description:
      "A Lake Ouachita marina in Royal with onsite lodging information, boat rentals through local partners, fuel, ship's store, and lake-day services near Brady Mountain.",
    phone: "501-767-3422",
    address: "4120 Brady Mountain Road, Royal, AR 71968",
    image: "/images/lake-ouachita-boating.jpg",
    website: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Safe+Harbor+Brady+Mountain+4120+Brady+Mountain+Road+Royal+AR+71968",
  },
];
