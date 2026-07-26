"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface MetricCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  className?: string
  durationMs?: number
}

export function MetricCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  className,
  durationMs = 1600,
}: MetricCounterProps) {
  const [display, setDisplay] = useState(0)
  const reducedMotion = useReducedMotion()
  const started = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(value)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(value * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [durationMs, reducedMotion, value])

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <p className="display-tight font-display text-4xl font-bold text-orange-vivid md:text-5xl">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="text-sm text-grey-mid">{label}</p>
    </div>
  )
}
