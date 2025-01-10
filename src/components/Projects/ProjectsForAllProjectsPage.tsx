"use client";

import { SiGithub, SiPolygon } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";
import { ProjectData, TechnologyName } from "@/types/Project";
import { technologyConfig } from "@/lib/technologyConfig";
import { SlFolder } from "react-icons/sl";
import Link from "next/link";

interface ProjectProps extends ProjectData {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  translationKey: string;
  technologies: TechnologyName[];
}

const ProjectforAllProjects: React.FC<ProjectProps> = ({
  title,
  githubUrl,
  liveUrl,
  translationKey,
  technologies,
}) => {
  const t = useTranslations("projects");
  const locale = useLocale();

  const description = t(`${translationKey}.description`, {
    default: "Description not available.",
  });

  return (
    <div className="relative flex flex-col border dark:hover:shadow-sky-500/40 hover:shadow-sky-800/40 dark:hover:bg-black/20 hover:bg-slate-100/50 hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300 w-full h-[300px] p-6 bg-stone-50 dark:bg-[#222222] group">
      {/* Externí odkazy (GitHub a Live Demo) */}
      <div className="absolute top-4 right-4 flex space-x-4 z-10">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform duration-300"
            aria-label="GitHub Repository"
          >
            <SiGithub size={20} />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform duration-300"
            aria-label="Live Demo"
          >
            <SiPolygon size={20} />
          </a>
        )}
      </div>

      {/* Navigační odkaz (ikona složky, titulek a popis) */}
      <Link
        href={`/${locale}/projects/${translationKey}`}
        className="flex flex-col items-start space-y-2 text-left flex-grow"
        aria-label={`Navigate to ${title}`}
      >
        {/* Ikona složky */}
        <SlFolder
          size={35}
          className="text-gray-600 dark:text-gray-400 group-hover:text-sky-800 dark:group-hover:text-sky-100 transition-colors duration-300"
        />

        {/* Titulek projektu */}
        <h2 className="text-lg pt-3 font-bold uppercase text-blue-700 dark:text-cyan-100 group-hover:text-blue-500 dark:group-hover:text-sky-200 transition-colors duration-300">
          {title}
        </h2>

        {/* Popis projektu */}
        <p className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-sky-950 dark:group-hover:text-sky-100 transition-colors duration-300">
          {description}
        </p>
      </Link>

      {/* Technologie používané v projektu */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
        {technologies.map((tech, index) => {
          const config = technologyConfig[tech];
          if (!config) return null;
          return (
            <div key={index} className="flex flex-col items-center ">
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectforAllProjects;
