import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import ExpCard from "./ExpCard";

const Experience = () => {
  return (
    <>
      <div id="experience" className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Experience</p>
              </div>
            </div>
            <ExpCard />
          </div>
          <Link href="/details/experience">
            <div className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark">
              <p className="text-base font-semibold">Show all</p>
              <IoMdArrowRoundForward className="text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experience;
