"use client;";

import { PostData } from "@/types/Project";
import Post from "./Post";

const postData: PostData[] = [
  {
    id: 1,
    translationKey: "top5nextjs",
    title: "Top 5 nextjs",
    date: "2023-08-01",
  },
  {
    id: 2,
    translationKey: "top5nextjs",
    title: "Top 5 nextjs",
    date: "2023-08-01",
  },
  {
    id: 3,
    translationKey: "top5nextjs",
    title: "Top 5 nextjs",
    date: "2023-08-01",
  },
  {
    id: 4,
    translationKey: "top5nextjs",
    title: "Top 5 nextjs",
    date: "2023-08-01",
  },
  {
    id: 5,
    translationKey: "top5nextjs",
    title: "Top 5 nextjs",
    date: "2023-08-01",
  },
];

export default function PostList() {
  return (
    <div>
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
