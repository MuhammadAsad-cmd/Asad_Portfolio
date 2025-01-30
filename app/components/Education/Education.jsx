import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Education = () => {
  return (
    <>
      <div className="my-2 bg-raisin-black sm:rounded-lg">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Education</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2 border-b border-darkGray pb-4">
            <div>
              <Image
                width={48}
                height={48}
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
