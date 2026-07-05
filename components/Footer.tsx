import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/things-to-do", label: "Things To Do" },
      { href: "/crystal-mining", label: "Crystal Mining Guide" },
      { href: "/crystal-mines", label: "Crystal Mines" },
      { href: "/lake-ouachita", label: "Lake Ouachita" },
      {
        href: "/brady-mountain-lake-ouachita",
        label: "Brady Mountain",
      },
      {
        href: "/hickory-nut-mountain-mount-ida",
        label: "Hickory Nut Mountain",
      },
      { href: "/history", label: "Mount Ida History" },
    ],
  },
  {
    title: "Events",
    links: [
      { href: "/events", label: "Events" },
      { href: "/this-weekend", label: "This Weekend" },
      { href: "/submit-event", label: "Submit an Event" },
    ],
  },
  {
    title: "Food & Local",
    links: [
      { href: "/restaurants", label: "Restaurants" },
      { href: "/shopping", label: "Shopping & Local Finds" },
      { href: "/services", label: "Local Services" },
      { href: "/local-business", label: "Local Businesses" },
    ],
  },
  {
    title: "Stay",
    links: [{ href: "/cabins", label: "Cabins & Places to Stay" }],
  },
  {
    title: "Business",
    links: [
      { href: "/contact", label: "Get Listed" },
      { href: "/contact", label: "Promote Your Business" },
      { href: "/submit-event", label: "Submit an Event" },
    ],
  },
];

const sisterSites = [
  { href: "https://glenwoodarkansas.org", label: "Glenwood Arkansas" },
  { href: "https://amityarkansas.org", label: "Amity Arkansas" },
  { href: "https://hotspringsarkansas.org", label: "Hot Springs Arkansas" },
  { href: "https://murfreesboroarkansas.org", label: "Murfreesboro Arkansas" },
];

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}) {
  return (
    <div className="footer-group">
      <h4>{title}</h4>

      <div className="footer-link-list">
        {links.map((link) => (
          <Link key={`${title}-${link.href}-${link.label}`} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-row">
          <div>
            <h3>Mount Ida Arkansas</h3>
            <p>
              A local guide to crystal mines, Lake Ouachita, cabins, restaurants,
              events, scenic stops, and small businesses around Mount Ida,
              Arkansas.
            </p>
          </div>

          <div className="footer-brand-actions">
            <Link href="/contact" className="footer-button footer-button-light">
              Get Listed
            </Link>

            <Link href="/events" className="footer-button footer-button-outline">
              View Events
            </Link>
          </div>
        </div>

        <div className="footer-link-grid">
          {footerGroups.map((group) => (
            <FooterGroup
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        <div className="footer-sister-row">
          <span>Nearby Arkansas guides</span>

          <div>
            {sisterSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Mount Ida Arkansas. Built as a local
          tourism and business guide.
        </p>

        <p>
          Part of the{" "}
          <a
            href="https://naturalstatetourismproject.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natural State Tourism Project
          </a>
        </p>

        <p>
          Website by{" "}
          <a
            href="https://hometownwebservicesar.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hometown Web Services
          </a>
        </p>
      </div>
    </footer>
  );
}