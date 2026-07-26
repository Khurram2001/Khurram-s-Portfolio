import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SkillBadge } from "@/components/ui/SkillBadge"
import { resume, siteCopy, type SkillCategory } from "@/lib/resume"

export function TechStack() {
  const { techStack } = siteCopy

  return (
    <section id="stack" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{techStack.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-10 text-3xl font-bold text-ink md:text-4xl">
            {techStack.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-10">
          {techStack.categories.map((category, index) => {
            const key = category.key as SkillCategory
            const skills = resume.skills[key]

            return (
              <Reveal key={category.key} delayMs={(index % 3) * 100 as 0 | 100 | 200}>
                <SectionLabel className="mb-4">{category.label}</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
