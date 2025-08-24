"use client";
import { projectsData } from "@/app/Data/ProjectsData";
import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoRocketOutline, IoCodeSlash, IoGlobeOutline } from "react-icons/io5";
import PageHeader from "../PageHeader";
import CollapsibleDescription from "../Projects/CollapsibleDescription";

const ProjectDetails = () => {
  // const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  // const [selectedProject, setSelectedProject] = useState(null);

  // const toggleReadMore = (index) => {
  //   setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  // };

  // const openModal = (project) => {
  //   setSelectedProject(project);
  // };

  // const closeModal = () => {
  //   setSelectedProject(null);
  // };

  return (
    <>
      <div
        id="projects"
        className="animated-border my-6 overflow-hidden md:rounded-xl"
      >
        <section className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            {/* Header */}
            <PageHeader
              title="Muhammad Asad's Projects"
              subtitle="Featured work and development portfolio"
              icon={<IoRocketOutline />}
              experienceYears={`${projectsData.length}+ Projects`}
              backUrl="/"
            />
            {/* Projects Grid */}
            <div className="space-y-12">
              {projectsData.map((project, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-lightBorder bg-lightbg p-6 transition-all duration-500 hover:border-SkyBlue hover:shadow-2xl hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                  >
                    <div
                      className={`flex flex-col items-center gap-8 lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""}`}
                    >
                      {/* Project Image */}
                      <div className="relative w-full lg:w-1/2">
                        <div className="relative h-64 overflow-hidden rounded-xl border-2 border-lightBorder transition-all duration-500 group-hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover:border-darkHover sm:h-80">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                          {/* Live Badge */}
                          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                            Live
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="w-full space-y-4 lg:w-1/2">
                        {/* Project Number */}
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover dark:to-darkHover">
                            <span className="text-sm font-bold text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <div className="h-2 w-2 rounded-full bg-SkyBlue"></div>
                            <div className="h-2 w-2 rounded-full bg-lightHover dark:bg-darkHover"></div>
                            <div className="h-2 w-2 rounded-full bg-SkyBlue/50"></div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold leading-tight text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                          {project.title}
                        </h3>

                        {/* Links */}
                        <div className="flex flex-wrap items-center gap-4">
                          <Link
                            href={project.Link}
                            target="_blank"
                            className="group/link flex items-center gap-2 rounded-lg bg-gradient-to-r from-SkyBlue to-lightHover px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-SkyBlue/20 dark:to-darkHover"
                          >
                            <IoGlobeOutline className="text-sm" />
                            <span className="text-sm">Live Demo</span>
                            <FiExternalLink className="text-sm transition-transform duration-300 group-hover/link:translate-x-0.5" />
                          </Link>

                          {project.codeUrl && (
                            <Link
                              href={project.codeUrl}
                              target="_blank"
                              className="group/code flex items-center gap-2 rounded-lg border border-lightBorder px-4 py-2 text-lightPrimarytext transition-all duration-300 hover:border-SkyBlue hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                            >
                              <FiGithub className="text-sm" />
                              <span className="text-sm font-medium">
                                View Code
                              </span>
                              <IoMdArrowRoundForward className="text-sm transition-transform duration-300 group-hover/code:translate-x-0.5" />
                            </Link>
                          )}

                          {/* {project.caseStudy && (
                            <Link
                              href="#"
                              className="group/case flex items-center gap-2 text-SkyBlue transition-colors duration-300 hover:text-lightHover dark:hover:text-darkHover"
                            >
                              <IoCodeSlash className="text-sm" />
                              <span className="text-sm font-medium">
                                Case Study
                              </span>
                              <IoMdArrowRoundForward className="text-sm transition-transform duration-300 group-hover/case:translate-x-0.5" />
                            </Link>
                          )} */}
                        </div>

                        {/* Description */}
                        <CollapsibleDescription
                          description={project.description}
                        />

                        {/* Tech Stack */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <IoCodeSlash className="text-sm text-SkyBlue" />
                            <span className="text-sm font-semibold text-lightPrimarytext dark:text-white">
                              Tech Stack:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.stackUsed.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="cursor-default rounded-lg border border-lightBorder bg-white px-3 py-1 text-sm font-medium text-lightPrimarytext transition-all duration-300 hover:border-SkyBlue hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-discordDark dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Modal Component */}
      {/* {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )} */}
    </>
  );
};

export default ProjectDetails;
