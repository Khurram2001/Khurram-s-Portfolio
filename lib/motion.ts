export const EASE_OUT = [0.16, 1, 0.3, 1] as const

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const sectionRevealVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
}

export const reducedMotionFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export const viewportOnce = { once: true, margin: "-80px" as const }

export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: EASE_OUT },
  },
}
