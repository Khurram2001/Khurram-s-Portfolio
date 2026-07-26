"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react"
import Lenis from "lenis"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type LenisContextValue = {
  lenis: Lenis | null
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number }) => void
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => undefined,
})

export function useLenis() {
  return useContext(LenisContext)
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      lenisRef.current?.destroy()
      lenisRef.current = null
      return
    }

    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number }) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset: options?.offset ?? -80,
          duration: 1.2,
        })
        return
      }

      if (typeof target === "string") {
        const el = document.querySelector(target)
        el?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
        return
      }

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" })
        return
      }

      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
    },
    [reducedMotion]
  )

  const value = useMemo(
    () => ({
      lenis: lenisRef.current,
      scrollTo,
    }),
    [scrollTo]
  )

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
}
