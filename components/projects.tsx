import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "PAPU.AI",
    description:
      "Subscription-based AI content creation platform. Generates AI avatar videos, cinematic videos, scripts, and images. Built for scalable AI workflows and automation.",
    tech: ["React", "Magic UI", "FastAPI", "Firebase", "Stripe"],
    color: "bg-gradient-to-br from-[#1a1a2e] to-[#16213e]",
    textColor: "text-white",
    githubUrl: "https://github.com/mobeenn/papu.ai",
    liveUrl: "https://papu.ai/",
  },
  {
    title: "LIBMAX",
    description:
      "Mobile application automating learning workflows. Provides eBooks and research publications. Streamlines day-to-day library operations.",
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    color: "bg-gradient-to-br from-[#F5D5C8] to-[#f8e1d8]",
    textColor: "text-gray-900",
    githubUrl: "https://github.com/Khurram2001/LibMax_frontend",
    liveUrl: "https://github.com/mobeenn/libmax_backend",
  },
  {
    title: "Swap Rush",
    description:
      "E-commerce mobile app for customized clothing. Users design, preview, and purchase print-ready apparel with real-time customization.",
    tech: ["React Native", "Node.js", "Express.js", "MongoDB", "Vercel"],
    color: "bg-white",
    textColor: "text-gray-900",
    githubUrl:
      "https://github.com/Khurram2001/Swap-Rush---Customizable-E-Commerce-Clothing-Application-for-Android-and-IOS",
    liveUrl: "https://github.com/Khurram2001/Swap-Rush-Backend",
  },
  {
    title: "Imagen",
    description:
      "AI-powered image generation platform. Generates images from user prompts using OpenAI DALL·E with intuitive interface.",
    tech: ["Django", "Python", "PostgreSQL", "OpenAI API"],
    color: "bg-gradient-to-br from-gray-900 to-gray-800",
    textColor: "text-white",
    githubUrl: "https://github.com/Khurram2001/AI-Image-Generator-Django",
    liveUrl: "https://github.com/Khurram2001/JavaScript-Demo",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          My Personal Playground
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl ${project.color} p-6 shadow-sm transition-all hover:shadow-lg md:p-8`}
            >
              {project.color === "bg-white" && <div className="absolute inset-0 rounded-2xl border border-gray-200" />}
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className={`font-serif text-2xl font-bold ${project.textColor}`}>{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full p-2 transition-colors ${
                        project.textColor === "text-white" ? "hover:bg-white/10" : "hover:bg-gray-100"
                      }`}
                      aria-label="View on GitHub"
                    >
                      <Github
                        className={`h-5 w-5 ${project.textColor === "text-white" ? "text-white/70" : "text-gray-500"}`}
                      />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full p-2 transition-colors ${
                        project.textColor === "text-white" ? "hover:bg-white/10" : "hover:bg-gray-100"
                      }`}
                      aria-label="View live project"
                    >
                      <ExternalLink
                        className={`h-5 w-5 ${project.textColor === "text-white" ? "text-white/70" : "text-gray-500"}`}
                      />
                    </a>
                  </div>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    project.textColor === "text-white" ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs ${
                        project.textColor === "text-white" ? "bg-white/10 text-white/90" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
