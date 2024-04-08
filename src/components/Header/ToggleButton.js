"use client";
import React, { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
const ToggleButton = () => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
        document.documentElement.classList.add(localStorage.getItem("theme"));
      } else {
        document.documentElement.classList.remove(localStorage.getItem("theme"));
      }
  },);

  return (
    <button
      onClick={() => {
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            console.log(localStorage.getItem("theme"))
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            console.log(localStorage.getItem("theme"))

          }
      }}
    >
      <IoMdSunny fontSize={25} className="animate-spin-slow" />
    </button>
  );
};

export default ToggleButton;
