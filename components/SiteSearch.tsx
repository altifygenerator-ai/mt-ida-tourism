"use client";

import Link from "next/link";
import { FormEvent, useMemo, useRef, useState } from "react";
import { getSearchResults } from "@/data/searchIndex";

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const results = useMemo(() => getSearchResults(query, 6), [query]);
  const trimmedQuery = query.trim();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!trimmedQuery) {
      event.preventDefault();
    }
  }

  return (
    <div className="site-search-row" role="search">
      <div className="container site-search-inner">
        <form
          ref={formRef}
          action="/search"
          className="site-search-form"
          onSubmit={handleSubmit}
          onFocus={() => setOpen(true)}
          onBlur={(event) => {
            if (!formRef.current?.contains(event.relatedTarget as Node | null)) {
              setOpen(false);
            }
          }}
        >
          <label className="sr-only" htmlFor="site-search-input">
            Search the Mount Ida guide
          </label>

          <div className="site-search-input-wrap">
            <span aria-hidden="true" className="site-search-icon">
              ⌕
            </span>

            <input
              id="site-search-input"
              type="search"
              name="q"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setOpen(true);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") setOpen(false);
              }}
              placeholder="Search crystals, Lake Ouachita, cabins, restaurants..."
              autoComplete="off"
            />
          </div>

          <button type="submit">Search</button>

          {open && trimmedQuery ? (
            <div
              className="site-search-dropdown"
              onMouseDown={(event) => event.preventDefault()}
            >
              {results.length > 0 ? (
                results.map((result) => (
                  <Link
                    key={`${result.href}-${result.title}`}
                    href={result.href}
                    className="site-search-result"
                    onClick={() => setOpen(false)}
                  >
                    <span>{result.category}</span>
                    <strong>{result.title}</strong>
                    <p>{result.description}</p>
                  </Link>
                ))
              ) : (
                <div className="site-search-empty">
                  No quick matches yet. Search the full guide for “{trimmedQuery}.”
                </div>
              )}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
