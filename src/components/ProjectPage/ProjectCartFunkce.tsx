import { useTranslations } from "next-intl";

interface ProjectCartFunkceProps {
  projectKey: string;
}

export default function ProjectCartFunkce({
  projectKey,
}: ProjectCartFunkceProps) {
  const t = useTranslations(`projects.${projectKey}`);

  const featureKeys = [
    "func1",
    "func2",
    "func3",
    "func4",
    "func5",
    "func6",
    "func7",
    "func8",
    "func9",
    "func10",
    "func11",
    "func12",
    "func13",
    "func14",
    "func15",
    "func16",
    "func17",
    "func18",
    "func19",
    "func20",
    "func21",
    "func22",
    "func23",
  ];

  const displayedFeatures = featureKeys
    .filter((key) => t(`features.${key}`) !== "")
    .slice(0, 23);

  return (
    <div className="z-10 mx-auto mt-0 p-4 sm:p-6 md:p-8 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-4xl hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-6">
        {/* Proč byla aplikace vytvořena */}
        <h2 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-xl font-mono">
          {t("whyWasItCreatedTitle")}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {t("whyWasItCreatedDesc")}
        </p>

        {/* Výpis funkcí a technologií */}
        <h2 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-xl font-mono">
          {t("featuresTitle")}
        </h2>
        <ul
          className="list-disc list-inside text-sm sm:text-base 
                       text-gray-600 dark:text-gray-400 space-y-1"
        >
          {displayedFeatures.map((key) => (
            <li key={key}>{t(`features.${key}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
