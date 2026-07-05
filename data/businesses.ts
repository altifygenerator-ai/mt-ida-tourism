export type LocalBusinessCategory =
  | "stays"
  | "restaurants"
  | "attractions"
  | "shopping"
  | "outdoor"
  | "services";

export type Business = {
  name: string;
  category: string;
  directoryCategory: LocalBusinessCategory;
  description: string;
  image: string;
  href?: string;
  phone?: string;
  address?: string;
  website?: string;
  directions?: string;
  featured?: boolean;
  placementType?: "paid" | "editorial";
};

export const businesses: Business[] = [
  {
    name: "Mountain Harbor Resort & Spa",
    category: "Lake Resort • Marina • Spa • Dining",
    directoryCategory: "stays",
    description:
      "A major Lake Ouachita resort near Mount Ida with lodging, marina access, boat rentals, dining, spa services, and a full vacation base for lake trips.",
    image: "/images/mountain-harbor-resort.webp",
    phone: "870-867-2191",
    address: "994 Mountain Harbor Rd, Mount Ida, AR 71957",
    website: "https://mountainharborresort.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mountain+Harbor+Resort+994+Mountain+Harbor+Rd+Mount+Ida+AR+71957",
    href: "/cabins",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Shangri-La Resort",
    category: "Cabins • Marina • Lake Dining",
    directoryCategory: "stays",
    description:
      "A Lake Ouachita resort near Mount Ida with cabins, motel rooms, marina access, homestyle dining, fishing, boating, and outdoor recreation.",
    image: "/images/shang-ri-la-resort.jpg",
    phone: "870-867-2011",
    address: "987 Shangri-La Dr, Mount Ida, AR 71957",
    website: "https://www.shangrilaresortar.net/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Shangri-La+Resort+987+Shangri-La+Dr+Mount+Ida+AR+71957",
    href: "/cabins",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Wegner Quartz Crystal Mines",
    category: "Crystal Mining • Family Activity",
    directoryCategory: "attractions",
    description:
      "A well-known Mount Ida crystal mining stop with mine trips, tailings digging, family-friendly options, and a strong setup for first-time quartz hunters.",
    image: "/images/wegner-quartz.jpg",
    website: "https://www.wegnercrystalmines.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Wegner+Quartz+Crystal+Mines+Mount+Ida+AR",
    href: "/crystal-mines",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Mount Ida Cafe",
    category: "Cafe • Breakfast • Local Food",
    directoryCategory: "restaurants",
    description:
      "A classic Mount Ida cafe for breakfast, lunch, comfort food, and casual local meals before heading to Lake Ouachita, crystal mines, or the Ouachita Mountains.",
    image: "/images/mt-ida-restaurants.jpg",
    phone: "870-867-2312",
    address: "717 Hwy 270 E, Mount Ida, AR 71957",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mount+Ida+Cafe+717+Hwy+270+E+Mount+Ida+AR+71957",
    href: "/restaurants",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "El Diamante Mexican Restaurant",
    category: "Mexican Restaurant • Casual Dining",
    directoryCategory: "restaurants",
    description:
      "A local Mexican restaurant option in Mount Ida for visitors wanting a casual meal after the lake, crystal mines, or a day in the mountains.",
    image: "/images/el-diamante.jpg",
    phone: "870-867-6253",
    address: "125 West St, Mount Ida, AR 71957",
    directions:
      "https://www.google.com/maps/search/?api=1&query=El+Diamante+Mexican+Restaurant+125+West+St+Mount+Ida+AR+71957",
    href: "/restaurants",
  },
  {
    name: "Heritage House Museum",
    category: "Museum • Local History",
    directoryCategory: "attractions",
    description:
      "An admission-free local museum focused on Montgomery County history, culture, families, and community preservation.",
    image: "/images/heritage-house-museum.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Heritage+House+Museum+Mount+Ida+AR",
    href: "/history",
  },
  {
    name: "Ouachita Artists Gallery",
    category: "Art Gallery • Gifts • Local Shopping",
    directoryCategory: "shopping",
    description:
      "A local gallery featuring regional art, handmade goods, gifts, and a slower look at Mount Ida’s creative community side.",
    image: "/images/ouachita-artists-gallery.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ouachita+Artists+Gallery+Mount+Ida+AR",
    href: "/shopping",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Hickory Nut Mountain Vista",
    category: "Scenic Overlook • Lake Ouachita Views",
    directoryCategory: "outdoor",
    description:
      "A quiet Ouachita National Forest overlook with Lake Ouachita views, picnic-style stops, forest-road access, and a slower scenic-drive feel near Mount Ida.",
    image: "/images/lake-ouachita-view.webp",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hickory+Nut+Mountain+Vista+Mount+Ida+AR",
    href: "/hickory-nut-mountain-mount-ida",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Safe Harbor Brady Mountain",
    category: "Lake Marina • Boat Services • Outdoor Stop",
    directoryCategory: "outdoor",
    description:
      "A Lake Ouachita marina in Royal with fuel, ship's store, boat services, lodging information, rental partners, and Brady Mountain lake-day planning details.",
    image: "/images/lake-ouachita-boating.jpg",
    phone: "501-767-3422",
    address: "4120 Brady Mountain Road, Royal, AR 71968",
    website: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Safe+Harbor+Brady+Mountain+4120+Brady+Mountain+Road+Royal+AR+71968",
    href: "/brady-mountain-lake-ouachita",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Brady Mountain Grill on Wheels",
    category: "Lake Food • Food Truck • Brady Mountain",
    directoryCategory: "restaurants",
    description:
      "A food stop listed onsite at Safe Harbor Brady Mountain. Best treated as a check-ahead lake-day option because current hours can change.",
    image: "/images/mt-ida-restaurants.jpg",
    address: "4120 Brady Mountain Road, Royal, AR 71968",
    website: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Brady+Mountain+Grill+on+Wheels+Safe+Harbor+Brady+Mountain+Royal+AR",
    href: "/restaurants",
  },
  {
    name: "Sno-A-Lattes LLC",
    category: "Coffee • Sno Cones • Treats",
    directoryCategory: "restaurants",
    description:
      "A Royal-area coffee, sno-cone, breakfast, and treat stop that can fit into a wider Lake Ouachita or Brady Mountain day when current hours line up.",
    image: "/images/mt-ida-restaurants.jpg",
    website: "https://www.facebook.com/SnoALattes/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Sno-A-Lattes+Royal+AR",
    href: "/restaurants",
  },
  {
    name: "Mount Ida Area Services",
    category: "Local Services • Visitor Help",
    directoryCategory: "services",
    description:
      "A placeholder category for useful Mount Ida area services as the guide grows, including local help for visitors, property owners, lake travelers, and cabin guests.",
    image: "/images/mt-ida-downtown.jpg",
    href: "/services",
  },
];

export const featuredBusinesses = businesses.filter((business) => business.featured);

export const businessesByCategory = businesses.reduce(
  (groups, business) => {
    groups[business.directoryCategory].push(business);
    return groups;
  },
  {
    stays: [],
    restaurants: [],
    attractions: [],
    shopping: [],
    outdoor: [],
    services: [],
  } as Record<LocalBusinessCategory, Business[]>,
);
