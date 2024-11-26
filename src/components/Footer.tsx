import { Heart } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow"></main>
      <footer className="text-center py-8 mt-auto text-sm font-normal">
        <nav className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          <div className="text-gray-300">
            © 2024 Marek Křůmal | Olomouc, Česká Republika
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center py-3 space-y-2 sm:space-y-0 sm:space-x-3">
            <div>
              {t("createdWith")}{" "}
              <Heart
                strokeWidth={3}
                className="inline text-red-400 hover:text-pink-500 mx-1 transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-125"
              />
              {t("usingTechnologies")}
            </div>
            <div>
              <Link
                href="https://github.com/marekkrumal"
                className="underline text-cyan-600 hover:text-cyan-400 font-semibold transition-colors duration-300"
              >
                {t("github")}
              </Link>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}
