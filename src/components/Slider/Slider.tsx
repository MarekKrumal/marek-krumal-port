// Slider.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  RxDoubleArrowRight,
  RxDoubleArrowLeft,
  RxCross1,
} from "react-icons/rx";

type SliderDataType = {
  image: string;
};

type SliderProps = {
  slides: SliderDataType[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContentVisible, setIsModalContentVisible] = useState(false);

  // Pokud je slides prázdné, zobraz fallback text (nebo nic).
  if (!slides || slides.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalContentVisible(true), 200);
  };

  const closeModal = () => {
    setIsModalContentVisible(false);
    setTimeout(() => setIsModalOpen(false), 200);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="relative lg:max-w-[1200px] mx-auto">
      <div className="relative overflow-hidden">
        <Image
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          width={1024}
          height={768}
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={openModal}
          priority
        />
      </div>

      <RxDoubleArrowLeft
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer
                   select-none z-10 hover:scale-110 transition-transform duration-300"
        size={30}
      />

      <RxDoubleArrowRight
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer
                   select-none z-10 hover:scale-110 transition-transform duration-300"
        size={30}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50"
          onClick={handleBackgroundClick}
        >
          <div
            className={`relative max-w-[1200px] transition-opacity duration-300 ${
              isModalContentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              width={1440}
              height={1080}
              quality={100}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            {isModalContentVisible && (
              <>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-2xl px-2 py-1
                             border border-white/50 rounded-md hover:scale-110
                             hover:bg-white/10 hover:text-red-400 transition-transform duration-200"
                >
                  <RxCross1 />
                </button>
                <RxDoubleArrowLeft
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer
                             select-none z-10 hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <RxDoubleArrowRight
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer
                             select-none z-10 hover:scale-110 transition-transform duration-200"
                  size={40}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
