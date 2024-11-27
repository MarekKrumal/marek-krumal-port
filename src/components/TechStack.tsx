// components/TechStack.jsx
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

const techStack = [
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

export default function TechStack() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold uppercase">S čím nejvíce pracuji</h1>
      <div className="grid grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent"
          >
            <div className="text-5xl mb-4 transition-colors duration-300">
              {tech.icon}
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
