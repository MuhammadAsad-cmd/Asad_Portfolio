"use client";
import { useTheme } from "@/app/ThemeContext";
import React from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed left-0 top-1/2 z-50 h-[25px] w-[25px] transform rounded-r-lg bg-[#7843e9] p-3 text-xl text-white"
    >
      {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};

export default ThemeToggle;
