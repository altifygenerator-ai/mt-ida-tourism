import Link from "next/link";

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
            <button className="hover:opacity-70">Plan Your Trip ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md shadow-lg border min-w-[250px] py-2">
              <Link
                href="/crystal-mining"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Crystal Mining Guide
              </Link>

              <Link
                href="/crystal-mines"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Crystal Mines & Quartz Digging
              </Link>

              <Link
                href="/things-to-do"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Things To Do
              </Link>

              <Link
                href="/lake-ouachita"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Lake Ouachita
              </Link>

              <Link
                href="/restaurants"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Restaurants
              </Link>

              <Link
                href="/cabins"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Cabins & Places to Stay
              </Link>

              <Link
                href="/history"
                className="block px-4 py-2 hover:bg-black/5"
              >
                Mount Ida History
              </Link>
            </div>
          </div>

          <Link href="/local-business" className="hover:opacity-70">
            Local Businesses
          </Link>

          <div className="relative group">
            <button className="hover:opacity-70">Sister Sites ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md shadow-lg border min-w-[190px] py-2">
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