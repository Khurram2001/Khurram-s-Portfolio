"use client"

import { useState } from "react"
import { DayPicker } from "react-day-picker"
import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionReveal } from "@/components/motion/section-reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TIME_SLOTS = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"]

export function BookingCta() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const bookingHref =
    siteContent.booking.calendlyUrl ?? siteContent.booking.emailHref

  return (
    <SectionContainer id="booking" className="pb-16 md:pb-24">
      <SectionReveal>
        <div className="rounded-lg border border-hairline bg-surface-1 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,1.75rem)] font-semibold tracking-[-0.02em] text-ink">
              {siteContent.booking.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {siteContent.booking.subtext}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr]">
            <div className="rounded-lg border border-hairline bg-surface-3 p-4">
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
                    "mx-auto flex size-9 items-center justify-center rounded-md text-sm text-ink-muted",
                    "hover:bg-surface-2 hover:text-ink"
                  ),
                  selected:
                    "[&>button]:bg-primary [&>button]:text-white [&>button]:hover:bg-primary-hover",
                  today: "[&>button]:border [&>button]:border-hairline-strong",
                  outside: "[&>button]:text-ink-tertiary",
                  disabled: "[&>button]:opacity-30",
                }}
              />
            </div>

            <div className="space-y-6">
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
                        "rounded-md border px-3 py-2 text-sm transition-colors min-h-10",
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
                <a href={bookingHref}>
                  {siteContent.booking.calendlyUrl
                    ? "Confirm Booking"
                    : "Request Strategy Call via Email"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </SectionContainer>
  )
}
