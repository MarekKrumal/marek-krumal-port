import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import dynamic from "next/dynamic";
import SliderSkeleton from "@/components/Slider/SliderSkeleton";
import { Suspense } from "react";

const Slider = dynamic(() => import("@/components/Slider/Slider"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <SliderSkeleton />
    </div>
  ),
});

export default function NeuralNetwork() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="neuralnetwork"
          githubLink="https://github.com/MarekKrumal/neural-network-nextjs"
          liveLink="https://neural-network-nextjs-lnpd.vercel.app/"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider slides={sliderData.neuralnetwork} />
        </Suspense>
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="neuralnetwork" />
      </div>
    </div>
  );
}
