export type TechnologyName =
  | "Next.js"
  | "TypeScript"
  | "Tailwind"
  | "Prisma"
  | "WIX"
  | "OpenAI"
  | "Vite"
  | "Stripe"
  | "JavaScript"
  | "Kaplay"
  | "Node.js"
  | "MongoDB"
  | "Express";

export interface ProjectData {
  id: number;
  translationKey: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies: TechnologyName[];
}

export interface PostData {
  translationKey: string;
  id: number;
  title: string;
  date: string;
}
