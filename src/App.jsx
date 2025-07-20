import { useState } from "react";

import "./App.css";
import { FaCodeBranch } from "react-icons/fa";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import AiCardLayout from "./components/MiddlePart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app w-5/6 m-auto border px-10 flex justify-between ">
      <LeftSection />
      <AiCardLayout />
      <RightSection />
    </div>
  );
}

export default App;
