import { cn } from "@/lib/utils"

const fieldClassName =
  "text-input w-full min-w-0 rounded-md border border-hairline bg-surface-1 px-3 py-2 text-base leading-relaxed text-ink transition-[outline-color,border-color] duration-200 ease-out placeholder:text-ink-subtle focus-visible:border-hairline-strong focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[color-mix(in_srgb,var(--primary-focus)_50%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"

interface FieldLabelProps {
  htmlFor: string
  children: React.ReactNode
  optional?: boolean
}

export function FieldLabel({ htmlFor, children, optional }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
      {children}
      {optional ? (
        <span className="ml-1 font-normal text-ink-subtle">(optional)</span>
      ) : null}
    </label>
  )
}

export function TextInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClassName, className)} {...props} />
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClassName, "min-h-[140px] resize-y", className)}
      {...props}
    />
  )
}
