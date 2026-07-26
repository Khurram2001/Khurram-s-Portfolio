import { ExternalLink } from "lucide-react"
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
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold text-ink">{project.name}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 text-grey-mid transition-colors hover:bg-surface hover:text-orange-vivid"
          aria-label={`Open ${project.name} (opens in new tab)`}
        >
          <ExternalLink className="size-5" />
        </a>
      </div>

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
    </article>
  )
}
