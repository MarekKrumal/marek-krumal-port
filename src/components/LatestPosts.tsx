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
      <div className="relative z-10 mx-auto pt-5 md:pt-6 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
        <div className="mx-auto">
          <h2 className="text-md pl-7 sm:text-xl md:text-2xl font-mono text-blue-700 dark:text-cyan-100 uppercase mb-5 font-bold">
            {t("title")}
          </h2>
          <div className="p-4">
            {postData.slice(0, visibleCount).map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
      {visibleCount < postData.length && (
        <div className="flex font-mono mx-auto mt-2 justify-start max-w-3xl">
          <button
            onClick={handleShowMore}
            className=" text-orange-600 dark:text-orange-500 px-1 hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-200 dark:hover:bg-black/20"
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
