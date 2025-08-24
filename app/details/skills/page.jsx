import PageHeader from "@/app/components/PageHeader";
import React from "react";
import Link from "next/link";
import {
  IoCodeSlash,
  IoCheckmarkCircle,
  IoTrendingUpOutline,
  IoStarOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { FaReact, FaNodeJs, FaTools, FaCertificate } from "react-icons/fa";
import Image from "next/image";

// Enhanced skills data with detailed information
const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: FaReact,
      experience: "3+ Years",
      description:
        "Passionate about creating beautiful, interactive user interfaces with modern frameworks and tools.",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React.js",
          level: 95,
          experience: "3+ Years",
          description:
            "Expert in building component-based applications with hooks, context, and modern patterns.",
          projects: 15,
          logo: "/images/react.svg",
          certifications: ["React Developer Certification"],
          keyFeatures: [
            "Hooks & Context",
            "Component Architecture",
            "State Management",
            "Performance Optimization",
          ],
        },
        {
          name: "Next.js",
          level: 90,
          experience: "2+ Years",
          description:
            "Proficient in full-stack React framework with SSR, SSG, and API routes.",
          projects: 12,
          logo: "/images/next.svg",
          certifications: ["Next.js Expert"],
          keyFeatures: [
            "App Router",
            "Server Components",
            "API Routes",
            "SEO Optimization",
          ],
        },
        {
          name: "TypeScript",
          level: 85,
          experience: "2+ Years",
          description:
            "Strong typing and modern JavaScript features for scalable applications.",
          projects: 10,
          logo: "/images/ts.svg",
          certifications: [],
          keyFeatures: [
            "Type Safety",
            "Interface Design",
            "Generic Types",
            "Advanced Patterns",
          ],
        },
        {
          name: "Tailwind CSS",
          level: 95,
          experience: "3+ Years",
          description:
            "Utility-first CSS framework for rapid UI development and consistent design systems.",
          projects: 20,
          logo: "/images/tailwind.svg",
          certifications: [],
          keyFeatures: [
            "Utility Classes",
            "Responsive Design",
            "Custom Components",
            "Design Systems",
          ],
        },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          experience: "3+ Years",
          description:
            "Modern JavaScript with ES6+ features, async programming, and functional concepts.",
          projects: 25,
          logo: "/images/js.svg",
          certifications: ["JavaScript Expert"],
          keyFeatures: [
            "ES6+ Syntax",
            "Async/Await",
            "Functional Programming",
            "DOM Manipulation",
          ],
        },
        {
          name: "Redux Toolkit",
          level: 80,
          experience: "2+ Years",
          description:
            "State management for complex applications with predictable state updates.",
          projects: 8,
          logo: "/images/redux.svg",
          certifications: [],
          keyFeatures: [
            "Global State",
            "RTK Query",
            "Middleware",
            "DevTools Integration",
          ],
        },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: FaNodeJs,
      experience: "2+ Years",
      description:
        "Building robust server-side applications and APIs with modern backend technologies.",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          level: 75,
          experience: "2+ Years",
          description:
            "Server-side JavaScript runtime for building scalable network applications.",
          projects: 8,
          logo: "/images/skills/node.svg",
          certifications: [],
          keyFeatures: [
            "Express.js",
            "API Development",
            "Middleware",
            "Authentication",
          ],
        },
        {
          name: "MongoDB",
          level: 70,
          experience: "1+ Years",
          description:
            "NoSQL database for flexible, document-based data storage and retrieval.",
          projects: 6,
          logo: "/images/skills/mongoDB.webp",
          certifications: [],
          keyFeatures: [
            "Document Database",
            "Aggregation",
            "Indexing",
            "Schema Design",
          ],
        },
        {
          name: "Express.js",
          level: 75,
          experience: "2+ Years",
          description:
            "Fast, unopinionated web framework for Node.js applications and APIs.",
          projects: 8,
          logo: "/images/express.svg",
          certifications: [],
          keyFeatures: ["REST APIs", "Middleware", "Routing", "Error Handling"],
        },
      ],
    },
    {
      id: "tools",
      title: "Development Tools",
      icon: FaTools,
      experience: "3+ Years",
      description:
        "Proficient with modern development tools and workflows for efficient coding.",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Git & GitHub",
          level: 85,
          experience: "3+ Years",
          description:
            "Version control, collaboration, and project management with Git workflows.",
          projects: 25,
          logo: "/images/skills/git.avif",
          certifications: [],
          keyFeatures: [
            "Version Control",
            "Branching",
            "Collaboration",
            "CI/CD",
          ],
        },
        {
          name: "VS Code",
          level: 95,
          experience: "3+ Years",
          description:
            "Primary code editor with extensions and customizations for productivity.",
          projects: 25,
          logo: "/images/skills/vs_code.webp",
          certifications: [],
          keyFeatures: [
            "Extensions",
            "Debugging",
            "IntelliSense",
            "Integrated Terminal",
          ],
        },
        {
          name: "NPM/Yarn",
          level: 80,
          experience: "3+ Years",
          description:
            "Package management and dependency handling for JavaScript projects.",
          projects: 25,
          logo: "/images/skills/npm.webp",
          certifications: [],
          keyFeatures: [
            "Package Management",
            "Scripts",
            "Dependencies",
            "Publishing",
          ],
        },
      ],
    },
  ],

  achievements: [
    {
      title: "Projects Completed",
      count: "20+",
      icon: IoRocketOutline,
      description: "Successfully delivered web applications",
    },
    {
      title: "Technologies Mastered",
      count: "15+",
      icon: IoCodeSlash,
      description: "Frontend and backend technologies",
    },
    {
      title: "Years Experience",
      count: "3+",
      icon: IoTrendingUpOutline,
      description: "Professional development experience",
    },
    {
      title: "Client Satisfaction",
      count: "100%",
      icon: IoStarOutline,
      description: "Positive feedback and recommendations",
    },
  ],
};

const SkillsDetailPage = () => {
  const getSkillLevelColor = (level) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-slate-500";
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <>
      <div
        id="skills"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
      >
        <section className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            <PageHeader
              title="Muhammad Asad's Skills"
              subtitle="Technical expertise and comprehensive technology stack"
              icon={<IoCodeSlash />}
              experienceYears="15+ Technologies"
              backUrl="/"
            />

            {/* Achievements Overview */}
            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {skillsData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-lightBorder bg-lightbg p-4 text-center transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                >
                  <div className="mb-2 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover">
                      <achievement.icon className="text-lg text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-SkyBlue">
                    {achievement.count}
                  </div>
                  <div className="text-sm font-semibold text-lightPrimarytext dark:text-white">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Categories */}
            <div className="space-y-12">
              {skillsData.categories.map((category, categoryIndex) => (
                <div key={category.id} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
                    >
                      <category.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                        {category.description}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold ${category.color} text-white`}
                        >
                          {category.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-xl hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                      >
                        {/* Skill Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg border-2 border-lightBorder p-1 dark:border-darkPrimaryGray/30">
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                width={32}
                                height={32}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lightPrimarytext dark:text-white">
                                {skill.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                {/* <span
                                  className={`rounded-full bg-gradient-to-r px-2 py-1 text-xs font-semibold ${getSkillLevelColor(skill.level)} text-white`}
                                >
                                  {getSkillLevelText(skill.level)}
                                </span> */}
                                <span className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                                  {skill.experience}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Skill Level Bar */}
                        {/* <div className="mb-4">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-lightPrimarytext dark:text-white">
                              Proficiency
                            </span>
                            <span className="text-sm font-bold text-SkyBlue">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-lightBorder dark:bg-darkPrimaryGray/30">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div> */}

                        {/* Description */}
                        <p className="mb-4 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                          {skill.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-4">
                          <h4 className="mb-2 flex items-center gap-1 text-sm font-semibold text-lightPrimarytext dark:text-white">
                            <IoCheckmarkCircle className="text-SkyBlue" />
                            Key Features
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {skill.keyFeatures.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="rounded-md border border-lightBorder bg-white px-2 py-1 text-xs font-medium text-lightPrimarytext dark:border-darkPrimaryGray/30 dark:bg-discordDark dark:text-white"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stats */}
                        {/* <div className="flex items-center justify-between border-t border-lightBorder pt-4 dark:border-darkPrimaryGray/30">
                          <div className="text-center">
                            <div className="text-lg font-bold text-SkyBlue">
                              {skill.projects}
                            </div>
                            <div className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                              Projects
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-SkyBlue">
                              {skill.certifications.length}
                            </div>
                            <div className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                              Certificates
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-SkyBlue">
                              {skill.level}%
                            </div>
                            <div className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                              Mastery
                            </div>
                          </div>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 p-8 text-center dark:border-darkHover/20 dark:from-SkyBlue/10 dark:to-darkHover/10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover">
                <IoCodeSlash className="text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-lightPrimarytext dark:text-white">
                Let&apos;s Build Something Amazing Together!
              </h3>
              <p className="mb-6 text-lightSecondarytext dark:text-darkPrimaryGray">
                With expertise across the full development stack, I&apos;m ready
                to bring your ideas to life with modern, scalable solutions.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-SkyBlue to-lightHover px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-SkyBlue/30 dark:to-darkHover"
                >
                  <span>Start a Project</span>
                  <IoRocketOutline className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-SkyBlue px-6 py-3 font-semibold text-SkyBlue transition-all duration-300 hover:bg-SkyBlue hover:text-white"
                >
                  <FaCertificate />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SkillsDetailPage;
