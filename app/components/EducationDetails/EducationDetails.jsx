import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const EducationDetails = () => {
  return (
    <>
      <div className="bg-raisin-black rounded-lg">
        <div className="flex items-center justify-between px-5 pt-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <FaArrowLeft />
            </Link>
            <p className="text-xl font-semibold">Education</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
              <AiOutlinePlus className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <div className="border-darkGray mt-2 flex gap-2 border-b pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/vupakistan_logo.jfif"
                alt="Vu Logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <h2 className="hover:text-Sky-Blue cursor-pointer text-base font-semibold hover:underline">
                Virtual University
              </h2>
              <p className="cursor-pointer text-sm">
                Bachelor&apos;s degree, Computer Science
              </p>
              <p className="ShowH text-[13px]">Mar 2024 - Apr 2027</p>
            </div>
          </div>
          <div className="border-darkGray mt-2 flex gap-2 border-b pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/evs.jfif"
                alt="Evs Logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <h2 className="hover:text-Sky-Blue cursor-pointer text-base font-semibold hover:underline">
                EVS Professional Training institute
              </h2>
              {/* <p className="text-sm cursor-pointer">
                Bachelor's degree, Computer Science
              </p> */}
              <p className="ShowH text-[13px]">Nov 2022 - Nov 2023</p>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/dummy.svg"
                alt="Vu Logo"
                className="cursor-pointer"
              />
            </div>
            <div>
              <h2 className="hover:text-Sky-Blue cursor-pointer text-base font-semibold hover:underline">
                Science college Hasilpur
              </h2>
              <p className="cursor-pointer text-sm">Computer Science</p>
              {/* <p className="text-[13px] ShowH">Mar 2024 - Apr 2027</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
