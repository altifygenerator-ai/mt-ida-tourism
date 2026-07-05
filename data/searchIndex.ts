import { attractions } from "@/data/attractions";
import { businesses } from "@/data/businesses";
import { cabins } from "@/data/cabins";
import { restaurants } from "@/data/restaurants";

export type SearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string;
};

const staticPages: SearchItem[] = [
  {
    title: "Mount Ida Arkansas Guide",
    href: "/",
    category: "Home",
    description:
      "Start planning a Mount Ida trip around crystal mining, Lake Ouachita, cabins, restaurants, events, local businesses, and quiet Ouachita Mountain stops.",
    keywords:
      "home mount ida arkansas tourism quartz capital crystal mining lake ouachita cabins restaurants events local business visitor guide",
  },
  {
    title: "Things To Do in Mount Ida",
    href: "/things-to-do",
    category: "Visitor Guide",
    description:
      "A main guide to crystal mines, Lake Ouachita, Brady Mountain, Hickory Nut Mountain, restaurants, cabins, history, and outdoor things to do near Mount Ida.",
    keywords:
      "things to do mount ida attractions crystal mines lake ouachita brady mountain hickory nut mountain hiking scenic drives museum shops fishing outdoor recreation",
  },
  {
    title: "Crystal Mining Guide",
    href: "/crystal-mining",
    category: "Crystal Guide",
    description:
      "A practical quartz digging guide with what to bring, mine planning tips, family advice, Crystal Vista, and weekend ideas around Mount Ida.",
    keywords:
      "crystal mining quartz digging mount ida rockhounding crystal vista what to bring family friendly quartz capital weekend",
  },
  {
    title: "Crystal Mines Near Mount Ida",
    href: "/crystal-mines",
    category: "Crystal Guide",
    description:
      "A directory of quartz crystal mines, rock shops, public digging areas, hours, phone numbers, and check-before-you-go notes near Mount Ida.",
    keywords:
      "crystal mines quartz mines wegner avatar twin creek fisher mountain crystal vista rock shops digging public forest quartz hunting",
  },
  {
    title: "Lake Ouachita Near Mount Ida",
    href: "/lake-ouachita",
    category: "Lake Guide",
    description:
      "Plan Lake Ouachita days around boating, fishing, swimming, kayaking, marinas, cabins, resorts, and mountain views near Mount Ida.",
    keywords:
      "lake ouachita boating fishing swimming kayaking marina islands mountain harbor shangri la brady mountain cabins resorts lake day",
  },
  {
    title: "Brady Mountain Lake Ouachita",
    href: "/brady-mountain-lake-ouachita",
    category: "Lake Guide",
    description:
      "A practical guide to Brady Mountain, campground access, swim beach, Safe Harbor Brady Mountain, boat ramps, and lake-day planning.",
    keywords:
      "brady mountain lake ouachita safe harbor marina campground swim beach boat ramp grill camping day use royal",
  },
  {
    title: "Hickory Nut Mountain Vista",
    href: "/hickory-nut-mountain-mount-ida",
    category: "Scenic Stop",
    description:
      "A local guide to the Hickory Nut Mountain overlook, gravel-road access, Lake Ouachita views, picnic stops, and scenic driving near Mount Ida.",
    keywords:
      "hickory nut mountain vista overlook lake ouachita view scenic drive gravel road picnic forest road lovit trail",
  },
  {
    title: "Cabins and Places to Stay",
    href: "/cabins",
    category: "Places To Stay",
    description:
      "Browse cabins, resorts, cottages, inns, and places to stay near Mount Ida, Lake Ouachita, crystal mines, and the Ouachita Mountains.",
    keywords:
      "cabins lodging places to stay resorts cottages inns lake ouachita mount ida mountain harbor shangri la guest rooms",
  },
  {
    title: "Restaurants in Mount Ida",
    href: "/restaurants",
    category: "Food Guide",
    description:
      "Find cafes, lake dining, Mexican food, pizza, burgers, quick stops, and casual places to eat around Mount Ida and Lake Ouachita.",
    keywords:
      "restaurants food cafe dining coffee mexican pizza burgers sandwiches breakfast lake dining mount ida royal brady mountain",
  },
  {
    title: "Things To Do With Kids",
    href: "/things-to-do-with-kids",
    category: "Family Guide",
    description:
      "Family-friendly ideas for crystal digging, Lake Ouachita, cabins, food stops, scenic drives, local history, and simple outdoor time with kids.",
    keywords:
      "kids family friendly mount ida children crystal digging lake ouachita cabins food museum scenic drives outdoor family trip",
  },
  {
    title: "Mount Ida Events",
    href: "/events",
    category: "Events",
    description:
      "Find local events, seasonal activities, community happenings, and visitor-friendly things to do around Mount Ida and Lake Ouachita.",
    keywords:
      "events mount ida this weekend local happenings community seasonal activities lake ouachita festivals markets music calendar",
  },
  {
    title: "This Weekend in Mount Ida",
    href: "/this-weekend",
    category: "Weekend Guide",
    description:
      "A quick weekend guide for events, lake days, crystal digging, restaurants, scenic drives, and simple things to do around Mount Ida.",
    keywords:
      "this weekend mount ida weekend events lake days crystal digging food scenic drives things to do today tomorrow",
  },
  {
    title: "Mount Ida Fourth of July",
    href: "/mount-ida-fourth-of-july",
    category: "Seasonal Guide",
    description:
      "Plan a Fourth of July trip around Mount Ida, Mountain Harbor, Lake Ouachita fireworks, cabins, crystal mines, and local food.",
    keywords:
      "fourth of july mount ida fireworks lake ouachita mountain harbor holiday independence day july 4 cabins crystal mines",
  },
  {
    title: "Mount Ida History",
    href: "/history",
    category: "History",
    description:
      "Read about Mount Ida history, Montgomery County, quartz mining, Lake Ouachita, timber, museums, and Ouachita Mountain culture.",
    keywords:
      "history mount ida montgomery county quartz mining timber lake ouachita heritage house museum ouachita mountains",
  },
  {
    title: "Local Businesses",
    href: "/local-business",
    category: "Local Business",
    description:
      "Find local businesses, resorts, restaurants, shops, services, museums, marinas, galleries, and visitor-friendly stops around Mount Ida.",
    keywords:
      "local businesses mount ida shops services gallery museum restaurants marina resorts visitors listings promote business",
  },
  {
    title: "Mount Ida Shopping",
    href: "/shopping",
    category: "Shopping",
    description:
      "Find Mount Ida shopping, art galleries, gifts, local finds, supplies, and visitor-friendly shops near Lake Ouachita.",
    keywords:
      "mount ida shopping shops art gallery gifts local finds supplies lake ouachita visitor stops",
  },
  {
    title: "Mount Ida Services",
    href: "/services",
    category: "Services",
    description:
      "Find Mount Ida local services for visitors, cabin guests, property owners, lake travelers, and people spending time near Lake Ouachita.",
    keywords:
      "mount ida services local services cabin guests property owners lake travelers lake ouachita visitor services",
  },
  {
    title: "Submit a Mount Ida Event",
    href: "/submit-event",
    category: "Events",
    description:
      "Submit a local event, market, music night, community gathering, lake event, or visitor-friendly activity for the Mount Ida events calendar.",
    keywords:
      "submit event mount ida add event calendar community event market music festival local happening",
  },
  {
    title: "Promote Your Mount Ida Business",
    href: "/contact",
    category: "Get Listed",
    description:
      "Contact the Mount Ida guide to ask about local business listings, featured placement, visitor visibility, and promotion options.",
    keywords:
      "promote business mount ida get listed advertising local listing featured business tourism guide contact",
  },
  {
    title: "Search the Mount Ida Guide",
    href: "/search",
    category: "Search",
    description:
      "Search the Mount Ida guide for crystal mines, Lake Ouachita, cabins, restaurants, events, local businesses, and visitor planning pages.",
    keywords:
      "search mount ida guide find pages crystal lake cabins restaurants events businesses",
  },
];

const attractionItems: SearchItem[] = attractions.map((item) => ({
  title: item.title,
  href: item.href ?? "/things-to-do",
  category: item.category,
  description: item.description,
  keywords: `${item.title} ${item.category} ${item.description} mount ida attraction things to do`,
}));

const cabinItems: SearchItem[] = cabins.map((stay) => ({
  title: stay.name,
  href: "/cabins",
  category: stay.type,
  description: stay.description,
  keywords: `${stay.name} ${stay.type} ${stay.address} ${stay.description} cabins lodging lake ouachita mount ida`,
}));

const restaurantItems: SearchItem[] = restaurants.map((place) => ({
  title: place.name,
  href: "/restaurants",
  category: place.type,
  description: place.description,
  keywords: `${place.name} ${place.type} ${place.address} ${place.description} restaurants food mount ida lake ouachita`,
}));

const businessItems: SearchItem[] = businesses.map((business) => ({
  title: business.name,
  href: business.href ?? "/local-business",
  category: business.category,
  description: business.description,
  keywords: `${business.name} ${business.category} ${business.description} local business mount ida visitor stop`,
}));

export const searchIndex: SearchItem[] = [
  ...staticPages,
  ...attractionItems,
  ...cabinItems,
  ...restaurantItems,
  ...businessItems,
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function getSearchResults(query: string, limit = 8) {
  const cleaned = normalize(query);

  if (!cleaned) return [];

  const terms = cleaned.split(" ").filter(Boolean);

  return searchIndex
    .map((item) => {
      const title = normalize(item.title);
      const category = normalize(item.category);
      const description = normalize(item.description);
      const keywords = normalize(item.keywords);
      const haystack = `${title} ${category} ${description} ${keywords}`;

      let score = 0;

      if (title === cleaned) score += 80;
      if (title.includes(cleaned)) score += 45;
      if (category.includes(cleaned)) score += 24;
      if (keywords.includes(cleaned)) score += 20;
      if (description.includes(cleaned)) score += 14;

      for (const term of terms) {
        if (title.includes(term)) score += 12;
        if (category.includes(term)) score += 8;
        if (keywords.includes(term)) score += 6;
        if (description.includes(term)) score += 4;
        if (haystack.includes(term)) score += 1;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
