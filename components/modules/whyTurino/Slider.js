"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/WhyTurino/image1.webp",
  "/images/WhyTurino/image2.webp",
  "/images/WhyTurino/image3.webp",
  "/images/WhyTurino/image4.webp",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="relative   h-72 overflow-visible  flex justify-center ml-20 ">
        {images.map((img, index) => {
          const distance = Math.abs(index - current);
          const rightOffset = index * 40;
          const scale = 1 - distance * 0.15;
          const opacity = 1 - distance * 0;
          const zIndex = 10 - distance;

          return (
            <div
              key={index}
              className="absolute top-0 transition-all duration-500"
              style={{
                transform: `translateX(-${rightOffset}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <Image
                src={img}
                alt={`slide-${index}`}
                className="w-[240px] h-[300px] object-cover rounded-md border border-gray-700 shadow-md"
                width={240}
                height={260}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-">
        <button
          onClick={handlePrev}
          className="px-5 py-2 bg-gray-800  rounded hover:bg-gray-700 transition"
        >
          قبلی
        </button>
        <span className="text-sm font-medium text-gray-200">
          {current + 1} / {images.length}
        </span>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
