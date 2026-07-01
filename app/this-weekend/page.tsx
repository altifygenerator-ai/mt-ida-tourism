import type { Metadata } from "next";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import JsonLd from "@/components/JsonLd";
import { getApprovedEvents, getEventDescription, getWeekendRange, hasSupabaseEnv } from "@/lib/supabase/events";

export const metadata: Metadata = {
  title: "This Weekend in Mount Ida | Events, Lake Days & Local Ideas",
  description:
    "See what is happening this weekend in Mount Ida, including local events, Lake Ouachita activities, crystal mining stops, food, and visitor-friendly ideas.",
  alternates: {
    canonical: "/this-weekend",
  },
};

export const revalidate = 300;

export default async function ThisWeekendPage() {
  const { friday, sunday } = getWeekendRange();
  const events = await getApprovedEvents({ fromDate: friday, toDate: sunday });

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "This Weekend in Mount Ida",
          description:
            "Weekend events and visitor-friendly ideas around Mount Ida, Lake Ouachita, crystal mines, restaurants, and scenic outdoor stops.",
          url: "https://mountidaarkansas.org/this-weekend",
          mainEntity: {
            "@type": "ItemList",
            name: "This weekend around Mount Ida",
            itemListElement: events.map((event, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Event",
                name: event.title,
                description: getEventDescription(event),
                startDate: event.start_date,
                endDate: event.end_date || undefined,
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                url: `https://mountidaarkansas.org/events/${event.slug}`,
              },
            })),
          },
        }}
      />
      <section className="events-hero weekend-hero">
        <div className="container events-hero-grid">
          <div>
            <p className="eyebrow">This Weekend</p>
            <h1>Weekend plans around Mount Ida.</h1>
            <p>
              A quick weekend page for Mount Ida visitors and locals looking for events,
              lake days, crystal digging, food stops, scenic drives, and simple things to do.
            </p>
            <div className="events-hero-actions">
              <Link href="/events" className="btn">
                View All Events
              </Link>
              <Link href="/submit-event" className="btn btn-light">
                Submit an Event
              </Link>
            </div>
          </div>

          <div className="events-hero-card">
            <h2>Weekend range</h2>
            <p>
              Showing approved Mount Ida events from <strong>{friday}</strong> through <strong>{sunday}</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {hasSupabaseEnv && events.length > 0 ? (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="events-empty-card weekend-ideas">
              <h2>No approved events are listed for this weekend yet.</h2>
              <p>
                That does not mean there is nothing to do. Mount Ida is still an easy weekend base
                for crystal digging, Lake Ouachita, scenic drives, local restaurants, and quiet cabin stays.
              </p>

              <div className="weekend-idea-grid">
                <Link href="/crystal-mining">Plan a crystal mining day →</Link>
                <Link href="/lake-ouachita">Spend time at Lake Ouachita →</Link>
                <Link href="/restaurants">Find a local place to eat →</Link>
                <Link href="/cabins">Browse cabins and places to stay →</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
