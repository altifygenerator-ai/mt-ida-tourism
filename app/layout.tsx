import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Mount Ida Arkansas | Crystal Mines, Lake Ouachita, Cabins & Things To Do",
  description:
    "Explore Mount Ida, Arkansas with local guides to crystal mines, Lake Ouachita, cabins, restaurants, local history, and things to do in the Ouachita Mountains.",
}

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
      </body>
    </html>
  )
}