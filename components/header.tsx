"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Portfolio" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ]

  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10">
      <Link href="/" className="rounded-full bg-[#E86A33] px-4 py-1.5 font-bold text-white">
        khurram
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button asChild className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-50 mx-4 rounded-2xl bg-white p-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full bg-gray-900 text-white hover:bg-gray-800">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                My resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
