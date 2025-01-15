import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import ExpCard from "./ExpCard";

const Experience = () => {
  return (
    <>
      <div className="my-2 bg-raisin-black sm:rounded-lg">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Experience</p>
            </div>
          </div>
          <ExpCard />
        </div>
        <Link href="/details/experience">
          <div className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]">
            <p className="text-base font-semibold">Show all</p>
            <IoMdArrowRoundForward className="text-xl" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Experience;
