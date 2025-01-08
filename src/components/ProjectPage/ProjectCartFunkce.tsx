import { useTranslations } from "next-intl";

interface ProjectCartFunkceProps {
  projectKey: string;
}

export default function ProjectCartFunkce({
  projectKey,
}: ProjectCartFunkceProps) {
  const t = useTranslations(`projects.${projectKey}`);

  // Definujte klíče jednotlivých funkcí
  const featureKeys = [
    "nextjs",
    "serverComponents",
    "reactQuery",
    "optimisticUpdates",
    "infiniteScroll",
    "fileUploads",
    "likeSystem",
    "followSystem",
    "commentSystem",
    "notificationSystem",
    "dmSystem",
    "bookmarks",
    "authentication",
    "database",
    "hashtagsMentions",
    "fullTextSearch",
    "caching",
    "mobileResponsive",
    "themes",
    "formValidation",
    "editor",
    "deployment",
    "ideSetup",
  ];

  return (
    <div className="z-10 mx-auto mt-0 p-4 sm:p-6 md:p-8 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-4xl hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-6">
        {/* Titulek projektu */}
        <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-2xl lg:text-2xl font-mono">
          {t("title")}
        </h1>

        {/* Krátký úvod / popis */}
        <p className="text-base text-gray-700 dark:text-gray-300">
          {t("description")}
        </p>

        {/* Proč byla aplikace vytvořena */}
        <h2 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-xl font-mono">
          {t("whyWasItCreatedTitle")}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {t("whyWasItCreatedDesc")}
        </p>

        {/* Jaké technologie aplikace využívá */}
        <h2 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-xl font-mono">
          {t("technologiesUsedTitle")}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {t("technologiesUsedDesc")}
        </p>

        {/* Výpis funkcí a technologií */}
        <h2 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-xl font-mono">
          {t("featuresTitle")}
        </h2>
        <ul
          className="list-disc list-inside text-sm sm:text-base 
                       text-gray-600 dark:text-gray-400 space-y-1"
        >
          {featureKeys.map((key) => (
            <li key={key}>{t(`features.${key}`)}</li>
          ))}
        </ul>
        {/* Popis jednotlivých funkcí */}
        {/*<h2 className="font-bold uppercase text-orange-600 dark:text-orange-400 text-lg font-mono">
          {t("updateTitle")}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {t("updateDesc")}
        </p>*/}
      </div>
    </div>
  );
}
