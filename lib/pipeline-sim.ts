export const PIPELINE_STEPS = ["INIT", "RETRIEVE", "GENERATE", "COMPLETE"] as const

export type PipelineStep = (typeof PIPELINE_STEPS)[number]

export interface PipelineScenario {
  id: string
  command: string
  trace: string[]
  endpoint: string
  status: string
}

/** Rotating production-style pipeline traces — not tied to a single product. */
export const PIPELINE_SCENARIOS: PipelineScenario[] = [
  {
    id: "rag-query",
    command: "$ rag-api query --index client-kb --top-k 12 --hybrid",
    trace: [
      "→ Embedding query vector (text-embedding-3-small)... OK",
      "→ Hybrid search: pgvector + BM25 fusion... 12 chunks",
      "→ Reranking cross-encoder scores... top 6 retained",
      "→ Context window assembled — 4,096 tokens",
      "→ Streaming completion to client...",
    ],
    endpoint:
      'POST /api/v1/rag/query { index: "client-kb", top_k: 12, hybrid: true }',
    status: "200 OK · pgvector · reranker · cache_hit 94%",
  },
  {
    id: "doc-ingest",
    command: "$ pipeline ingest --source s3://research-corpus --chunk 512",
    trace: [
      "→ Parsing 847 documents (PDF, CSV, DOCX)... OK",
      "→ Chunking + metadata extraction... 12,440 segments",
      "→ Batch embedding upload to vector store...",
      "→ Index sync complete — latency_p99: 148ms",
      "→ Ingestion job queued — job_id: ing_a3f91c",
    ],
    endpoint:
      'POST /api/v1/ingest { source: "s3", chunk_size: 512, async: true }',
    status: "202 Accepted · aws_s3 · batch_embed · 12.4k vectors",
  },
  {
    id: "multi-model",
    command: "$ orchestrator run --pipeline multi-model --route semantic",
    trace: [
      "→ Auth + rate-limit check... OK",
      "→ Semantic router selected: fastapi-worker-02",
      "→ Fan-out to 3 model endpoints (image, text, video)",
      "→ Aggregating responses — token budget 2,140",
      "→ Webhook dispatch + billing meter tick... OK",
    ],
    endpoint:
      'POST /api/v1/orchestrate { models: ["gpt-4o", "veo-3"], stream: true }',
    status: "200 OK · stripe_metered · firebase_sync · 99.1% uptime",
  },
  {
    id: "agent-tool",
    command: "$ agent exec --tools vector_search,sql,http --max-steps 5",
    trace: [
      "→ Loading agent session ctx_8b2e... OK",
      "→ Tool call: vector_search(\"Q3 revenue drivers\")... 8 hits",
      "→ Tool call: sql_readonly(metrics_daily)... 1 row",
      "→ Synthesizing structured answer — 1,847 tokens",
      "→ Run complete — cost_delta: -31% vs baseline",
    ],
    endpoint:
      'POST /api/v1/agent/run { tools: ["vector_search","sql"], stream: true }',
    status: "200 OK · tool_chain · guardrails_pass · 142ms p50",
  },
]

export interface LiveMetrics {
  latencyMs: number
  tokenEfficiency: number
  ragVectorsM: number
}

const METRIC_BASE = {
  latencyMs: 142,
  tokenEfficiency: 32,
  ragVectorsM: 1.2,
} as const

/** Smooth random walk — small deltas so values feel live, not noisy. */
export function nextMetrics(prev: LiveMetrics): LiveMetrics {
  const drift = (value: number, base: number, spread: number, step: number) => {
    const target = base + (Math.random() - 0.5) * spread
    const next = value + (target - value) * step
    return Math.round(next * 10) / 10
  }

  return {
    latencyMs: Math.round(
      Math.min(168, Math.max(118, drift(prev.latencyMs, METRIC_BASE.latencyMs, 18, 0.28)))
    ),
    tokenEfficiency: Math.round(
      Math.min(38, Math.max(26, drift(prev.tokenEfficiency, METRIC_BASE.tokenEfficiency, 6, 0.22)))
    ),
    ragVectorsM: Math.min(
      1.28,
      Math.max(1.16, drift(prev.ragVectorsM, METRIC_BASE.ragVectorsM, 0.08, 0.18))
    ),
  }
}

export const INITIAL_METRICS: LiveMetrics = {
  latencyMs: METRIC_BASE.latencyMs,
  tokenEfficiency: METRIC_BASE.tokenEfficiency,
  ragVectorsM: METRIC_BASE.ragVectorsM,
}

export function formatProgressBar(pct: number): string {
  const filled = Math.round((pct / 100) * 16)
  return `[${"█".repeat(filled)}${"░".repeat(16 - filled)}] ${pct}%`
}

export function buildTerminalBlock(
  scenario: PipelineScenario,
  metrics: LiveMetrics,
  streamPct: number
): string {
  const progressLine = `→ Streaming response tokens ${formatProgressBar(streamPct)}`
  const resultLine = `RESULT: pipeline_ack — latency ${metrics.latencyMs}ms | tokens 1,${800 + Math.floor(Math.random() * 200)} | efficiency +${metrics.tokenEfficiency}%`

  return [
    scenario.command,
    ...scenario.trace.slice(0, -1),
    progressLine,
    "",
    resultLine,
    `VECTORS: ${metrics.ragVectorsM.toFixed(2)}M indexed · rerank_p50 ${metrics.latencyMs - 12}ms`,
  ].join("\n")
}
