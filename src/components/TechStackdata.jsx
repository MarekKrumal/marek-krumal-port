// data/techStackData.js

import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

export const techStack = [
  {
    name: "React.js",
    icon: <FaReact className="group-hover:text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="group-hover:text-black dark:group-hover:text-white" />
    ),
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="group-hover:text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="group-hover:text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="group-hover:text-sky-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="group-hover:text-green-500" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="group-hover:text-gray-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="group-hover:text-green-600" />,
  },
];
