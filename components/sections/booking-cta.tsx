import Link from "next/link"
import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/src/components/FadeUp"

const CAL_URL = "https://cal.com/khurramzaman"

export function BookingCta() {
  return (
    <SectionContainer id="booking" major>
      <FadeUp>
        <div className="mx-auto flex min-w-0 max-w-xl flex-col items-center text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-[1.75rem]">
            {siteContent.booking.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteContent.booking.subtext}
          </p>

          <Button asChild className="mt-8 w-full sm:w-auto">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
              {siteContent.booking.ctaLabel}
            </a>
          </Button>

          <p className="mt-6 text-sm text-ink-subtle">
            Or email me directly at{" "}
            <Link
              href={siteContent.booking.emailHref}
              className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              {siteContent.booking.email}
            </Link>
          </p>
        </div>
      </FadeUp>
    </SectionContainer>
  )
}
