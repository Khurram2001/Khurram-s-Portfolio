"use client"

import { siteContent } from "@/lib/content"
import { scrollToSection } from "@/lib/scroll"
import { SectionContainer } from "@/components/layout/section-container"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/src/components/FadeUp"

export function Hero() {
  return (
    <SectionContainer id="hero" className="py-16 md:py-24">
      <div className="flex w-full min-w-0 flex-col items-start">
        <FadeUp>
          <p className="text-[13px] font-medium leading-[1.3] tracking-[0.4px] text-ink-subtle">
            {siteContent.hero.eyebrow}
          </p>
        </FadeUp>

        <FadeUp delay={0} className="mt-5 w-full min-w-0">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-1.8px] text-ink sm:text-5xl md:text-6xl md:tracking-[-2.4px] lg:text-7xl lg:tracking-[-2.8px] xl:text-8xl xl:tracking-[-3px]">
            {siteContent.hero.headline}
          </h1>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-6 w-full min-w-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteContent.hero.subhead}
          </p>
        </FadeUp>

        <FadeUp
          delay={0.2}
          className="mt-8 flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Button
            className="w-full sm:w-auto"
            onClick={() => scrollToSection("#booking")}
          >
            {siteContent.hero.ctaPrimary}
          </Button>
          <Button
            variant="link"
            className="min-h-10 w-full justify-start px-0 sm:w-auto"
            onClick={() => scrollToSection("#projects")}
          >
            {siteContent.hero.ctaSecondary}
          </Button>
        </FadeUp>
      </div>
    </SectionContainer>
  )
}

