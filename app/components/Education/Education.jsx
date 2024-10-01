"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";

const Education = () => {
  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Education</p>
            </div>
            {/* <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
                <AiOutlinePlus className="text-2xl" />
              </div>
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
                <svg
                  role="img"
                  aria-hidden="false"
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  data-test-icon="edit-medium"
                  fill="#FFFFFFE6"
                >
                  <path d="M21.7,2.3c-1.1-1.1-2.9-1.1-4,0L15.1,4.9L19.1,9l2.6-2.6C22.8,5.1,22.8,3.4,21.7,2.3z M14.1,5.9L3,17v4h4L18.1,9.9L14.1,5.9z"></path>
                </svg>
              </div>
            </div> */}
          </div>
          <div className="mt-3 flex gap-2 border-b border-darkGray pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/vupakistan_logo.jfif"
                alt="Vu Logo"
              />
            </div>
            <div>
              <h2 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                Virtual University
              </h2>
              <p className="cursor-pointer text-sm">
                Bachelor&apos;s degree, Computer Science
              </p>
              <p className="ShowH text-[13px]">Mar 2024 - Apr 2027</p>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/evs.jfif"
                alt="Evs Logo"
              />
            </div>
            <div>
              <h2 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                EVS Professional Training institute
              </h2>
              {/* <p className="text-sm cursor-pointer">
                Bachelor's degree, Computer Science
              </p> */}
              <p className="ShowH text-[13px]">Nov 2022 - Nov 2023</p>
            </div>
          </div>
        </div>
        <Link
          href="/details/education"
          className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]"
        >
          <p className="text-base font-semibold">Show all</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Link>
      </div>
    </>
  );
};

export default Education;
