import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { resume, siteCopy } from "@/lib/resume"

export function Experience() {
  const { experience: copy } = siteCopy

  return (
    <section id="experience" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{copy.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-10 text-3xl font-bold text-ink md:text-4xl">
            {copy.heading}
          </h2>
        </Reveal>

        <div>
          {resume.experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.period}`} delayMs={(index % 3) * 100 as 0 | 100 | 200}>
              <TimelineItem
                entry={entry}
                isLast={index === resume.experience.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
