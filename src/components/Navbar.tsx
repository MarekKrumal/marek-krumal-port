"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageButton from "./LanguageButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 px-4 pt-8 pb-4">
        <div className="flex-shrink-0 hidden md:flex">
          <Link href="/" className="font-bold text-xl uppercase">
            {t("marekkrumal")}
          </Link>
        </div>

        <nav className="space-x-10 uppercase font-semibold mx-auto hidden md:flex text-center">
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/posts`}>{t("posts")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageButton />
        </div>

        <div className="block md:hidden p-1 z-50" onClick={handleClick}>
          {click ? (
            <X size={40} strokeWidth={1} className="text-white text-3xl z-50" />
          ) : (
            <Menu
              size={40}
              strokeWidth={1}
              className="text-white text-3xl z-50"
            />
          )}
        </div>
      </div>
      <ul
        className={`${
          click ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden w-full h-screen bg-background text-white flex flex-col text-xl justify-center font-bold uppercase items-center z-40`}
      >
        <li className="p-[2rem]">
          <Link href="/">{t("marekkrumal")}</Link>
        </li>
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
        </li>
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/about`}>{t("about")}</Link>
        </li>
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/posts`}>{t("posts")}</Link>
        </li>
        <hr className="border-t border-gray-600 w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </li>
      </ul>
    </header>
  );
}
