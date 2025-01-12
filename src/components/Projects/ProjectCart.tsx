import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { SiGithub, SiPolygon } from "react-icons/si";
import { ProjectData } from "@/types/Project";
import { technologyConfig } from "@/lib/technologyConfig";

export default function ProjectCard({
  translationKey,
  title,
  githubUrl,
  liveUrl,
  image,
  imageblur,
  technologies,
  hasPage = true,
  alternativeUrl,
}: ProjectData) {
  const t = useTranslations("projects");
  const locale = useLocale();

  const description = t(`${translationKey}.description`, {
    default: "Description not available.",
  });
  const projectTitle = t(`${translationKey}.title`, { default: title });

  const projectLink = hasPage
    ? `/${locale}/projects/${translationKey}`
    : alternativeUrl || "#";

  const renderLink = (children: React.ReactNode) => {
    if (projectLink !== "#") {
      return (
        <a
          href={projectLink}
          target={!hasPage ? "_blank" : undefined}
          rel={!hasPage ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <div className="pt-4">
      <div className="relative group overflow-hidden border shadow-sm hover:shadow-2xl transition-shadow duration-300 w-full hover:shadow-sky-500/20">
        {image && (
          <>
            {renderLink(
              <div className="relative h-[450px] md:h-[600px]">
                <Image
                  src={image}
                  alt={projectTitle}
                  className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
                  quality={75}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={imageblur || image}
                />
                <div className="absolute inset-0 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none group-hover:shadow-inner group-hover:shadow-black/20 transition-shadow duration-300" />
              </div>
            )}
          </>
        )}

        {/* Title, Description & Tech */}
        <div className="absolute inset-x-0 bottom-0 border-t bg-stone-50 dark:bg-[#222222] shadow-sm pt-4 px-7 pb-2">
          {renderLink(
            <>
              <h2 className="sm:text-xl md:text-2xl font-mono font-bold uppercase text-blue-700 dark:text-cyan-100">
                {projectTitle}
              </h2>
              <p className="mt-2 text-sm sm:text-md text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </>
          )}

          {technologies?.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-2xl">
              {technologies.map((tech) => {
                const cfg =
                  technologyConfig[tech as keyof typeof technologyConfig];
                if (!cfg) return null;
                return (
                  <div key={tech} className="flex flex-col items-center">
                    {cfg.icon}
                    <p className="text-sm p-2 font-mono text-gray-500 dark:text-gray-400 text-center">
                      {cfg.label}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Top-right links (GitHub, Live) */}
          <div className="absolute top-4 right-4 flex space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform"
              >
                <SiGithub size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform"
              >
                <SiPolygon size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
