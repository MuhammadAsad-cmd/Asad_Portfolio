import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import ExpCard from "./ExpCard";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <>
      <div id="experience" className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  Experience
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <IoBriefcaseOutline className="text-xl text-SkyBlue" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
                </div>
              </div>
            </div>
            <ExpCard />
            {/* Show All Button */}
            <div className="mt-8 text-center">
              <Link href="/details/experience">
                <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-SkyBlue to-lightHover px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-SkyBlue/20 dark:to-darkHover">
                  <span>Show all experience</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
