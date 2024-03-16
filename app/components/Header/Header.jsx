"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`Source flex items-center justify-between bg-white px-[50px] py-4 ${
          scrolling
            ? "HeaderShadows sticky top-0 z-50 bg-[#FAFAFA] duration-700 ease-in-out"
            : "HeaderShadows bg-white"
        }`}
      >
        <div className="flex cursor-pointer items-center gap-5 text-[#333] duration-300 ease-in-out hover:text-[#7843E9]">
          <div className="rounded-full bg-[#7843E9]">
            <Image
              width={50}
              height={50}
              unoptimized
              src="/images/asad1.jpg"
              alt=""
              className="h-[50px] w-[50px] overflow-hidden rounded-full object-cover object-center p-1"
            />
          </div>
          <div>
            <h2 className="SpacingLetter text-lg  font-bold uppercase">
              Muhammad Asad
            </h2>
          </div>
        </div>
        <div className="">
          <ul class="SpacingLetter flex items-center text-base font-bold">
            <li className="cursor-pointer px-[30px] py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="cursor-pointer px-[30px] py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9]">
              <a href="#" className="">
                About{" "}
              </a>
            </li>
            <li className="cursor-pointer px-[30px] py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li className="cursor-pointer px-[30px] py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
