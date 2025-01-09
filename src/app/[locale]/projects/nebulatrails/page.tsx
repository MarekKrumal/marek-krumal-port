import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import Slider from "@/components/Slider/Slider";
import { sliderData } from "@/components/Slider/sliderdata";

export default function NebulaTrails() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="NebulaTrails"
          githubLink="https://github.com/MarekKrumal/nebulatrails-nextjs"
          liveLink="https://nebulatrails-nextjs.vercel.app/en"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Slider slides={sliderData.awarespage} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="NebulaTrails" />
      </div>
    </div>
  );
}
