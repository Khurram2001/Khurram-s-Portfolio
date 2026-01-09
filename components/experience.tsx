import { Building2 } from "lucide-react"

const experiences = [
  {
    title: "React Developer",
    company: "Infini8 AI",
    period: "Nov 2025 – Dec 2025",
    description: [
      "Built frontend interfaces for an AI-powered content generation platform",
      "Developed features for AI image, script, avatar, and video generation",
      "Integrated multiple APIs to connect AI services with frontend workflows",
    ],
  },
  {
    title: "React Native Developer",
    company: "Crypto Koder",
    period: "Sep 2025 – Nov 2025",
    description: [
      "Built and maintained an e-commerce mobile application",
      "Implemented responsive and performant UI components",
      "Collaborated with backend and product teams",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Oct 2024 – Present",
    description: [
      "Developed multiple web and mobile applications end-to-end",
      "Integrated cloud services and Google Maps APIs",
      "Designed SQL and NoSQL database architectures",
      "Delivered scalable, production-ready solutions",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          {"Where I've Worked"}
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FDF5F2] px-3 py-1.5">
                  <Building2 className="h-4 w-4 text-[#E86A33]" />
                  <span className="text-sm font-medium text-gray-700">{exp.company}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E86A33]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
