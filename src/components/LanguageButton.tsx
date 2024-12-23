"use client";
import { usePathname } from "next/navigation";

export default function LanguageButton() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "cz";

  const toggleLanguage = () => {
    const newLocale = currentLocale === "cz" ? "en" : "cz";
    const newPath = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
    window.location.href = newPath;
  };
  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-black/10"
    >
      {currentLocale === "cz" ? "EN" : "CZ"}
    </button>
  );
}
