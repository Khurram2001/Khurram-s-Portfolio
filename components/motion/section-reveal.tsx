"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import {
  sectionRevealVariants,
  reducedMotionFadeVariants,
  viewportOnce,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

interface SectionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
}

export function SectionReveal({
  children,
  className,
  ...props
}: SectionRevealProps) {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion
    ? reducedMotionFadeVariants
    : sectionRevealVariants

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
