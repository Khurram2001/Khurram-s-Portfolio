import { Github, Linkedin } from "lucide-react"
import { AnchorLink } from "@/components/ui/AnchorLink"
import { resume, siteCopy } from "@/lib/resume"

export function Footer() {
  return (
    <footer className="border-t border-grey-light bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-semibold text-ink">{resume.meta.name}</p>
          <p className="text-sm text-grey-mid">{resume.meta.title}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {siteCopy.nav.links.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className="text-sm text-grey-mid transition-colors hover:text-orange-vivid"
            >
              {link.label}
            </AnchorLink>
          ))}
          <AnchorLink
            href={siteCopy.nav.cta.href}
            className="text-sm text-grey-mid transition-colors hover:text-orange-vivid"
          >
            {siteCopy.nav.cta.label}
          </AnchorLink>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={resume.meta.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-ink transition-colors hover:text-orange-vivid"
            aria-label="GitHub (opens in new tab)"
          >
            <Github className="size-5" />
          </a>
          <a
            href={resume.meta.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-ink transition-colors hover:text-orange-vivid"
            aria-label="LinkedIn (opens in new tab)"
          >
            <Linkedin className="size-5" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-sm border border-grey-light bg-surface px-3 py-1.5 text-xs text-ink">
            <span className="size-2 rounded-full bg-semantic-success" aria-hidden />
            {siteCopy.footer.availability}
          </span>
        </div>
      </div>
    </footer>
  )
}
