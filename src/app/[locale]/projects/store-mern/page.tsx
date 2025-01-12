import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});

export default function StoreMern() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="store-mern"
          githubLink="https://github.com/MarekKrumal/MERN-store1"
          liveLink="https://mern-store1-piyt.onrender.com/"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider slides={sliderData.store} />
        </Suspense>
      </div>
      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="store-mern" />
      </div>
    </div>
  );
}
