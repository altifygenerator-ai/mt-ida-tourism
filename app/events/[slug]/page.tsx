import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatEventDate,
  formatEventTime,
  getApprovedEventBySlug,
  getEventDescription,
} from "@/lib/supabase/events";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getApprovedEventBySlug(slug);

  if (!event) {
    return {
      title: "Mount Ida Event",
    };
  }

  return {
    title: event.title,
    description: getEventDescription(event),
    openGraph: {
      title: event.title,
      description: getEventDescription(event),
      images: event.image_url ? [event.image_url] : undefined,
    },
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getApprovedEventBySlug(slug);

  if (!event) notFound();

  const time = formatEventTime(event);
  const description = getEventDescription(event);

  return (
    <main>
      <section className="event-detail-hero">
        {event.image_url ? (
          <img src={event.image_url} alt={event.title} className="event-detail-bg" />
        ) : null}
        <div className="event-detail-overlay" />

        <div className="container event-detail-content">
          <Link href="/events" className="event-back-link">
            ← Back to events
          </Link>
          <p className="eyebrow">Mount Ida Event</p>
          <h1>{event.title}</h1>
          <p>{formatEventDate(event)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container event-detail-grid">
          <article className="event-detail-main">
            <h2>Event Details</h2>
            <p>{description}</p>

            {event.source_url ? (
              <a
                href={event.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Original Event Info
              </a>
            ) : null}
          </article>

          <aside className="event-detail-sidebar">
            <h3>Quick Info</h3>
            <dl>
              <div>
                <dt>Date</dt>
                <dd>{formatEventDate(event)}</dd>
              </div>

              {time ? (
                <div>
                  <dt>Time</dt>
                  <dd>{time}</dd>
                </div>
              ) : null}

              {event.location_name ? (
                <div>
                  <dt>Location</dt>
                  <dd>{event.location_name}</dd>
                </div>
              ) : null}

              {event.address ? (
                <div>
                  <dt>Address</dt>
                  <dd>{event.address}</dd>
                </div>
              ) : null}

              {event.city ? (
                <div>
                  <dt>City</dt>
                  <dd>{event.city}</dd>
                </div>
              ) : null}

              {event.category ? (
                <div>
                  <dt>Category</dt>
                  <dd>{event.category}</dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
