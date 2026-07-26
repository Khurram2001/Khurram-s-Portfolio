import { Footer } from "@/components/layout/Footer"
import { About } from "@/components/sections/About"
import { BookMeeting } from "@/components/sections/BookMeeting"
import { ContactForm } from "@/components/sections/ContactForm"
import { Experience } from "@/components/sections/Experience"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Services } from "@/components/sections/Services"
import { TechStack } from "@/components/sections/TechStack"
import { Testimonials } from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-w-0 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <TechStack />
        <Testimonials />
        <BookMeeting />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
