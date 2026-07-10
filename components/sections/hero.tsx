"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"
import { scrollToSection } from "@/lib/scroll"
import { staggerContainer } from "@/lib/motion"
import { SectionContainer } from "@/components/layout/section-container"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/motion/fade-in-up"

export function Hero() {
  return (
    <SectionContainer id="hero" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex w-full min-w-0 flex-col items-start"
      >
        <FadeInUp>
          <p className="text-[13px] font-medium leading-[1.3] tracking-[0.4px] text-ink-subtle">
            {siteContent.hero.eyebrow}
          </p>
        </FadeInUp>

        <FadeInUp className="mt-5 w-full min-w-0">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-1.8px] text-ink sm:text-5xl md:text-6xl md:tracking-[-2.4px] lg:text-7xl lg:tracking-[-2.8px] xl:text-8xl xl:tracking-[-3px]">
            {siteContent.hero.headline}
          </h1>
        </FadeInUp>

        <FadeInUp className="mt-6 w-full min-w-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteContent.hero.subhead}
          </p>
        </FadeInUp>

        <FadeInUp className="mt-8 flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Button
            className="w-full sm:w-auto"
            onClick={() => scrollToSection("#booking")}
          >
            Schedule 15-Min Strategy Session
          </Button>
          <Button
            variant="link"
            className="min-h-10 w-full justify-start px-0 sm:w-auto"
            onClick={() => scrollToSection("#dashboard")}
          >
            View Active Systems
          </Button>
        </FadeInUp>
      </motion.div>
    </SectionContainer>
  )
}
