import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium leading-tight transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 min-h-10 px-3.5 py-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-hover active:bg-primary-focus",
        secondary:
          "border border-hairline bg-surface-1 text-ink hover:border-hairline-strong hover:bg-surface-2",
        tertiary: "bg-transparent text-ink hover:text-ink-muted",
        link: "inline-flex items-center bg-transparent p-0 text-ink-muted underline-offset-4 hover:text-ink hover:underline min-h-10",
      },
      size: {
        default: "text-sm",
        sm: "min-h-9 px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
