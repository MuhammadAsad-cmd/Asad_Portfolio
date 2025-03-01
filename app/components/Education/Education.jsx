import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Education = () => {
  return (
    <>
      <div id="education" className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Education</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
              <div>
                <Image
                  width={48}
                  height={48}
                  src="/images/vupakistan_logo.jfif"
                  alt="Vu Logo"
                />
              </div>
              <div>
                <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
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
                <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
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
            className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark"
          >
            <p className="text-base font-semibold">Show all</p>
            <IoMdArrowRoundForward className="text-xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Education;
