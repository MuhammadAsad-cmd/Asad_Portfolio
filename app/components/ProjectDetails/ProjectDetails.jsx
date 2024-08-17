"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const ProjectDetails = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  const projectsData = [
    {
      title: "Kanban Board Project",
      date: "May 2024 - May 2024",
      shortDescription:
        "A Kanban Board, designed to streamline task management and boost productivity. This tool features a user-friendly interface that allows users to seamlessly manage their tasks through various stages, ensuring efficient workflow and clear visualization",
      longDescription: `of progress.`,
      keyFeatures: [
        "Projects Section: Add and manage multiple projects with ease.",
        "Backlog: Keep track of tasks that are yet to be started.",
        "To-Do: Organize tasks that are ready to be tackled.",
        "In Progress: Monitor tasks currently being worked on.",
        "Complete: Track tasks that have been successfully finished.",
      ],
      technologies:
        "This Kanban Board is built with modern web technologies including React.js, Next.js, JavaScript, Redux Toolkit, and Tailwind CSS, ensuring a responsive and dynamic user experience.",
      conclusion:
        "Check out the project to see how it can enhance your workflow and task management!",
      Link: "https://projectkanban.vercel.app/",
      image: "/images/kanban.jfif",
    },
    {
      title: "Medical Athletic",
      Link: "https://medical-athletics-template.vercel.app/",
      image: "/images/medical.jfif",
      techUsed: "Next.js, Tailwind Css, Redux Toolkit",
    },
    {
      title: "E-Commerce Minimog Template",
      Link: "https://next-js-template1-nbt.vercel.app/",
      image: "/images/e-commerce.jfif",
      techUsed: "Next.js, Tailwind Css, Redux Toolkit",
    },
    {
      title: "Github Profile Viewer",
      Link: "https://github-profile-viewer-alpha.vercel.app/",
      image: "/images/github.png",
      techUsed: "Next.js, Tailwind Css, Redux Toolkit, Rest Api",
    },
    {
      title: "ClickUp Templae",
      Link: "https://clickup-template-xi.vercel.app/",
      image: "/images/clickup.jfif",
      techUsed: "Next.js, Tailwind Css",
    },
    {
      title: "Dental Health Frontend",
      Link: "https://ui-fry-green.vercel.app/",
      image: "/images/Dental.jfif",
      techUsed: "Next.js, Tailwind Css",
    },
    {
      title: "DashStack-Dashboard",
      Link: "https://dash-stack-dashboard.vercel.app/",
      image: "/images/dashboard.jfif",
      techUsed: "Next.js, Tailwind Css, Redux Toolkit",
    },
    {
      title: "Random Colors Generator",
      Link: "https://generat-random-colors.vercel.app/",
      image: "/images/random.png",
      techUsed: "React.js, Tailwind Css",
    },
  ];
  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <FaArrowLeft />
              </Link>
              <p className="text-xl font-semibold">Projects</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
                <AiOutlinePlus className="text-2xl" />
              </div>
            </div>
          </div>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`mt-3 pb-4 ${
                index < 7 ? "border-b border-darkGray" : ""
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
    </>
  );
};

export default ProjectDetails;
