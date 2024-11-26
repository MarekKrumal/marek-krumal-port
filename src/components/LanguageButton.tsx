"use client";
import { usePathname } from "next/navigation";

export default function LanguageButton() {
  const pathname = usePathname(); // Získání aktuální cesty
  const currentLocale = pathname.split("/")[1] || "cz"; // Lokalita z URL (výchozí 'cz')

  // Funkce pro změnu jazyka
  const toggleLanguage = () => {
    const newLocale = currentLocale === "cz" ? "en" : "cz";
    const newPath = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
    window.location.href = newPath; // Přesměrování na novou lokalitu
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {currentLocale === "cz" ? "EN" : "CZ"}
    </button>
  );
}
