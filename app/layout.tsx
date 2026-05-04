import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const siteUrl = "https://glenwoodarkansas.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "5y-62wLg0SUv41YcFBP_4MEIRwruudOrbLLSYE9dcPM",
  },

  title: {
    default:
      "Mount Ida Arkansas Tourism | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
    template: "%s | Mount Ida Arkansas",
  },

  description:
    "Explore Mount Ida, Arkansas with local guides to crystal mines, Lake Ouachita, cabins, restaurants, local businesses, history, and things to do in the Ouachita Mountains.",

  keywords: [
    "Mount Ida Arkansas",
    "Mount Ida AR",
    "Mount Ida tourism",
    "things to do in Mount Ida Arkansas",
    "Mount Ida crystal mines",
    "Quartz Capital of the World",
    "Lake Ouachita",
    "Lake Ouachita cabins",
    "Mount Ida cabins",
    "Mount Ida restaurants",
    "Ouachita Mountains",
  ],

  openGraph: {
    title:
      "Mount Ida Arkansas Tourism | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
    description:
      "Plan a Mount Ida trip with guides to crystal mines, Lake Ouachita, cabins, restaurants, history, and local businesses.",
    url: "https://mt-ida-tourism.vercel.app/",
    siteName: "Mount Ida Arkansas Tourism",
    images: [
      {
        url: "/images/mt-ida-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Ida Arkansas tourism guide",
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
      "Explore Mount Ida, Arkansas with crystal mines, Lake Ouachita, cabins, restaurants, and things to do.",
    images: ["/images/mt-ida-hero.jpg"],
  },

   alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
  )
}