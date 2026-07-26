"use client"

import type { ComponentPropsWithoutRef, MouseEvent } from "react"
import { useLenis } from "@/components/providers/LenisProvider"
import { cn } from "@/lib/utils"

type AnchorLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string
}

export function AnchorLink({ href, className, onClick, children, ...props }: AnchorLinkProps) {
  const { scrollTo } = useLenis()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault()
      scrollTo(href)
    }
    onClick?.(event)
  }

  return (
    <a href={href} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </a>
  )
}
