import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5D5C8]">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-3xl bg-white shadow-sm">
          <Header />
          <Hero />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
