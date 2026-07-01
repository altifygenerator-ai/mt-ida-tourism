import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Promote Your Mount Ida Business | Get Listed in the Local Guide",
  description:
    "Contact the Mount Ida Arkansas guide about business listings, featured placement, local visibility, visitor promotion, and updates to the guide.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Promote Your Mount Ida Business",
          description:
            "Contact the Mount Ida Arkansas guide about business listings, featured placement, visitor visibility, and local guide updates.",
          url: "https://mountidaarkansas.org/contact",
        }}
      />
      {children}
    </>
  );
}
