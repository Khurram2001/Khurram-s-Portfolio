"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"
import { submitConsultationRequest } from "@/lib/consultation"
import { buttonVariants } from "@/components/ui/button"
import { FieldLabel, TextArea, TextInput } from "@/components/ui/text-input"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "submitting" | "success" | "error"

const initialForm = {
  name: "",
  subject: "",
  message: "",
}

export function ConsultationForm() {
  const reducedMotion = useReducedMotion()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const updateField =
    (field: keyof typeof initialForm) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      if (status === "error") {
        setStatus("idle")
        setErrorMessage("")
      }
    }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const name = form.name.trim()
    const message = form.message.trim()

    if (!name || !message) {
      setStatus("error")
      setErrorMessage("Please fill in your name and project requirements.")
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    const result = await submitConsultationRequest(siteContent.booking.email, {
      name,
      subject: form.subject.trim(),
      message,
    })

    if (result.ok) {
      setStatus("success")
      setForm(initialForm)
      return
    }

    setStatus("error")
    setErrorMessage(result.error ?? "Something went wrong. Please try again.")
  }

  return (
    <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-5">
      <div className="space-y-2">
        <FieldLabel htmlFor="consultation-name">Name</FieldLabel>
        <TextInput
          id="consultation-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="consultation-subject" optional>
          Subject
        </FieldLabel>
        <TextInput
          id="consultation-subject"
          name="subject"
          type="text"
          autoComplete="off"
          value={form.subject}
          onChange={updateField("subject")}
          placeholder="e.g., Enterprise RAG Pipeline Architecture"
        />
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="consultation-message">
          Message / Requirements
        </FieldLabel>
        <TextArea
          id="consultation-message"
          name="message"
          required
          value={form.message}
          onChange={updateField("message")}
          placeholder="Please detail the purpose of the meeting, your core tech stack, and your available or preferred meeting hours/timezones..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        whileHover={
          reducedMotion || status === "submitting"
            ? undefined
            : { borderColor: "var(--hairline-strong)" }
        }
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {status === "submitting"
          ? "Sending request..."
          : siteContent.booking.consultationSubmitLabel}
      </motion.button>

      {status === "success" ? (
        <p className="text-sm text-semantic-success" role="status">
          Request received. I&apos;ll follow up within one business day.
        </p>
      ) : null}

      {status === "error" && errorMessage ? (
        <p className="text-sm text-ink-muted" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  )
}
