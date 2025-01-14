import { AllProjects2 } from "@/app/data/projects";
import ProjectCart from "./ProjectCart";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ProjectListServer() {
  const t = useTranslations("ShowMoreButton");
  const locale = useLocale();

  const visibleProjects = AllProjects2.slice(0, 6);

  return (
    <div>
      <div>
        {visibleProjects.map((project) => (
          <ProjectCart
            key={project.id}
            {...project}
            technologies={project.technologies}
          />
        ))}
      </div>
      <div className="max-w-48">
        <div className="p-3 mt-[6px] z-50 dark:bg-black/10 bg-stone-100 font-bold text-md sm:text-lg font-mono border text-orange-700 dark:text-orange-500 lowercase hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300 hover:bg-orange-50 dark:hover:bg-black/20 mx-auto">
          <Link href={`/${locale}/projects`} aria-label="Show more projects">
            {t("showMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}
