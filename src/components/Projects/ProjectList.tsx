"use client";

import React, { useState } from "react";
import Project from "@/components/Projects/Project";
import { ProjectData } from "@/types/Project";
import ShowMoreButton from "../ShowMoreButton";

const projectsData: ProjectData[] = [
  {
    id: 1,
    translationKey: "awarespage",
    title: "Aware Social Network",
    githubUrl: "https://github.com/MarekKrumal/awares33",
    liveUrl: "https://awares33.vercel.app/",
    image: "/assets/awaresdemo2.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
  },
  {
    id: 2,
    translationKey: "artstore",
    title: "ArtStore",
    githubUrl: "https://github.com/MarekKrumal/art-store-next-js",
    liveUrl: "https://art-store-next-js-fv76.vercel.app/",
    image: "/assets/artstoremainpage.png",
    technologies: ["Next.js", "TypeScript", "WIX", "Tailwind"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl:
      "https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/",
    image: "/assets/neuralnetworkfirstpic.png",
    technologies: ["Vite", "TypeScript", "OpenAI", "Tailwind"],
  },
  {
    id: 4,
    translationKey: "nebulatrails",
    title: "NebulaTrails",
    githubUrl: "https://github.com/MarekKrumal/nebulatrails-nextjs",
    liveUrl: "https://nebulatrails-nextjs.vercel.app",
    image: "/assets/nebulatrails1.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    id: 5,
    translationKey: "sonicrun",
    title: "Sonic Run",
    githubUrl: "https://github.com/MarekKrumal/sonicJS",
    liveUrl: "https://sonic-js.vercel.app/",
    image: "/assets/Screenshot_10.png",
    technologies: ["Vite", "JavaScript", "Kaplay", "Node.js"],
  },
];

export default function ProjectList() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <div className="space-y-6 pt-8">
      {/* Viditelné projekty */}
      {projectsData.slice(0, visibleCount).map((project) => (
        <Project key={project.id} {...project} />
      ))}

      {/* Tlačítko Show More */}
      {visibleCount < projectsData.length && (
        <div className="flex justify-center mt-4">
          <ShowMoreButton
            visibleCount={visibleCount}
            totalCount={projectsData.length}
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
}
