import React from "react";
import ThemeToggleButton from "./ThemeButton";

function RightSection() {
  return (
    <div>
      <div className="flex flex-col noice-card rounded-4xl h-[120px] items-center justify-center">
        <ThemeToggleButton />
      </div>
      <div className="flex flex-col mt-10 noice-card rounded-4xl h-[170px] items-center justify-center">
        <h1 className="text-2xl font-semibold text-gradient-two">25M</h1>
        <p className="text-md">Created prompts</p>
      </div>

      <div className="mt-10">
        <PromptServiceCard />
      </div>
    </div>
  );
}

export default RightSection;

import { BsStars } from "react-icons/bs";
import { FaCamera, FaMagic, FaSyncAlt } from "react-icons/fa";
import { PiGiftFill } from "react-icons/pi";

export function PromptServiceCard() {
  return (
    <div className="relative bg-[#181634] p-6 rounded-4xl h-[360px] text-white  shadow-inner border border-[#292850] overflow-hidden noice-card">
      {/* Title & Subtitle */}
      <h2 className="text-lg font-semibold text-white mb-1">Prompt Service</h2>
      <p className="text-sm text-purple-300 mb-8">
        Use pre-made templates
        <br />
        to jumpstart creativity.
      </p>

      {/* Pills and icons */}
      <div className="h-[200px] w-full flex  items-end">
        {/* transform -rotate-45 */}
        {/* Rewrite Pill */}
        <div className=" bottom-6 transform -rotate-45 ml-3">
          <div className="w-28 m-auto bg-[#2e2c55] text-purple-300 text-sm px-4 py-3 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md border border-purple-400/10 mb-1">
            <span className="w-2 h-2  rounded-full bg-purple-300"></span>
            <span className="tracking-wide text-md">Rewrite</span>
          </div>

          {/* Magic Gift Icon */}

          <div className=" flex flex items-start gap-1">
            <div className="h-12 w-12 bg-gradient-to-tr from-[#7f5af0] to-[#5f4ab8] p-2 rounded-full shadow-lg flex justify-center items-center">
              <FaCamera className="text-white text-xl transform rotate-15" />
            </div>

            {/* Mic or Sync Icon */}
            <div className="h-22 w-10 bg-[#2e2c55] p-2 rounded-full shadow-md flex justify-center items-center">
              <FaSyncAlt className="text-orange-300 text-xl " />
            </div>

            {/* Camera */}
            <div className="h-12 w-12 bg-gradient-to-tr from-[#f6ad55] to-[#d97706] p-2 rounded-full shadow-lg flex justify-center items-center">
              <PiGiftFill className="text-white text-xl transform rotate-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical pill */}
      <div className="absolute bottom-6 right-8">
        <div className="flex flex-col items-center justify-center gap-6 px-2 py-5 rounded-full bg-[#2e2c55]/90 shadow-lg backdrop-blur-md text-xs text-purple-100 w-[40px]">
          {/* PDF */}
          <div className="flex flex-col items-center justify-center gap-2  transform -rotate-180">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="rotate-90 tracking-wide">PDF</span>
          </div>

          {/* PNG */}
          <div className="flex flex-col items-center justify-center gap-2  transform -rotate-180">
            <span className="w-2 h-2 rounded-full bg-orange-300"></span>
            <span className="rotate-90 tracking-wide">PNG</span>
          </div>

          {/* JPG */}
          <div className="flex flex-col items-center justify-center gap-2  transform -rotate-180">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span className="rotate-90 tracking-wide">JPG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
