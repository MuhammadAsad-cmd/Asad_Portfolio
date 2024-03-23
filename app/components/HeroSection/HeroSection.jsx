import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="imgBg pb-0 pt-[130px] lg:pb-20  xl:pb-0 xl:pt-0">
        <div className=" home-hero__content  text-center">
          <h1 className="heading-primary Tilt text-3xl uppercase text-[#111] md:text-[40px] lg:text-[60px]">
            Hey, I&apos;m Muhammad Asad
          </h1>
          <div className="mx-auto mt-[30px] text-[22px] leading-9 text-[#333] lg:max-w-[700px]">
            <p>
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
        <div className="home-hero__mouse-scroll-cont hidden md:block">
          <div className="mouse"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
