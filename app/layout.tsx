import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Khurram Zaman | Full Stack Developer",
  description:
    "Full Stack Developer specializing in web applications, hybrid mobile apps, and AI-powered automation solutions.",
  keywords: ["Full Stack Developer", "React", "React Native", "Node.js", "Python", "AI Automation"],
  authors: [{ name: "Khurram Zaman" }],
  openGraph: {
    title: "Khurram Zaman | Full Stack Developer",
    description: "Building intelligent, scalable, and automated solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
