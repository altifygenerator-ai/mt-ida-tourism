import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { SeoGuide } from "@/data/seoGuides";

const siteUrl = "https://mountidaarkansas.org";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function GuideLink({ href, children }: { href: string; children: ReactNode }) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
}

export default function SeoGuidePage({ guide }: { guide: SeoGuide }) {
  const pageUrl = `${siteUrl}/${guide.slug}`;

  return (
    <main className="seo-guide-page">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "TravelGuide",
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

          <div className="seo-guide-hero-actions">
            <Link href="/crystal-mining" className="btn btn-bright">
              Crystal Mining Guide
            </Link>
            <Link href="/lake-ouachita" className="btn btn-glass">
              Lake Ouachita
            </Link>
          </div>
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
          </article>

          <aside className="seo-guide-sidebar">
            <div className="seo-guide-sidebar-card">
              <h2>Keep planning</h2>
              <p>
                Use these Mount Ida guides to build the rest of the trip around
                crystals, Lake Ouachita, food, cabins, and local stops.
              </p>
              <div className="seo-guide-related-list">
                {guide.relatedLinks.map((link) => (
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
