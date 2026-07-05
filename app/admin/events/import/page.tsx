import Link from "next/link";
import QuickImportForm from "@/components/events/QuickImportForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Quick Import Mount Ida Events",
  robots: { index: false, follow: false },
};

export default function ImportEventsPage() {
  return (
    <main className="admin-page-shell">
      <section className="admin-hero-card">
        <p className="eyebrow">Mount Ida Event Admin</p>
        <h1>Quick import an event.</h1>
        <p>
          Paste a local event post, flyer text, venue listing, or messy copy. The importer saves it as pending so you can review it before it goes live.
        </p>
        <div className="admin-hero-actions">
          <Link href="/admin/events" className="btn btn-light">
            Back to Events
          </Link>
          <Link href="/admin/events/sources" className="btn btn-light">
            Manage Sources
          </Link>
        </div>
      </section>

      <QuickImportForm />
    </main>
  );
}
