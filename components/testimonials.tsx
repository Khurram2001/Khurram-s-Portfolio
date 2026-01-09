const testimonials = [
  {
    quote: "He doesn't just write code; he builds systems that are fast, reliable, and built to last.",
    author: "Project Lead",
    role: "Tech Startup",
  },
  {
    quote:
      "He not only led critical projects but also managed the team with exceptional leadership, ensuring smooth collaboration and high-quality results.",
    author: "Team Member",
    role: "Crypto Koder",
  },
  {
    quote:
      "His expertise in the MERN stack consistently shines through in every project he touch — from building efficient REST APIs to designing scalable architectures.",
    author: "Senior Developer",
    role: "Infini8 AI",
  },
  {
    quote: "His support and mentorship have greatly contributed to my growth in backend development.",
    author: "Junior Developer",
    role: "Freelance Client",
  },
]

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
          What They Said About Me
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl font-serif text-[#E86A33]">"</div>
              <p className="mb-6 leading-relaxed text-gray-600">
                {testimonial.quote
                  .split(
                    /\b(fast|reliable|built to last|exceptional leadership|MERN stack|consistently shines|my growth)\b/,
                  )
                  .map((part, i) =>
                    [
                      "fast",
                      "reliable",
                      "built to last",
                      "exceptional leadership",
                      "MERN stack",
                      "consistently shines",
                      "my growth",
                    ].includes(part.toLowerCase()) ||
                    [
                      "fast",
                      "reliable",
                      "built to last",
                      "exceptional leadership",
                      "MERN stack",
                      "consistently shines",
                      "my growth",
                    ].includes(part) ? (
                      <strong key={i} className="text-gray-900">
                        {part}
                      </strong>
                    ) : (
                      part
                    ),
                  )}
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#E86A33] to-[#d35a28]" />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
