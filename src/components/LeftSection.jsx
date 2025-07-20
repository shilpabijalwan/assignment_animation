import React, { useState } from "react";
import { BiSolidCalendarStar } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";
import Modal from "./Modal";

function LeftSection() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal=()=>{
    setOpenModal(true)
  }
  const handleClose=()=>{
    setOpenModal(false)
  }
  return (
    <div className="max-h-[screen]">
      <div className="noice-card rounded-4xl h-[360px]">

        <h2 className="text-gradient text-4xl font-semibold h-1/2 ">
          Create your own templete
        </h2>
        <div className="m-auto  h-1/2 flex flex-col justify-end">
          <p className="text-[#E6E3FF] text-lg ">14 days trial</p>
          <p className="text-[#ACA0E4] text-md ">after $5/month</p>
        </div>
      </div>

      {/* 2nd card */}

      <div data-modal-target="large-modal" data-modal-toggle="large-modal" className=" mt-10 noice-card rounded-4xl h-[170px] text-center" onClick={handleOpenModal}>
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
      <Modal show={openModal} onClose={handleClose}/>
    </div>
  );
}

export default LeftSection;
