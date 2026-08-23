import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Submit a Mount Ida Event | Local Calendar & Visitor Events",
  description:
    "Submit a Mount Ida event, community gathering, market, music night, holiday event, or visitor-friendly activity for the local events calendar.",
  alternates: {
    canonical: "/submit-event",
  },
};

export default function SubmitEventLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Submit a Mount Ida Event",
          description:
            "A page for submitting local events, markets, music, community happenings, and visitor-friendly activities for the Mount Ida events calendar.",
          url: "https://www.mountidaarkansas.org/submit-event",
        }}
      />
      {children}
    </>
  );
}
