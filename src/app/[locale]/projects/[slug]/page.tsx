import { notFound, redirect } from "next/navigation";
import { AllProjects2 } from "@/app/data/projects";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import dynamic from "next/dynamic";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import { Suspense } from "react";
import { sliderData } from "@/components/Slider/sliderdata";

// Lazy-load the Slider component with a loading fallback
const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});

type SliderKey = keyof typeof sliderData;

// 1) Define a "Params" type as a Promise so TypeScript knows we must await it.
//    Here we assume `slug` is an array of strings, e.g. [ 'my-slug' ].
//    Adjust if your route only uses a single string, e.g. { slug: string }.
type MyParams = Promise<{ slug: string[] }>;

export async function generateStaticParams() {
  return AllProjects2.map((proj) => ({
    slug: [proj.translationKey], // or just slug: proj.translationKey if your route expects a single string
  }));
}

// 2) Await the 'params' inside the server component
export default async function ProjectDetailPage({
  // The shape here matches MyParams
  params,
}: {
  params: MyParams;
}) {
  // 2a) Await the resolved params
  const { slug } = await params;

  // 2b) If your route uses an array, take the first element:
  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  // 3) Find the project
  const project = AllProjects2.find((p) => p.translationKey === slugValue);
  if (!project) {
    notFound();
  }

  // 4) If the project doesn't have its own page, redirect (and open new tab)
  if (!project.hasPage && project.alternativeUrl) {
    // The 'redirect' call typically ends the response,
    // but if you also want to open a new tab:
    redirect(project.alternativeUrl);
    // Note: In Next.js server components, `window.open` won't actually run (no browser context).
    // If you truly need a new tab, you'd typically do so on the client.
    // This snippet is just to illustrate the approach from your code.
  }

  // 5) Render the page
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey={project.translationKey}
          githubLink={project.githubUrl || ""}
          liveLink={project.liveUrl || ""}
        />
      </div>
      <div className="mx-auto mt-2 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider
            slides={sliderData[project.translationKey as SliderKey] ?? []}
          />
        </Suspense>
      </div>
      <div className="mx-auto pt-2 max-w-3xl">
        <ProjectCartFunkce projectKey={project.translationKey} />
      </div>
    </div>
  );
}
