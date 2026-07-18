import Link from "next/link"
import { siteContent } from "@/lib/content"
import { SectionContainer } from "@/components/layout/section-container"
import { CopyEmailButton } from "@/components/layout/copy-email-button"

const footerLinkClass =
  "inline-flex min-h-10 items-center text-xs text-ink-subtle hover:text-ink"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-canvas">
      <SectionContainer className="py-12 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="#main-content" className={footerLinkClass}>
            Back to top ↑
          </Link>

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
            <CopyEmailButton
              email={siteContent.contact.email}
              className={footerLinkClass}
            />
            <Link
              href="https://cal.com/khurramzaman"
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              Book a Call
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-ink-tertiary">
          © {year} {siteContent.name}. All rights reserved.
        </p>
      </SectionContainer>
    </footer>
  )
}
