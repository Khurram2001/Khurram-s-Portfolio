import { Navbar } from "@/components/layout/Navbar"
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
          {/* Primary */}
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-[6px] bg-[#E56515] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#c8570f] active:scale-[0.99]"
          >
            Book a Call
          </a>

          {/* Secondary */}
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[6px] border border-[#919599] px-6 py-3 text-sm font-semibold text-[#111111] transition-colors duration-200 hover:border-[#E56515] hover:text-[#E56515]"
          >
            View My Work
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-0 divide-y divide-[#CDCDCB] border-t border-[#CDCDCB] pt-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <MetricCounter target={700} suffix="+" label="Active Users" />
          <MetricCounter target={5} label="SaaS Products" />
          <MetricCounter
            target={60}
            prefix="~"
            suffix="%"
            label="Dev Time Saved for Clients"
          />
        </div>
      </div>
    </section>
  )
}
