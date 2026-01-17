import PageHeader from "@/app/components/PageHeader";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Skills & Expertise | M. Asad - MERN Stack Developer | Technical Skills",
  description:
    "Comprehensive technical skills and expertise of Muhammad Asad - MERN Stack Developer. Proficient in React.js, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, Redux Toolkit, and 15+ modern web technologies. 3+ years of professional experience. Based in Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Technical Skills",
    "MERN Stack Skills",
    "React.js Skills",
    "Next.js Skills",
    "Node.js Skills",
    "MongoDB Skills",
    "TypeScript Skills",
    "Frontend Development Skills",
    "Backend Development Skills",
    "Full Stack Skills",
    "Web Development Skills",
    "JavaScript Skills",
    "Tailwind CSS Skills",
    "Redux Toolkit Skills",
    "Express.js Skills",
    "Git Skills",
    "VS Code Skills",
    "Muhammad Asad Skills",
    "Lahore Web Developer Skills",
    "Pakistan Developer Skills",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/details/skills`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Skills & Expertise | Muhammad Asad - MERN Stack Developer",
    description:
      "Explore the comprehensive technical skills of Muhammad Asad. Expert in React.js, Next.js, Node.js, MongoDB, TypeScript, and 15+ modern web technologies with 3+ years of professional experience.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/skills`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`,
        width: 1200,
        height: 630,
        alt: "Technical skills and expertise of Muhammad Asad - MERN Stack Developer",
        type: "image/png",
      },
    ],
    type: "profile",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Expertise | M. Asad - MERN Stack Developer",
    description:
      "Comprehensive technical skills including React.js, Next.js, Node.js, MongoDB, TypeScript, and 15+ modern web technologies. 3+ years of professional experience.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`],
  },
};
import {
  IoCodeSlash,
  IoCheckmarkCircle,
  IoTrendingUpOutline,
  IoStarOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { FaReact, FaNodeJs, FaTools, FaCertificate, FaGithub } from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiGit,
  SiNpm
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
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
          icon: SiNodedotjs,
          iconColor: "text-[#339933]",
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
          icon: SiMongodb,
          iconColor: "text-[#47A248]",
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
          logo: "/images/express.png",
          icon: SiExpress,
          iconColor: "text-gray-900 dark:text-white",
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
          icon: SiGit,
          iconColor: "text-[#F05032]",
          // iconSecondary: FaGithub,
          iconSecondaryColor: "text-gray-900 dark:text-white",
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
          icon: VscVscode,
          iconColor: "text-[#007ACC]",
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

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

  // Skills ItemList Schema
  const allSkills = skillsData.categories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill.name,
      category: category.title,
      description: skill.description,
      experience: skill.experience,
      level: skill.level,
    }))
  );

  const skillsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical Skills of Muhammad Asad",
    description:
      "Comprehensive list of technical skills and expertise including frontend development, backend development, and development tools.",
    itemListElement: allSkills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: skill.name,
        description: skill.description,
        category: skill.category,
      },
    })),
  };

  // Person Schema with Skills
  const personSkillsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "MERN Stack Developer",
    url: baseUrl,
    knowsAbout: allSkills.map((skill) => skill.name),
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Skills",
        item: `${baseUrl}/details/skills`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="skills-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsListSchema),
        }}
      />
      <script
        id="person-skills-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSkillsSchema),
        }}
      />
      <script
        id="skills-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main
        id="skills"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
        role="main"
        aria-labelledby="skills-main-heading"
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
            <section aria-labelledby="achievements-heading" className="mb-8">
              <h2 id="achievements-heading" className="sr-only">
                Skills Achievements and Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" role="list">
                {skillsData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-lightBorder bg-lightbg p-4 text-center transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                    role="listitem"
                  >
                  <div className="mb-2 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover">
                      <achievement.icon className="text-lg text-white" aria-hidden="true" />
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
            </section>

            {/* Skills Categories */}
            <section aria-labelledby="skills-categories-heading" className="space-y-12">
              <h2 id="skills-categories-heading" className="sr-only">
                Technical Skills by Category
              </h2>
              {skillsData.categories.map((category, categoryIndex) => (
                <section key={category.id} className="space-y-6" aria-labelledby={`category-${category.id}-heading`}>
                  {/* Category Header */}
                  <header className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
                      aria-hidden="true"
                    >
                      <category.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 id={`category-${category.id}-heading`} className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                        {category.description}
                      </p>
                    </div>
                  </header>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
                    {category.skills.map((skill, skillIndex) => (
                      <article
                        key={skillIndex}
                        className="group rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-xl hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                        role="listitem"
                        itemScope
                        itemType="https://schema.org/Thing"
                      >
                        {/* Skill Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-lightBorder dark:border-darkPrimaryGray/30">
                              {skill.icon ? (
                                <>
                                  {skill.iconSecondary ? (
                                    <div className="flex items-center gap-0.5">
                                      <skill.icon className={`text-xl ${skill.iconColor || 'text-gray-900 dark:text-white'}`} />
                                      <skill.iconSecondary className={`text-xl ${skill.iconSecondaryColor || 'text-gray-900 dark:text-white'}`} />
                                    </div>
                                  ) : (
                                    <skill.icon className={`text-xl ${skill.iconColor || 'text-gray-900 dark:text-white'}`} />
                                  )}
                                </>
                              ) : (
                                <Image
                                  src={skill.logo || "/placeholder.svg"}
                                  alt={skill.name}
                                  width={32}
                                  height={32}
                                  className="h-full w-full object-contain p-1"
                                />
                              )}
                            </div>
                            <div>
                              <h4 
                                className="font-bold text-lightPrimarytext dark:text-white"
                                itemProp="name"
                              >
                                {skill.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                {/* <span
                                  className={`rounded-full bg-gradient-to-r px-2 py-1 text-xs font-semibold ${getSkillLevelColor(skill.level)} text-white`}
                                >
                                  {getSkillLevelText(skill.level)}
                                </span> */}
                                {/* <span className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                                  {skill.experience}
                                </span> */}
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
                          <h5 className="mb-2 flex items-center gap-1 text-sm font-semibold text-lightPrimarytext dark:text-white">
                            <IoCheckmarkCircle className="text-SkyBlue" aria-hidden="true" />
                            Key Features
                          </h5>
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
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </section>

            {/* Call to Action */}
            <aside 
              className="mt-12 rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 p-8 text-center dark:border-darkHover/20 dark:from-SkyBlue/10 dark:to-darkHover/10"
              aria-label="Contact and project links"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover">
                <IoCodeSlash className="text-2xl text-white" aria-hidden="true" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-lightPrimarytext dark:text-white">
                Let&apos;s Build Something Amazing Together!
              </h2>
              <p className="mb-6 text-lightSecondarytext dark:text-darkPrimaryGray">
                With expertise across the full development stack, I&apos;m ready
                to bring your ideas to life with modern, scalable solutions.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-SkyBlue to-lightHover px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-SkyBlue/30 dark:to-darkHover"
                  aria-label="Start a project with Muhammad Asad"
                >
                  <span>Start a Project</span>
                  <IoRocketOutline className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-SkyBlue px-6 py-3 font-semibold text-SkyBlue transition-all duration-300 hover:bg-SkyBlue hover:text-white"
                  aria-label="Contact Muhammad Asad"
                >
                  <FaCertificate aria-hidden="true" />
                  <span>Contact Me</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkillsDetailPage;
