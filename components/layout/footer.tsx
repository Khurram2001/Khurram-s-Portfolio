import Link from "next/link"
import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"

const footerLinkClass =
  "inline-flex min-h-10 items-center text-xs text-ink-subtle hover:text-ink"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-canvas">
      <SectionContainer className="py-12 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-2">
            <p className="text-sm font-medium text-ink">{siteContent.name}</p>
            <p className="max-w-sm text-xs leading-relaxed text-ink-subtle">
              {siteContent.title} · {siteContent.location}
              {siteContent.openToRemote ? " · Open to Remote" : ""}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-subtle">
            <Link
              href={siteContent.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              LinkedIn
            </Link>
            <Link
              href={siteContent.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              GitHub
            </Link>
            <Link href={siteContent.contact.emailHref} className={footerLinkClass}>
              Email
            </Link>
            <Link href="#booking" className={footerLinkClass}>
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
