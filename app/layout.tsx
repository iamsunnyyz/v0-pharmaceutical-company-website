import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PharmaCorp - Leading Healthcare Innovation",
  description:
    "A global pharmaceutical company dedicated to improving lives through innovative healthcare solutions, research, and sustainable practices.",
  generator: "v0.app",
  keywords: "pharmaceutical, healthcare, innovation, research, medicine, global health",
  authors: [{ name: "PharmaCorp" }],
  openGraph: {
    title: "PharmaCorp - Leading Healthcare Innovation",
    description:
      "A global pharmaceutical company dedicated to improving lives through innovative healthcare solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
