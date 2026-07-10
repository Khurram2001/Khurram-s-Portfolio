import { TopNav } from "@/components/layout/top-nav"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { AiDashboard } from "@/components/sections/ai-dashboard"
import { Services } from "@/components/sections/services"
import { Experience } from "@/components/sections/experience"
import { BookingCta } from "@/components/sections/booking-cta"

export default function Home() {
  return (
    <>
      <TopNav />
      <main id="main-content" className="min-w-0 overflow-x-hidden">
        <Hero />
        <AiDashboard />
        <Services />
        <Experience />
        <BookingCta />
      </main>
      <Footer />
    </>
  )
}
