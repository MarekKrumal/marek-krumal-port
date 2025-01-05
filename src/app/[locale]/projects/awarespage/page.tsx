import { sliderData } from "@/components/Slider/sliderdata";
import AwaresCartInfo from "./AwaresCartInfo";
import Slider from "@/components/Slider/Slider";

export default function AwaresPage() {
  return (
    <div>
      <div>
        <Slider slides={sliderData.awarespage} />
      </div>
      <div className="mx-auto mt-8 p-4 max-w-3xl">
        <AwaresCartInfo />
      </div>
    </div>
  );
}
