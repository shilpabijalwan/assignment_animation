import React from "react";
import { BiSolidCalendarStar } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";

function LeftSection() {
  return (
    <div className="max-h-[screen]">
      <div className="noice-card rounded-4xl h-[360px]">
        {/* <svg
          className="absolute top-6 left-6 w-24 h-24"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="10" cy="10" r="4" fill="#FFB25B" />
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="40"
            stroke="#FFB25B"
            strokeWidth="2"
          />
          <circle cx="10" cy="40" r="4" fill="#FFB25B" />
          <line
            x1="10"
            y1="40"
            x2="40"
            y2="40"
            stroke="#FFB25B"
            strokeWidth="2"
          />
          <circle cx="40" cy="40" r="4" fill="#FFB25B" />
        </svg> */}

        {/* Icon with cosmic gradient */}
        {/* <div className="mt-28 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff6ec4] to-[#7873f5] flex items-center justify-center shadow-md shadow-pink-500/20">
            <FaCodeBranch className="text-white text-xl" />
          </div>
        </div> */}

        <h2 className="text-gradient text-4xl font-semibold h-1/2 ">
          Create your own templete
        </h2>
        <div className="m-auto  h-1/2 flex flex-col justify-end">
          <p className="text-[#E6E3FF] text-lg ">14 days trial</p>
          <p className="text-[#ACA0E4] text-md ">after $5/month</p>
        </div>
      </div>

      {/* 2nd card */}

      <div className="mt-10 noice-card rounded-4xl h-[170px] text-center">
        <h2 className="text-gradient text-4xl font-semibold ">20</h2>
        <div className="m-auto flex flex-col text-center">
          <p className="text-[#E6E3FF] text-lg ">Top users</p>
          <p className="text-[#ACA0E4] text-md ">after $5/month</p>
        </div>
      </div>

      <div className="flex flex-col mt-10 noice-card rounded-4xl h-[120px] items-center justify-center">
        <div className="border border-[#191934] p-2 w-full flex rounded-full bg-[#191934]">
          <button className="btn flex gap-2 text-xl">
            <BiSolidCalendarStar />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
