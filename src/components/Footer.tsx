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
          <div>© 2024 Marek Křůmal | Olomouc Česká Republika</div>
          <div className="flex items-center justify-center py-3">
            {t("createdWith")}{" "}
            <Heart
              strokeWidth={3}
              className="inline size-4 text-red-400 hover:text-pink-500 mx-1 transition-transform duration-500 ease-in-out hover:rotate-12 hover:scale-125"
            />
            {t("usingTechnologies")}{" "}
            <Link
              href="https://github.com/marekkrumal"
              className="ml-1 underline text-cyan-600 hover:text-cyan-400 font-semibold transition-colors duration-300"
            >
              {t("github")}
            </Link>
            .
          </div>
        </nav>
      </footer>
    </div>
  );
}
