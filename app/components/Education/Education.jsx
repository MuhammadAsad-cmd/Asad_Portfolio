// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { IoMdArrowRoundForward } from "react-icons/io";

// const Education = () => {
//   return (
//     <>
//       <div id="education" className="animated-border my-6 md:rounded-xl">
//         <div className="bg-white dark:bg-discordDark">
//           <div className="p-4">
//             <div className="mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
//                 <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
//                   Education
//                 </h1>
//               </div>
//             </div>
//             <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
//               <div>
//                 <Image
//                   width={48}
//                   height={48}
//                   src="/images/vupakistan_logo.jfif"
//                   alt="Vu Logo"
//                 />
//               </div>
//               <div>
//                 <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                   Virtual University
//                 </h2>
//                 <p className="cursor-pointer text-sm">
//                   Bachelor&apos;s degree, Computer Science
//                 </p>
//                 <p className="ShowH text-[13px]">Mar 2024 - Apr 2027</p>
//               </div>
//             </div>
//             <div className="mt-2 flex gap-2">
//               <div>
//                 <Image
//                   width={48}
//                   height={48}
//                   src="/images/evs.jfif"
//                   alt="Evs Logo"
//                 />
//               </div>
//               <div>
//                 <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                   EVS Professional Training institute
//                 </h2>
//                 {/* <p className="text-sm cursor-pointer">
//                 Bachelor's degree, Computer Science
//               </p> */}
//                 <p className="ShowH text-[13px]">Nov 2022 - Nov 2023</p>
//               </div>
//             </div>
//           </div>
//           <Link
//             href="/details/education"
//             className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark"
//           >
//             <p className="text-base font-semibold">Show all</p>
//             <IoMdArrowRoundForward className="text-xl" />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Education;

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { educationData } from "@/app/Data/education";

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="animated-border mx-0 my-6 overflow-hidden p-0 md:rounded-xl"
      >
        <div className="m-0 bg-white p-0 dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  Education
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-xl text-SkyBlue" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
                </div>
              </div>
            </div>

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
                        className={`absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white dark:border-discordDark ${edu.status === "In Progress"
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

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-3 py-1 dark:from-SkyBlue/20 dark:to-darkHover/20 max-sm:justify-center">
                          <FaCalendarAlt className="text-xs text-SkyBlue" />
                          <span className="text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                            {edu.duration}
                          </span>
                        </div>
                        <div
                          className={`rounded-full px-2 py-1 text-xs font-semibold max-sm:flex max-sm:items-center max-sm:justify-center ${edu.status === "In Progress"
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

          <Link href="/details/education">
            <div className="group flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 border-t border-lightBorder bg-lightbg text-lightPrimarytext transition-all duration-300 hover:border-SkyBlue hover:bg-SkyBlue/5 hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:text-darkPrimaryGray dark:hover:border-darkHover dark:hover:bg-SkyBlue/10 dark:hover:text-darkHover">
              <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                <p className="text-base font-semibold">Show all education</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover transition-transform duration-300 group-hover:scale-110 dark:from-SkyBlue dark:to-darkHover">
                  <IoMdArrowRoundForward className="text-lg text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Education;
