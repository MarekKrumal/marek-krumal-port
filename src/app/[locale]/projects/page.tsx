import ProjectListForAllProjects from "@/components/Projects/ProjectListForAllProjects";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <h1 className="text-3xl font-bold font-mono text-center mb-6">
        {t("title")}
      </h1>
      <ProjectListForAllProjects />
    </div>
  );
}
