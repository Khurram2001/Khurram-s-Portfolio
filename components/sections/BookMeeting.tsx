"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

// Hardcoded — not from env
const CAL_LINK = "khurramzaman/15min"

export function BookMeeting() {
  useEffect(() => {
    if (typeof window === "undefined") return
    ;(async () => {
      const cal = await getCalApi({ namespace: "booking" })
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#E56515" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <section id="book" className="scroll-mt-20 bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium tracking-widest text-[#919599] uppercase">
              Book a Call
            </p>
            <h2 className="mb-6 text-4xl leading-tight font-bold text-[#111111]">
              Let&apos;s talk about
              <br className="hidden sm:block" /> your project
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-[#919599]">
              A focused 15-minute call to map scope, stack, and timeline. No pressure —
              just clarity on whether we&apos;re a fit.
            </p>
            <ul className="mb-10 space-y-4">
              {[
                "15-minute intro call",
                "Clear next steps and rough timeline",
                "Honest fit check either way",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#111111]">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E56515]" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              data-cal-namespace="booking"
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-3 rounded-[6px] bg-[#E56515] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#c8570f] active:scale-[0.99]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a free 15-min call
            </button>

            <p className="mt-4 text-xs text-[#919599]">
              Or email directly:{" "}
              <a
                href="mailto:khurramzaman2001@gmail.com"
                className="text-[#E56515] hover:underline"
              >
                khurramzaman2001@gmail.com
              </a>
            </p>
          </div>

          <div className="hidden flex-col gap-4 lg:flex">
            <div className="rounded-[12px] border border-[#CDCDCB] bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-[#111111]">
                  Currently available for new projects
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#919599]">
                Taking on new clients for Q3 2026. Typical response time within one business
                day.
              </p>
            </div>

            <div className="rounded-[12px] border border-[#CDCDCB] bg-white p-6">
              <p className="mb-4 text-xs font-medium tracking-widest text-[#919599] uppercase">
                What happens after you book
              </p>
              <div className="space-y-4">
                {[
                  { step: "01", text: "You pick a time slot that works for you" },
                  { step: "02", text: "We hop on a 15-min call — no prep needed" },
                  {
                    step: "03",
                    text: "I send a written summary + rough estimate within 24h",
                  },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 w-4 flex-shrink-0 font-mono text-xs font-semibold text-[#E56515]">
                      {step}
                    </span>
                    <span className="text-sm leading-relaxed text-[#111111]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
