import { cn } from "@/lib/utils"
import type { ProjectEntry } from "@/lib/resume"

interface ProjectCardProps {
  project: ProjectEntry
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "flex min-w-[280px] snap-start flex-col gap-4 rounded-lg border border-grey-light bg-white p-6 md:min-w-0",
        className
      )}
    >
      <h3 className="text-2xl font-bold text-ink">{project.name}</h3>

      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-sm border border-orange-vivid/40 bg-surface px-2 py-1 font-mono text-xs text-ink"
          >
            {tech}
          </li>
        ))}
      </ul>

      <ul className="flex list-disc flex-col gap-2 pl-4 text-sm text-grey-mid">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#E56515] hover:underline"
      >
        Visit project
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  )
}
