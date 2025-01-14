import { notFound } from "next/navigation";
import { allPosts } from "../PostsData";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date}</div>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
