export interface ConsultationPayload {
  name: string
  subject: string
  message: string
}

export interface ConsultationSubmitResult {
  ok: boolean
  method: "emailjs" | "mailto"
  error?: string
}

function buildMailtoUrl(
  email: string,
  payload: ConsultationPayload
): string {
  const subject = payload.subject.trim()
    ? `Strategy Session: ${payload.subject.trim()}`
    : "Strategy Session Request"

  const body = [
    `Name: ${payload.name.trim()}`,
    payload.subject.trim() ? `Subject: ${payload.subject.trim()}` : null,
    "",
    payload.message.trim(),
  ]
    .filter(Boolean)
    .join("\n")

  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${email}?${params.toString()}`
}

/**
 * Submits a consultation request via EmailJS when env vars are configured,
 * otherwise opens a structured mailto fallback.
 */
export async function submitConsultationRequest(
  email: string,
  payload: ConsultationPayload
): Promise<ConsultationSubmitResult> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (serviceId && templateId && publicKey) {
    try {
      const emailjs = await import("@emailjs/browser")
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: payload.name.trim(),
          subject: payload.subject.trim() || "Strategy Session Request",
          message: payload.message.trim(),
          reply_to: email,
        },
        { publicKey }
      )
      return { ok: true, method: "emailjs" }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Email delivery failed."
      return { ok: false, method: "emailjs", error: message }
    }
  }

  if (typeof window !== "undefined") {
    window.location.href = buildMailtoUrl(email, payload)
    return { ok: true, method: "mailto" }
  }

  return { ok: false, method: "mailto", error: "Unable to open email client." }
}
