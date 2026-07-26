import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { siteCopy } from "@/lib/resume"

export function About() {
  const { about } = siteCopy

  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{about.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-6 text-3xl font-bold text-ink md:text-4xl">
            {about.heading}
          </h2>
          <p className="prose-width text-grey-mid">{about.body}</p>
        </Reveal>

        <Reveal delayMs={100}>
          <ul className="flex flex-col gap-5">
            {about.differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span
                  className="mt-2 size-2 shrink-0 rounded-full bg-orange-vivid"
                  aria-hidden
                />
                <span className="text-base font-medium md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
