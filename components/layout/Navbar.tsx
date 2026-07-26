"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#CDCDCB] bg-white/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#hero" className="text-sm font-semibold tracking-tight text-[#111111]">
            Khurram Zaman
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#919599] transition-colors duration-150 hover:text-[#111111]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="rounded-[6px] bg-[#E56515] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c8570f]"
            >
              Book a Call
            </a>
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="-mr-2 flex flex-col gap-[5px] p-2 md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-[#111111] transition-transform duration-200 ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#111111] transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#111111] transition-transform duration-200 ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/98 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            type="button"
            onClick={() => handleNavClick(link.href)}
            className="text-2xl font-semibold text-[#111111] transition-colors duration-150 hover:text-[#E56515]"
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleNavClick("#book")}
          className="mt-4 rounded-[6px] bg-[#E56515] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#c8570f]"
        >
          Book a Call
        </button>
      </div>
    </>
  )
}
