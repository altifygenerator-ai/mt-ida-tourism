import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getSearchResults } from "@/data/searchIndex";

export const metadata: Metadata = {
  title: "Search the Mount Ida Guide",
  description:
    "Search the Mount Ida Arkansas guide for crystal mines, Lake Ouachita, cabins, restaurants, events, local businesses, and visitor planning pages.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params?.q?.trim() ?? "";
  const results = getSearchResults(query, 24);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Search the Mount Ida Guide",
          description:
            "Search the Mount Ida Arkansas guide for crystal mines, Lake Ouachita, cabins, restaurants, events, and visitor planning pages.",
          url: "https://www.mountidaarkansas.org/search",
        }}
      />

      <section className="events-hero">
        <div className="container">
          <p className="eyebrow">Search Mount Ida</p>
          <h1>Find the Mount Ida guide page you need.</h1>
          <p>
            Search for crystal mines, quartz digging, Lake Ouachita, cabins,
            restaurants, events, local businesses, scenic stops, and family trip
            ideas around Mount Ida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form action="/search" className="search-page-form">
            <label className="sr-only" htmlFor="search-page-input">
              Search the Mount Ida guide
            </label>
            <input
              id="search-page-input"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Try Lake Ouachita, crystal mines, cabins, events..."
            />
            <button type="submit">Search</button>
          </form>

          {query ? (
            <div className="search-results-heading">
              <p className="eyebrow">Search results</p>
              <h2>
                {results.length
                  ? `Results for “${query}”`
                  : `No results for “${query}”`}
              </h2>
            </div>
          ) : (
            <div className="search-results-heading">
              <p className="eyebrow">Start searching</p>
              <h2>Type a word or phrase from the guide.</h2>
              <p>
                Good searches include crystal mines, Lake Ouachita, Brady
                Mountain, cabins, restaurants, kids, events, or local business.
              </p>
            </div>
          )}

          {results.length ? (
            <div className="search-results-grid">
              {results.map((result) => (
                <Link
                  key={`${result.href}-${result.title}`}
                  href={result.href}
                  className="search-result-card"
                >
                  <span>{result.category}</span>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                  <strong>Open page →</strong>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
