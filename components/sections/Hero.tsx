import { ArrowDown, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { AnchorLink } from "@/components/ui/AnchorLink"
import { Button } from "@/components/ui/button"
import { MetricCounter } from "@/components/ui/MetricCounter"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { siteCopy } from "@/lib/resume"

export function Hero() {
  const { hero } = siteCopy

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-surface via-white to-white"
    >
      <Navbar />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <SectionLabel className="mb-6">{hero.eyebrow}</SectionLabel>

        <h1 className="display-tight max-w-4xl text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1.05] text-ink">
          {hero.headline}
        </h1>

        <p className="prose-width mt-6 text-base text-grey-mid md:text-lg">{hero.sub}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-md border-grey-light bg-white hover:bg-surface"
          >
            <AnchorLink href="#work" className="inline-flex items-center gap-2">
              {hero.primaryCta}
              <ArrowDown className="size-4" />
            </AnchorLink>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-md bg-orange-vivid text-white transition-[background-color,transform] duration-150 hover:scale-[1.02] hover:bg-orange-vivid/90"
          >
            <AnchorLink href="#book" className="inline-flex items-center gap-2">
              {hero.secondaryCta}
              <ArrowRight className="size-4" />
            </AnchorLink>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-grey-light pt-10 sm:grid-cols-3">
          {hero.metrics.map((metric) => (
            <MetricCounter
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              prefix={"prefix" in metric ? metric.prefix : ""}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
