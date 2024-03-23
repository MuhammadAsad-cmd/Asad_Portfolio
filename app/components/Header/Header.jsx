"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className={`Source fixed z-50 w-full`}>
        <div className="HeaderShadows flex items-center justify-between  bg-white px-2 py-4 md:px-5 lg:px-[50px]">
          <div className="flex cursor-pointer items-center gap-2 text-[#333] duration-300 ease-in-out hover:text-[#7843E9] lg:gap-5">
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
              <Link href="#/">
                <li className="cursor-pointer px-5 py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]">
                  <p> Home </p>
                </li>
              </Link>
              <Link href="#About">
                <li className="cursor-pointer  px-5 py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]">
                  <p>About </p>
                </li>
              </Link>
              <Link href="#Projects">
                <li className="cursor-pointer  px-5 py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]">
                  <p> Projects </p>
                </li>
              </Link>
              <Link href="#Contact">
                <li className="cursor-pointer  px-5 py-[22px] text-[#333] duration-300 ease-in-out hover:text-[#7843E9] lg:px-[30px]">
                  <p> Contact </p>
                </li>
              </Link>
            </ul>
            <div>
              <button onClick={toggleMenu} className="md:hidden">
                {menuOpen ? (
                  <RxCross1 className="ReadMore text-2xl" />
                ) : (
                  <TiThMenuOutline className="ReadMore text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="z-50 flex flex-col bg-[#FFFFFF] px-5 text-end lg:hidden">
          <p className="mt-24 cursor-pointer border-b border-t p-4 text-base font-bold text-[#333] duration-500 ease-in-out hover:text-[#7843E9]">
            Home
          </p>
          <p className="cursor-pointer border-b p-4 text-base font-bold text-[#333] duration-500 ease-in-out hover:text-[#7843E9]">
            About
          </p>
          <p className="cursor-pointer border-b p-4 text-base font-bold text-[#333] duration-500 ease-in-out hover:text-[#7843E9]">
            Projects
          </p>
          <p className="cursor-pointer border-b p-4 text-base font-bold text-[#333] duration-500 ease-in-out hover:text-[#7843E9]">
            Contact
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
