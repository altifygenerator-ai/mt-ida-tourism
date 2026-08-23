import type { Metadata } from "next";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import JsonLd from "@/components/JsonLd";
import { getApprovedEvents, getEventDescription, hasSupabaseEnv } from "@/lib/supabase/events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mount Ida Events | Local Calendar & Weekend Happenings",
  description:
    "Find Mount Ida, Arkansas events, local happenings, seasonal activities, community events, and visitor-friendly things to do around Lake Ouachita.",
  alternates: {
    canonical: "/events",
  },
};

export const revalidate = 300;

export default async function EventsPage() {
  const today = new Date().toISOString().slice(0, 10);
  const events = await getApprovedEvents({ fromDate: today });

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Mount Ida Events",
          description:
            "Upcoming Mount Ida, Arkansas events, local happenings, seasonal activities, community events, and visitor-friendly things to do around Lake Ouachita.",
          url: "https://www.mountidaarkansas.org/events",
          mainEntity: {
            "@type": "ItemList",
            name: "Upcoming Mount Ida events",
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
                url: `https://www.mountidaarkansas.org/events/${event.slug}`,
                location: event.location_name
                  ? {
                      "@type": "Place",
                      name: event.location_name,
                      address: event.address,
                    }
                  : undefined,
              },
            })),
          },
        }}
      />
      <section className="events-hero">
        <div className="container events-hero-grid">
          <div>
            <p className="eyebrow">Mount Ida Events</p>
            <h1>Local events, weekends, and things happening around Mount Ida.</h1>
            <p>
              Find community events, lake weekends, crystal mining activities,
              markets, music, seasonal gatherings, and other things to do around
              Mount Ida and the Ouachita Mountains.
            </p>

            <div className="events-hero-actions">
              <Link href="/submit-event" className="btn">
                Submit an Event
              </Link>
              <Link href="/this-weekend" className="btn btn-light">
                This Weekend
              </Link>
            </div>
          </div>

          <div className="events-hero-card">
            <p className="eyebrow">Community Calendar</p>
            <h2>Have something coming up?</h2>
            <p>
              Local events can be submitted for review. Markets, live music,
              family-friendly activities, fundraisers, outdoor events, and
              visitor-friendly happenings are all welcome.
            </p>
            <Link href="/submit-event" className="text-link">
              Share your event
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading events-heading-row">
            <div>
              <p className="eyebrow">Upcoming Around Town</p>
              <h2>Upcoming Events</h2>
              <p>
                A local look at what’s coming up around Mount Ida, Lake Ouachita,
                and the surrounding Ouachita Mountain area.
              </p>
            </div>

            <Link href="/submit-event" className="btn btn-light">
              Add an Event
            </Link>
          </div>

          {!hasSupabaseEnv ? (
            <div className="events-empty-card">
              <h3>Events are coming soon.</h3>
              <p>
                We’re getting the Mount Ida events calendar ready. Check back
                soon for local happenings, weekend events, and community updates.
              </p>
            </div>
          ) : events.length > 0 ? (
            <div className="events-grid">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="events-empty-card">
              <h3>No upcoming events are listed yet.</h3>
              <p>
                Know about a local event, market, live music night, fundraiser,
                lake activity, or community gathering? Send it in and help us
                keep this page useful for locals and visitors.
              </p>
              <Link href="/submit-event" className="btn">
                Submit an Event
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
