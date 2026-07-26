"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"

// ── EmailJS credentials (public-safe — hardcoded by design) ──────────
const EMAILJS_SERVICE_ID = "service_pidb3u7"
const EMAILJS_TEMPLATE_ID = "template_2m0qn2h"
const EMAILJS_PUBLIC_KEY = "6iPRjdnPCjMh0c_y1"
// ────────────────────────────────────────────────────────────────────

const schema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Enter a valid email address"),
  project_type: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type FormValues = z.infer<typeof schema>
type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setStatus("loading")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          project_type: data.project_type,
          budget: data.budget,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus("success")
      reset()
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus("error")
    }
  }

  const input =
    "w-full px-4 py-3 bg-white border border-[#CDCDCB] rounded-[6px] text-[#111111] " +
    "text-sm placeholder:text-[#919599] focus:outline-none focus:border-[#E56515] " +
    "focus:ring-1 focus:ring-[#E56515]/30 transition-colors duration-150"

  const err = "mt-1.5 text-xs text-red-500"

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium tracking-widest text-[#919599] uppercase">
              Contact
            </p>
            <h2 className="mb-6 text-4xl font-bold text-[#111111]">
              Prefer async? Drop me a message.
            </h2>
            <p className="mb-6 max-w-sm leading-relaxed text-[#919599]">
              Tell me about the product, timeline, and budget. I&apos;ll reply within one
              business day.
            </p>
            <a
              href="mailto:khurramzaman2001@gmail.com"
              className="text-sm font-medium text-[#E56515] hover:underline"
            >
              khurramzaman2001@gmail.com
            </a>
          </div>

          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-[12px] border border-[#CDCDCB] py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-[#111111]">Message sent!</h3>
                <p className="max-w-xs text-sm text-[#919599]">
                  Thanks for reaching out. I&apos;ll reply within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#E56515] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#111111]">
                    Name
                  </label>
                  <input
                    {...register("from_name")}
                    placeholder="Your full name"
                    className={input}
                  />
                  {errors.from_name ? (
                    <p className={err}>{errors.from_name.message}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#111111]">
                    Email
                  </label>
                  <input
                    {...register("from_email")}
                    type="email"
                    placeholder="you@company.com"
                    className={input}
                  />
                  {errors.from_email ? (
                    <p className={err}>{errors.from_email.message}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#111111]">
                    Project type
                  </label>
                  <select {...register("project_type")} className={input}>
                    <option value="">Select project type</option>
                    <option value="New SaaS">New SaaS</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Existing App">Existing App</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.project_type ? (
                    <p className={err}>{errors.project_type.message}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#111111]">
                    Budget range
                  </label>
                  <select {...register("budget")} className={input}>
                    <option value="">Select budget range</option>
                    <option value="Under $1k">&lt;$1k</option>
                    <option value="$1k–$5k">$1k–$5k</option>
                    <option value="$5k–$15k">$5k–$15k</option>
                    <option value="$15k+">$15k+</option>
                    <option value="Let's discuss">Let&apos;s discuss</option>
                  </select>
                  {errors.budget ? <p className={err}>{errors.budget.message}</p> : null}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#111111]">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className={`${input} resize-none`}
                  />
                  {errors.message ? <p className={err}>{errors.message.message}</p> : null}
                </div>

                {status === "error" ? (
                  <div className="rounded-[6px] border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                    Something went wrong. Please email{" "}
                    <a href="mailto:khurramzaman2001@gmail.com" className="underline">
                      khurramzaman2001@gmail.com
                    </a>{" "}
                    directly.
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-[6px] bg-[#E56515] py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c8570f] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
