import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { siteCopy } from "@/lib/resume"

export function Services() {
  const { services } = siteCopy

  return (
    <section id="services" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{services.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-10 text-3xl font-bold text-ink md:text-4xl">
            {services.heading}
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <Reveal key={item.title} delayMs={(index % 3) * 100 as 0 | 100 | 200}>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
