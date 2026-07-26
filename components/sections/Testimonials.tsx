import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { siteCopy } from "@/lib/resume"

export function Testimonials() {
  const { testimonials } = siteCopy

  return (
    <section id="testimonials" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{testimonials.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-10 text-3xl font-bold text-ink md:text-4xl">
            {testimonials.heading}
          </h2>
        </Reveal>

        {/* Replace with real testimonials */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delayMs={(index % 2) * 100 as 0 | 100}>
              <figure className="rounded-lg border border-grey-light bg-white p-6">
                <div className="mb-4 size-12 rounded-full bg-grey-light" aria-hidden />
                <blockquote className="text-base italic text-ink/80">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-grey-mid">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
