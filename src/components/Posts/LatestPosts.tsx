"use client";

import { allPosts } from "@/app/[locale]/posts/PostsData";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function LatestPosts() {
  const locale = useLocale();
  const latest = allPosts.slice(0, 3);
  const t = useTranslations("LatestPosts");

  return (
    <>
      <div className="relative mx-auto mt-6 max-w-full sm:max-w-3xl p-4 sm:p-6 md:p-7 border shadow-sm dark:bg-black/10 bg-stone-50 hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase font-mono text-blue-700 dark:text-cyan-100 mb-4">
          {t("title")}
        </h2>
        <ul>
          {latest.map((post) => (
            <li key={post.slug}>
              <Link href={`/${locale}/posts/${post.slug}`}>
                <div className="pl-3 sm:pl-4 pt-4 pb-4 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105 dark:hover:bg-black/10 hover:bg-slate-100 transition-shadow mx-auto dark:bg-transparent bg-transparent duration-300">
                  <p className="text-xs font-extralight text-green-600 dark:text-green-200">
                    {post.date}
                  </p>
                  <h3 className="text-md sm:text-lg font-mono text-blue-700 dark:text-cyan-100 uppercase font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1 line-clamp-2">
                    {post.content.slice(36, 82)}...
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-48">
        <div className="p-3 mt-[6px] z-50 dark:bg-black/10 bg-stone-50 font-bold text-md sm:text-lg font-mono border text-orange-600 dark:text-orange-500 lowercase hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 hover:bg-orange-50 dark:hover:bg-black/20 mx-auto">
          <Link href={`/${locale}/posts`}>{t("showMore")}</Link>
        </div>
      </div>
    </>
  );
}
