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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

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
      <div className="relative mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-6 md:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="truncate text-sm font-medium text-ink"
          >
            {siteContent.name}
          </button>
          <StatusBadge
            label={siteContent.availability}
            className="hidden lg:inline-flex"
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
              className="min-h-10 text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            className="hidden md:inline-flex"
            onClick={() => handleNavClick("#booking")}
          >
            Book Strategy Call
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-hairline text-ink md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-canvas/80 backdrop-blur-sm md:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-50 border-b border-hairline bg-canvas px-6 py-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {siteContent.navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="flex min-h-11 items-center text-left text-sm text-ink-subtle hover:text-ink"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-3 w-full"
                onClick={() => handleNavClick("#booking")}
              >
                Book Strategy Call
              </Button>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}
