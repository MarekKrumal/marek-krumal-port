import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { allPosts } from "./PostsData";
import React, { useEffect, useState } from "react";

// Příklad minimální "client-side" implementace
export default function BlogPostDetail() {
  const router = useRouter();
  const { slug } = router.query; // např. "nextjs-overview"
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      // Najdi příslušný článek podle slug
      const foundPost = allPosts.find((p) => p.slug === slug);
      setPost(foundPost);
    }
  }, [slug]);

  // Pokud se načítá nebo slug neexistuje
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Titulek článku + datum */}
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date}</div>

      {/* Obsah článku */}
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Případná ukázka kódu */}
      {post.codeExample && (
        <pre className="mt-4 p-2 border overflow-auto">
          <code>{post.codeExample}</code>
        </pre>
      )}
    </div>
  );
}

/**
 * Níže ukázka, jak by to mohlo vypadat se "Static Generation" (getStaticProps / getStaticPaths).
 * Pokud nepotřebuješ SSG, tenhle kód klidně vynechej.
 */

// Vytvoří statické stránky pro každý slug a jazyk:
export async function getStaticPaths() {
  // Definuj všechny cesty = (slug, locale)
  const paths = [];
  for (const post of allPosts) {
    // Tvoje podporované jazyky
    for (const locale of ["cz", "en"]) {
      paths.push({
        params: { slug: post.slug },
        locale,
      });
    }
  }

  // fallback: false => 404, pokud slug není nalezen
  // fallback: true  => pokusí se vygenerovat na základě slug
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: any) {
  // Načteš překlady pro next-intl
  const messages = await import(`../../../messages/${locale}.json`);

  // Najdi článek dle slug
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      // next-intl messages
      messages: messages.default,
      // Předáš článek do komponenty
      post,
    },
  };
}

// Po úpravě BlogPostDetail
// (místo useEffect + useState) použij "post" z getStaticProps
/*
export default function BlogPostDetail({ post }: { post: BlogPost }) {
  // ...
}
*/
