import React from "react";
import ExpCard from "../Experience/ExpCard";
import { IoBriefcaseOutline } from "react-icons/io5";
import PageHeader from "../PageHeader";

const ExpDetails = () => {
  return (
    <>
      <div className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            {/* <div className="mb-6 flex items-center justify-between">
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
            </div> */}
            <PageHeader
              title="Muhammad Asad's Experience"
              subtitle="Professional journey and career highlights"
              icon={<IoBriefcaseOutline />}
              experienceYears="3+ Years"
              backUrl="/"
            />

            <ExpCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpDetails;
