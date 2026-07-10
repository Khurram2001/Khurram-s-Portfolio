import { cn } from "@/lib/utils"

/** Major section rhythm: 96px vertical padding + subtle top divider per DESIGN.md */
export const majorSectionClass =
  "border-t border-white/[0.06] py-24"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: "section" | "div"
  major?: boolean
}

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  major = false,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn("px-6 md:px-8", major && majorSectionClass, className)}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </Component>
  )
}
