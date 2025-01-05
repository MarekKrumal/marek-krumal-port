import { ChevronsDown } from "lucide-react";
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

  if (visibleCount >= totalCount) {
    return null;
  }

  return (
    <div className="flex text-center font-mono mx-auto justify-center">
      <button
        onClick={onClick}
        className="uppercase text-orange-600 dark:text-orange-500 px-3 py-1 border shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-black/10 flex flex-col items-center"
      >
        {t("showMore")}

        <ChevronsDown strokeWidth={1} className="mt-1" />
      </button>
    </div>
  );
};

export default ShowMoreButton;
