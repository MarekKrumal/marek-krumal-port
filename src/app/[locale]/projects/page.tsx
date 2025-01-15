import { AllProjects2 } from "@/app/data/projects";
import { useLocale, useTranslations } from "next-intl";
import { SlFolder } from "react-icons/sl";
import { SiGithub, SiPolygon } from "react-icons/si";
import Link from "next/link";
import OnclickFunkce from "@/components/Onclick";

export default function ProjectsIndexPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold font-mono text-center mb-8 uppercase text-orange-600 dark:text-orange-500 ">
        {t("title")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllProjects2.map((project) => (
          <Link
            key={`${project.id}-${project.translationKey}`}
            href={`/${locale}/projects/${project.translationKey}`}
            aria-label="visit project"
            className="relative min-h-[280px] dark:hover:bg-black/30 hover:bg-stone-200 flex flex-col border hover:scale-105 transition-transform duration-300 bg-stone-100 dark:bg-[#222222] p-4 hover:shadow-2xl dark:hover:shadow-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <SlFolder
                size={30}
                className="text-gray-500 dark:text-gray-400"
              />
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <OnclickFunkce url={project.githubUrl}>
                    <SiGithub
                      size={20}
                      className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                    />
                  </OnclickFunkce>
                )}
                {project.liveUrl && (
                  <OnclickFunkce url={project.liveUrl}>
                    <SiPolygon
                      size={20}
                      className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                    />
                  </OnclickFunkce>
                )}
              </div>
            </div>

            <h2 className="text-lg font-bold  uppercase mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              {t(`${project.translationKey}.description`)}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-mono text-gray-500 dark:text-gray-400 px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
