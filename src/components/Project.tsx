"use client";

import React from "react";
import Image from "next/image";
import { SiGithub, SiPolygon } from "react-icons/si";
import { useTranslations, useLocale } from "next-intl";
import { ProjectData, TechnologyName } from "@/types/Project";
import { technologyConfig } from "@/lib/technologyConfig";

interface ProjectProps extends ProjectData {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  translationKey: string;
  technologies: TechnologyName[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  githubUrl,
  liveUrl,
  image,
  translationKey,
  technologies,
}) => {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <div className="relative group mx-auto overflow-hidden border shadow-sm hover:shadow-2xl transition-shadow duration-300 max-w-full sm:max-w-xl md:max-w-3xl hover:shadow-sky-500/5">
      <div className="w-full h-[450px] md:h-[600px]">
        <a href={`/${locale}/projects/${translationKey}`}>
          {image && (
            <Image
              src={image}
              alt={t(`${translationKey}.title`, { default: title })}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={20}
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none group-hover:shadow-inner group-hover:shadow-black/20 transition-shadow duration-300" />
        </a>
      </div>
      <div className="absolute border-t p-4 sm:p-6 md:p-8 inset-x-0 bottom-0 flex flex-col justify-end bg-stone-50 dark:bg-[#222222] shadow-sm">
        <a
          href={`/${locale}/projects/${translationKey}`}
          className="hover:underline"
        >
          <h2 className="sm:text-xl md:text-2xl font-mono font-bold uppercase text-blue-700 dark:text-cyan-100">
            {t(`${translationKey}.title`, { default: title })}
          </h2>
          <p className="mt-2 text-sm sm:text-md text-gray-700 dark:text-gray-400">
            {t(`${translationKey}.description`, {
              default: "Description not available.",
            })}
          </p>
        </a>
        <div className="mt-4">
          {technologies && (
            <div className="flex flex-wrap justify-center gap-6 text-3xl">
              {technologies.map((tech, index) => {
                const config = technologyConfig[tech];
                if (!config) return null;

                return (
                  <div key={index} className="flex flex-col items-center">
                    {config.icon}
                    <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center">
                      {config.label}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300"
            >
              <SiGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300"
            >
              <SiPolygon size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
