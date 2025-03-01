"use client";
import { projectsData } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  return (
    <>
      <div className="animated-border my-6 md:rounded-xl">
        <div className=" bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <FaArrowLeft />
                </Link>
                <p className="text-xl font-semibold">Projects</p>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Total Projects ( {projectsData.length} )
              </p>
            </div>

            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`mt-3 pb-4 ${
                  index !== projectsData.length - 1
                    ? "border-b dark:border-darkSecondaryGray"
                    : ""
                }`}
              >
                <h2 className="cursor-pointer text-base font-semibold">
                  {project.title}
                </h2>
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
                <Link
                  target="_blank"
                  href={project.Link}
                  className="mt-3 flex items-center gap-3"
                >
                  <div className="rounded-lg border dark:border-darkSecondaryGray">
                    <Image
                      width={106}
                      height={56}
                      src={project.image}
                      alt="kanban"
                      className="h-14 rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold">{project.title}</p>
                </Link>
                {project.techUsed && (
                  <p className="mt-3 text-sm">
                    {" "}
                    <b>Technologies: </b>
                    {project.techUsed}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
