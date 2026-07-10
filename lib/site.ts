/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yoursite.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://khurramsportfolio.netlify.app"

export const siteMetadata = {
  title: "Khurram Zaman — Full Stack AI Engineer",
  description:
    "Specializing in custom RAG pipelines, production-grade AI integrations, and high-performance full-stack cloud applications.",
  ogImage: {
    url: "/opengraph-image.png",
    width: 512,
    height: 512,
    alt: "Khurram Zaman — Full Stack AI Engineer",
  },
} as const
