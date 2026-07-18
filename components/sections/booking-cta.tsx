import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/motion/fade-up"

const CAL_URL = "https://cal.com/khurramzaman"

const GMAIL_SUBJECT = "Project Inquiry"
const GMAIL_BODY = `Hi Khurram,

I'd like to discuss a potential project.

`

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  siteContent.booking.email
)}&su=${encodeURIComponent(GMAIL_SUBJECT)}&body=${encodeURIComponent(
  GMAIL_BODY
)}`

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
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              {siteContent.booking.email}
            </a>
          </p>
        </div>
      </FadeUp>
    </SectionContainer>
  )
}
