import Link from "next/link"
import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-canvas">
      <SectionContainer className="py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-ink">{siteContent.name}</p>
            <p className="max-w-sm text-xs leading-relaxed text-ink-subtle">
              {siteContent.title} · {siteContent.location}
              {siteContent.openToRemote ? " · Open to Remote" : ""}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-subtle">
            <Link
              href={siteContent.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </Link>
            <Link
              href={siteContent.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </Link>
            <Link
              href={siteContent.contact.emailHref}
              className="hover:text-ink"
            >
              Email
            </Link>
            <Link href="#booking" className="hover:text-ink">
              Book a Call
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-ink-tertiary">
          © {year} {siteContent.name}. All rights reserved.
        </p>
      </SectionContainer>
    </footer>
  )
}
