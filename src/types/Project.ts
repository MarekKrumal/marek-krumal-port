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
  | "Express"
  | "React"
  | "FireBase";

export interface ProjectData {
  id: string | number;
  translationKey: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  imageblur?: string;
  technologies: TechnologyName[];
  alternativeUrl?: string; // to stejne co dole
  hasPage?: boolean; // je to kvuli tomu ze ne vsechyn stranky maji svoji page mensi stranky budou okdazovat na github
}

export interface PostData {
  translationKey: string;
  id: number;
  title: string;
  date: string;
}
