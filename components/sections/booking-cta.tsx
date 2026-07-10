"use client"

import { useState } from "react"
import { DayPicker } from "react-day-picker"
import { siteContent } from "@/lib/content"
import { getBookingEmbedConfig } from "@/lib/booking"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionReveal } from "@/components/motion/section-reveal"
import { Button } from "@/components/ui/button"
import { BookingEmbed } from "@/components/sections/booking-embed"
import { cn } from "@/lib/utils"

const TIME_SLOTS = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"]

const CALENDAR_PANEL_MIN_H = "min-h-[360px]"

export function BookingCta() {
  const embed = getBookingEmbedConfig(siteContent.booking.calendlyUrl)
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const bookingHref =
    siteContent.booking.calendlyUrl ?? siteContent.booking.emailHref

  return (
    <SectionContainer id="booking" className="pb-16 md:pb-24">
      <SectionReveal className="min-w-0">
        <div className="min-w-0 rounded-lg border border-hairline bg-surface-1 p-6 sm:p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl md:text-[1.75rem]">
              {siteContent.booking.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {siteContent.booking.subtext}
            </p>
          </div>

          {embed ? (
            <div className="mt-8 min-w-0 sm:mt-10">
              <BookingEmbed config={embed} />
            </div>
          ) : (
            <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-[minmax(0,320px)_1fr]">
              <div
                className={cn(
                  "min-w-0 overflow-hidden rounded-lg border border-hairline bg-surface-3 p-3 sm:p-4",
                  CALENDAR_PANEL_MIN_H
                )}
              >
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  disabled={{ before: new Date() }}
                  classNames={{
                    root: "w-full text-ink",
                    months: "w-full",
                    month: "w-full",
                    month_caption:
                      "mb-3 flex items-center justify-between text-sm font-medium text-ink",
                    weekdays: "grid grid-cols-7 text-xs text-ink-subtle",
                    weekday: "py-2 text-center",
                    week: "grid grid-cols-7",
                    day: "p-0 text-center",
                    day_button: cn(
                      "mx-auto flex size-11 items-center justify-center rounded-md text-sm text-ink-muted",
                      "hover:bg-surface-2 hover:text-ink"
                    ),
                    selected:
                      "[&>button]:bg-primary [&>button]:text-white [&>button]:hover:bg-primary-hover",
                    today:
                      "[&>button]:border [&>button]:border-hairline-strong",
                    outside: "[&>button]:text-ink-tertiary",
                    disabled: "[&>button]:opacity-30",
                  }}
                />
              </div>

              <div className="min-w-0 space-y-6">
                <div>
                  <p className="text-sm font-medium text-ink">Available times</p>
                  <p className="mt-1 text-xs text-ink-subtle">
                    {selectedDay
                      ? selectedDay.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })
                      : "Select a date"}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                          "min-h-11 rounded-md border px-4 py-2.5 text-sm transition-colors",
                          selectedTime === slot
                            ? "border-primary bg-primary text-white"
                            : "border-hairline bg-surface-2 text-ink-muted hover:border-hairline-strong hover:text-ink"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-hairline bg-surface-3 p-4 text-sm text-ink-muted">
                  <p>
                    Selected:{" "}
                    <span className="text-ink">
                      {selectedDay && selectedTime
                        ? `${selectedDay.toLocaleDateString("en-US")} at ${selectedTime}`
                        : "Choose a date and time slot"}
                    </span>
                  </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                  <a href={bookingHref}>Request Strategy Call via Email</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </SectionReveal>
    </SectionContainer>
  )
}
