import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => <SliderSkeleton />,
});

export default function SonicRun() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="sonicrun"
          githubLink="https://github.com/MarekKrumal/sonicJS"
          liveLink="sonic-js.vercel.app"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider slides={sliderData.sonicrun} />
        </Suspense>
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="sonicrun" />
      </div>
    </div>
  );
}
