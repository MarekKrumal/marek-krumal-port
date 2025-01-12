import React, { Suspense } from "react";
import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import dynamic from "next/dynamic";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});
{
  /*export async function generateStaticParams() {
  return AllProjects2.map((proj) => ({
    translationKey: proj.translationKey,
  }));
} */
}
{
  /*  params,
}: {
  params: { translationKey: string };
}) {
  const project = AllProjects2.find(
    (p) => p.translationKey === params.translationKey
  );

  if (!project) {
    notFound();
  */
}

export default function ArtStore() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="artstore"
          githubLink="https://github.com/MarekKrumal/art-store-next-js"
          liveLink="https://art-store-next-js-fv76.vercel.app"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider slides={sliderData.artstore} />
        </Suspense>
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="artstore" />
      </div>
    </div>
  );
}
