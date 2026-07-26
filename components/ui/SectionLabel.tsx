import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium tracking-[0.15em] text-grey-mid uppercase",
        className
      )}
    >
      {children}
    </p>
  )
}
