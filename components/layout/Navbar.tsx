"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnchorLink } from "@/components/ui/AnchorLink"
import { Button } from "@/components/ui/button"
import { resume, siteCopy } from "@/lib/resume"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || open
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
          className="rounded-md p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <nav className="flex flex-col gap-6 px-6 py-10" aria-label="Mobile">
            {siteCopy.nav.links.map((link) => (
              <AnchorLink
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </AnchorLink>
            ))}
            <Button
              asChild
              className="mt-4 h-12 rounded-md bg-orange-vivid text-white hover:bg-orange-vivid/90"
            >
              <AnchorLink href={siteCopy.nav.cta.href} onClick={() => setOpen(false)}>
                {siteCopy.nav.cta.label}
              </AnchorLink>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
