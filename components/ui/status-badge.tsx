import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  label: string
  className?: string
}

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2 py-0.5 text-xs text-ink-muted",
        className
      )}
    >
      <span
        className="size-1.5 shrink-0 rounded-full bg-semantic-success animate-pulse-success"
        aria-hidden="true"
      />
      {label}
    </span>
  )
}
