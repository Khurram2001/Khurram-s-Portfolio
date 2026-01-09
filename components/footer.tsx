"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-gray-600">© 2025 Khurram Zaman. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Khurram2001"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khurramzaman-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToContact}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>

          <p className="text-center text-xs italic text-gray-500">
            {"Building intelligent, scalable, and automated solutions."}
          </p>
        </div>
      </div>
    </footer>
  )
}
