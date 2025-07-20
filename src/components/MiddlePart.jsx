import { FaCodeBranch } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

export default function AiCardLayout() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal=()=>{
    setOpenModal(true)
  }
  const handleClose=()=>{
    setOpenModal(false)
  }
  return (
    <div className="  flex flex-col items-center text-white gap-6 ">
      {/* Top Gradient Card */}
      <div className="w-full h-[340px] my-gradient-bg  rounded-[28px] relative flex flex-col items-center justify-start pt-6 shadow-lg  ">
        <h2 className="text-white font-bold text-xl">Template Ai</h2>

        {/* Placeholder box in center */}
        <div className="w-12 h-12 bg-white rounded-md mt-6"></div>
      </div>

      {/* Central Glowing Orb */}
      <div className="relative w-70 h-70 -mt-35 z-20 rounded-full ">
        <div className="w-full h-full  overflow-hidden p-10  rounded-full bg-black ">
          <img
            src="https://elements-resized.envatousercontent.com/elements-video-cover-images/0a3eb296-2ed8-4f94-a151-f9a38f3f5759/video_preview/video_preview_0002.jpg?w=500&cf_fit=cover&q=85&format=auto&s=f12f8d0ac20334e50cec7c6fef92d6e2a06f485b9b560fe4727d9670727a3557"
            alt="orb"
            className="w-full h-full object-cover rounded-full z-20 "
          />
        </div>
      </div>

      {/* last card */}

      <div className="flex gap-20 -mt-30">
        <div className="noice-card rounded-2xl shadow-md h-[320px] flex flex-col justify-end" onClick={handleOpenModal}>

      <div className="relative">
        {/* Cutout Left Line */}
        <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-10 h-1 bg-[#12143a] rounded-l-full shadow-inner" />

        {/* Outer Circle with shadow */}
        <div className="gradient-circle w-12 h-12 bg-[#e07a4f] rounded-full shadow-2xl flex items-center justify-center relative z-10 border-4 border-[#12143a]">
          <FaCodeBranch className="text-white text-md" />
        </div>
    
    </div>
          <div className="flex items-center gap-2 mb-2  " >
            <h3 className="text-2xl font-semibold">Branching paths</h3>
          </div>
          <p className="text-sm text-gray-300">
            Explore multiple prompt directions with branching.
          </p>
        </div>

        {/* right card */}

        <div className="noice-card  rounded-2xl shadow-md flex flex-col justify-end">

        <div className="relative">
        {/* Cutout Left Line */}
        <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-10 h-1 bg-[#12143a] rounded-l-full shadow-inner" />

        {/* Outer Circle with shadow */}
        <div className= " bg-[linear-gradient(0deg,_#a47cf3,_#683fea)]  w-10 h-10 bg-[#e07a4f] rounded-full shadow-2xl flex items-center justify-center relative z-10 border-4 border-[#12143a]">
          <FaCodeBranch className="text-white text-xl " />
        </div>
        </div>

          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-semibold">AI journey</h3>
          </div>
          <p className="text-sm text-gray-300">
            Boost your prompt precision with keywords.
          </p>
        </div>
      </div>
      <Modal show={openModal} onClose={handleClose} comp={"queue"}/>
    </div>
  );
}
