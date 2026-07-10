import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: "section" | "div"
}

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
}: SectionContainerProps) {
  return (
    <Component id={id} className={cn("px-4 md:px-8", className)}>
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </Component>
  )
}
