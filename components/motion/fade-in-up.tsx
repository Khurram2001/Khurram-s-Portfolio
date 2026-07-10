"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import {
  fadeInUpVariants,
  reducedMotionFadeVariants,
} from "@/lib/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
}

export function FadeInUp({ children, className, ...props }: FadeInUpProps) {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion ? reducedMotionFadeVariants : fadeInUpVariants

  return (
    <motion.div
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
