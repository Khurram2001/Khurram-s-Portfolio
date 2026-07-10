"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  from?: "left" | "right"
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  from = "left",
  className,
}: FadeInProps) {
  const shouldReduce = useReducedMotion()
  const x = from === "left" ? -12 : 12

  return (
    <motion.div
      className={cn("min-w-0", className)}
      initial={{ opacity: 0, x: shouldReduce ? 0 : x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    >
      {children}
    </motion.div>
  )
}

