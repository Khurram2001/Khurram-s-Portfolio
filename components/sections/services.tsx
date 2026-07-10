import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionReveal } from "@/components/motion/section-reveal"
import { FeatureCard } from "@/components/ui/feature-card"

export function Services() {
  return (
    <SectionContainer id="services" className="py-16 md:py-24">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
            Services
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.04em] text-ink">
            How I help teams ship AI products
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </SectionReveal>
    </SectionContainer>
  )
}
