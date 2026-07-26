"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Reveal } from "@/components/ui/Reveal"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { resume, siteCopy } from "@/lib/resume"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Message should be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const { contact } = siteCopy
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setError(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? "Failed to send message")
      }

      toast.success("Message sent — I'll get back to you soon.")
      reset()
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong"
      setError(message)
      toast.error(message)
    }
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <Reveal>
          <SectionLabel className="mb-4">{contact.eyebrow}</SectionLabel>
          <h2 className="display-tight mb-4 text-3xl font-bold text-ink md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mb-6 text-grey-mid">{contact.body}</p>
          <a
            href={`mailto:${resume.meta.contact.email}`}
            className="font-mono text-sm text-orange-vivid underline-offset-4 hover:underline"
          >
            {resume.meta.contact.email}
          </a>
        </Reveal>

        <Reveal delayMs={100}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </label>
              <Input id="name" autoComplete="name" {...register("name")} />
              {errors.name ? (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email ? (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink">
                Project type
              </label>
              <Select onValueChange={(value) => setValue("projectType", value, { shouldValidate: true })}>
                <SelectTrigger id="projectType" className="w-full">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {contact.projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.projectType ? (
                <p className="mt-1 text-sm text-destructive">{errors.projectType.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
                Budget range
              </label>
              <Select onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}>
                <SelectTrigger id="budget" className="w-full">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {contact.budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget ? (
                <p className="mt-1 text-sm text-destructive">{errors.budget.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <Textarea id="message" rows={4} {...register("message")} />
              {errors.message ? (
                <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
              ) : null}
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full rounded-md bg-orange-vivid text-white hover:bg-orange-vivid/90 hover:scale-[1.02]"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
