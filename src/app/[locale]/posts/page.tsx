import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

async function getPostsMetadata(locale: string) {
  const postsDirectory = path.join(process.cwd(), "posts", locale);
  try {
    const filenames = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);
        return {
          slug: data.slug,
          title: data.title,
          date: data.date,
          problog: data.problog,
        };
      })
    );
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return posts;
  } catch (error) {
    console.error(`Error reading posts for locale ${locale}:`, error);
    console.error(error);
    return [];
  }
}

export default async function LatestPosts({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const posts = await getPostsMetadata(locale);

  return (
    <div className="relative mx-auto mt-6 max-w-full sm:max-w-3xl p-4 sm:p-6 md:p-7 border dark:bg-black/10 bg-stone-100">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase font-mono mb-4">
        BLOG
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${locale}/posts/${post.slug}`}
              aria-label={`Přejít na článek ${post.title}`}
            >
              <div className="pl-3 sm:pl-4 pt-4 pb-4 hover:bg-stone-200 hover:scale-105 dark:hover:bg-black/20  mx-auto dark:bg-transparent bg-transparent duration-300">
                <p className="text-xs font-light text-green-700 dark:text-green-200">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <h3 className="text-md sm:text-lg  font-medium">
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
