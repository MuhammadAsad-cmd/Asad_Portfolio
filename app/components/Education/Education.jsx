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

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { educationData } from "@/app/Data/education";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      id="education"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-8">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                Education
              </h1>
              <p className="mt-1 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                Academic Journey
              </p>
            </div>
          </div>
        </div>

        {/* Clean List Container */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`group flex flex-col gap-4 transition-all duration-700 md:flex-row md:items-center md:justify-between md:gap-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Left Side: Logo & Info */}
              <div className="flex items-start gap-4 md:items-center">
                {/* Logo Box */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-lightBorder bg-white transition-colors group-hover:border-SkyBlue dark:border-darkSecondaryGray dark:bg-darkbg dark:group-hover:border-darkHover">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.institution} Logo`}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="text-lg font-bold text-lightPrimarytext transition-colors group-hover:text-SkyBlue dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-base font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray md:hidden">
                    {edu.duration}
                  </p>
                </div>
              </div>

              {/* Right Side: Meta & Status (Desktop) */}
              <div className="flex flex-row items-center justify-between gap-4 md:flex-col md:items-end md:gap-1">
                <span className="hidden text-sm font-semibold text-lightPrimarytext dark:text-white md:block">
                  {edu.duration}
                </span>
                <div className="flex items-center gap-2">
                   {/* Mobile Status Badge (reused logic) */}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      edu.status === "In Progress"
                        ? "bg-SkyBlue/10 text-SkyBlue dark:bg-SkyBlue/20"
                        : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {edu.status}
                  </span>
                  <span className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray md:hidden">
                    {edu.type}
                  </span>
                </div>
                 {/* Desktop Type Badge */}
                 <span className="hidden text-xs text-lightSecondarytext dark:text-darkPrimaryGray md:block">
                   {edu.type}
                 </span>
              </div>
            </div>
          ))}
        </div>

         {/* Footer Action */}
        <div
          className={`mt-10 flex justify-center border-t border-lightBorder pt-6 dark:border-darkSecondaryGray transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/details/education"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
          >
            Show full education details
            <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Education;
