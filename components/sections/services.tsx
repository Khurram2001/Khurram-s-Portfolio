import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { FeatureCard } from "@/components/ui/feature-card"
import { FadeUp } from "@/components/motion/fade-up"

export function Services() {
  return (
    <SectionContainer id="services" major>
      <FadeUp className="mb-10 max-w-2xl">
        <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.5rem]">
          {siteContent.services.heading}
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {siteContent.services.items.map((service, index) => (
          <FadeUp key={service.title} delay={Math.min(index, 2) * 0.08}>
            <FeatureCard
              title={service.title}
              valueProp={service.valueProp}
              items={service.items}
            />
          </FadeUp>
        ))}
      </div>
    </SectionContainer>
  )
}

