import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { resume, siteCopy } from "@/lib/resume"

export function Projects() {
  const { projects: copy } = siteCopy

  return (
    <section id="work" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{copy.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-10 text-3xl font-bold text-ink md:text-4xl">
            {copy.heading}
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {resume.projects.map((project, index) => (
            <Reveal
              key={project.name}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-0"
              delayMs={(index % 2) * 100 as 0 | 100}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
