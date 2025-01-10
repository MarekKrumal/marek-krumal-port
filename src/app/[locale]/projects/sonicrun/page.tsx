import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import Slider from "@/components/Slider/Slider";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";

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
        <Slider slides={sliderData.sonicrun} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="sonicrun" />
      </div>
    </div>
  );
}
