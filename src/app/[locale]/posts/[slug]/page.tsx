import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const locales = ["cz", "en"];
  const postsByLocale = await Promise.all(
    locales.map(async (locale) => {
      const postsDirectory = path.join(process.cwd(), "posts", locale);
      try {
        const filenames = await fs.readdir(postsDirectory);
        return filenames.map((filename) => ({
          slug: path.basename(filename, ".mdx"),
          locale,
        }));
      } catch (error) {
        console.error(`Error reading posts for locale ${locale}:`, error);
        return [];
      }
    })
  );
  return postsByLocale.flat();
}

type Params = Promise<{ slug: string; locale: string }>;

export default async function BlogPostDetailPage({
  params,
}: {
  params: Params;
}) {
  const { locale, slug } = await params;
  const postFilePath = path.join(process.cwd(), "posts", locale, `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(postFilePath, "utf8");
    const { content, data } = matter(fileContent);

    if (!data) {
      notFound();
    }

    return (
      <div className="max-w-3xl mx-auto p-8 bg-stone-100 dark:bg-black/10">
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          {new Date(data.date).toLocaleDateString()}
        </div>
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  } catch (error) {
    console.error(`Error reading post ${slug} for locale ${locale}:`, error);
    notFound();
  }
}
