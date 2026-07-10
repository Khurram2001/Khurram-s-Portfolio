"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { siteContent } from "@/lib/content"
import { scrollToSection } from "@/lib/scroll"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"

export function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-14 border-b border-hairline transition-colors duration-200",
        scrolled ? "bg-surface-1/80 backdrop-blur-sm" : "bg-canvas"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="truncate text-sm font-medium text-ink"
          >
            {siteContent.name}
          </button>
          <StatusBadge
            label={siteContent.availability}
            className="hidden sm:inline-flex"
          />
        </div>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {siteContent.navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            onClick={() => handleNavClick("#booking")}
          >
            Book Strategy Call
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-hairline text-ink md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-hairline bg-canvas px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {siteContent.navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="py-2 text-left text-sm text-ink-subtle hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => handleNavClick("#booking")}
            >
              Book Strategy Call
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
