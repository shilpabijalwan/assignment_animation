"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

export default function ThemeToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle flex items-center gradient-circle justify-center"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        <BsStars size={20} />
      </motion.div>
    </button>
  );
}

const container = {
  width: 120,
  height: 50,
  //   backgroundColor: "#191934",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 4,
};
