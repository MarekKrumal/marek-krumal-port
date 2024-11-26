"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageButton from "./LanguageButton";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();

  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 px-4 pt-8 pb-4">
        {/* Vlevo - Marek Křůmal */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl uppercase">
            {t("marekkrumal")}
          </Link>
        </div>

        {/* Uprostřed - Navigační odkazy */}
        <nav className="flex space-x-10 uppercase font-semibold mx-auto text-center">
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/posts`}>{t("posts")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>

        {/* Vpravo - Tlačítka pro téma a jazyk */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageButton />
        </div>
      </div>
    </header>
  );
}
