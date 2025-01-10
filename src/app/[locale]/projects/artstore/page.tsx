import React from "react";
import Slider from "@/components/Slider/Slider";
import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";

export default function ArtstorePage() {
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
        <Slider slides={sliderData.artstore} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="artstore" />
      </div>
    </div>
  );
}
