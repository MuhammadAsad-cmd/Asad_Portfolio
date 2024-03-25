"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useTheme } from "@/app/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`Source  z-50 w-full`}>
        <div
          className={`HeaderShadows ${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"} flex items-center justify-between px-2 py-4 md:px-5 lg:px-[50px]`}
        >
          <div
            className={`flex cursor-pointer items-center gap-2  ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-300 ease-in-out hover:text-[#7843E9] lg:gap-5`}
          >
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
            <ul class="SpacingLetter hidden items-center text-base font-bold md:flex">
              <Link href="/">
                <li
                  className={`cursor-pointer px-5 py-[22px] ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]`}
                >
                  <p> Home </p>
                </li>
              </Link>
              <Link href="/#About">
                <li
                  className={`cursor-pointer px-5 py-[22px] ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]`}
                >
                  <p>About </p>
                </li>
              </Link>
              <Link href="/#Projects">
                <li
                  className={`cursor-pointer px-5 py-[22px] ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]`}
                >
                  <p> Projects </p>
                </li>
              </Link>
              <Link href="/#Contact">
                <li
                  className={`cursor-pointer px-5 py-[22px] ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]`}
                >
                  <p> Contact </p>
                </li>
              </Link>
            </ul>
            <div>
              <button onClick={toggleMenu} className="md:hidden">
                {menuOpen ? (
                  <RxCross1
                    className={`ReadMore ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} text-2xl`}
                  />
                ) : (
                  <TiThMenuOutline
                    className={`ReadMore ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} text-2xl`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`z-50 flex flex-col ${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"} px-5 text-end lg:hidden`}
        >
          <Link href="/">
            <p
              className={`mt-6 cursor-pointer border-b border-t p-4 text-base font-bold ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-500 ease-in-out hover:text-[#7843E9]`}
            >
              Home
            </p>
          </Link>
          <Link href="/#About">
            <p
              className={`cursor-pointer border-b p-4 text-base font-bold ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-500 ease-in-out hover:text-[#7843E9]`}
            >
              About
            </p>
          </Link>
          <Link href="/#Projects">
            <p
              className={`cursor-pointer border-b p-4 text-base font-bold ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-500 ease-in-out hover:text-[#7843E9]`}
            >
              Projects
            </p>
          </Link>
          <Link href="/#Contact">
            <p
              className={`cursor-pointer border-b p-4 text-base font-bold ${darkMode ? "text-white hover:text-[#7843E9]" : "text-[#333]"} duration-500 ease-in-out hover:text-[#7843E9]`}
            >
              Contact
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
