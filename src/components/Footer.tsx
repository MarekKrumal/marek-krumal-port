import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="text-center pt-10 py-4 text-sm font-mono bg-transparent border-t">
      <nav className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="text-gray-600 dark:text-gray-300">
          © 2024 Marek Křůmal | Olomouc, Česká Republika
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center py-3 space-y-2 sm:space-y-0 sm:space-x-3">
          <div>
            {t("createdWith")}{" "}
            <Heart
              size={15}
              strokeWidth={3}
              className="inline text-red-400 hover:text-pink-500 mx-1 transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-125"
            />{" "}
            {t("usingTechnologies")}
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/marekkrumal"
              className="inline text-cyan-600 hover:text-cyan-400 font-mono font-semibold transition-colors duration-300"
            >
              {t("github")}
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
}
