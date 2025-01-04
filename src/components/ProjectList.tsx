"use client";

import React, { useState } from "react";
import ShowMoreButton from "@/components/ShowMoreButton";
import ProjectArtStore from "@/components/ProjectArtStore";
import ProjectAware from "@/components/ProjectAware";
import ProjectNeuralNetwork from "@/components/ProjectNeuralNetwork";

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      component: (
        <ProjectAware
          title="Aware"
          githubUrl="https://github.com/MarekKrumal/awares33"
          liveUrl="https://awares33.vercel.app/"
        />
      ),
    },
    {
      id: 2,
      component: (
        <ProjectArtStore
          title="ArtStore"
          githubUrl="https://github.com/MarekKrumal/art-store-next-js"
          liveUrl="https://art-store-next-js-fv76.vercel.app/"
        />
      ),
    },
    {
      id: 3,
      component: (
        <ProjectNeuralNetwork
          title="NeuralNetwork"
          githubUrl="https://github.com/MarekKrumal/neural-network-nextjs"
          liveUrl="https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/"
        />
      ),
    },
    {
      id: 3,
      component: (
        <ProjectNeuralNetwork
          title="NeuralNetwork"
          githubUrl="https://github.com/MarekKrumal/neural-network-nextjs"
          liveUrl="https://neural-network-nextjs-zl89-git-vite-marekkrumals-projects.vercel.app/"
        />
      ),
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <>
      {projects.slice(0, visibleCount).map((project) => (
        <div key={project.id} className="mx-auto pt-0 p-7 max-w-3xl">
          {project.component}
        </div>
      ))}

      <ShowMoreButton
        visibleCount={visibleCount}
        totalCount={projects.length}
        onClick={handleShowMore}
      />
    </>
  );
}
