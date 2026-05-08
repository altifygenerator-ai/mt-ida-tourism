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
  },
  {
    name: "Royal Oak Inn",
    type: "Inn • Local Lodging • Mount Ida Stay",
    description:
      "A local Mount Ida inn for visitors wanting a simple place to stay close to restaurants, crystal mines, Lake Ouachita, Highway 270, and the Ouachita Mountains.",
    phone: "870-867-2169",
    address: "Mount Ida, AR 71957",
    image: "/images/mt-ida-cabins.webp",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Royal+Oak+Inn+Mount+Ida+AR",
  },
  {
    name: "Lake Ouachita Cabin Stays",
    type: "Cabins Near Lake Ouachita",
    description:
      "Cabin rentals around Lake Ouachita work well for boating, fishing, kayaking, swimming, family trips, summer weekends, and quiet stays near Mount Ida.",
    address: "Mount Ida / Lake Ouachita Area",
    image: "/images/lake-ouachita.webp",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lake+Ouachita+cabins+Mount+Ida+AR",
  },
  {
    name: "Ouachita Mountain Cabin Stays",
    type: "Mountain Cabins • Wooded Stays",
    description:
      "Wooded cabin stays around Mount Ida are useful for visitors planning crystal mine trips, scenic drives, hiking, fishing, and quiet Ouachita Mountain getaways.",
    address: "Mount Ida, AR",
    image: "/images/mt-ida-mountains.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ouachita+Mountain+cabins+Mount+Ida+AR",
  },
];