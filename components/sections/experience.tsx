import Link from "next/link"
import { ExternalLink } from "lucide-react"
import {
  formatExperienceRange,
  siteContent,
} from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionReveal } from "@/components/motion/section-reveal"
import { ChangelogRow } from "@/components/ui/changelog-row"
import { cn } from "@/lib/utils"

export function Experience() {
  return (
    <SectionContainer id="experience" className="py-16 md:py-24">
      <SectionReveal className="min-w-0">
        <div className="mb-10 max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.5rem]">
            Impact logs from production systems
          </h2>
        </div>

        <div className="min-w-0">
          {siteContent.experience.map((entry) => (
            <ChangelogRow
              key={entry.id}
              dateRange={formatExperienceRange(entry)}
              company={entry.company}
              role={entry.role}
              highlights={entry.highlights}
              stack={entry.stack}
            />
          ))}
        </div>

        <div className="mt-16 min-w-0">
          <div className="mb-8 max-w-2xl">
            <p className="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">
              Projects
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
              Shipped products with real users
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {siteContent.projects.map((project) => (
              <article
                key={project.id}
                className={cn(
                  "min-w-0 rounded-lg border border-hairline bg-surface-1 p-5 transition-colors hover:border-hairline-strong sm:p-6"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-medium text-ink">{project.name}</h4>
                  <div className="flex shrink-0 gap-2">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-11 items-center justify-center text-ink-subtle hover:text-primary"
                        aria-label={`Visit ${project.name}`}
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

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-hairline bg-surface-2 px-2 py-1 font-mono text-xs text-ink-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center px-1 text-xs text-primary hover:text-primary-hover"
                    >
                      Live demo
                    </Link>
                  ) : null}
                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center px-1 text-xs text-ink-subtle hover:text-ink"
                    >
                      GitHub
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </SectionContainer>
  )
}
