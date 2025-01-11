"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import ThemeToggle from "@/components/themes/ThemeToggle";
import LanguageButton from "./LanguageButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="font-mono sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        <Link href="/" className="font-bold text-xl uppercase hidden md:flex">
          {t("marekkrumal")}
        </Link>
        <nav className="hidden md:flex space-x-8 font-semibold uppercase">
          <div className="relative group">
            <button
              className="font-semibold uppercase focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {t("projects")}
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mt-2 p-2 rounded shadow-md z-50">
              {[
                { href: `/${locale}/projects`, label: t("allProjects") },
                {
                  href: `/${locale}/projects/awarespage`,
                  label: t("awarespage"),
                },
                { href: `/${locale}/projects/artstore`, label: t("artstore") },
                {
                  href: `/${locale}/projects/neuralnetwork`,
                  label: t("neuralnetwork"),
                },
                {
                  href: `/${locale}/projects/nebulatrails`,
                  label: t("nebulatrails"),
                },
                {
                  href: `/${locale}/projects/mtrx-mern`,
                  label: t("mtrx-mern"),
                },
                {
                  href: `/${locale}/projects/store-mern`,
                  label: t("store-mern"),
                },
                { href: `/${locale}/projects/sonicrun`, label: t("sonicrun") },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link href={`/${locale}/about`}>{t("about")}</Link>
          <Link href={`/${locale}/posts`}>{t("posts")}</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageButton />
        </div>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center cursor-pointer z-50 p-2 relative"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center bg-background w-full h-screen text-center fixed top-0 left-0 z-40">
          <nav className="flex flex-col justify-center items-center space-y-8 mt-20">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-4 text-lg uppercase font-bold"
            >
              {t("home")}
            </Link>
            <hr className="border-t border w-60 mx-auto my-2" />
            <Link
              href={`/${locale}/projects`}
              onClick={closeMenu}
              className="py-4 text-lg uppercase w-60 font-bold"
            >
              {t("projects")}
            </Link>
            <hr className="border-t border mx-auto w-60 my-2" />
            <Link
              href={`/${locale}/about`}
              onClick={closeMenu}
              className="py-4 text-lg uppercase font-bold"
            >
              {t("about")}
            </Link>
            <hr className="border-t border w-60 mx-auto my-2" />
            <Link
              href={`/${locale}/posts`}
              onClick={closeMenu}
              className="py-4 text-lg uppercase font-bold"
            >
              {t("posts")}
            </Link>
            <hr className="border-t border w-60 mx-auto my-2" />
            <Link
              href={`/${locale}/contact`}
              onClick={closeMenu}
              className="py-4 text-lg uppercase font-bold"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
