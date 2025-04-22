//chatgptCODE
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

interface ShowMorePostsButtonProps {
  className?: string;
}

export default function ShowMorePostsButton({
  className = "",
}: ShowMorePostsButtonProps) {
  const locale = useLocale();
  const t = useTranslations("LatestPosts");
  const href = `/${locale}/posts`;
  const buttonText = t("showMore");
  const ariaLabel = t("showMorePostsAriaLabel") || "Show more posts";
  const buttonStyles =
    "p-3 mt-[6px] z-50 dark:bg-black/10 bg-stone-100 font-bold text-md sm:text-lg font-mono border text-orange-700 dark:text-orange-500 lowercase hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-300 hover:bg-orange-50 dark:hover:bg-black/20";

  return (
    <div className={className}>
      <Link href={href} aria-label={ariaLabel}>
        <div className={buttonStyles}>{buttonText}</div>
      </Link>
    </div>
  );
}
