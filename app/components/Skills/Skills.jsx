// import Image from "next/image";
// import { techLogos } from "../Marquee/Marquee";

// export default function Skills() {
//   return (
//     <div
//       id="skills"
//       className="animated-border my-6 rounded-t-lg sm:rounded-xl"
//     >
//       <div className="bg-white p-4 dark:bg-discordDark">
//         <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="flex items-center gap-3">
//               <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
//               <h1 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
//                 Expertise
//               </h1>
//             </div>

//             <div className="space-y-8">
//               <div>
//                 <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
//                   Front-end Dev
//                 </h2>
//                 <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//                   Passionate about UI/UX. Over 2+ years of development
//                   experience in Next.js, React.js, React-Router-Dom,
//                   TailwindCSS, SCSS, CSS, Redux, Redux Toolkit, JavaScript,
//                   TypeScript.
//                 </p>
//               </div>

//               <div>
//                 <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
//                   Back-end Dev
//                 </h2>
//                 <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//                   Over 1+ years of development experience with Node.js and
//                   MongoDB.
//                 </p>
//               </div>

//               <p className="pt-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//                 All My Websites/Webapps Are Lovingly Hand Coded, Responsive and
//                 Cross-browser compatible.
//               </p>
//             </div>
//           </div>

//           {/* Right Content - Technology Grid */}
//           <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
//             {techLogos.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex h-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[#c0dcbc] bg-[#f8f8f8] p-2 text-white duration-300 ease-in-out hover:bg-neutral-200 dark:border-[#3b413d] dark:bg-[#24242d] dark:hover:bg-[#242424]"
//               >
//                 <Image
//                   src={tech.src || "/placeholder.svg"}
//                   alt={`${tech.alt} logo`}
//                   width={64}
//                   height={64}
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { techLogos } from "../Marquee/Marquee";
import {
  IoCodeSlash,
  IoCheckmarkCircle,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      icon: FaReact,
      title: "Front-end Development",
      experience: "2+ years",
      description:
        "Passionate about UI/UX. Expert in creating responsive, interactive web applications with modern frameworks and tools.",
      technologies:
        "Next.js, React.js, React-Router-Dom, TailwindCSS, SCSS, CSS, Redux, Redux Toolkit, JavaScript, TypeScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaNodeJs,
      title: "Back-end Development",
      experience: "1+ years",
      description:
        "Building robust server-side applications and APIs with modern backend technologies.",
      technologies: "Node.js, MongoDB, Express.js, REST APIs",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div
      id="skills"
      className="animated-border my-6 overflow-hidden rounded-t-lg sm:rounded-xl"
    >
      <div className="bg-white dark:bg-discordDark">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
              <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                Muhammad Asad&apos;s Expertise
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <IoCodeSlash className="text-xl text-SkyBlue" />
              <div className="flex gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content - Skills Description */}
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <category.icon className="text-xl text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h2 className="text-xl font-semibold text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                          {category.title}
                        </h2>
                        <span className="rounded-full border border-SkyBlue/20 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-3 py-1 text-xs font-semibold text-SkyBlue dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20">
                          {category.experience}
                        </span>
                      </div>
                      <p className="mb-3 leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                        {category.description}
                      </p>
                      <div className="flex items-start gap-2">
                        <IoCheckmarkCircle className="mt-0.5 flex-shrink-0 text-sm text-SkyBlue" />
                        <p className="text-sm font-medium text-lightPrimarytext dark:text-white">
                          <strong className="text-SkyBlue">
                            Technologies:
                          </strong>{" "}
                          {category.technologies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quality Statement */}
              <div className="rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 p-5 dark:border-darkHover/20 dark:from-SkyBlue/10 dark:to-darkHover/10">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover dark:to-darkHover">
                    <IoTrendingUpOutline className="text-lg text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-lightPrimarytext dark:text-white">
                      Quality Commitment
                    </h3>
                    <p className="leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                      All my websites and web applications are lovingly
                      hand-coded, fully responsive, and cross-browser
                      compatible, ensuring the best user experience across all
                      devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Technology Grid */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="mb-2 text-lg font-semibold text-lightPrimarytext dark:text-white">
                  Technology Stack
                </h3>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Tools and technologies I work with daily
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                {techLogos.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative flex h-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl border border-lightBorder bg-lightbg p-3 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                  >
                    <Image
                      src={tech.src || "/placeholder.svg"}
                      alt={`${tech.alt} logo`}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-lightPrimarytext px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-lightPrimarytext">
                      {tech.alt}
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-lightPrimarytext dark:border-t-white"></div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/10 to-lightHover/10 p-4 text-center dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20">
                  <div className="mb-1 text-2xl font-bold text-SkyBlue">
                    15+
                  </div>
                  <div className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                    Technologies
                  </div>
                </div>
                <div className="rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/10 to-lightHover/10 p-4 text-center dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20">
                  <div className="mb-1 text-2xl font-bold text-SkyBlue">3+</div>
                  <div className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
