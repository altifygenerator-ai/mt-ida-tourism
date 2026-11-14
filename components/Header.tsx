"use client";

import Link from "next/link";
import { useState } from "react";

const guideLinks = [
  { href: "/crystal-mining", label: "Crystal Mining Guide" },
  { href: "/best-crystal-mines-mount-ida", label: "Best Crystal Mines" },
  { href: "/best-crystal-mines-for-kids-mount-ida", label: "Crystal Mines for Kids" },
  { href: "/crystal-vista-recreation-area", label: "Crystal Vista" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/things-to-do-with-kids", label: "Things To Do With Kids" },
  { href: "/mount-ida-weekend-guide", label: "Weekend Guide" },
  { href: "/hot-springs-to-mount-ida-day-trip", label: "Hot Springs Day Trip" },
  { href: "/glenwood-to-mount-ida-day-trip", label: "Glenwood Day Trip" },
  { href: "/lake-ouachita", label: "Lake Ouachita" },
  { href: "/lake-ouachita-cabins", label: "Lake Ouachita Cabins" },
  { href: "/lake-ouachita-marinas-boat-rentals", label: "Marinas & Boat Rentals" },
  { href: "/brady-mountain-lake-ouachita", label: "Brady Mountain" },
  { href: "/hickory-nut-mountain-mount-ida", label: "Hickory Nut Mountain" },
  { href: "/history", label: "Mount Ida History" },
];

const businessLinks = [
  { href: "/local-business", label: "All Local Businesses" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/cabins", label: "Cabins & Places to Stay" },
  { href: "/cabins-near-crystal-mines-mount-ida", label: "Cabins Near Crystal Mines" },
  { href: "/shopping", label: "Shopping & Local Finds" },
  { href: "/services", label: "Local Services" },
];

const sisterSites = [
  { href: "https://www.glenwoodarkansas.org", label: "Glenwood" },
  { href: "https://www.amityarkansas.org", label: "Amity" },
  { href: "https://www.hotspringsarkansas.org", label: "Hot Springs" },
  { href: "https://www.murfreesboroarkansas.org", label: "Murfreesboro" },
];

type NavigationLink = { href: string; label: string };

function GuideMenu({
  title,
  links,
  external = false,
  alignRight = false,
}: {
  title: string;
  links: NavigationLink[];
  external?: boolean;
  alignRight?: boolean;
}) {
  return (
    <details className="group relative">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-md px-2 font-medium text-[color:var(--color-text)] outline-offset-4 transition hover:text-[color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[color:var(--color-accent)]">
        {title}
        <span aria-hidden="true" className="text-xs opacity-60">⌄</span>
      </summary>
      <div className={`absolute top-full z-[110] max-h-[70vh] min-w-[260px] overflow-y-auto rounded-xl border border-black/10 bg-[#fffaf0] py-2 shadow-lg ${alignRight ? "right-0" : "left-0"}`}>
        {links.map((link) =>
          external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className="block px-4 py-2.5 text-sm text-[color:var(--color-text)] transition hover:bg-black/5 focus-visible:bg-black/5">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href}
              className="block px-4 py-2.5 text-sm text-[color:var(--color-text)] transition hover:bg-black/5 focus-visible:bg-black/5">
              {link.label}
            </Link>
          ),
        )}
      </div>
    </details>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-black/10 bg-[color:var(--color-bg)]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-6xl items-center justify-between gap-4 px-5 md:px-6">
        <Link href="/" onClick={() => setMobileOpen(false)}
          className="flex min-w-0 flex-col justify-center text-[color:var(--color-text)]">
          <span className="text-lg font-semibold leading-tight tracking-tight">Mount Ida, Arkansas</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-muted)]">
            Crystal country &amp; Lake Ouachita
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 text-sm lg:flex">
          <GuideMenu title="Explore" links={guideLinks} />
          <GuideMenu title="Food & Stays" links={businessLinks} />
          <Link href="/events" className="rounded-md px-2 py-3 font-medium hover:text-[color:var(--color-accent)]">
            Events
          </Link>
          <GuideMenu title="Nearby Guides" links={sisterSites} external alignRight />
          <Link href="/contact"
            className="ml-2 rounded-full bg-[color:var(--color-accent)] px-4 py-2.5 font-semibold text-white transition hover:opacity-90">
            Get Listed
          </Link>
        </nav>

        <button type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mount-ida-mobile-navigation" aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex min-h-11 items-center rounded-full border border-black/15 bg-white/70 px-4 text-sm font-semibold text-[color:var(--color-text)] lg:hidden">
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mount-ida-mobile-navigation" aria-label="Mobile navigation"
          className="max-h-[75vh] overflow-y-auto border-t border-black/10 bg-[color:var(--color-bg)] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            <Link href="/crystal-mining" onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold">Crystal Mining</Link>
            <Link href="/lake-ouachita" onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold">Lake Ouachita</Link>
            <Link href="/events" onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold">Events</Link>
            {[
              { label: "More visitor guides", links: guideLinks },
              { label: "Food, stays & local businesses", links: businessLinks },
              { label: "Nearby town guides", links: sisterSites },
            ].map((group) => (
              <details key={group.label} className="rounded-xl border border-black/10 bg-white/45">
                <summary className="cursor-pointer p-3 font-semibold">{group.label}</summary>
                <div className="grid gap-0.5 border-t border-black/10 px-2 py-2">
                  {group.links.map((link) =>
                    link.href.startsWith("https://") ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm hover:bg-white/80">{link.label}</a>
                    ) : (
                      <Link key={link.href} href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm hover:bg-white/80">{link.label}</Link>
                    ),
                  )}
                </div>
              </details>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-center font-semibold text-white">
              Get Listed
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
