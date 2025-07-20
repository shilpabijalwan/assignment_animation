import React, { useState } from "react";

const imgData = [
  {
    title: "20k Use",
    image:
      "https://thumbnail.imgbin.com/24/14/3/3d-woman-avatar-stylized-cartoon-woman-avatar-with-glasses-knJAM2pV_t.jpg",
    des: "Monye Matt",
  },
  {
    title: "21k Use",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid&w=740",
    des: "Alex Doe",
  },
  {
    title: "22k Use",
    image:
      "https://thumbnail.imgbin.com/23/14/0/3d-girl-avatar-stylish-girl-with-sunglasses-pLfUAKhe_t.jpg",
    des: "Jane Smith",
  },
];

export function CarouselComponent() {
  const [current, setCurrent] = useState(0);

  const prevIndex = current === 0 ? imgData.length - 1 : current - 1;
  const nextIndex = current === imgData.length - 1 ? 0 : current + 1;

  const handlePrev = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current === imgData.length - 1) return;
    setCurrent(current + 1);
  };

  return (
    <div className="w-full  relative flex items-center justify-center min-h-screen bg-[#0a0a23] overflow-hidden">
      {/* Blurred stacked cards */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex ">
        {/* Left rotated image */}
        <div 
          className=" blur-card fixed -mt-6 z-10  blur-xs opacity-50 transition-all duration-300 border border-10 -rotate-9 shadow rounded-3xl bg-gradient-to-br from-[#e0aaff] via-[#a890fe] to-[#6f6fc2]"
          style={{ width: 400, height: "480px" }}
        ></div>

        {/* Right rotated image */}
        <div
          className=" blur-card z-10 -mt-8 blur-xs opacity-50 transition-all duration-300 border rotate-18  rounded-3xl bg-gradient-to-br from-[#e0aaff] via-[#a890fe] to-[#6f6fc2]"
          style={{ width: 390, height: "500px" }}
        ></div>
      </div>

      {/* Main card */}
      <div
        className="shadow relative z-20 flex flex-col items-center justify-between rounded-3xl  main-card"
        style={{
          width: 400,
          height: 470,
        
        }}
      >
        {/* Glow/gradient behind avatar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#e0aaff] via-[#a890fe] to-[#6f6fc2]"></div>
        {/* Top text */}
        <div className="relative z-10 w-full text-center pt-6">
          <span className="text-6xl font-bold text-[#ffbfae] drop-shadow-lg">
            {imgData[current].title}
          </span>
        </div>
        {/* Avatar */}
        <div className="relative z-10 flex-1 flex items-end justify-center">
          <img
            src={imgData[current].image}
            alt="avatar"
            className="w-48 h-70 rounded-2xl object-cover shadow-xl"
          />
        </div>
        {/* Bottom text */}
        <div className="relative z-10 w-full text-center pb-8">
          <span className="text-5xl font-bold text-white drop-shadow-lg">
            {imgData[current].des}
          </span>
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white text-4xl"
        aria-label="Previous"
        disabled={current === 0}
        style={{ color: current !== 0 ? "white" : "gray" }}
      >
        &#60;
      </button>
      <button
        onClick={handleNext}
        style={{ color: current !== imgData.length - 1 ? "white" : "gray" }}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-30 text-white/60 hover:text-white text-4xl"
        aria-label="Next"
        disabled={current === imgData.length - 1}
      >
        &#62;
      </button>
    </div>
  );
}
