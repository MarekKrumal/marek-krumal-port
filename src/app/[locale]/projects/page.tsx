import { SiGithub, SiPolygon } from "react-icons/si";
import { SlFolder } from "react-icons/sl";
import { AllProjects2 } from "@/app/data/projects";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold font-mono text-center mb-8">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllProjects2.map((project) => (
          <div
            key={project.id}
            className="relative min-h-[280px] dark:hover:bg-black/30 hover:bg-blue-100 flex flex-col border hover:scale-110 shadow-md hover:shadow-xl hover:shadow-sky-500/20 transition-shadow duration-300 bg-stone-50 dark:bg-[#222222] p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <SlFolder
                size={30}
                className="text-gray-500 dark:text-gray-400"
              />
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:scale-105 transition-transform text-gray-600 dark:text-gray-300"
                  >
                    <SiGithub size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:scale-105 transition-transform text-gray-600 dark:text-gray-300"
                  >
                    <SiPolygon size={20} />
                  </a>
                )}
              </div>
            </div>

            <h2 className="text-lg font-bold text-blue-700 dark:text-cyan-100 uppercase mb-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}
