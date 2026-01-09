"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Mail, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "What kind of projects do you usually work on?",
    answer:
      "Mostly web apps—anything from dashboards to e-commerce platforms. I enjoy building both the interface and the logic behind it.",
  },
  {
    question: "Do you help with project planning and architecture?",
    answer:
      "Yes, I can help plan the technical architecture, database design, and overall project structure to ensure scalability and maintainability.",
  },
  {
    question: "Can you handle both front-end and backend?",
    answer:
      "I'm comfortable working across the entire stack—from React/React Native frontends to Node.js, Django, and FastAPI backends.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Depending on my current workload, I can typically start within 1-2 weeks. Feel free to reach out to discuss your timeline.",
  },
  {
    question: "How do you usually work with clients or teams?",
    answer:
      "I prefer clear communication through regular updates, whether that's daily standups, weekly calls, or async updates via Slack/Discord.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {"Let's Clear Things Up"}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex justify-center">
              <img src="/my-avatar.png" alt="Khurram Zaman" className="h-20 w-20 rounded-full object-cover" />
            </div>
            <h3 className="mb-2 text-center font-semibold text-gray-900">{"Got a question? Let's chat."}</h3>
            <p className="mb-6 text-center text-sm text-gray-500">
              {"I'm just a message away. Whether it's a bug, a collab, or just to say hi."}
            </p>

            <div className="space-y-3">
              <button
                onClick={scrollToContact}
                className="flex w-full items-center gap-3 rounded-xl border border-gray-200 p-3 transition-colors hover:bg-gray-50"
              >
                <Mail className="h-5 w-5 text-[#E86A33]" />
                <span className="text-sm text-gray-700">Send me an email</span>
              </button>
              <a
                href="https://www.linkedin.com/in/khurramzaman-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 transition-colors hover:bg-gray-50"
              >
                <MessageCircle className="h-5 w-5 text-[#E86A33]" />
                <span className="text-sm text-gray-700">Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="pr-4 text-sm font-medium text-gray-900">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#E86A33] transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-gray-100 px-4 pb-4 pt-2">
                    <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
