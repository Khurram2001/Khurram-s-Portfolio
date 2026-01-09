export function Skills() {
  const skillsData = [
    {
      category: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      skills: ["React", "React Native", "Axios", "Tailwind"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Django", "FastAPI"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Cloudinary", "Vercel", "Netlify"],
    },
    {
      category: "Special Focus",
      skills: ["AI Workflows", "Automation", "n8n", "Performance"],
    },
  ]

  return (
    <section id="skills" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">My Skills & Stack</h2>

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tools & Tech</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((row, index) => (
                <tr key={row.category} className={index !== skillsData.length - 1 ? "border-b border-gray-200" : ""}>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
