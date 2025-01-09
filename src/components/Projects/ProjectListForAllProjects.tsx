import { ProjectData } from "@/types/Project";
import ProjectforAllProjects from "./ProjectsForAllProjectsPage";

const projectsData: ProjectData[] = [
  {
    id: 1,
    translationKey: "awarespage",
    title: "Aware Social Network",
    githubUrl: "https://github.com/MarekKrumal/awares33",
    liveUrl: "https://awares33.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
  },
  {
    id: 2,
    translationKey: "artstore",
    title: "ArtStore",
    githubUrl: "https://github.com/MarekKrumal/art-store-next-js",
    liveUrl: "https://art-store-next-js-fv76.vercel.app/",
    technologies: ["Next.js", "TypeScript", "WIX", "Tailwind"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    technologies: ["Vite", "TypeScript", "OpenAI", "Tailwind"],
  },
  {
    id: 4,
    translationKey: "nebulatrails",
    title: "NebulaTrails",
    githubUrl: "https://github.com/MarekKrumal/nebulatrails-nextjs",
    liveUrl: "https://nebulatrails-nextjs.vercel.app",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    id: 5,
    translationKey: "sonicrun",
    title: "Sonic Run",
    githubUrl: "https://github.com/MarekKrumal/sonicJS",
    liveUrl: "https://sonic-js.vercel.app/",
    technologies: ["Vite", "JavaScript", "Kaplay", "Node.js"],
  },
  {
    id: 6,
    translationKey: "mtrx-mern",
    title: "mtrx-mern",
    githubUrl: "https://github.com/MarekKrumal/MTRX",
    liveUrl: "https://mtrx.onrender.com/",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
  },
  {
    id: 7,
    translationKey: "store-mern",
    title: "store-mern",
    githubUrl: "https://github.com/MarekKrumal/MERN-store1",
    liveUrl: "https://mern-store1-piyt.onrender.com/",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
  },
];

export default function ProjectListForAllProjects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {projectsData.map((project) => (
        <ProjectforAllProjects key={project.id} {...project} />
      ))}
    </div>
  );
}
