import Link from "next/link";
import type { EventRecord } from "@/lib/supabase/events";
import { formatEventDate, formatEventTime, getEventDescription } from "@/lib/supabase/events";

export default function EventCard({ event }: { event: EventRecord }) {
  const time = formatEventTime(event);
  const description = getEventDescription(event);

  return (
    <Link href={`/events/${event.slug}`} className="event-card group">
      {event.image_url ? (
        <div className="event-card-image">
          <img src={event.image_url} alt={event.title} />
        </div>
      ) : null}

      <div className="event-card-body">
        <div className="event-card-meta">
          <span>{formatEventDate(event)}</span>
          {event.category ? <span>{event.category}</span> : null}
        </div>

        <h3>{event.title}</h3>

        <p>{description}</p>

        <div className="event-card-details">
          {time ? <span>{time}</span> : null}
          {event.location_name ? <span>{event.location_name}</span> : null}
          {event.city ? <span>{event.city}</span> : null}
        </div>

        <span className="event-card-link">View event →</span>
      </div>
    </Link>
  );
}
