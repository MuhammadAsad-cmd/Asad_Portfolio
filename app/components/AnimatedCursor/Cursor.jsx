"use client";
import { useTheme } from "@/app/ThemeContext";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const CursorPAge = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"}`}>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: darkMode ? "#FFF" : "#333",
        }}
        outerStyle={{
          border: `3px solid ${darkMode ? "#FFF" : "#333"}`,
        }}
      />
    </div>
  );
};
