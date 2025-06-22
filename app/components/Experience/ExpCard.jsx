// import { experiences } from "@/app/Data/ProjectsData";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { IoDiamondOutline } from "react-icons/io5";
// import dayjs from "dayjs";

// const formatDate = (date) => {
//   if (!date) return "Present";
//   const [year, month] = date.split("-");
//   return `${new Date(year, month - 1).toLocaleString("en-US", { month: "short" })} ${year}`;
// };

// const calculateDuration = (startDate, endDate = null) => {
//   const start = dayjs(startDate);
//   const end = endDate ? dayjs(endDate) : dayjs();
//   const totalMonths = end.diff(start, "month");
//   const years = Math.floor(totalMonths / 12);
//   const months = totalMonths % 12;

//   return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
//     months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
//   }`.trim();
// };

// const calculateTotalDuration = (roles) => {
//   let totalMonths = 0;

//   roles.forEach(({ startDate, endDate }) => {
//     const start = dayjs(startDate);
//     const end = endDate ? dayjs(endDate) : dayjs();
//     totalMonths += end.diff(start, "month");
//   });

//   const years = Math.floor(totalMonths / 12);
//   const months = totalMonths % 12;

//   return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
//     months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
//   }`.trim();
// };

// const ExpCard = () => {
//   return (
//     <>
//       <div className="flex flex-col space-y-8">
//         {experiences.map((experience, index) => (
//           <div key={index}>
//             {experience.roles.length === 1 ? (
//               <div className="flex gap-2">
//                 <Link
//                   href={experience.link || "#"}
//                   passHref
//                   className="h-12 w-12 cursor-pointer rounded-full bg-blue-500"
//                 >
//                   <Image
//                     width={48}
//                     height={48}
//                     src={experience.image}
//                     alt={experience.company}
//                     className="h-full w-full rounded-full object-cover"
//                   />
//                 </Link>
//                 <div>
//                   <div className="flex-shrink-0 text-sm">
//                     <Link href={experience.link || "#"} passHref>
//                       <h4 className="text-base font-semibold">
//                         {experience.roles[0].title}
//                       </h4>
//                     </Link>
//                     {experience.link ? (
//                       <Link href={experience.link}>
//                         <h3 className="cursor-pointer text-sm font-normal">
//                           {experience.company} <span className="mx-2">·</span>
//                           <span>{experience.roles[0].type}</span>
//                         </h3>
//                       </Link>
//                     ) : (
//                       <h3 className="text-base font-semibold">
//                         {experience.company} <span className="mx-2">·</span>
//                         <span>{experience.roles[0].type}</span>
//                       </h3>
//                     )}

//                     <p className="flex items-center text-darkPrimaryGray">
//                       {experience.roles[0].duration}{" "}
//                       <span className="mx-2">·</span>
//                       <span> {calculateTotalDuration(experience.roles)} </span>
//                     </p>
//                     <p className="text-darkPrimaryGray">
//                       {experience.roles[0].description}
//                     </p>
//                     <p className="text-darkPrimaryGray">
//                       {" "}
//                       {experience.location}
//                     </p>
//                   </div>
//                   <div className="mt-2 flex items-center gap-3 text-sm">
//                     <IoDiamondOutline />
//                     {experience.skills}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <div className="flex">
//                   <div className="h-12 w-12 flex-shrink-0">
//                     <Link
//                       href={experience.link || "#"}
//                       passHref
//                       className="h-12 w-12 cursor-pointer rounded-full bg-blue-500"
//                     >
//                       <Image
//                         width={48}
//                         height={48}
//                         src={experience.image}
//                         alt={experience.company}
//                         className="h-full w-full rounded-full object-cover"
//                       />
//                     </Link>
//                   </div>
//                   <div className="ml-2">
//                     <Link href={experience.link}>
//                       <h3 className="cursor-pointer text-lg font-semibold hover:text-SkyBlue hover:underline">
//                         {experience.company}
//                       </h3>
//                     </Link>
//                     <p className="text-sm">{experience.time}</p>
//                     <p className="text-sm text-darkPrimaryGray">
//                       {experience.location}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative ml-14 mt-4 space-y-4">
//                   <div className="absolute -left-9 bottom-0 top-0 w-px bg-[#76797b]"></div>
//                   {experience.roles.map((role, i) => (
//                     <div key={i} className="relative">
//                       <div
//                         className={`absolute -left-[42px] h-3 w-3 rounded-full bg-[#76797b] ${
//                           i === 0
//                             ? "top-0"
//                             : i === experience.roles.length - 1
//                               ? "bottom-0"
//                               : "top-[50%] -translate-y-1/2"
//                         }`}
//                       ></div>
//                       <Link href={experience.link || "#"} passHref>
//                         <h4 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                           {role.title}
//                         </h4>
//                       </Link>
//                       <p className="text-sm">{role.type}</p>
//                       <p className="text-sm text-darkPrimaryGray">
//                         {formatDate(role.startDate)} -{" "}
//                         {formatDate(role.endDate)} ·{" "}
//                         {calculateDuration(role.startDate, role.endDate)}
//                       </p>
//                       {role.description && (
//                         <p className="text-gray-700">{role.description}</p>
//                       )}
//                       <div className="mt-2 flex items-center gap-3 text-sm">
//                         <IoDiamondOutline />
//                         {role.skills}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ExpCard;

import { experiences } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import {
  IoDiamondOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import dayjs from "dayjs";

const formatDate = (date) => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${new Date(year, month - 1).toLocaleString("en-US", { month: "short" })} ${year}`;
};

const calculateDuration = (startDate, endDate = null) => {
  const start = dayjs(startDate);
  const end = endDate ? dayjs(endDate) : dayjs();
  const totalMonths = end.diff(start, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`.trim();
};

const calculateTotalDuration = (roles) => {
  let totalMonths = 0;

  roles.forEach(({ startDate, endDate }) => {
    const start = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : dayjs();
    totalMonths += end.diff(start, "month");
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`.trim();
};

const ExpCard = () => {
  return (
    <>
      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {experience.roles.length === 1 ? (
              /* Single Role Experience */
              <div className="group rounded-xl border border-lightBorder bg-lightbg p-2 transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover md:p-6">
                <div className="flex gap-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <Link href={experience.link || "#"} className="group/logo">
                      <div className="h-14 w-14 overflow-hidden rounded-xl border-2 border-lightBorder transition-colors duration-300 group-hover/logo:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover/logo:border-darkHover">
                        <Image
                          width={56}
                          height={56}
                          src={experience.image || "/placeholder.svg"}
                          alt={experience.company}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Experience Details */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={experience.link || "#"}
                          className="group/title"
                        >
                          <h3 className="text-lg font-semibold text-lightPrimarytext transition-colors duration-300 hover:underline group-hover/title:text-SkyBlue dark:text-white dark:group-hover/title:text-darkHover">
                            {experience.roles[0].title}
                          </h3>
                        </Link>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <Link
                            href={experience.link || "#"}
                            className="group/company"
                          >
                            <span className="font-medium text-lightSecondarytext transition-colors duration-300 group-hover/company:text-SkyBlue dark:text-darkPrimaryGray dark:group-hover/company:text-darkHover">
                              {experience.company}
                            </span>
                          </Link>
                          <span className="text-lightSecondarytext dark:text-darkPrimaryGray">
                            •
                          </span>
                          <span className="rounded-full bg-SkyBlue/10 px-2 py-1 text-xs font-medium text-SkyBlue dark:bg-SkyBlue/20">
                            {experience.roles[0].type}
                          </span>
                          {experience.link && (
                            <FaExternalLinkAlt className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray" />
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                          <IoCalendarOutline className="hidden sm:block" />
                          <span>
                            {calculateTotalDuration(experience.roles)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                      <div className="flex items-center gap-1">
                        <IoCalendarOutline className="hidden text-xs sm:block" />
                        <span>{experience.roles[0].duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoLocationOutline className="text-xs" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {experience.roles[0].description && (
                      <p className="mb-3 text-sm text-lightPrimarytext dark:text-white">
                        {experience.roles[0].description}
                      </p>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 text-SkyBlue">
                        <IoDiamondOutline className="text-sm" />
                        <span className="text-xs font-medium">Skills:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {experience.skills
                          .split(", ")
                          .map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="rounded-md border border-SkyBlue/20 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-2 py-1 text-xs font-medium text-lightPrimarytext dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20 dark:text-white"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Multiple Roles Experience */
              <div className="group rounded-xl border border-lightBorder bg-lightbg p-3 transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover md:p-6">
                {/* Company Header */}
                <div className="mb-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <Link href={experience.link || "#"} className="group/logo">
                      <div className="h-14 w-14 overflow-hidden rounded-xl border-2 border-lightBorder transition-colors duration-300 group-hover/logo:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover/logo:border-darkHover">
                        <Image
                          width={56}
                          height={56}
                          src={experience.image || "/placeholder.svg"}
                          alt={experience.company}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={experience.link || "#"}
                          className="group/company"
                        >
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-lightPrimarytext transition-colors duration-300 hover:underline group-hover/company:text-SkyBlue dark:text-white dark:group-hover/company:text-darkHover">
                            {experience.company}
                            {experience.link && (
                              <FaExternalLinkAlt className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray" />
                            )}
                          </h3>
                        </Link>
                        <div className="mt-1 flex flex-col gap-4 text-sm text-lightSecondarytext dark:text-darkPrimaryGray sm:flex-row sm:items-center">
                          <div className="flex items-center gap-1">
                            <IoCalendarOutline className="text-xs" />
                            <span>{experience.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IoLocationOutline className="text-xs" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                          <IoCalendarOutline className="hidden sm:block" />
                          <span>
                            {calculateTotalDuration(experience.roles)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roles Timeline */}
                <div className="relative ml-16 space-y-6">
                  <div className="absolute -left-8 bottom-0 top-0 w-px bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                  {experience.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-br from-SkyBlue to-lightHover dark:border-discordDark dark:to-darkHover"></div>

                      <div className="rounded-lg border border-lightBorder bg-white p-4 dark:border-darkPrimaryGray/30 dark:bg-discordDark">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <div>
                            <Link
                              href={experience.link || "#"}
                              className="group/role"
                            >
                              <h4 className="font-semibold text-lightPrimarytext transition-colors duration-300 hover:underline group-hover/role:text-SkyBlue dark:text-white dark:group-hover/role:text-darkHover">
                                {role.title}
                              </h4>
                            </Link>
                            <span className="mt-1 inline-block rounded-full bg-SkyBlue/10 px-2 py-1 text-xs font-medium text-SkyBlue dark:bg-SkyBlue/20">
                              {role.type}
                            </span>
                          </div>
                          <div className="text-right text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                            <div className="flex items-center gap-1">
                              <IoCalendarOutline className="hidden sm:block" />
                              <span>
                                {calculateDuration(
                                  role.startDate,
                                  role.endDate,
                                )}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                          {formatDate(role.startDate)} -{" "}
                          {formatDate(role.endDate)}
                        </div>

                        {role.description && (
                          <p className="mb-3 text-sm text-lightPrimarytext dark:text-white">
                            {role.description}
                          </p>
                        )}

                        {/* Role Skills */}
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center gap-1 text-SkyBlue">
                            <IoDiamondOutline className="text-sm" />
                            <span className="text-xs font-medium">Skills:</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {role.skills
                              .split(", ")
                              .map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="rounded-md border border-SkyBlue/20 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-2 py-1 text-xs font-medium text-lightPrimarytext dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20 dark:text-white"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpCard;
