import { servicesData } from "@/app/Data/ProjectsData";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="animated-border my-6 rounded-t-lg sm:rounded-xl"
      >
        <div className="bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Services</p>
              </div>
            </div>
            <div className="pt-3">
              <ul>
                {servicesData
                  .slice(0, 5)
                  .map((service) => service.name)
                  .join(" • ")}
              </ul>
            </div>
          </div>
          <Link href="/details/services">
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

export default Services;
