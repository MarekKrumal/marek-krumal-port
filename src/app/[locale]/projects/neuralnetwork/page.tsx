import { sliderData } from "@/components/Slider/sliderdata";
import NeuralNetworkCartInfo from "./NeuralNetworkCartInfo";
import Slider from "@/components/Slider/Slider";

export default function NeuralNetwork() {
  return (
    <div>
      <div>
        <Slider slides={sliderData.neuralnetwork} />
      </div>
      <div className="mx-auto mt-8 p-4 max-w-3xl">
        <NeuralNetworkCartInfo />
      </div>
    </div>
  );
}
