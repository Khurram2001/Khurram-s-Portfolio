"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionReveal } from "@/components/motion/section-reveal"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

const PIPELINE_STEPS = ["INIT", "RETRIEVE", "GENERATE", "COMPLETE"] as const

const TERMINAL_LINES = [
  "$ papu-api --pipeline multi-model --model veo-3",
  "→ Authenticating Firebase session... OK",
  "→ Retrieving user credits from Firestore... OK",
  "→ Routing to Google Veo 3 generation endpoint...",
  "→ Streaming response tokens [████████████████] 100%",
  "",
  "RESULT: Cinematic video render queued — job_id: vx_8f2a91",
  "LATENCY: 142ms | TOKENS: 1,847 | COST_DELTA: -32%",
]

const METRICS = [
  { label: "Latency", value: 142, suffix: "ms" },
  { label: "Token Efficiency", value: 32, suffix: "%", prefix: "+" },
  { label: "Active RAG Vectors", value: 1.2, suffix: "M" },
]

function useTypewriter(lines: string[], enabled: boolean) {
  const [displayText, setDisplayText] = useState("")
  const fullText = lines.join("\n")

  useEffect(() => {
    if (!enabled) {
      setDisplayText(fullText)
      return
    }

    let index = 0
    setDisplayText("")

    const interval = window.setInterval(() => {
      index += 1
      setDisplayText(fullText.slice(0, index))
      if (index >= fullText.length) {
        window.clearInterval(interval)
      }
    }, 28)

    return () => window.clearInterval(interval)
  }, [enabled, fullText])

  return displayText
}

function MetricToken({
  label,
  value,
  suffix,
  prefix = "",
  animate,
}: {
  label: string
  value: number
  suffix: string
  prefix?: string
  animate: boolean
}) {
  const [display, setDisplay] = useState(animate ? 0 : value)

  useEffect(() => {
    if (!animate) {
      setDisplay(value)
      return
    }

    const start = performance.now()
    const duration = 300

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(value * progress)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [animate, value])

  const formatted =
    suffix === "M"
      ? `${prefix}${display.toFixed(1)}${suffix}`
      : `${prefix}${Math.round(display)}${suffix}`

  return (
    <div className="rounded-md border border-hairline bg-surface-2 px-3 py-2">
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="font-mono text-sm text-ink">{formatted}</p>
    </div>
  )
}

export function AiDashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion()
  const displayText = useTypewriter(TERMINAL_LINES, inView && !reducedMotion)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!inView || reducedMotion) {
      setActiveStep(PIPELINE_STEPS.length - 1)
      return
    }

    let step = 0
    const interval = window.setInterval(() => {
      step = Math.min(step + 1, PIPELINE_STEPS.length - 1)
      setActiveStep(step)
      if (step >= PIPELINE_STEPS.length - 1) {
        window.clearInterval(interval)
      }
    }, 800)

    return () => window.clearInterval(interval)
  }, [inView, reducedMotion])

  return (
    <SectionContainer id="dashboard" className="pb-16 md:pb-24">
      <SectionReveal>
        <div
          ref={ref}
          className="overflow-hidden rounded-xl border border-hairline bg-surface-1 p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
            <div>
              <p className="text-sm font-medium text-ink">AI Pipeline Monitor</p>
              <p className="text-xs text-ink-subtle">
                Live inference trace · PAPU.AI production stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PIPELINE_STEPS.map((step, index) => (
                <span
                  key={step}
                  className={cn(
                    "rounded-sm px-2 py-1 font-mono text-xs",
                    index <= activeStep
                      ? "bg-primary/15 text-ink"
                      : "bg-surface-3 text-ink-tertiary"
                  )}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
            <div className="rounded-lg bg-surface-3 p-4">
              <pre className="min-h-[220px] whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink-muted">
                {displayText}
                {!reducedMotion && inView ? (
                  <span className="animate-cursor-blink text-primary">▋</span>
                ) : null}
              </pre>
            </div>

            <div className="space-y-3">
              {METRICS.map((metric) => (
                <MetricToken
                  key={metric.label}
                  {...metric}
                  animate={inView && !reducedMotion}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 rounded-lg border border-hairline bg-surface-3 p-4 font-mono text-xs text-ink-subtle"
          >
            <p>
              POST /api/v1/generate {"{"} model: &quot;veo-3&quot;, credits: 12,
              stream: true {"}"}
            </p>
            <p className="mt-2 text-semantic-success">
              200 OK · firebase_sync · stripe_metered · 99.2% uptime
            </p>
          </motion.div>
        </div>
      </SectionReveal>
    </SectionContainer>
  )
}
