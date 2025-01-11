// pages/[locale]/blog/index.tsx
import { allPosts } from "./PostsData";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function BlogIndexPage() {
  const t = useTranslations("blog"); // Např. pro nadpisy, atd.
  const locale = useLocale();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold uppercase mb-4">{t("title")}</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/${locale}/posts/${post.slug}`}>
              <span className="text-blue-600 hover:underline">
                {post.title}
              </span>
            </Link>
            <div className="text-sm text-gray-500">{post.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
