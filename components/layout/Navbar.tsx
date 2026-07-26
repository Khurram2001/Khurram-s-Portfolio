"use client"

import { useEffect, useState } from "react"
import { AnchorLink } from "@/components/ui/AnchorLink"
import { Button } from "@/components/ui/button"
import { resume, siteCopy } from "@/lib/resume"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero")
      const threshold = hero ? hero.offsetHeight - 64 : window.innerHeight * 0.7
      setScrolled(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || isOpen
          ? "border-b border-grey-light bg-white/90 backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <AnchorLink href="#hero" className="text-sm font-bold tracking-tight text-ink">
          {resume.meta.name}
        </AnchorLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteCopy.nav.links.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-orange-vivid"
            >
              {link.label}
            </AnchorLink>
          ))}
          <Button
            asChild
            className="rounded-md bg-orange-vivid text-white transition-[background-color,transform] duration-150 hover:scale-[1.02] hover:bg-orange-vivid/90"
          >
            <AnchorLink href={siteCopy.nav.cta.href}>{siteCopy.nav.cta.label}</AnchorLink>
          </Button>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 bg-[#111111] transition-transform duration-200",
              isOpen && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-[#111111] transition-opacity duration-200",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-[#111111] transition-transform duration-200",
              isOpen && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 flex items-center justify-center bg-[rgba(255,255,255,0.98)] backdrop-blur-[8px] transition-all duration-200 ease-out md:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center gap-8 px-6" aria-label="Mobile">
          {siteCopy.nav.links.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-ink"
              onClick={closeMenu}
            >
              {link.label}
            </AnchorLink>
          ))}
          <Button
            asChild
            className="mt-2 h-12 rounded-md bg-orange-vivid px-8 text-white hover:bg-orange-vivid/90"
          >
            <AnchorLink href={siteCopy.nav.cta.href} onClick={closeMenu}>
              {siteCopy.nav.cta.label}
            </AnchorLink>
          </Button>
        </nav>
      </div>
    </header>
  )
}
