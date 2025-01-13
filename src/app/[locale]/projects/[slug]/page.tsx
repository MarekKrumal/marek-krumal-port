import { notFound } from "next/navigation";
import { AllProjects2 } from "@/app/data/projects";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import dynamic from "next/dynamic";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import { Suspense } from "react";
import { sliderData } from "@/components/Slider/sliderdata";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});

type SliderKey = keyof typeof sliderData; // jsem si jistej ze project.translationKey je typu sliderData

type ProjectDetailPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return AllProjects2.map((proj) => ({
    slug: proj.translationKey,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await Promise.resolve(params);

  const project = AllProjects2.find((p) => p.translationKey === slug);

  if (!project) {
    notFound();
  }

  if (!project.hasPage && project.alternativeUrl) {
    if (typeof window !== "undefined") {
      window.open(project.alternativeUrl, "_blank");
    }
  }

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
