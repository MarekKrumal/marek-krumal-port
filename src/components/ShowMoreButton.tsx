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
    <div className="flex font-mono mx-auto justify-start">
      <button
        onClick={onClick}
        className=" text-orange-600 dark:text-orange-500 px-1 hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-200 dark:hover:bg-black/20"
      >
        {t("showMore")}
      </button>
    </div>
  );
};

export default ShowMoreButton;
