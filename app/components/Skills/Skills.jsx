"use client";
import {
  IoTrendingUpOutline,
} from "react-icons/io5";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaNpm 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux, 
  SiReactquery,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      icon: FaNodeJs,
      title: "Core Architecture",
      experience: "3+ years",
      description:
        "Enterprise-grade application layers built on Node.js, Next.js, Express, React, and TypeScript—designed for maintainability under real operational load.",
      technologies:
        "Node.js, Next.js, Express.js, React, TypeScript, JavaScript",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: SiMongodb,
      title: "Data & Infrastructure",
      experience: "3+ years",
      description:
        "Database design, REST/GraphQL APIs, and data pipelines that keep business systems synchronized and performant at scale.",
      technologies: "MongoDB, SQL, REST APIs, GraphQL, Data Pipelines, Express.js",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: SiRedux,
      title: "State & Systems",
      experience: "3+ years",
      description:
        "State management, multi-tenant logic, and system-level patterns that keep complex ERP and portal applications predictable and secure.",
      technologies: "Redux Toolkit, Context API, Multi-Tenant Logic, TanStack Query",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const techStack = [
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", tier: "Core Architecture" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white", tier: "Core Architecture" },
    { name: "React.js", icon: FaReact, color: "text-[#61DAFB]", tier: "Core Architecture" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", tier: "Core Architecture" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300", tier: "Core Architecture" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", tier: "Data & Infrastructure" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", tier: "Core Architecture" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]", tier: "State & Systems" },
    { name: "TanStack Query", icon: SiReactquery, color: "text-[#FF4154]", tier: "State & Systems" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", tier: "State & Systems" },
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", tier: "Core Architecture" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", tier: "Core Architecture" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", tier: "Data & Infrastructure" },
    { name: "NPM", icon: FaNpm, color: "text-[#CB3837]", tier: "Data & Infrastructure" },
  ];

  const tierOrder = ["Core Architecture", "Data & Infrastructure", "State & Systems"];

  return (
    <section
      id="skills"
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="skills-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        <div className="mb-10 flex items-center gap-4">
           <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
           <div>
              <h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl">
                Expertise
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                 Architectural tiers and technologies behind enterprise systems
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="relative pl-4">
                <div className={`absolute left-0 top-0 h-full w-1 rounded-full ${category.bg.replace('/10', '')}`}></div>
                
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.bg}`}
                  >
                    <category.icon className={`text-2xl ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h2 className="text-lg font-bold text-lightPrimarytext dark:text-white md:text-xl">
                        {category.title}
                      </h2>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${category.bg} ${category.color}`}>
                        {category.experience}
                      </span>
                    </div>
                    <p className="mb-4 leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                      {category.description}
                    </p>
                    
                    <div>
                       <h4 className="mb-2 text-sm font-semibold text-lightPrimarytext dark:text-white">
                          Core Technologies:
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {category.technologies.split(',').map((tech, i) => (
                             <span key={i} className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                                {tech.trim()}{i !== category.technologies.split(',').length - 1 ? ' •' : ''}
                             </span>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 flex items-start gap-4 rounded-xl bg-lightbg p-5 dark:bg-darkSecondaryGray">
                <div className="mt-1 text-SkyBlue">
                   <IoTrendingUpOutline className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-lightPrimarytext dark:text-white">
                    Quality Commitment
                  </h3>
                  <p className="text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                    Every system is engineered for production reliability—secure
                    data handling, predictable performance, and architecture
                    that scales with business volume.
                  </p>
                </div>
            </div>
          </div>

          {/* Right Content - Technology Grid by Tier */}
          <div>
            <div className="mb-6">
              <h3 className="mb-1 text-lg font-bold text-lightPrimarytext dark:text-white md:text-xl">
                Technology Stack
              </h3>
              <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                Organized by architectural layer
              </p>
            </div>

            <div className="space-y-8">
              {tierOrder.map((tier) => (
                <div key={tier}>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
                    {tier}
                  </h4>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5">
                    {techStack
                      .filter((tech) => tech.tier === tier)
                      .map((tech, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col items-center justify-center"
                        >
                          <div className="flex h-16 w-full cursor-pointer items-center justify-center rounded-2xl bg-lightbg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-SkyBlue/10 dark:bg-darkSecondaryGray dark:hover:bg-discordDark">
                            <div className="transition-transform duration-300 group-hover:scale-110">
                              <tech.icon className={`text-3xl ${tech.color}`} />
                            </div>
                          </div>
                          
                          <div className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:-top-12 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                            {tech.name}
                            <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
