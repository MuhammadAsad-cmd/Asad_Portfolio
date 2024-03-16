import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="imgBg">
        <div className=" home-hero__content text-center">
          <h1 className="heading-primary Tilt">Hey, I&apos;m Muhammad Asad</h1>
          <div className="mt-[30px] max-w-[700px] leading-9 mx-auto text-[#333] text-[22px]">
            <p>
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="mt-[50px]">
            <a href="./#projects" className="px-20 py-4 Btn-Bg ">
              Projects
            </a>
          </div>
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
