import Link from "next/link";
import EventSourceManager from "@/components/events/EventSourceManager";
import { getEventSourcesForAdmin, getRecentEventImportRuns } from "@/lib/events";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mount Ida Event Sources",
  robots: { index: false, follow: false },
};

export default async function EventSourcesPage() {
  const [sources, runs] = await Promise.all([
    getEventSourcesForAdmin("mount-ida"),
    getRecentEventImportRuns(20, "mount-ida"),
  ]);

  return (
    <main className="admin-page-shell">
      <section className="admin-hero-card">
        <p className="eyebrow">Mount Ida Event Admin</p>
        <h1>Automated event sources.</h1>
        <p>
          Add trusted Mount Ida, Lake Ouachita, crystal mining, chamber, venue, and community event pages. Imports save as pending with site = mount-ida so they do not mix with Glenwood events.
        </p>
        <div className="admin-hero-actions">
          <Link href="/admin/events" className="btn btn-light">
            Back to Events
          </Link>
          <Link href="/admin/events/import" className="btn btn-light">
            Quick Import
          </Link>
        </div>
      </section>

      <EventSourceManager sources={sources || []} runs={runs || []} />
    </main>
  );
}
