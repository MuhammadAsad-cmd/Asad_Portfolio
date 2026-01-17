"use client";
import { projectsData } from "@/app/Data/projects";
import { projectCategories } from "@/app/Data/projectCategories";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "../ProjectModal/ProjectModal";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoRocketOutline, IoCodeSlash, IoGlobeOutline } from "react-icons/io5";
import PageHeader from "../PageHeader";
import CollapsibleDescription from "../Projects/CollapsibleDescription";
import ProjectTabs from "../Projects/ProjectTabs";

const ProjectDetails = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projectsData;
    }
    const category = projectCategories.find((cat) => cat.id === activeCategory);
    return projectsData.filter(
      (project) => project.category === category?.filterValue
    );
  }, [activeCategory]);

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    projectCategories.forEach((category) => {
      if (category.id !== "all") {
        counts[category.id] = projectsData.filter(
          (project) => project.category === category.filterValue
        ).length;
      }
    });
    return counts;
  }, []);


  return (
    <>
      <main
        id="projects"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
        role="main"
        aria-labelledby="projects-main-heading"
      >
        <section className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            <PageHeader
              title="Muhammad Asad's Projects"
              subtitle={`Featured work and development portfolio - ${projectsData.length} projects`}
              icon={<IoRocketOutline />}
              experienceYears={`${filteredProjects.length} Project${filteredProjects.length !== 1 ? 's' : ''}`}
              backUrl="/"
            />

            {/* Project Tabs */}
            <ProjectTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              projectCounts={projectCounts}
            />

              {/* Projects Grid */}
              <section aria-labelledby="projects-list-heading" className="mb-8">
                <h2 id="projects-list-heading" className="sr-only">
                  Web Development Projects Portfolio
                </h2>
                <motion.div layout className="space-y-16 md:space-y-24" role="list">
                 <AnimatePresence mode="popLayout">
                   {filteredProjects.map((project, index) => {
                     const isEven = index % 2 === 1;
                     return (
                       <article
                         key={project.id}
                         className="group relative"
                         role="listitem"
                         itemScope
                         itemType="https://schema.org/CreativeWork"
                       >
                      <div
                        className={`flex flex-col gap-8 lg:gap-12 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-start`}
                      >
                        {/* Project Image */}
                        <div className="w-full lg:w-7/12">
                          <div className="relative overflow-hidden rounded-2xl bg-lightbg shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-SkyBlue/10 dark:bg-darkSecondaryGray">
                             {/* Browser Toolbar Decoration */}
                             <div className="flex h-8 items-center gap-1.5 border-b border-lightBorder bg-white px-4 dark:border-white/5 dark:bg-[#1e2124]">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></div>
                             </div>
                            
                            <div className="relative aspect-video cursor-pointer overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={`${project.title} - ${project.stackUsed?.join(', ') || 'Web Development Project'} by Muhammad Asad, MERN Stack Developer`}
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 60vw"
                                quality={90}
                                itemProp="image"
                              />
                               {/* Overlay on hover */}
                               <Link 
                                 href={project.Link || "#"} 
                                 target="_blank" 
                                 className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                 aria-label={`View live demo of ${project.title}`}
                               />
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="flex w-full flex-col justify-center lg:w-5/12">
                          {/* Project Number & Decoration */}
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-5xl font-black text-lightBorder/50 dark:text-white/5">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="h-px flex-1 bg-lightBorder dark:bg-darkSecondaryGray"></div>
                          </div>

                          <h3 
                            className="mb-4 text-2xl font-bold text-lightPrimarytext dark:text-white md:text-3xl"
                            itemProp="name"
                          >
                            {project?.title}
                          </h3>

                          <div className="mb-6" itemProp="description">
                             <CollapsibleDescription
                                description={project.description}
                              />
                          </div>

                          {/* Tech Stack */}
                          <div 
                            className="mb-8 flex flex-wrap gap-2"
                            itemProp="keywords"
                            aria-label="Technologies used in this project"
                          >
                             {project.stackUsed.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="rounded-md bg-lightbg px-3 py-1 text-xs font-medium text-lightSecondarytext dark:bg-darkSecondaryGray dark:text-darkPrimaryGray"
                                >
                                  {tech}
                                </span>
                             ))}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-4">
                            <Link
                              href={project.Link || "#"}
                              target="_blank"
                              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-SkyBlue px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-SkyBlue/30 active:translate-y-0"
                              aria-label={`View live demo of ${project.title}`}
                              itemProp="url"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                Live Demo
                                <FiExternalLink aria-hidden="true" />
                              </span>
                            </Link>

                            {project.codeUrl && (
                              <Link
                                href={project.codeUrl}
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full border border-lightBorder px-6 py-2.5 text-sm font-semibold text-lightPrimarytext transition-colors hover:border-SkyBlue hover:text-SkyBlue dark:border-darkSecondaryGray dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                                aria-label={`View source code of ${project.title} on GitHub`}
                              >
                                <FiGithub className="text-lg" aria-hidden="true" />
                                Code
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectDetails;
