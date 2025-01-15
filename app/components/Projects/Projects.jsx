"use client";
import { projectsData } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Projects = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  return (
    <>
      <div className="my-2 bg-raisin-black sm:rounded-lg">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Projects</p>
            </div>
          </div>
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className={`mt-3 pb-4 ${
                index < 3 ? "border-b border-darkGray" : ""
              }`}
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
                        className="cursor-pointer text-[#a4a5a7] hover:text-Sky-Blue"
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
                <div className="rounded-lg border border-darkGray">
                  <Image
                    width={106}
                    height={56}
                    unoptimized
                    src={project.image}
                    alt="kanban"
                    className="h-14 rounded-lg object-cover"
                    priority={false}
                  />
                </div>
                <p className="text-sm font-semibold">{project.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/details/projects"
          className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]"
        >
          <p className="text-base font-semibold">Show all</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Link>
      </div>
    </>
  );
};

export default Projects;
