import { allPosts } from "./PostsData";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function BlogIndexPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="max-w-full sm:max-w-3xl mx-auto p-4 sm:p-6 md:p-7 border shadow-sm dark:bg-black/10 bg-stone-50 hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase font-mono text-blue-700 dark:text-cyan-100 mb-4">
        {t("title")}
      </h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/${locale}/posts/${post.slug}`}>
              <div className="pl-3 sm:pl-4 pt-4 pb-4 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105 dark:hover:bg-black/10 hover:bg-slate-100 transition-shadow mx-auto dark:bg-transparent bg-transparent duration-300">
                <p className="text-xs font-extralight text-green-600 dark:text-green-200">
                  {post.date}
                </p>
                <h3 className="text-md sm:text-lg font-mono text-blue-700 dark:text-cyan-100 uppercase font-semibold">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 line-clamp-2">
                  {post.content.slice(0, 80)}...
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
