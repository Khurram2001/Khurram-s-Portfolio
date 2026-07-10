import { cn } from "@/lib/utils"

interface ChangelogRowProps {
  dateRange: string
  company: string
  role: string
  highlights: string[]
  stack: string[]
  className?: string
}

export function ChangelogRow({
  dateRange,
  company,
  role,
  highlights,
  stack,
  className,
}: ChangelogRowProps) {
  return (
    <article
      className={cn(
        "grid min-w-0 grid-cols-1 gap-4 border-b border-hairline py-6 sm:gap-6 lg:grid-cols-[minmax(180px,30%)_1fr] lg:gap-10",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-sm text-ink-subtle">{dateRange}</p>
        <h3 className="text-base font-medium text-ink">{company}</h3>
        <p className="text-sm text-ink-subtle">{role}</p>
      </div>
      <div className="space-y-4">
        <ul className="space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-base leading-relaxed text-ink-muted"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-hairline bg-surface-1 px-2 py-1 font-mono text-xs text-ink-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
