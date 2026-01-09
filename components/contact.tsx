"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

const EMAILJS_PUBLIC_KEY = "6iPRjdnPCjMh0c_y1"
const EMAILJS_SERVICE_ID = "service_yfta9ul"
const EMAILJS_TEMPLATE_ID = "template_rwz3dda"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsLoading(true)
    setStatus("idle")

    try {
      const formData = new FormData(formRef.current)
      const templateParams = {
        from_name: formData.get("from_name"),
        from_email: formData.get("from_email"),
        message: formData.get("message"),
      }

      console.log("[v0] Sending email with params:", templateParams)

      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

      console.log("[v0] EmailJS Success:", result)
      setStatus("success")
      formRef.current.reset()
    } catch (error) {
      console.error("[v0] EmailJS Error:", JSON.stringify(error))
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {"Let's Work Together"}
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Have a project in mind? Drop me a message and {"let's"} make it happen.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from_name" className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#E86A33] focus:outline-none focus:ring-1 focus:ring-[#E86A33]"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="from_email" className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#E86A33] focus:outline-none focus:ring-1 focus:ring-[#E86A33]"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#E86A33] focus:outline-none focus:ring-1 focus:ring-[#E86A33]"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-green-700">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-red-700">
              <XCircle className="h-5 w-5" />
              <span className="text-sm">Failed to send message. Please try again or email me directly.</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full bg-gray-900 py-3 font-medium text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
