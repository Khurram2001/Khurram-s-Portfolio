/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://khurramsportfolio.netlify.app"

export const siteMetadata = {
  title: "Khurram Zaman — Full Stack Developer & AI Integration Engineer",
  description:
    "Full Stack + AI engineer specialising in React, Next.js, and FastAPI. I take ideas from spec to deployed, monetised product — fast.",
  ogImage: {
    url: "/opengraph-image.png",
    width: 512,
    height: 512,
    alt: "Khurram Zaman — Full Stack Developer & AI Integration Engineer",
  },
} as const
