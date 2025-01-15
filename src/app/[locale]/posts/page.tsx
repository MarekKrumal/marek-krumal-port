import { allPosts } from "./PostsData";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function BlogIndexPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-7 border dark:bg-black/10 bg-stone-100">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase font-mono  mb-4">
        {t("title")}
      </h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link
              href={`/${locale}/posts/${post.slug}`}
              aria-label="visit post"
            >
              <div className="pl-3 sm:pl-4 pt-4 pb-4  hover:scale-105 dark:hover:bg-black/20 hover:bg-stone-200 mx-auto dark:bg-transparent bg-transparent duration-300">
                <p className="text-xs font-light text-green-600 dark:text-green-200">
                  {post.date}
                </p>
                <h3 className="text-md sm:text-lg font-semibold">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 line-clamp-2">
                  {post.problog}...
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
