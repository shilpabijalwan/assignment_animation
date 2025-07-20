import { useState } from "react";

import "./App.css";
import { FaCodeBranch } from "react-icons/fa";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import AiCardLayout from "./components/MiddlePart";
import { CarouselComponent } from "./components/Carousel";

function App() {


  return (
    <div className="app w-5/6 m-auto  px-10 flex justify-between ">
      <LeftSection />
      <AiCardLayout />
      <RightSection />
    </div>
  );
}

export default App;
