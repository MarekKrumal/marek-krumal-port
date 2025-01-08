"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Post from "./Posts/Post";
import { PostData } from "@/types/Project";

const postData: PostData[] = [
  {
    id: 1,
    translationKey: "top5nextjs",
    title: "Top 5 Next.js",
    date: "2023-08-01",
  },
  {
    id: 2,
    translationKey: "top5nextjs",
    title: "Top 5 Next.js",
    date: "2023-08-02",
  },
  {
    id: 3,
    translationKey: "top5nextjs",
    title: "Top 5 Next.js",
    date: "2023-08-03",
  },
  {
    id: 4,
    translationKey: "top5nextjs",
    title: "Top 5 Next.js",
    date: "2023-08-04",
  },
  {
    id: 5,
    translationKey: "top5nextjs",
    title: "Top 5 Next.js",
    date: "2023-08-05",
  },
];

const Page = () => {
  const t = useTranslations("LatestPosts");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, postData.length));
  };

  return (
    <div>
      <div className="relative z-10 mx-auto mt-0 p-4 sm:p-6 md:p-12 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
        <div className="mx-auto">
          <h2 className="text-xl font-mono text-blue-700 dark:text-cyan-100 uppercase mb-3">
            {t("title")}
          </h2>
          {postData.slice(0, visibleCount).map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
      {visibleCount < postData.length && (
        <div className="flex font-mono mx-auto mt-4 justify-start">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 text-sm font-bold text-orange-600 dark:text-orange-500 hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-gray-50 hover:bg-gray-200 dark:hover:bg-black/20 rounded-md"
            aria-label="Show more posts"
          >
            {t("showMore")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
