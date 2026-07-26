import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  children: React.ReactNode
  className?: string
}

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-sm border border-grey-light bg-surface px-3 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-orange-soft hover:bg-orange-soft hover:text-ink",
        className
      )}
    >
      {children}
    </span>
  )
}
