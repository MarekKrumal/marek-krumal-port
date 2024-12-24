import ArtStoreCartInfo from "./ArtStoreCartInfo";
import Slider from "./Slider";
import { SliderData } from "./sliderdata";

export default function AwaresPage() {
  return (
    <div>
      <div>
        <Slider slides={SliderData} />
      </div>
      <div className="mx-auto mt-8 p-4 max-w-3xl">
        <ArtStoreCartInfo />
      </div>
    </div>
  );
}
