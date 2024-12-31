"use client";
import React, { useState } from "react";
import { SliderDataType } from "./sliderdata";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import Image from "next/image";

type SliderProps = {
  slides: SliderDataType[];
};

const Slider = ({ slides }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative max-w-[1340px] mx-auto">
      <div className="relative overflow-hidden">
        <Image
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          width={1100}
          height={850}
          className="w-full sm:w-auto h-auto rounded-lg"
        />
      </div>

      <RxDoubleArrowLeft
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-50 cursor-pointer select-none z-10"
        size={40}
      />
      <RxDoubleArrowRight
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-50 cursor-pointer select-none z-10"
        size={40}
      />
    </div>
  );
};

export default Slider;
