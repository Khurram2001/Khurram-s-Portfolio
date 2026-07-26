"use client"

import dynamic from "next/dynamic"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { siteCopy } from "@/lib/resume"

const Cal = dynamic(
  () => import("@calcom/embed-react").then((m) => m.default),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] animate-pulse rounded-[12px] bg-[#F8F8F8]" />
    ),
  }
)

export function BookMeeting() {
  const { bookMeeting } = siteCopy

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "portfolio" })
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#E56515" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <section id="book" className="scroll-mt-20 bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium tracking-widest text-[#919599] uppercase">
              {bookMeeting.eyebrow}
            </p>
            <h2 className="mb-6 text-4xl font-bold text-[#111111]">{bookMeeting.heading}</h2>
            <p className="mb-8 text-base leading-relaxed text-[#919599]">{bookMeeting.body}</p>
            <ul className="space-y-3">
              {bookMeeting.expectations.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#111111]">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E56515]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[12px] border border-[#CDCDCB]">
            <Cal
              namespace="portfolio"
              calLink="khurramzaman/15min"
              style={{ width: "100%", height: "600px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
