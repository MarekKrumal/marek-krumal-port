import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface PostProps {
  title: string;
  date: string;
  translationKey: string;
}

export default function Post({ title, translationKey, date }: PostProps) {
  const t = useTranslations("posts");
  const locale = useLocale();

  return (
    <Link href={`/${locale}/projects/${translationKey}`}>
      <div className="pl-6 pt-4 pb-4 p-3 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105 dark:hover:bg-black/10 hover:bg-slate-100 transition-shadow mx-auto dark:bg-transparent bg-transparent  duration-300">
        <p className="text-xs font-extralight text-green-600 dark:text-green-200">
          {t(`${translationKey}.date`, { default: date })}
        </p>
        <h2 className="text-lg font-mono text-blue-700 dark:text-cyan-100 uppercase">
          {t(`${translationKey}.title`, { default: title })}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {t(`${translationKey}.description`, {
            default: "Description not available.",
          })}
        </p>
      </div>
    </Link>
  );
}
