import { sliderData } from "@/components/Slider/sliderdata";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import Slider from "@/components/Slider/Slider";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";

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
        <Slider slides={sliderData.store} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="store-mern" />
      </div>
    </div>
  );
}
