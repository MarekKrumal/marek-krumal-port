import { notFound, redirect } from "next/navigation";
import { AllProjects2 } from "@/app/data/projects";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import dynamic from "next/dynamic";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import { Suspense } from "react";
import { sliderData } from "@/components/Slider/sliderdata";

// 1) Lazy-load the Slider component with a loading fallback
const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});

// 2) Type definitions:
type SliderKey = keyof typeof sliderData;

// We only need a single string here, e.g. /projects/[slug]
// So define a promise-based type (like Mohsin Parvi’s approach)
export type ParamsType = Promise<{ slug: string }>;

// 3) generateStaticParams for SSR/SSG:

// 4) The page itself, expecting `props: { params: ParamsType }`
export default async function ProjectDetailPage(props: { params: ParamsType }) {
  // 4a) Await the promise
  const { slug } = await props.params;

  // 4b) Find the matching project
  const project = AllProjects2.find((p) => p.translationKey === slug);
  if (!project) {
    notFound();
  }

  // 4c) If there's no page for this project, do a redirect (or open new tab)
  if (!project.hasPage && project.alternativeUrl) {
    redirect(project.alternativeUrl);
    // Note: `window.open` does not work in a server component,
    // so if you want a new tab, you must do it client-side.
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
