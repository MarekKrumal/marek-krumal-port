import { useTranslations } from "next-intl";
import { SiGithub, SiPolygon } from "react-icons/si";

interface ProjectCartInfoProps {
  projectKey: string;
  githubLink: string;
  liveLink: string;
}

export default function ProjectCartInfo({
  projectKey,
  githubLink,
  liveLink,
}: ProjectCartInfoProps) {
  const t = useTranslations(`projects.${projectKey}`);

  return (
    <div className="z-10 mx-auto mt-0 p-4 sm:p-6 md:p-12 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-2xl lg:text-2xl font-mono">
            {t("title")}
          </h1>
          <div className="flex space-x-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 dark:hover:text-sky-100 hover:text-sky-800 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <SiPolygon size={20} />
            </a>
          </div>
        </div>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
