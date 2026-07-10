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
        className="flex flex-col items-start"
      >
        <FadeInUp>
          <p className="text-[13px] font-medium leading-[1.3] tracking-[0.4px] text-ink-subtle">
            {siteContent.hero.eyebrow}
          </p>
        </FadeInUp>

        <FadeInUp className="mt-5">
          <h1 className="max-w-4xl text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.05] tracking-[-1.8px] md:tracking-[-2.4px] lg:tracking-[-3px] text-ink">
            {siteContent.hero.headline}
          </h1>
        </FadeInUp>

        <FadeInUp className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            {siteContent.hero.subhead}
          </p>
        </FadeInUp>

        <FadeInUp className="mt-8 flex flex-wrap items-center gap-4">
          <Button onClick={() => scrollToSection("#booking")}>
            Schedule 15-Min Strategy Session
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection("#dashboard")}
          >
            View Active Systems
          </Button>
        </FadeInUp>
      </motion.div>
    </SectionContainer>
  )
}
