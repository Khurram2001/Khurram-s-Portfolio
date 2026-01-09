import { Globe, Smartphone, Server, Palette, Bot } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Full-stack web apps built with modern frameworks like React, Next.js, and Django.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native for iOS and Android.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust APIs and server-side solutions with Node.js, Express, Django, and FastAPI.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect, responsive interfaces that deliver exceptional user experiences.",
  },
  {
    icon: Bot,
    title: "Automation & AI Solutions",
    description: "AI-powered workflows, automation systems, and intelligent agents using n8n and custom solutions.",
  },
]

export function Services() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          What I Can Do For You
        </h2>
        <p className="mb-12 text-center text-gray-600">End-to-end development services to bring your ideas to life</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#FDF5F2] p-3">
                <service.icon className="h-6 w-6 text-[#E86A33]" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
