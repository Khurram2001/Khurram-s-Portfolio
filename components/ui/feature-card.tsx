"use client"

import { motion } from "framer-motion"
import { cardHover } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface FeatureCardProps {
  title: string
  valueProp: string
  items: string[]
  className?: string
}

export function FeatureCard({
  title,
  valueProp,
  items,
  className,
}: FeatureCardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      initial="rest"
      whileHover={reducedMotion ? undefined : "hover"}
      variants={cardHover}
      className={cn(
        "min-w-0 rounded-lg border border-hairline bg-surface-1 p-5 hover:border-hairline-strong sm:p-6",
        className
      )}
    >
      <h3 className="text-[22px] font-medium leading-tight tracking-[-0.4px] text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{valueProp}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-base leading-relaxed text-ink-muted"
          >
            <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-tertiary" />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
