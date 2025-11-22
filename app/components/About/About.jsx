// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import { IoDiamondOutline } from "react-icons/io5";

// const About = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>
//       <div id="about" className="animated-border my-6 md:rounded-xl">
//         <div className=" bg-white p-4 dark:bg-discordDark">
//           <div className="flex items-center gap-3">
//             <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
//             <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
//               About
//             </h1>
//           </div>
//           <div className="py-5 text-sm">
//             <p>
//               I specialize in solving complex front-end challenges with
//               creative, efficient, and scalable solutions.
//             </p>
//             <br />
//             <p>
//               The web development world is full of evolving challenges. Clients
//               want websites that are not only visually stunning but also highly
//               functional, responsive, and optimized for performance. That&apos;s
//               where I come in.
//             </p>
//             <br />
//             <p>
//               Early in my career, I recognized a gap in the market: many
//               businesses struggled to connect their vision with technology. They
//               wanted solutions tailored to their brand but often received
//               generic, uninspired results. I believed there was a better way.
//             </p>
//             <br />
//             <p>
//               By leveraging modern technologies like React.js, Next.js, Redux
//               Toolkit, and Tailwind CSS, I turned this belief into action. My
//               projects deliver results that aren’t just about aesthetics; they
//               are about crafting experiences that drive engagement, conversions,
//               and loyalty.
//             </p>

//             <div className="mb-1  flex items-center justify-between">
//               <h1 className="font-medium"></h1>
//               <button
//                 onClick={toggleReadMore}
//                 className="text-darkPrimaryGray hover:text-SkyBlue"
//               >
//                 {isExpanded ? "" : "...see more"}
//               </button>
//             </div>
//             {isExpanded && (
//               <>
//                 <p className="mt-4">
//                   <strong>What I offer</strong>
//                   <br />I specialize in delivering:
//                 </p>
//                 <ul className="mt-2 list-inside list-disc space-y-1">
//                   <li>
//                     <strong> Problem-Solving Expertise:</strong>
//                     Tackling real-world challenges with tailored solutions.
//                   </li>
//                   <li>
//                     <strong>Custom Websites for Businesses:</strong> Tailored to
//                     your brand’s identity and goals.
//                   </li>
//                   <li>
//                     <strong>Responsive & Scalable Applications:</strong>{" "}
//                     Ensuring seamless performance across all devices.
//                   </li>
//                   <li>
//                     <strong>Cutting-Edge Frontend Solutions:</strong> Using the
//                     latest tools and technologies to bring your ideas to life.
//                   </li>
//                   <li>
//                     <strong>High-Performance Websites: </strong> Fast,
//                     responsive, and user focused.
//                   </li>
//                 </ul>
//                 <p className="mt-4">
//                   Whether you need a business website to establish your online
//                   presence or a robust frontend solution for your project, I’m
//                   here to make it happen.
//                 </p>
//                 <h1 className="mt-4 font-medium">Why Choose Me?</h1>
//                 <ul className="mt-2 list-inside list-disc space-y-1">
//                   <li>
//                     <strong>Modern Technologies:</strong> Expert in advanced
//                     frameworks like React and Next.js.
//                   </li>
//                   <li>
//                     <strong>Attention to Detail:</strong> Committed to clean,
//                     efficient, and user-friendly designs.
//                   </li>
//                   <li>
//                     <strong>Client-Centric Approach:</strong> Your vision is my
//                     priority, delivered with precision.
//                   </li>
//                 </ul>
//                 <p className="mt-4">
//                   <strong>Let’s Collaborate!</strong>
//                   <br />I also offer freelance services for businesses and
//                   individuals who need impactful websites that drive results.
//                   Feel free to reach out through the Contact Us section or send
//                   me a message to discuss your project.
//                 </p>
//               </>
//             )}
//           </div>

//           <div className="my-3 flex items-center justify-between rounded-lg border p-3 dark:border-darkSecondaryGray">
//             <div className="flex gap-2">
//               <div>
//                 <IoDiamondOutline className="mt-1.5 text-2xl" />
//               </div>
//               <div>
//                 <h2 className="text-base font-semibold">Top Skills</h2>
//                 <p className="text-sm">
//                   Next.js • React.js • TypeScript • JavaScript • Redux Toolkit •
//                   Front-End Development
//                 </p>
//               </div>
//             </div>
//             <Link
//               href="/details/skills"
//               aria-label="View details about skills"
//               className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#FFFFFFE6] hover:bg-discordDark"
//             >
//               <IoMdArrowRoundForward className="text-xl" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  IoDiamondOutline,
  IoCodeSlash,
  IoRocketOutline,
  IoCheckmarkCircle,
  IoBulbOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const topSkills = [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-500 dark:text-white" },
    { name: "React.js", icon: FaReact, color: "text-blue-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  ];

  const keyStrengths = [
    {
      icon: IoBulbOutline,
      title: "Full-Stack Solutions",
      description: "Building end-to-end applications with MERN Stack",
    },
    {
      icon: IoRocketOutline,
      title: "Modern Technologies",
      description: "Expert in React.js, Next.js, and Node.js ecosystems",
    },
    {
      icon: IoTrendingUpOutline,
      title: "Performance Focused",
      description: "Scalable backend and responsive frontend architectures",
    },
  ];

  return (
    <>
      <div
        id="about"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
      >
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  About Muhammad Asad
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

            {/* Introduction Card */}
            <div className="mb-6 rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 p-5 dark:border-darkHover/20 dark:from-SkyBlue/10 dark:to-darkHover/10">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover dark:to-darkHover">
                  <IoRocketOutline className="text-lg text-white" />
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-lightPrimarytext dark:text-white">
                    MERN Stack Developer & Full-Stack Specialist
                  </h2>
                  <p className="leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                    I&apos;m{" "}
                    <strong className="text-SkyBlue">Muhammad Asad</strong>,
                    specializing in building robust, scalable web applications using the{" "}
                    <strong className="text-lightPrimarytext dark:text-white">
                      MERN Stack (MongoDB, Express.js, React.js, Node.js)
                    </strong>{" "}
                    and Next.js.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="mb-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-lightPrimarytext dark:text-white">
                <IoDiamondOutline className="text-SkyBlue" />
                Why Choose Muhammad Asad?
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {keyStrengths.map((strength, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-lightBorder bg-lightbg p-4 transition-all duration-300 hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover transition-transform duration-300 group-hover:scale-110 dark:to-darkHover">
                        <strength.icon className="text-sm text-white" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-semibold text-lightPrimarytext dark:text-white">
                          {strength.title}
                        </h4>
                        <p className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-4 text-sm leading-relaxed text-lightPrimarytext dark:text-white">
              <p>
                The web development world is full of evolving challenges.
                Clients want websites that are not only visually stunning but
                also highly functional, secure, and optimized for
                performance. That&apos;s where{" "}
                <strong className="text-SkyBlue"> Muhammad Asad</strong> comes
                in.
              </p>

              <p>
                Early in my career, I recognized a gap in the market: many
                businesses struggled to connect their vision with comprehensive technology solutions.
                They wanted full-stack applications tailored to their brand but often received
                fragmented results. I believed there was a better way.
              </p>

              <p>
                By leveraging modern technologies like{" "}
                <strong className="text-SkyBlue">
                  MongoDB, Express.js, React.js, Node.js, and Next.js
                </strong>
                , I turned this belief into action. My projects deliver results
                that aren&apos;t just about aesthetics; they are about crafting
                complete digital experiences that drive engagement, conversions, and loyalty.
              </p>

              <div className="flex items-center justify-end">
                <button
                  onClick={toggleReadMore}
                  className="flex items-center gap-1 font-medium text-SkyBlue transition-colors duration-300 hover:text-lightHover dark:hover:text-darkHover"
                >
                  {isExpanded ? "Show less" : "...see more"}
                  <IoMdArrowRoundForward
                    className={`text-sm transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                  />
                </button>
              </div>

              {isExpanded && (
                <div className="animate-in slide-in-from-top space-y-4 duration-300">
                  {/* Services Offered */}
                  <div className="rounded-xl border border-lightBorder bg-lightbg p-5 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray">
                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-lightPrimarytext dark:text-white">
                      <IoCheckmarkCircle className="text-green-500" />
                      What Muhammad Asad Offers
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "MERN Stack Development: Full-cycle web application development",
                        "Custom Websites for Businesses: Tailored to your brand's identity and goals",
                        "API Development & Integration: Robust backend solutions with Node.js and Express",
                        "Database Design: Efficient data modeling with MongoDB",
                        "High-Performance Websites: Fast, responsive, and user-focused",
                        "E-commerce Solutions: Complete online store development",
                      ].map((service, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <IoCheckmarkCircle className="mt-0.5 flex-shrink-0 text-sm text-SkyBlue" />
                          <span className="text-lightSecondarytext dark:text-darkPrimaryGray">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Whether you need a business website to establish your online
                    presence or a robust full-stack solution for your project,{" "}
                    <strong className="text-SkyBlue">Muhammad Asad</strong> is
                    here to make it happen.
                  </p>

                  <div className="rounded-xl border border-SkyBlue/30 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 p-4 dark:border-darkHover/30 dark:from-SkyBlue/20 dark:to-darkHover/20">
                    <p className="text-sm">
                      <strong className="text-SkyBlue">
                        Let&apos;s Collaborate!
                      </strong>
                      <br />I offer freelance services for businesses and
                      individuals who need impactful websites that drive
                      results. Feel free to reach out through the Contact
                      section to discuss your project.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Top Skills Section */}
            <div className="group mt-6 rounded-xl border border-lightBorder bg-lightbg p-5 transition-all duration-300 hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover dark:to-darkHover">
                      <IoDiamondOutline className="text-lg text-white" />
                    </div>
                    <h2 className="text-lg font-semibold text-lightPrimarytext dark:text-white">
                      Muhammad Asad&apos;s Tech Stack
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {topSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="group/skill flex items-center gap-2 rounded-lg border border-lightBorder bg-white px-3 py-2 transition-all duration-300 hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-discordDark dark:hover:border-darkHover"
                      >
                        <skill.icon className={`text-sm ${skill.color}`} />
                        <span className="text-sm font-medium text-lightPrimarytext transition-colors duration-300 group-hover/skill:text-SkyBlue dark:text-white dark:group-hover/skill:text-darkHover">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/details/skills"
                  aria-label="View Muhammad Asad's complete skills"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover transition-transform duration-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-SkyBlue/20 dark:to-darkHover"
                >
                  <IoMdArrowRoundForward className="text-lg text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
