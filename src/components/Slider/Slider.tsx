"use client";

import React, { useState } from "react";
import {
  RxDoubleArrowRight,
  RxDoubleArrowLeft,
  RxCross1,
} from "react-icons/rx";
import Image from "next/image";

type SliderDataType = {
  image: string;
};

type SliderProps = {
  slides: SliderDataType[];
};

const Slider = ({ slides }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="relative lg:max-w-[1200px] mx-auto">
      {/* Slider */}
      <div className="relative overflow-hidden">
        <Image
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={openModal}
        />
      </div>

      <RxDoubleArrowLeft
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer select-none z-10 hover:scale-110 transition-transform duration-300"
        size={30}
      />
      <RxDoubleArrowRight
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer select-none z-10 hover:scale-110 transition-transform duration-300"
        size={30}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={handleBackgroundClick}
        >
          <div className="relative max-w-[90%] sm:max-w-[95%] lg:max-w-[1200px]">
            <Image
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl px-2 py-1 border border-white/50 rounded-md hover:scale-110 hover:bg-white/10 hover:text-red-400 transition-transform duration-200"
            >
              <RxCross1 />
            </button>
            <RxDoubleArrowLeft
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer select-none z-10 hover:scale-110 transition-transform duration-200"
              size={40}
            />
            <RxDoubleArrowRight
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer select-none z-10 hover:scale-110 transition-transform duration-200"
              size={40}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
