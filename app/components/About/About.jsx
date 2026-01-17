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
import { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  IoDiamondOutline,
  IoCodeSlash,
  IoRocketOutline,
  IoCheckmarkCircle,
  IoBulbOutline,
  IoTrendingUpOutline,
  IoServerOutline,
  IoLayersOutline,
} from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const About = () => {
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

  const techStack = {
    frontend: [
      { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ],
  };

  const highlights = [
    {
      icon: IoLayersOutline,
      title: "Full-Stack Development",
      description: "End-to-end MERN stack applications with seamless integration",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: IoRocketOutline,
      title: "Performance & Scalability",
      description: "Optimized architectures for fast, responsive user experiences",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: IoServerOutline,
      title: "API Design & Integration",
      description: "RESTful APIs and third-party service integrations",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const experience = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="about-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h2 id="about-heading" className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                About Muhammad Asad
              </h2>
              <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                MERN Stack Developer & Full-Stack Specialist
              </p>
            </div>
          </div>
        </div>

        {/* Main Content & Stats Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left Column: Story & Highlights */}
          <div>
            {/* Intro Text */}
            <div
              className={`mb-10 space-y-6 text-base leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray transition-all duration-700 delay-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p>
                I build fast, scalable web applications using the{" "}
                <span className="font-semibold text-lightPrimarytext dark:text-white">
                  MERN Stack
                </span>{" "}
                and Next.js. My goal is simple: turn complex ideas into reliable, high-performance digital products.
              </p>
              <p>
                Early in my career, I noticed many businesses getting fragmented solutions. I focus on the full picture—from database architecture to the final pixel on the screen—ensuring everything works seamlessly together.
              </p>
            </div>

            {/* Key Highlights (No Boxes) */}
            <div
              className={`mb-10 transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <h3 className="mb-6 text-lg font-bold text-lightPrimarytext dark:text-white">
                What I Bring to the Table
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-SkyBlue/10 dark:bg-SkyBlue/20">
                      <highlight.icon className="text-xl text-SkyBlue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lightPrimarytext dark:text-white">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Tech (Clean Layout) */}
          <div className="space-y-10">
            {/* Stats Row */}
            <div
              className={`flex flex-wrap gap-8 border-b border-lightBorder pb-8 dark:border-darkSecondaryGray transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {experience.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-SkyBlue">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack (Minimal Lists) */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded-md bg-lightbg px-3 py-1.5 text-sm font-medium text-lightPrimarytext dark:bg-darkSecondaryGray dark:text-white"
                      >
                        <tech.icon className={`text-sm ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
                    Backend & Database
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded-md bg-lightbg px-3 py-1.5 text-sm font-medium text-lightPrimarytext dark:bg-darkSecondaryGray dark:text-white"
                      >
                        <tech.icon className={`text-sm ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
             {/* Simple Link */}
             <div
              className={`pt-4 transition-all duration-700 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                href="/details/skills"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
              >
                View detailed skill set
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
