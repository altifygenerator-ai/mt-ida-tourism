import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { SeoGuide } from "@/data/seoGuides";

const siteUrl = "https://www.mountidaarkansas.org";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function GuideLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function SeoGuidePage({ guide }: { guide: SeoGuide }) {
  const pageUrl = `${siteUrl}/${guide.slug}`;
  const heroActions = guide.heroActions ?? [
    { href: "/crystal-mining", label: "Crystal Mining Guide" },
    { href: "/lake-ouachita", label: "Lake Ouachita" },
  ];
  const sidebarLinks = guide.sidebarLinks ?? guide.relatedLinks;

  return (
    <main className="seo-guide-page">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": guide.schemaType ?? "Article",
            name: guide.title,
            headline: guide.title,
            description: guide.metaDescription,
            url: pageUrl,
            image: `${siteUrl}${guide.heroImage}`,
            about: guide.mainPhrase,
            publisher: {
              "@type": "Organization",
              name: "Mount Ida Arkansas Tourism",
              url: siteUrl,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Mount Ida Arkansas",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: guide.title,
                item: pageUrl,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <section className="seo-guide-hero dark-section">
        <Image
          src={guide.heroImage}
          alt={guide.heroAlt}
          fill
          sizes="100vw"
          className="seo-guide-hero-image"
          priority
        />
        <div className="seo-guide-hero-overlay" />

        <div className="container seo-guide-hero-content">
          <p className="eyebrow">{guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p>{guide.intro[0]}</p>

          {heroActions.length ? (
            <div className="seo-guide-hero-actions">
              {heroActions.map((action, index) => (
                <GuideLink
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={`btn ${index === 0 ? "btn-bright" : "btn-glass"}`}
                >
                  {action.label}
                </GuideLink>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="seo-guide-intro section">
        <div className="container seo-guide-layout">
          <article className="seo-guide-main-card">
            <p className="eyebrow">{guide.mainPhrase}</p>
            {guide.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="seo-guide-facts-card" aria-label="Quick planning notes">
            <span>Quick notes</span>
            {guide.quickFacts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.label}</strong>
                <p>{fact.value}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="seo-guide-article-section section pt-0">
        <div className="container seo-guide-article-wrap">
          <article className="seo-guide-article">
            {guide.seasonalNote ? (
              <aside className="seo-guide-notice" aria-label="Seasonal planning note">
                <span>Check current conditions</span>
                <p>{guide.seasonalNote}</p>
              </aside>
            ) : null}

            {guide.sections.map((section) => (
              <section key={section.heading} className="seo-guide-copy-block">
                <h2>{section.heading}</h2>

                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {section.cards ? (
                  <div className="seo-guide-card-grid">
                    {section.cards.map((card) => (
                      <div key={card.title} className="seo-guide-mini-card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}

            {guide.checklist ? (
              <section className="seo-guide-copy-block seo-guide-checklist">
                <p className="eyebrow">Before you go</p>
                <h2>{guide.checklist.title}</h2>
                <ul>
                  {guide.checklist.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {guide.comparisonTable ? (
              <section className="seo-guide-copy-block seo-guide-table-section">
                <p className="eyebrow">{guide.comparisonTable.eyebrow}</p>
                <h2>{guide.comparisonTable.title}</h2>
                {guide.comparisonTable.intro ? (
                  <p>{guide.comparisonTable.intro}</p>
                ) : null}
                <div className="seo-guide-table-scroll">
                  <table>
                    <thead>
                      <tr>
                        {guide.comparisonTable.columns.map((column) => (
                          <th key={column} scope="col">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {guide.comparisonTable.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell, index) =>
                            index === 0 ? (
                              <th key={cell} scope="row">
                                {cell}
                              </th>
                            ) : (
                              <td key={cell}>{cell}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            {guide.sourceLinks?.length ? (
              <section className="seo-guide-copy-block seo-guide-sources">
                <p className="eyebrow">Official and current sources</p>
                <h2>Check the details before the trip.</h2>
                <p>
                  Rules, access, reservations, weather, hours, services, and
                  operating conditions may change. These are the best places to
                  confirm the current information.
                </p>
                <div className="seo-guide-source-list">
                  {guide.sourceLinks.map((source) => (
                    <GuideLink key={source.href} href={source.href}>
                      <strong>{source.title}</strong>
                      <span>{source.text}</span>
                    </GuideLink>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="seo-guide-sidebar">
            <div className="seo-guide-sidebar-card">
              <h2>{guide.sidebarTitle ?? "Keep planning"}</h2>
              <p>
                {guide.sidebarText ??
                  "Use these Mount Ida guides to build the rest of the trip around crystals, Lake Ouachita, food, cabins, and local stops."}
              </p>
              <div className="seo-guide-related-list">
                {sidebarLinks.map((link) => (
                  <GuideLink key={`${link.href}-${link.label}`} href={link.href}>
                    {link.label} <span>→</span>
                  </GuideLink>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="seo-guide-faq-section section pt-0">
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Visitor questions</p>
            <h2>Common questions about {guide.mainPhrase}</h2>
          </div>

          <div className="seo-guide-faq-grid">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="seo-guide-faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {guide.cta ? (
        <section className="seo-guide-cta section pt-0">
          <div className="container">
            <div className="seo-guide-cta-card">
              <div>
                <p className="eyebrow">{guide.cta.eyebrow ?? "Plan with current information"}</p>
                <h2>{guide.cta.title}</h2>
                <p>{guide.cta.text}</p>
              </div>
              <div className="seo-guide-cta-links">
                {guide.cta.links.map((link, index) => (
                  <GuideLink
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className={`btn ${index === 0 ? "btn-bright" : "btn-outline"}`}
                  >
                    {link.label}
                  </GuideLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="nearby-town-section">
        <div className="container nearby-town-links">
          <Link href="/mount-ida-weekend-guide" className="nearby-town-card">
            <span>Plan more</span>
            <strong>Mount Ida Weekend Guide →</strong>
          </Link>
          <Link href="/cabins" className="nearby-town-card outline">
            <span>Stay nearby</span>
            <strong>Cabins & Places to Stay →</strong>
          </Link>
          <Link href="/restaurants" className="nearby-town-card outline">
            <span>Eat local</span>
            <strong>Restaurants →</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}
