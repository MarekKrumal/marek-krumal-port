"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageButton from "./LanguageButton";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();

  const [click, setClick] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => setClick(!click);

  const handleClose = () => setClick(false); // Close the menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`font-mono sticky top-0 z-[1000] bg-background border-b transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 px-4 pt-5 pb-5">
        <div className="flex-shrink-0 hidden md:flex">
          <Link href="/" className="font-bold text-xl uppercase ">
            {t("marekkrumal")}
          </Link>
        </div>

        <nav className="space-x-10 uppercase font-semibold mx-auto hidden md:flex text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="font-semibold uppercase font-mono">
                {t("projects")}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="shadow-md z-[1000] bg-stone-50 dark:bg-[#262626] border p-3 text-center"
              style={{ borderColor: "#404040" }}
            >
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("allProjects")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/awarespage`}
                  className="block w-full z-[10] font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("awarespage")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/artstore`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("artstore")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/neuralnetwork`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("neuralnetwork")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/nebulatrails`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("nebulatrails")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/mtrx-mern`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("mtrx-mern")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/store-mern`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("store-mern")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/${locale}/projects/sonicrun`}
                  className="block w-full font-mono"
                  onClick={handleClose} // Close menu after click
                >
                  {t("sonicrun")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={`/${locale}/about`} onClick={handleClose}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/posts`} onClick={handleClose}>
            {t("posts")}
          </Link>
          <Link href={`/${locale}/contact`} onClick={handleClose}>
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageButton />
        </div>

        <div
          className="block md:hidden p-1 z-[1000] relative"
          onClick={handleClick}
        >
          {click ? (
            <X size={40} strokeWidth={1} className="text-3xl" />
          ) : (
            <Menu size={40} strokeWidth={1} className="text-3xl" />
          )}
        </div>
      </div>
      <ul
        className={`${
          click ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden w-full h-screen bg-background flex flex-col text-xl justify-center font-bold uppercase items-center z-[99]`}
      >
        <li className="p-[2rem]">
          <Link href="/" onClick={handleClose}>
            {t("marekkrumal")}
          </Link>
        </li>
        <hr className="border-t border w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/projects`} onClick={handleClose}>
            {t("projects")}
          </Link>
        </li>
        <hr className="border-t border w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/about`} onClick={handleClose}>
            {t("about")}
          </Link>
        </li>
        <hr className="border-t border w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/posts`} onClick={handleClose}>
            {t("posts")}
          </Link>
        </li>
        <hr className="border-t border w-3/4 mx-auto my-2" />
        <li className="p-[2rem]">
          <Link href={`/${locale}/contact`} onClick={handleClose}>
            {t("contact")}
          </Link>
        </li>
      </ul>
    </header>
  );
}
