export enum SkillCategory {
  PROGRAMMING = "Programming",
  OS = "Operating Systems",
  FRAMEWORKS = "Frameworks",
  TOOLS = "Tools",
}
interface Skill {
  label: string;
  rating: number;
}

export const skillsByCategory: Record<SkillCategory, Skill[]> = {
  [SkillCategory.PROGRAMMING]: [
    { label: "JavaScript", rating: 4 },
    { label: "HTML",       rating: 4 },
    { label: "CSS",        rating: 4 },
    { label: "Typescript", rating: 4 },
    { label: "Java",       rating: 3 },
    { label: "Python",     rating: 3 },
    { label: "PHP",        rating: 2 },
    { label: "SQL",        rating: 2 },
    { label: "C",          rating: 2 },
    { label: "C++",        rating: 2 },
  ],
  [SkillCategory.OS]: [
    { label: "Windows",    rating: 4 },
    { label: "MacOS",      rating: 3 },
    { label: "Linux Ubuntu", rating: 3 },
    { label: "iOS",        rating: 2 },
    { label: "Android",    rating: 2 },
  ],
  [SkillCategory.FRAMEWORKS]: [
    { label: "TailwindCSS",   rating: 4 },
    { label: "React",      rating: 3 },
    { label: "Next.js",    rating: 3 },
    { label: "Node",       rating: 3 },
    { label: "pnpm",       rating: 3 },
    { label: "Require.js", rating: 3 },
  ],
  [SkillCategory.TOOLS]: [
    { label: "Figma",          rating: 4 },
    { label: "Git",            rating: 4 },
    { label: "Adobe Premiere", rating: 3 },
    { label: "XCode", rating: 2 },
    { label: "Android Studio", rating: 2 },
    { label: "Docker",         rating: 2 },
  ],
};
