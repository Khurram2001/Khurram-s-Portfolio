export type BookingProvider = "cal.com" | "calendly"

export interface BookingEmbedConfig {
  provider: BookingProvider
  /** Sanitized iframe src — no third-party script tags required. */
  iframeSrc: string
  /** Explicit height reserves space before iframe paints (CLS guard). */
  height: number
}

const EMBED_HEIGHT = 630

/**
 * Builds a CLS-safe iframe embed URL for Cal.com or Calendly.
 * Returns null when no booking URL is configured.
 */
export function getBookingEmbedConfig(
  bookingUrl: string | null | undefined
): BookingEmbedConfig | null {
  if (!bookingUrl) return null

  let parsed: URL
  try {
    parsed = new URL(bookingUrl)
  } catch {
    return null
  }

  const host = parsed.hostname.replace(/^www\./, "")

  if (host === "cal.com" || host.endsWith(".cal.com")) {
    const path = parsed.pathname.replace(/^\//, "")
    if (!path) return null
    return {
      provider: "cal.com",
      iframeSrc: `https://cal.com/${path}?embed=true&theme=dark&layout=month_view`,
      height: EMBED_HEIGHT,
    }
  }

  if (host === "calendly.com" || host.endsWith(".calendly.com")) {
    const path = parsed.pathname.replace(/^\//, "")
    if (!path) return null
    return {
      provider: "calendly",
      iframeSrc: `https://calendly.com/${path}?hide_gdpr_banner=1&background_color=18191a&text_color=f7f8f8&primary_color=5e6ad2`,
      height: EMBED_HEIGHT,
    }
  }

  return null
}
