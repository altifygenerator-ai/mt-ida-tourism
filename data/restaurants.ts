export type Restaurant = {
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

export const restaurants: Restaurant[] = [
  {
    name: "Mount Ida Cafe",
    type: "Cafe • Breakfast • American Food • Local Favorite",
    description:
      "A classic Mount Ida cafe for breakfast, lunch, comfort food, and casual local meals before heading to Lake Ouachita, crystal mines, or the Ouachita Mountains.",
    phone: "870-867-2283",
    address: "978 US-270, Mount Ida, AR 71957",
    image: "/images/mt-ida-restaurants.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mount+Ida+Cafe+978+US-270+Mount+Ida+AR+71957",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "Shangri-La Resort Restaurant",
    type: "Lake Dining • Resort Restaurant • American Food",
    description:
      "A Lake Ouachita dining option at Shangri-La Resort with homestyle food, lake-area lodging, cabins, marina access, and outdoor recreation nearby.",
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
    name: "Harbor Lodge Restaurant",
    type: "Lake Dining • Resort Restaurant • Visitor Favorite",
    description:
      "A popular Lake Ouachita restaurant connected to Mountain Harbor Resort, useful for visitors staying near the lake, marina, cabins, and outdoor recreation.",
    phone: "870-867-2191",
    address: "994 Mountain Harbor Rd, Mount Ida, AR 71957",
    image: "/images/mountain-harbor-resort.webp",
    website: "https://mountainharborresort.com/dining/harbor-lodge-restaurant/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mountain+Harbor+Resort+994+Mountain+Harbor+Rd+Mount+Ida+AR+71957",
    featured: true,
    placementType: "editorial",
  },
  {
    name: "El Diamante Mexican Restaurant",
    type: "Mexican Restaurant • Casual Dining",
    description:
      "A local Mexican restaurant in Mount Ida for visitors wanting tacos, plates, chips and salsa, and a casual meal after crystal mining or lake time.",
    phone: "870-867-6253",
    address: "125 West St, Mount Ida, AR 71957",
    image: "/images/el-diamante.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=El+Diamante+Mexican+Restaurant+125+West+St+Mount+Ida+AR+71957",
  },
  {
    name: "Shack Attack Pizza",
    type: "Pizza • Casual Food • Local Stop",
    description:
      "A Mount Ida pizza spot for families, travelers, cabin stays, and visitors wanting an easy meal after a day around Lake Ouachita or the crystal mines.",
    phone: "870-867-2003",
    address: "123 S West St, Mount Ida, AR 71957",
    image: "/images/mt-ida-restaurants.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Shack+Attack+Pizza+123+S+West+St+Mount+Ida+AR+71957",
  },
  {
    name: "Dairyette Burgers & Shakes",
    type: "Burgers • Shakes • Quick Meal",
    description:
      "A local burger and shake stop in Mount Ida for casual food, road trip meals, and family-friendly quick bites.",
    address: "Mount Ida, AR 71957",
    image: "/images/mt-ida-restaurants.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Dairyette+Burgers+and+Shakes+Mount+Ida+AR",
  },
  {
    name: "Subway",
    type: "Sandwiches • Fast Food • Quick Stop",
    description:
      "A quick sandwich option for visitors heading to Lake Ouachita, cabins, campgrounds, crystal mines, or scenic drives around Mount Ida.",
    address: "Mount Ida, AR 71957",
    website: "https://restaurants.subway.com/united-states/ar/mount-ida",
    image: "/images/mt-ida-restaurants.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Subway+Mount+Ida+AR",
  },
  {
    name: "Pizza Pro",
    type: "Pizza • Carryout • Quick Stop",
    description:
      "A convenient pizza and carryout option in Mount Ida for travelers, lake visitors, and cabin guests needing a simple meal.",
    phone: "870-867-3513",
    address: "439 US-270, Mount Ida, AR 71957",
    image: "/images/mt-ida-restaurants.jpg",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Pizza+Pro+439+US-270+Mount+Ida+AR+71957",
  },
  {
    name: "Brady Mountain Grill on Wheels",
    type: "Lake Food • Food Truck • Brady Mountain",
    description:
      "A seasonal-style lake food stop listed onsite at Safe Harbor Brady Mountain. Good to check when planning a Lake Ouachita day, but current hours should be verified before counting on it.",
    address: "4120 Brady Mountain Road, Royal, AR 71968",
    image: "/images/lake-ouachita-boating.jpg",
    website: "https://safeharbor.com/locations/safe-harbor-brady-mountain/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Brady+Mountain+Grill+on+Wheels+Safe+Harbor+Brady+Mountain+Royal+AR",
  },
  {
    name: "Sno-A-Lattes LLC",
    type: "Coffee • SnoCones • Breakfast • Treats",
    description:
      "A Royal-area coffee and treat stop mentioned around Lake Ouachita travel, with lattes, sno-cones, craft sodas, breakfast, and other quick treats. Check current hours before making a special stop.",
    address: "Royal, AR 71968",
    image: "/images/mt-ida-restaurants.jpg",
    website: "https://www.facebook.com/SnoALattes/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Sno-A-Lattes+Royal+AR",
  },
];
