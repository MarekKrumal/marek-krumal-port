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
];
