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
      <div className="relative group overflow-hidden border w-full">
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
                <div className="absolute inset-0 transition-colors pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none " />
              </div>
            )}
          </>
        )}

        {/* Title, Description & Tech */}
        <div className="absolute inset-x-0 bottom-0 border-t bg-stone-50 dark:bg-[#222222] pt-4 mx-auto md:p-8 pb-0 md:pb-1 md:pt-4 p-4">
          {renderLink(
            <>
              <h2 className="sm:text-xl md:text-2xl font-mono font-bold uppercase ">
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
                className="p-1 hover:scale-105 transition-transform"
              >
                <SiGithub size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:scale-105 transition-transform"
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
