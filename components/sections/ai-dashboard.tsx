"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { siteContent } from "@/lib/content"
import {
  buildTerminalBlock,
  INITIAL_METRICS,
  nextMetrics,
  PIPELINE_SCENARIOS,
  PIPELINE_STEPS,
  type LiveMetrics,
  type PipelineScenario,
} from "@/lib/pipeline-sim"
import { SectionContainer } from "@/components/layout/section-container"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"
import { FadeUp } from "@/src/components/FadeUp"

function MetricToken({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="min-w-0 rounded-md border border-hairline bg-surface-2 px-3 py-2">
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="font-mono text-sm tabular-nums text-ink">{value}</p>
    </div>
  )
}

function formatMetrics(metrics: LiveMetrics) {
  return {
    latency: `${metrics.latencyMs}ms`,
    efficiency: `+${metrics.tokenEfficiency}%`,
    vectors: `${metrics.ragVectorsM.toFixed(2)}M`,
  }
}

export function AiDashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion()

  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [streamPct, setStreamPct] = useState(42)
  const [metrics, setMetrics] = useState<LiveMetrics>(INITIAL_METRICS)
  const [terminalText, setTerminalText] = useState("")
  const [footer, setFooter] = useState({
    endpoint: PIPELINE_SCENARIOS[0].endpoint,
    status: PIPELINE_SCENARIOS[0].status,
  })

  const scenario: PipelineScenario = PIPELINE_SCENARIOS[scenarioIndex]
  const formatted = formatMetrics(metrics)
  const live = inView && !reducedMotion

  useEffect(() => {
    if (!live) return
    const id = window.setInterval(() => {
      setMetrics((prev) => nextMetrics(prev))
    }, 1000)
    return () => window.clearInterval(id)
  }, [live])

  useEffect(() => {
    if (!live) {
      setActiveStep(PIPELINE_STEPS.length - 1)
      return
    }
    const id = window.setInterval(() => {
      setActiveStep((s) => (s + 1) % PIPELINE_STEPS.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [live])

  useEffect(() => {
    if (!live) {
      setStreamPct(100)
      return
    }
    const id = window.setInterval(() => {
      setStreamPct((p) => {
        if (p >= 100) return 100
        const bump = 4 + Math.floor(Math.random() * 9)
        return Math.min(100, p + bump)
      })
    }, 900)
    return () => window.clearInterval(id)
  }, [live, scenarioIndex])

  useEffect(() => {
    const block = buildTerminalBlock(scenario, metrics, streamPct)
    setTerminalText(block)
    setFooter({
      endpoint: scenario.endpoint,
      status: scenario.status,
    })
  }, [scenario, metrics, streamPct])

  useEffect(() => {
    if (!live) {
      setTerminalText(
        buildTerminalBlock(PIPELINE_SCENARIOS[0], INITIAL_METRICS, 100)
      )
      return
    }

    const rotate = window.setInterval(() => {
      setScenarioIndex((i) => (i + 1) % PIPELINE_SCENARIOS.length)
      setStreamPct(18 + Math.floor(Math.random() * 20))
      setActiveStep(0)
    }, 14000)

    return () => window.clearInterval(rotate)
  }, [live])

  return (
    <SectionContainer id="dashboard" className="pb-16 md:pb-24">
      <FadeUp delay={0.15} className="min-w-0">
        <p className="mb-3 text-[13px] text-ink-subtle">
          {siteContent.dashboardCaption}
        </p>
        <div
          ref={ref}
          className="min-w-0 overflow-hidden rounded-xl border border-hairline bg-surface-1 p-4 sm:p-6"
        >
          <div className="mb-4 flex flex-col gap-3 border-b border-hairline pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">AI Pipeline Monitor</p>
              <p className="mt-0.5 text-[11px] text-ink-tertiary sm:text-xs">
                RAG · agents · multi-model orchestration
              </p>
            </div>
            <div className="flex min-w-0 flex-wrap gap-2">
              {PIPELINE_STEPS.map((step, index) => (
                <span
                  key={step}
                  className={cn(
                    "rounded-sm px-2 py-1 font-mono text-[11px] transition-colors duration-300 sm:text-xs",
                    index === activeStep
                      ? "bg-primary/20 text-ink ring-1 ring-primary/30"
                      : index < activeStep
                        ? "bg-primary/10 text-ink-muted"
                        : "bg-surface-3 text-ink-tertiary"
                  )}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="min-w-0 overflow-hidden rounded-lg bg-surface-3 p-3 sm:p-4">
              <div className="overflow-x-auto">
                <pre className="min-h-[200px] min-w-0 whitespace-pre font-mono text-xs leading-relaxed text-ink-muted sm:min-h-[240px] sm:text-[13px]">
                  {terminalText}
                  {live ? (
                    <span className="animate-cursor-blink text-primary">?</span>
                  ) : null}
                </pre>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <MetricToken label="Latency" value={formatted.latency} />
              <MetricToken
                label="Token Efficiency"
                value={formatted.efficiency}
              />
              <MetricToken
                label="Active RAG Vectors"
                value={formatted.vectors}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 min-w-0 overflow-hidden rounded-lg border border-hairline bg-surface-3 p-3 sm:p-4"
          >
            <div className="overflow-x-auto font-mono text-[11px] text-ink-subtle sm:text-xs">
              <p className="whitespace-nowrap sm:whitespace-normal">
                {footer.endpoint}
              </p>
              <p className="mt-2 whitespace-nowrap text-semantic-success sm:whitespace-normal">
                {footer.status}
              </p>
            </div>
          </motion.div>
        </div>
      </FadeUp>
    </SectionContainer>
  )
}

