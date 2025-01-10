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
    image: "/assets/awares/awaresdemo2.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
  },
  {
    id: 2,
    translationKey: "artstore",
    title: "ArtStore",
    githubUrl: "https://github.com/MarekKrumal/art-store-next-js",
    liveUrl: "https://art-store-next-js-fv76.vercel.app/",
    image: "/assets/artstore/artstoremainpage.png",
    technologies: ["Next.js", "TypeScript", "WIX", "Tailwind"],
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl: "https://neural-network-nextjs-lnpd.vercel.app/",
    image: "/assets/neuralnetwork/cart.png",
    technologies: ["Vite", "TypeScript", "OpenAI", "Tailwind"],
  },
  {
    id: 4,
    translationKey: "nebulatrails",
    title: "NebulaTrails",
    githubUrl: "https://github.com/MarekKrumal/nebulatrails-nextjs",
    liveUrl: "https://nebulatrails-nextjs.vercel.app",
    image: "/assets/nebulatrails/nebulahome.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    id: 5,
    translationKey: "sonicrun",
    title: "Sonic Run",
    githubUrl: "https://github.com/MarekKrumal/sonicJS",
    liveUrl: "https://sonic-js.vercel.app/",
    image: "/assets/sonic-ring-run/Screenshot_10.png",
    technologies: ["Vite", "JavaScript", "Kaplay", "Node.js"],
  },
  {
    id: 6,
    translationKey: "mtrx-mern",
    title: "mtrx-mern",
    githubUrl: "https://github.com/MarekKrumal/MTRX",
    liveUrl: "https://mtrx.onrender.com/",
    image: "/assets/mtrx-mern/Screenshot_1.png",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
  },
  {
    id: 7,
    translationKey: "store-mern",
    title: "store-mern",
    githubUrl: "https://github.com/MarekKrumal/MERN-store1",
    liveUrl: "https://mern-store1-piyt.onrender.com/",
    image: "/assets/store-mern/mern-main.png",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
  },
];

export default function ProjectList() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <div className="pt-5">
      {/* Viditelné projekty */}
      <div className="space-y-5">
        {projectsData.slice(0, visibleCount).map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      {/* Tlačítko Show More */}
      {visibleCount < projectsData.length && (
        <div className="mt-2">
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
