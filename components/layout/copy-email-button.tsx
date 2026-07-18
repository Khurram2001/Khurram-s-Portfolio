"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyEmailButtonProps {
  email: string
  className?: string
}

export function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        const textarea = document.createElement("textarea")
        textarea.value = email
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
      }

      setCopied(true)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Silently ignore clipboard failures (e.g. permissions)
    }
  }, [email])

  return (
    <>
      <button type="button" onClick={handleCopy} className={className}>
        Email
      </button>

      <div
        aria-live="polite"
        role="status"
        className={cn(
          "pointer-events-none fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2.5 rounded-lg border border-hairline bg-surface-2 py-2.5 pl-2.5 pr-4 text-sm font-medium text-ink shadow-lg transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
          copied
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        )}
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-semantic-success">
          <Check className="size-3 text-white" strokeWidth={3} />
        </span>
        Email Copied
      </div>
    </>
  )
}
