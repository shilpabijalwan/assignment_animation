import React from 'react';
import { CarouselComponent } from './Carousel';
import CarouselQueue from './CarouselQueue';

function Modal({ show, onClose, comp="stack" }) {
    
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-30 w-[65%] m-auto p-2 overflow-x-hidden overflow-y-auto    flex  bg-[#0a0a23] ">
      <div className=" w-full h-full  items-center">
        {/* Modal content */}
        <div className="flex flex-col rounded-xl shadow-sm dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-end p-4 md:p-5  bg-[#0a0a23] ">
            
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal body */}
          <div className="w-full m-auto flex flex-col justify-center items-center ">
          {comp=="queue"? <CarouselQueue/> : <CarouselComponent/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
