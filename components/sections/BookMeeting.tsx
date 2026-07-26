"use client"

import Script from "next/script"
import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { siteCopy } from "@/lib/resume"

const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "khurramzaman"

export function BookMeeting() {
  const { bookMeeting } = siteCopy

  return (
    <section id="book" className="section-pad bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{bookMeeting.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-4 text-3xl font-bold text-ink md:text-4xl">
            {bookMeeting.heading}
          </h2>
          <p className="mb-6 text-grey-mid">{bookMeeting.body}</p>
          <ul className="flex flex-col gap-3">
            {bookMeeting.expectations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-orange-vivid" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={100}>
          <div
            className="h-[600px] w-full overflow-y-auto rounded-xl border border-grey-light bg-white"
            data-cal-link={calLink}
            data-cal-config='{"layout":"month_view"}'
          />
        </Reveal>
      </div>

      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
