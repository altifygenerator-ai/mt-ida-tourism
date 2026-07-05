import Link from "next/link";

const guideLinks = [
  {
    href: "/crystal-mining",
    label: "Crystal Mining Guide",
  },
  {
    href: "/crystal-mines",
    label: "Crystal Mines & Quartz Digging",
  },
  {
    href: "/things-to-do",
    label: "Things To Do",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/this-weekend",
    label: "This Weekend",
  },
  {
    href: "/lake-ouachita",
    label: "Lake Ouachita",
  },
  {
    href: "/brady-mountain-lake-ouachita",
    label: "Brady Mountain Lake Ouachita",
  },
  {
    href: "/hickory-nut-mountain-mount-ida",
    label: "Hickory Nut Mountain Vista",
  },
  {
    href: "/history",
    label: "Mount Ida History",
  },
];

const businessLinks = [
  {
    href: "/local-business",
    label: "All Local Businesses",
  },
  {
    href: "/restaurants",
    label: "Restaurants",
  },
  {
    href: "/cabins",
    label: "Cabins & Places to Stay",
  },
  {
    href: "/shopping",
    label: "Shopping & Local Finds",
  },
  {
    href: "/services",
    label: "Local Services",
  },
];

const sisterSites = [
  {
    href: "https://glenwoodarkansas.org",
    label: "Visit Glenwood",
  },
  {
    href: "https://amityarkansas.org",
    label: "Visit Amity",
  },
  {
    href: "https://hotspringsarkansas.org",
    label: "Visit Hot Springs",
  },
  {
    href: "https://murfreesboroarkansas.org",
    label: "Visit Murfreesboro",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-wide">
          🌿 Mount Ida Arkansas
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <div className="relative group">
            <button type="button" className="hover:opacity-70">
              Guides ▾
            </button>

            <div className="header-dropdown absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white text-black rounded-md shadow-lg border min-w-[260px] py-2">
              {guideLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button type="button" className="hover:opacity-70">
              Local Businesses ▾
            </button>

            <div className="header-dropdown absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white text-black rounded-md shadow-lg border min-w-[245px] py-2">
              {businessLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/events" className="hover:opacity-70">
            Events
          </Link>

          <div className="relative group">
            <button type="button" className="hover:opacity-70">
              Sister Sites ▾
            </button>

            <div className="header-dropdown absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white text-black rounded-md shadow-lg border min-w-[190px] py-2">
              {sisterSites.map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-black/5"
                >
                  {site.label}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-[color:var(--color-accent)] text-white px-4 py-2 rounded-md font-medium hover:opacity-90"
          >
            Promote Your Business
          </Link>
        </nav>
      </div>
    </header>
  );
}