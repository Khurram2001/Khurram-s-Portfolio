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
  const hasAnimated = useRef(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView || hasAnimated.current || !target) return
    hasAnimated.current = true
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 py-6 sm:py-0">
      <span className="text-5xl font-black leading-none text-[#E56515] tabular-nums lg:text-6xl">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-center text-xs font-medium tracking-widest text-[#919599] uppercase">
        {label}
      </span>
    </div>
  )
}
