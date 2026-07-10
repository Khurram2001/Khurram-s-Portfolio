import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import {
  formatExperienceRange,
  MAX_PROJECT_STACK_TAGS,
  siteContent,
} from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { ChangelogRow } from "@/components/ui/changelog-row"
import { cn } from "@/lib/utils"
import { FadeUp } from "@/src/components/FadeUp"

export function Experience() {
  return (
    <>
      <SectionContainer id="experience" major>
        <FadeUp className="mb-10 max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.5rem]">
            {siteContent.experienceHeading}
          </h2>
        </FadeUp>

        <div className="min-w-0">
          {siteContent.experience.map((entry, index) => (
            <FadeUp key={entry.id} delay={Math.min(index, 2) * 0.08}>
              <ChangelogRow
                dateRange={formatExperienceRange(entry)}
                company={entry.company}
                role={entry.role}
                highlights={entry.highlights}
                stack={entry.stack}
              />
            </FadeUp>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="projects" major>
        <FadeUp className="mb-8 max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
            {siteContent.projectsEyebrow}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch">
          {siteContent.projects.map((project, index) => (
            <FadeUp
              key={project.id}
              delay={Math.min(index, 3) * 0.07}
              className="h-full"
            >
              <article
                className={cn(
                  "flex h-full min-w-0 flex-col rounded-lg border border-hairline bg-surface-1 p-5 transition-colors hover:border-hairline-strong sm:p-6 lg:min-h-[340px]"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-ink">{project.name}</h3>
                  <div className="flex shrink-0 items-center gap-1">
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-11 items-center justify-center text-ink-subtle hover:text-primary"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Github className="size-4" />
                      </Link>
                    ) : null}
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-11 items-center justify-center text-ink-subtle hover:text-primary"
                        aria-label={`Visit ${project.name} live site`}
                      >
                        <ExternalLink className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-ink-muted"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.stack.slice(0, MAX_PROJECT_STACK_TAGS).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-hairline bg-surface-2 px-2 py-1 font-mono text-xs text-ink-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </SectionContainer>
    </>
  )
}

