import React, { useState } from "react";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

export function CarouselQueue() {
  const imgData = [
    {
      title: "20k Use",
      image: "https://thumbnail.imgbin.com/24/14/3/3d-woman-avatar-stylized-cartoon-woman-avatar-with-glasses-knJAM2pV_t.jpg",
      des: "Your AI Prompts",
    },
    {
      title: "21k Use",
      image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid&w=740",
      des: "Your AI Prompts",
    },
    {
      title: "22k Use",
      image: "https://thumbnail.imgbin.com/23/14/0/3d-girl-avatar-stylish-girl-with-sunglasses-pLfUAKhe_t.jpg",
      des: "Your AI Prompts",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevIndex = current === 0 ? imgData.length - 1 : current - 1;
  const nextIndex = current === imgData.length - 1 ? 0 : current + 1;

  const handlePrev = () => setCurrent(prev => (prev === 0 ? imgData.length - 1 : prev - 1));
  const handleNext = () => setCurrent(prev => (prev === imgData.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-[110%] flex items-center justify-between min-h-screen bg-[#0a0a23] overflow-hidden">
      <div className="flex w-full gap-4 items-center justify-between">
        {/* Left Card */}
        <div className="w-100 h-60 shadow z-20 rounded-3xl car-card opacity-50 blur-xs flex flex-col items-center justify-center transition-all duration-500">
          <img src={imgData[prevIndex].image} alt={imgData[prevIndex].title} className="w-24 h-24 rounded-full object-cover mt-4" loading="lazy" />
          <div className="w-full z-10 flex flex-col mt-7 p-5 items-center">
            <span className="text-3xl font-bold text-white drop-shadow-lg">{imgData[prevIndex].title}</span>
            <span className="text-xl font-bold text-white drop-shadow-lg">{imgData[prevIndex].des}</span>
          </div>
        </div>
        {/* Center Card */}
        <div className="w-170 h-90 shadow z-20 rounded-3xl car-card flex flex-col items-center justify-center transition-all duration-500 scale-105">
          <img src={imgData[current].image} alt={imgData[current].title} className="w-32 h-32 rounded-full object-cover mt-4 border-4 border-[#a47cf3]" loading="lazy" />
          <div className="w-full z-10 flex flex-col mt-7 p-5 items-center">
            <span className="text-3xl font-bold text-white drop-shadow-lg">{imgData[current].title}</span>
            <span className="text-xl font-bold text-white drop-shadow-lg">{imgData[current].des}</span>
          </div>
        </div>
        {/* Right Card */}
        <div className="w-100 h-60 shadow z-20 rounded-3xl car-card blur-xs opacity-50 flex flex-col items-center justify-center transition-all duration-500 ">
          <img src={imgData[nextIndex].image} alt={imgData[nextIndex].title} className="w-24 h-24 rounded-full object-cover mt-4" loading="lazy" />
          <div className="w-full z-10 flex flex-col mt-7 p-5 items-center">
            <span className="text-3xl font-bold text-white drop-shadow-lg">{imgData[nextIndex].title}</span>
            <span className="text-xl font-bold text-white drop-shadow-lg">{imgData[nextIndex].des}</span>
          </div>
        </div>
      </div>
      {/* Navigation arrows */}
      <div>
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white text-4xl"
          aria-label="Previous"
        >
          <PiLessThan className="text-black" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white text-4xl"
          aria-label="Next"
        >
          <PiGreaterThan className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default CarouselQueue;
