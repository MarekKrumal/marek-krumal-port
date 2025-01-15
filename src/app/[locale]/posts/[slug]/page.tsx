import { notFound } from "next/navigation";
import { allPosts } from "../PostsData";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export type ParamsType = Promise<{ slug: string }>;

export default async function BlogPostDetailPage({
  params,
}: {
  params: ParamsType;
}) {
  const { slug } = await params;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-stone-100 dark:bg-black/10">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date}</div>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
