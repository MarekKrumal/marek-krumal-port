import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import Slider from "@/components/Slider/Slider";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";

export default function MtrxMern() {
  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <ProjectCartInfo
          projectKey="mtrx-mern"
          githubLink="https://github.com/MarekKrumal/awares33"
          liveLink="https://awares33.vercel.app/"
        />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Slider slides={sliderData.mtrx} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="mtrx-mern" />
      </div>
    </div>
  );
}
