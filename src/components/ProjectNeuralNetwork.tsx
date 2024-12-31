import Image from "next/image";
import {
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiPolygon,
  SiOpenai,
} from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";

interface ProjectProps {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectNeuralNetwork: React.FC<ProjectProps> = ({
  title,
  githubUrl,
  liveUrl,
}) => {
  const t = useTranslations("ProjectNeuralNetwork");
  const locale = useLocale();

  return (
    <div className="relative group mx-auto overflow-hidden border shadow-sm hover:shadow-2xl transition-shadow duration-300 max-w-full sm:max-w-xl md:max-w-3xl hover:shadow-sky-500/5">
      <div className="relative w-full h-[450px] md:h-[600px]">
        <a href={`/${locale}/projects/neuralnetwork`} className="group">
          <Image
            src="/assets/neuralnetworkfirstpic.png"
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            fill
            quality={50}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
          <div
            className="absolute inset-0 pointer-events-none 
            group-hover:shadow-inner group-hover:shadow-black/20 transition-shadow duration-300"
          ></div>
        </a>
      </div>
      <div className="absolute border-t p-4 sm:p-6 md:p-8 inset-x-0 bottom-0 flex flex-col justify-end bg-stone-50 dark:bg-[#222222] shadow-sm">
        <a href={`/${locale}/projects/neuralnetwork`}>
          <h2 className="sm:text-xl md:text-2xl font-mono font-bold uppercase text-blue-700 dark:text-cyan-100">
            {t("title")}
          </h2>
          <p className="mt-2 text-sm sm:text-md text-gray-700 dark:text-gray-400">
            {t("description")}
          </p>
        </a>

        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <SiGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 hover:scale-105 dark:hover:text-sky-100 hover:text-sky-800 transition-shadow duration-300 dark:bg-transparent bg-transparent"
            >
              <SiPolygon size={20} />
            </a>
          )}
        </div>
        <a href={`/${locale}/projects/neuralnetwork`}>
          <div className="group mt-4">
            <div className="flex justify-center gap-0 text-3xl grid-cols-4 grid-rows-4 md:grid-cols-4 sm:gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.svg"
                  alt="ViteLogo"
                  loading="lazy"
                  width={30}
                  height={30}
                />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center">
                  Vite
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-blue-600" />
                <p className="text-sm p-2 pl-0 font-mono text-gray-500 dark:text-gray-400 text-center">
                  TypeScript
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiOpenai className=" text-black dark:text-white" />
                <p className="text-sm pt-2 font-mono text-gray-500 dark:text-gray-400 text-center">
                  GPT-o1
                </p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-sky-500" />
                <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center">
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

export default ProjectNeuralNetwork;
