import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { educationData } from "@/app/Data/ProjectsData";
import PageHeader from "../PageHeader";
import { IoSchoolOutline } from "react-icons/io5";

const EducationDetails = () => {
  return (
    <>
      <div
        id="education"
        className="animated-border mx-0 my-6 overflow-hidden p-0 md:rounded-xl"
      >
        <div className="m-0 bg-white p-0 dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <PageHeader
              title="Muhammad Asad's Education"
              subtitle="Academic background and learning journey"
              icon={<IoSchoolOutline />}
              experienceYears="CS Degree"
              backUrl="/"
            />

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className="group relative rounded-xl rounded-b-[5px] border border-lightBorder bg-lightbg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                >
                  <div className="flex items-start gap-4">
                    {/* Institution Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="h-14 w-14 overflow-hidden rounded-xl border-2 border-lightBorder transition-colors duration-300 group-hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover:border-darkHover">
                        <Image
                          width={56}
                          height={56}
                          src={edu.logo || "/placeholder.svg"}
                          alt={`${edu.institution} Logo`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {/* Status Badge */}
                      <div
                        className={`absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white dark:border-discordDark ${
                          edu.status === "In Progress"
                            ? "animate-pulse bg-SkyBlue"
                            : "bg-green-500"
                        }`}
                      ></div>
                    </div>

                    {/* Education Details */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h2 className="cursor-pointer text-lg font-semibold text-lightPrimarytext transition-colors duration-300 hover:underline group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                          {edu.institution}
                        </h2>
                        <div className="flex items-center gap-1 rounded-full bg-SkyBlue/10 px-2 py-1 dark:bg-SkyBlue/20">
                          <FaUniversity className="text-xs text-SkyBlue" />
                          <span className="text-xs font-medium text-SkyBlue">
                            {edu.type}
                          </span>
                        </div>
                      </div>

                      <p className="mb-3 font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                        {edu.degree}
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-3 py-1 dark:from-SkyBlue/20 dark:to-darkHover/20">
                          <FaCalendarAlt className="text-xs text-SkyBlue" />
                          <span className="text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                            {edu.duration}
                          </span>
                        </div>
                        <div
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            edu.status === "In Progress"
                              ? "bg-SkyBlue/20 text-SkyBlue"
                              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          }`}
                        >
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>

                  {/* Progress indicator for current education */}
                  {edu.status === "In Progress" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-xl bg-lightBorder dark:bg-darkPrimaryGray/30">
                      <div className="h-full animate-pulse bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
