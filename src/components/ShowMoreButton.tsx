"use client";

import { useTranslations } from "next-intl";

interface ShowMoreButtonProps {
  visibleCount: number;
  totalCount: number;
  onClick: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  visibleCount,
  totalCount,
  onClick,
}) => {
  const t = useTranslations("ShowMoreButton");

  // Pokud už zobrazuji všechny projekty, tlačítko se nezobrazí.
  if (visibleCount >= totalCount) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex font-mono mx-auto justify-start">
        <button
          type="button"
          onClick={() => {
            onClick();
          }}
          className="p-3 mt-[-10px] dark:bg-black/10 bg-stone-50 
                     font-bold text-md sm:text-lg font-mono border 
                     text-orange-600 dark:text-orange-500 lowercase 
                     hover:text-orange-700 dark:hover:text-orange-300 
                     transition-colors duration-300 
                     hover:bg-orange-50 dark:hover:bg-black/20"
        >
          {t("showMore")}
        </button>
      </div>
    </div>
  );
};

export default ShowMoreButton;
