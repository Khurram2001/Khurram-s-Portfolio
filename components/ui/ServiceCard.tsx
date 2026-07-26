import { ArrowRight, type LucideIcon } from "lucide-react"
import {
  Cloud,
  CreditCard,
  Gauge,
  Layers,
  MessageSquareCode,
  Sparkles,
} from "lucide-react"
import { AnchorLink } from "@/components/ui/AnchorLink"
import { cn } from "@/lib/utils"

const icons: Record<string, LucideIcon> = {
  Layers,
  Sparkles,
  Cloud,
  CreditCard,
  Gauge,
  MessageSquareCode,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const Icon = icons[icon] ?? Layers

  return (
    <article
      className={cn(
        "group relative rounded-lg border border-grey-light bg-surface p-6 transition-[box-shadow,border-color,transform] duration-200",
        "border-l-4 border-l-transparent hover:border-l-orange-vivid hover:shadow-md",
        className
      )}
    >
      <Icon className="mb-4 size-6 text-orange-vivid" aria-hidden />
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="mb-4 text-sm text-grey-mid">{description}</p>
      <AnchorLink
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-orange-vivid"
      >
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </AnchorLink>
    </article>
  )
}
