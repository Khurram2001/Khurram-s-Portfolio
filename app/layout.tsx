import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { Toaster } from "@/components/ui/sonner"
import { siteMetadata, siteUrl } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
})

export const viewport: Viewport = {
  themeColor: "#F8F8F8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s — Khurram Zaman`,
  },
  description: siteMetadata.description,
  applicationName: "Khurram Zaman Portfolio",
  authors: [{ name: "Khurram Zaman", url: siteUrl }],
  creator: "Khurram Zaman",
  keywords: [
    "Full Stack Developer",
    "AI Integration Engineer",
    "Next.js",
    "React",
    "FastAPI",
    "SaaS",
    "Stripe",
    "AWS",
    "Khurram Zaman",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khurram Zaman",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage.url,
        width: siteMetadata.ogImage.width,
        height: siteMetadata.ogImage.height,
        alt: siteMetadata.ogImage.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage.url],
    creator: "@Khurram2001",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-orange-vivid focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <LenisProvider>
          {children}
          <Toaster />
        </LenisProvider>
      </body>
    </html>
  )
}
