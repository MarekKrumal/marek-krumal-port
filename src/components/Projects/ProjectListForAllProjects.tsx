import Project from "@/components/Projects/Project";
import { ProjectData } from "@/types/Project";

const projectsData: ProjectData[] = [
  {
    id: 1,
    translationKey: "awarespage",
    title: "Aware Social Network",
    githubUrl: "https://github.com/MarekKrumal/awares33",
    liveUrl: "https://awares33.vercel.app/",
    image: "/assets/awaresdemo2.png",
    technologies: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    id: 2,
    translationKey: "artstore",
    title: "ArtStore",
    githubUrl: "https://github.com/MarekKrumal/art-store-next-js",
    liveUrl: "https://art-store-next-js-fv76.vercel.app/",
    image: "/assets/artstoremainpage.png",
    technologies: ["Next.js", "TypeScript", "WIX"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 4,
    translationKey: "nebulatrails",
    title: "NebulaTrails",
    githubUrl: "https://github.com/MarekKrumal/nebulatrails-nextjs",
    liveUrl: "https://nebulatrails-nextjs.vercel.app",
    image: "/assets/nebulatrails1.png",
    technologies: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI"],
  },
];

export default function ProjectListForAllProjects() {
  return (
    <div className="grid grid-cols-2 mx-auto gap-0 sm:gap-2">
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
