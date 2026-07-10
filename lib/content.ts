import resumeData from "@/data/resume/resume.json"

export type ExperienceEntry = (typeof resumeData.experience)[number]
export type ProjectEntry = (typeof resumeData.projects)[number]

export const siteContent = {
  name: resumeData.portfolioContent.navName,
  title: resumeData.identity.title,
  availability: resumeData.portfolioContent.availability,
  location: resumeData.identity.location,
  openToRemote: resumeData.identity.openToRemote,
  summary: resumeData.summary,
  contact: resumeData.contact,
  links: resumeData.links,
  hero: resumeData.portfolioContent.hero,
  services: resumeData.portfolioContent.services,
  experience: resumeData.experience,
  projects: resumeData.projects,
  education: resumeData.education,
  booking: {
    ...resumeData.portfolioContent.booking,
    email: resumeData.contact.email,
    emailHref: resumeData.contact.emailHref,
  },
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Dashboard", href: "#dashboard" },
  ],
} as const

export function formatExperienceDate(date: string): string {
  const [year, month] = date.split("-")
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  })
  return formatter.format(new Date(Number(year), Number(month) - 1))
}

export function formatExperienceRange(entry: ExperienceEntry): string {
  const start = formatExperienceDate(entry.startDate)
  const end = entry.endDate
    ? formatExperienceDate(entry.endDate)
    : entry.endDateLabel
  return `${start} – ${end}`
}
