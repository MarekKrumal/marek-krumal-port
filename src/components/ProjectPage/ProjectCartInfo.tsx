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
    <div className="relative z-10 mx-auto p-4 sm:p-6 md:p-8 border dark:bg-black/10 bg-stone-100 max-w-3xl duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold uppercase  text-2xl md:text-2xl lg:text-2xl font-mono">
            {t("title")}
          </h1>
          <div className="flex space-x-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-120 duration-300 dark:bg-transparent bg-transparent"
              aria-label="visit github repo"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-120 duration-300 dark:bg-transparent bg-transparent"
              aria-label="visit live site"
            >
              <SiPolygon size={20} />
            </a>
          </div>
        </div>
        <p className="pb-6">{t("description")}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl pr-2 font-mono font-semibold uppercase text-blue-700 dark:text-blue-400"
            aria-label="visit GitHub repo"
          >
            SourceCode
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-mono uppercase font-semibold text-red-700 dark:text-red-400"
            aria-label="visit live site"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
