"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface MetricCounterProps {
  target: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
}

export function MetricCounter({
  target,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
}: MetricCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 py-6 sm:py-0">
      <span className="text-5xl font-black text-[#E56515] tabular-nums">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="text-center text-sm font-medium tracking-widest text-[#919599] uppercase">
        {label}
      </span>
    </div>
  )
}
