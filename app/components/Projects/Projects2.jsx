"use client";
import { projectsData } from "@/app/Data/projects";
import { projectCategories } from "@/app/Data/projectCategories";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import CollapsibleDescription from "./CollapsibleDescription";
import ProjectTabs from "./ProjectTabs";

const Projects2 = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projectsData;
    }
    const category = projectCategories.find((cat) => cat.id === activeCategory);
    return projectsData.filter(
      (project) => project.category === category?.filterValue,
    );
  }, [activeCategory]);

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    projectCategories.forEach((category) => {
      if (category.id !== "all") {
        counts[category.id] = projectsData.filter(
          (project) => project.category === category.filterValue,
        ).length;
      }
    });
    return counts;
  }, []);

  return (
    <>
      <div
        id="projects"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
      >
        <section className="bg-white dark:bg-discordDark">
          <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
                  <div>
                    <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                      Featured Projects
                    </h1>
                    <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                      Showcasing my technical expertise and problem-solving
                      skills
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/details/projects"
                className="group flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
              >
                View All Projects ({projectsData.length})
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Project Tabs */}
            <ProjectTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              projectCounts={projectCounts}
            />

            {/* Projects Grid */}
            <div layout className="space-y-16 md:space-y-24">
              {filteredProjects.slice(0, 9).map((project, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div key={project.id} className="group relative">
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
                              alt={project.title}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 60vw"
                              quality={90}
                            />
                            {/* Overlay on hover */}
                            <Link
                              href={project.Link || "#"}
                              target="_blank"
                              className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

                        <h3 className="mb-4 text-2xl font-bold text-lightPrimarytext dark:text-white md:text-3xl">
                          {project?.title}
                        </h3>

                        <div className="mb-6">
                          <CollapsibleDescription
                            description={project.description}
                          />
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8 flex flex-wrap gap-2">
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
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Live Demo
                              <FiExternalLink />
                            </span>
                          </Link>

                          {project.codeUrl && (
                            <Link
                              href={project.codeUrl}
                              target="_blank"
                              className="inline-flex items-center gap-2 rounded-full border border-lightBorder px-6 py-2.5 text-sm font-semibold text-lightPrimarytext transition-colors hover:border-SkyBlue hover:text-SkyBlue dark:border-darkSecondaryGray dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                            >
                              <FiGithub className="text-lg" />
                              Code
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Action */}
            <div className="mt-20 flex justify-center border-t border-lightBorder pt-8 dark:border-darkSecondaryGray">
              <Link
                href="/details/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-lightbg px-8 py-3 text-sm font-semibold text-lightPrimarytext transition-all hover:bg-SkyBlue hover:text-white dark:bg-darkSecondaryGray dark:text-white dark:hover:bg-SkyBlue"
              >
                <IoRocketOutline className="text-lg" />
                Explore All {projectsData.length} Projects
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects2;
