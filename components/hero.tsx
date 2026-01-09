import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="mb-8 rounded-2xl bg-[#FDF5F2] p-4">
          <img src="/my-avatar.png" alt="Khurram Zaman" className="h-32 w-32 rounded-xl object-cover md:h-40 md:w-40" />
        </div>

        {/* Name Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <span className="rounded-full bg-[#E86A33] px-2.5 py-0.5 text-xs font-medium text-white">Hey!</span>
          <span className="text-sm text-gray-700">{"I'm Khurram Zaman"}</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-balance font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          I Build <span className="font-serif italic text-gray-600">Full-Stack</span> Solutions
          <br />
          That Actually Work!
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-xl text-pretty text-gray-600">
          Web apps, hybrid mobile applications, and AI-powered automation solutions.
          <br />I turn complex problems into clean, scalable solutions.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          className="group rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          <a href="#contact">
            Contact me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  )
}
