import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/developer-working-at-desk-with-lamp-illustration-m.jpg"
                alt="Developer at work"
                className="h-auto w-full max-w-sm rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">A Bit About Me</h2>
            <p className="mb-6 font-serif text-lg italic text-gray-500">(& My Code)</p>

            <p className="mb-4 leading-relaxed text-gray-600">
              {
                "I'm a full-stack developer who writes code that doesn't just run; it solves problems. From React and React Native on the front to Node.js, Django, and FastAPI on the back, I've worked across the stack to ship solid, user-friendly stuff."
              }
            </p>

            <p className="mb-6 leading-relaxed text-gray-600">
              {
                "I like building things that scale, make sense, and don't break under pressure (most of the time). Complex challenges? Bring 'em on—I turn chaos into clean, working solutions."
              }
            </p>

            <div className="mb-8">
              <h3 className="mb-3 font-semibold text-gray-900">Education</h3>
              <p className="text-gray-600">
                BS Computer Science
                <br />
                <span className="text-gray-500">University of Wah, Pakistan — 2025</span>
              </p>
            </div>

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
        </div>
      </div>
    </section>
  )
}
