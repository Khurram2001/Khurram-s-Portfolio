"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: 0 | 100 | 200 | 300
}

const delayClass: Record<NonNullable<RevealProps["delayMs"]>, string> = {
  0: "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reducedMotion) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div ref={ref} className={cn("reveal", delayClass[delayMs], className)}>
      {children}
    </div>
  )
}
