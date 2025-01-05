import React from "react";
import ArtStoreCartInfo from "./ArtStoreCartInfo";
import Slider from "@/components/Slider/Slider";
import { sliderData } from "@/components/Slider/sliderdata";

export default function AwaresPage() {
  return (
    <div>
      {/* Slider */}
      <div>
        <Slider slides={sliderData.artstore} />
      </div>

      {/* Cart Info */}
      <div className="mx-auto mt-8 p-4 max-w-3xl">
        <ArtStoreCartInfo />
      </div>
    </div>
  );
}
