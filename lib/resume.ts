import resumeData from "@/data/resume.json"
import siteCopyData from "@/data/site-copy.json"

export const resume = resumeData
export const siteCopy = siteCopyData

export type Resume = typeof resumeData
export type ExperienceEntry = Resume["experience"][number]
export type ProjectEntry = Resume["projects"][number]
export type Skills = Resume["skills"]
export type SkillCategory = keyof Skills
export type SiteCopy = typeof siteCopyData
