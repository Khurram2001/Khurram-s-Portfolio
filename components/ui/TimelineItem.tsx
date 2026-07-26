import { cn } from "@/lib/utils"
import type { ExperienceEntry } from "@/lib/resume"

interface TimelineItemProps {
  entry: ExperienceEntry
  className?: string
  isLast?: boolean
}

export function TimelineItem({ entry, className, isLast }: TimelineItemProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-[160px_1fr] md:gap-8", className)}>
      <div className="md:pt-1">
        <p className="font-mono text-sm font-medium text-orange-vivid">{entry.period}</p>
      </div>

      <div className="relative border-l-2 border-grey-light pb-10 pl-6 md:pb-12">
        <span
          className="absolute top-1.5 -left-[5px] size-2 rounded-full bg-orange-vivid"
          aria-hidden
        />
        {!isLast ? null : (
          <span className="sr-only">End of timeline</span>
        )}
        <h3 className="text-xl font-semibold text-ink">{entry.role}</h3>
        <p className="mt-1 text-sm text-grey-mid">
          {entry.company} · {entry.location}
        </p>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-4 text-sm text-ink/80">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
