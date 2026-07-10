"use client"

import type { BookingEmbedConfig } from "@/lib/booking"
import { cn } from "@/lib/utils"

interface BookingEmbedProps {
  config: BookingEmbedConfig
}

/**
 * Iframe-only embed — no external <script> tags.
 * Fixed min-height prevents layout shift on initial load and mobile resize.
 */
export function BookingEmbed({ config }: BookingEmbedProps) {
  const mobileHeight = Math.min(config.height, 520)

  return (
    <div
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-lg border border-hairline bg-surface-3",
        "min-h-[480px] md:min-h-[630px]"
      )}
    >
      <iframe
        src={config.iframeSrc}
        title={`Book a strategy call via ${config.provider}`}
        width="100%"
        height={config.height}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="block h-[480px] w-full border-0 md:h-[630px]"
        style={{ minHeight: mobileHeight }}
      />
    </div>
  )
}
