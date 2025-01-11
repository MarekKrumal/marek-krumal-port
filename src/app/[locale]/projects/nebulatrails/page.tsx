import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import { sliderData } from "@/components/Slider/sliderdata";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => <SliderSkeleton />,
});

export default function NebulaTrails() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="nebulatrails"
          githubLink="https://github.com/MarekKrumal/nebulatrails-nextjs"
          liveLink="https://nebulatrails-nextjs.vercel.app/en"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider slides={sliderData.nebulatrails} />
        </Suspense>
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="nebulatrails" />
      </div>
    </div>
  );
}
