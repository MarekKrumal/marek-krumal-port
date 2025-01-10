import { sliderData } from "@/components/Slider/sliderdata";

import Slider from "@/components/Slider/Slider";
import ProjectCartInfo from "@/components/ProjectPage/ProjectCartInfo";
import ProjectCartFunkce from "@/components/ProjectPage/ProjectCartFunkce";

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
        <Slider slides={sliderData.neuralnetwork} />
      </div>

      <div className="mx-auto pt-8 max-w-3xl">
        <ProjectCartFunkce projectKey="neuralnetwork" />
      </div>
    </div>
  );
}
