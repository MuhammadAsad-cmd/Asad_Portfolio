import { servicesData } from "@/app/Data/ProjectsData";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SerDetails = () => {
  return (
    <>
      <div className="animated-border rounded-t-lg sm:rounded-xl">
        <div className="mb-10 rounded-lg bg-white dark:bg-discordDark">
          <div className="flex items-center justify-between px-5 pt-3">
            <div className="flex items-center gap-3">
              <Link href="/">
                <FaArrowLeft />
              </Link>
              <p className="text-xl font-semibold">Services</p>
            </div>
            {/* <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-discordDark">
              <AiOutlinePlus className="text-2xl" />
            </div>
          </div> */}
          </div>
          <div className="px-5 pb-5">
            <div>
              {servicesData.map((skill, index) => (
                <h2
                  key={index}
                  className="border-darkGray cursor-pointer border-b py-6 text-base font-semibold hover:text-SkyBlue hover:underline"
                >
                  {skill.name}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerDetails;
