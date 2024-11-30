import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";

interface ProjectProps {
  title: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  imageUrl,
  githubUrl,
  liveUrl,
}) => {
  const t = useTranslations("ProjectAware");
  const locale = useLocale();

  return (
    <div className="relative group mx-auto mt-8 overflow-hidden border shadow-sm hover:shadow-2xl transition-shadow duration-300 max-w-full sm:max-w-xl md:max-w-3xl hover:shadow-sky-500/5">
      <div className="relative w-full h-[600px] md:h-[800px]">
        <a href={`/${locale}/projects/`} className="group">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={600}
            height={660}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
          <div
            className="absolute inset-0 pointer-events-none 
            group-hover:shadow-inner group-hover:shadow-black/50 transition-shadow duration-300"
          ></div>
        </a>
      </div>
      <div className="absolute border-t p-4 sm:p-6 md:p-8 inset-x-0 bottom-0 flex flex-col justify-end bg-stone-50 dark:bg-[#222222] group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-out shadow-sm">
        <a href={`/${locale}/projects/`}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-bold uppercase group-hover:text-blue-700 dark:group-hover:text-cyan-100">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-md text-gray-700 dark:text-gray-400">
            {t("description")}
          </p>
        </a>

        {/* Odkazy */}
        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <FiGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <BsLink45Deg size={20} />
            </a>
          )}
        </div>
        <a href={`/${locale}/projects/`}>
          <div className="group mt-4">
            <div className="flex justify-center gap-0 text-3xl grid-cols-4 grid-rows-4 md:grid-cols-4 sm:gap-8">
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center hidden group-hover:block transition-opacity duration-300">
                  Next.js
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center hidden group-hover:block transition-opacity duration-300">
                  TypeScript
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiPrisma className="text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center hidden group-hover:block transition-opacity duration-300">
                  Prisma
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-gray-400 group-hover:text-sky-500 transition-colors duration-300" />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center hidden group-hover:block transition-opacity duration-300">
                  Tailwind
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
