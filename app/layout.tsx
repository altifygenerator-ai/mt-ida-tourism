import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://mountidaarkansas.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "5y-62wLg0SUv41YcFBP_4MEIRwruudOrbLLSYE9dcPM",
  },

  title: {
    default:
      "Mount Ida Arkansas Tourism | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
    template: "%s | Mount Ida Arkansas Tourism",
  },

  description:
    "Plan a trip to Mount Ida, Arkansas with local guides to crystal mines, Lake Ouachita, cabins, restaurants, local businesses, history, scenic drives, fishing, camping, and things to do in the Ouachita Mountains.",

  keywords: [
    "Mount Ida Arkansas",
    "Mount Ida AR",
    "Mount Ida tourism",
    "Mount Ida Arkansas tourism",
    "things to do in Mount Ida Arkansas",
    "things to do in Mount Ida AR",
    "Mount Ida crystal mines",
    "crystal mines Mount Ida Arkansas",
    "quartz mines Mount Ida Arkansas",
    "Quartz Capital of the World",
    "Lake Ouachita",
    "Lake Ouachita Arkansas",
    "Lake Ouachita cabins",
    "Lake Ouachita camping",
    "Lake Ouachita fishing",
    "Mount Ida cabins",
    "cabins in Mount Ida Arkansas",
    "Mount Ida restaurants",
    "restaurants in Mount Ida Arkansas",
    "Ouachita Mountains",
    "Ouachita National Forest",
    "Arkansas crystal hunting",
    "Arkansas mountain getaway",
    "Mount Ida local businesses",
    "Mount Ida history",
  ],

  applicationName: "Mount Ida Arkansas Tourism",
  authors: [{ name: "Mount Ida Arkansas Tourism" }],
  creator: "Mount Ida Arkansas Tourism",
  publisher: "Mount Ida Arkansas Tourism",

  category: "travel",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Mount Ida Arkansas Tourism | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
    description:
      "Explore Mount Ida, Arkansas with guides to crystal mines, Lake Ouachita, cabins, restaurants, local businesses, history, and outdoor attractions in the Ouachita Mountains.",
    url: siteUrl,
    siteName: "Mount Ida Arkansas Tourism",
    images: [
      {
        url: "/images/mt-ida-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Ida Arkansas tourism guide with Lake Ouachita and Ouachita Mountain scenery",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mount Ida Arkansas Tourism | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
    description:
      "Plan a Mount Ida, Arkansas trip with crystal mines, Lake Ouachita, cabins, restaurants, camping, fishing, history, and things to do.",
    images: ["/images/mt-ida-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}