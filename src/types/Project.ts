export type TechnologyName =
  | "Nextjs"
  | "TypeScript"
  | "Tailwind"
  | "Prisma"
  | "WIX"
  | "OpenAI"
  | "Vite"
  | "Stripe"
  | "JavaScript"
  | "Kaplay"
  | "Nodejs"
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
  technologies: TechnologyName[] | string[];
  alternativeUrl?: string; // to stejne co dole
  hasPage?: boolean; // je to kvuli tomu ze ne vsechyn stranky maji svoji page mensi stranky budou okdazovat na github
}

export interface PostData {
  translationKey: string;
  id: number;
  title: string;
  date: string;
}
