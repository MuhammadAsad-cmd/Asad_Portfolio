"use client";
import { useTheme } from "@/app/ThemeContext";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center pb-0 pt-[100px] ${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"}`}
      >
        <div className=" home-hero__content  text-center">
          <h1
            className={`heading-primary Raleway LeadingLetter py-1 font-bold lg:py-[10px] ${darkMode ? "text-[#fff]" : "text-[#374151]"}  text-3xl  md:text-[40px] lg:text-[60px]`}
          >
            Hi, I&apos; Asad
          </h1>
          <h2
            className={`LeadingLetter Raleway ${darkMode ? "text-[#fff]" : "text-[#374151]"} mt-1 text-3xl  font-bold md:text-[40px] lg:mt-[8px] lg:text-[60px]`}
          >
            Front End Developer
          </h2>
          <div className="mx-auto mt-5 px-5 text-[22px] leading-9 lg:mt-[30px] lg:max-w-[700px]">
            <p className={`${darkMode ? "text-[#979797]" : "text-[#4B5563] "}`}>
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="mt-[50px]">
            <Link href="#Projects">
              <p className="Btn-Bg px-20 py-4 ">Projects</p>
            </Link>
          </div>
        </div>
        {/* <div className="home-hero__mouse-scroll-cont hidden md:block">
          <div className="mouse"></div>
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
