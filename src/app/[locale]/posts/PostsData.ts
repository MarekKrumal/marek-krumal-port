export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  codeExample?: string;
}

export const allPosts: BlogPost[] = [
  {
    slug: "nextjs-overview",
    title: "Next.js Overview",
    date: "2025-01-01",
    content: `
        <p>V tomto článku se podíváme na základní principy Next.js...</p>
        <p>Díky <strong>SSR</strong> a <strong>SSG</strong> je super...</p>
      `,
    codeExample: `
  \`\`\`tsx
  // Simple Next.js example
  import React from "react";
  export default function HelloNext() {
    return <div>Hello Next.js!</div>;
  }
  \`\`\`
      `,
  },
  {
    slug: "nextjs-routing",
    title: "Next.js Routing",
    date: "2025-01-02",
    content: "<p>Detailní průvodce routingem...</p>",
    codeExample: `
  \`\`\`tsx
  import { useRouter } from "next/router";
  
  export default function SomePage() {
    const router = useRouter();
    return <div>Path: {router.asPath}</div>;
  }
  \`\`\`
      `,
  },
  {
    slug: "nextjs-ssr-ssg",
    title: "SSR a SSG v Next.js",
    date: "2025-01-03",
    content:
      "<p>Jak funguje server-side rendering a static site generation...</p>",
  },
  {
    slug: "nextjs-api-routes",
    title: "Next.js API Routes",
    date: "2025-01-04",
    content: "<p>Vytváření vlastních API endpointů přímo v Next.js...</p>",
  },
  {
    slug: "nextjs-performance",
    title: "Performance Tips",
    date: "2025-01-05",
    content: "<p>Optimalizační tipy pro Next.js aplikace...</p>",
  },
];
