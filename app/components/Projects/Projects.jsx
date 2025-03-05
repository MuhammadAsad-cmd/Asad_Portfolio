"use client";
import { projectsData } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import ProjectModal from "../ProjectModal/ProjectModal";

const Projects = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div id="projects" className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Projects</p>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Total Projects ( {projectsData.length} )
              </p>
            </div>
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className={`mt-3 pb-4 ${index < 3 ? "border-b dark:border-darkSecondaryGray" : ""}`}
              >
                <Link target="_blank" href={project.Link}>
                  <h2 className="cursor-pointer text-base font-semibold">
                    {project.title}
                  </h2>
                </Link>
                <p className="cursor-pointer text-sm">{project.date}</p>
                <div className="text-[13px]">
                  {project.shortDescription && (
                    <div className="mt-2">
                      <p className="">
                        {project.shortDescription}
                        <span
                          onClick={() => toggleReadMore(index)}
                          className="cursor-pointer text-darkPrimaryGray hover:text-SkyBlue"
                        >
                          {expandedProjectIndex === index ? "" : "...see more"}
                        </span>
                      </p>
                    </div>
                  )}
                  {expandedProjectIndex === index && (
                    <div>
                      {project.longDescription && (
                        <p>{project.longDescription}</p>
                      )}
                      {project.keyFeatures && (
                        <>
                          <p className="mt-4">Key Features:</p>
                          <ul className="mt-1 list-inside list-disc space-y-1">
                            {project.keyFeatures.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {project.technologies && (
                        <p className="mt-2">{project.technologies}</p>
                      )}
                      {project.conclusion && <p>{project.conclusion}</p>}
                    </div>
                  )}
                </div>
                <div
                  // target="_blank"
                  // href={project.Link}
                  className="mt-3 flex cursor-pointer items-center gap-3"
                  onClick={() => openModal(project)}
                >
                  <div className="rounded-lg border dark:border-darkSecondaryGray">
                    <Image
                      width={106}
                      height={56}
                      src={project.image}
                      alt="kanban"
                      className="h-14 rounded-lg object-cover"
                      priority={false}
                    />
                  </div>
                  <p className="text-sm font-semibold">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/details/projects"
            className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark"
          >
            <p className="text-base font-semibold">
              Show all ( {projectsData.length} ) projects
            </p>
            <IoMdArrowRoundForward className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
