import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio — Updating Soon",
  description: "Portfolio is being updated. Will be live in 6–8 hours.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
