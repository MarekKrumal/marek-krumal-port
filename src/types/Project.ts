export type TechnologyName =
  | "Next.js"
  | "TypeScript"
  | "Tailwind"
  | "Prisma"
  | "WIX"
  | "OpenAI"
  | "Vite";

export interface ProjectData {
  id: number;
  translationKey: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies: TechnologyName[];
}
