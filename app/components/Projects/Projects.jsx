"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";

const Projects = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  const projectsData = [
    {
      title: "KAF – Premium Dried Fruits, Nuts, Spices & Much More",
      date: "May 2024 - May 2024",
      shortDescription:
        "The KAF website offers premium dried fruits, nuts, spices, and related products. Built using Node.js, Next.js, and Redux Toolkit, it provides a seamless shopping experience with fast navigation and dynamic content updates.",
      longDescription: ` The site integrates modern e-commerce features like product filtering, a secure checkout process, and responsive design. With a focus on healthy and high-quality foods, it caters to customers looking for nutritious snacks and cooking essentials. KAF’s design is user-friendly a`,
      keyFeatures: [
        "Premium range of products (dried fruits, nuts, spices, etc.).",
        "User-friendly e-commerce platform.",
        "Product filtering and search functionality.",
        "Secure checkout process.",
        "Responsive design for multiple devices.",
        "Fast and dynamic content loading.",
        "Integration with modern technologies (Node.js, Next.js, Redux Toolkit).",
        "Smooth product management (adding to cart, category-based filtering).",
        "Focus on health-conscious consumers with high-quality food products.",
      ],
      technologies:
        "Kaf e-commerce is built with modern web technologies including Node.js, Express, Mongodb React.js, Next.js, JavaScript, Redux Toolkit, and Tailwind CSS, ensuring a responsive and dynamic user experience.",
      conclusion:
        "Check out the project to see how it can enhance your workflow and task management!",
      Link: "https://www.kaf.ae/",
      image: "/images/4c9e4120-12d1-4f01-bb29-bc3951578a15.png",
    },
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
    },
    {
      title: "E-Commerce Minimog Template",
      Link: "https://next-js-template1-nbt.vercel.app/",
      image: "/images/e-commerce.jfif",
    },
    {
      title: "Github Profile Viewer",
      Link: "https://github-profile-viewer-alpha.vercel.app/",
      image: "/images/github.png",
    },
    {
      title: "ClickUp Templae",
      Link: "https://clickup-template-xi.vercel.app/",
      image: "/images/clickup.jfif",
    },
    {
      title: "Dental Health Frontend",
      Link: "https://ui-fry-green.vercel.app/",
      image: "/images/Dental.jfif",
    },
    {
      title: "DashStack-Dashboard",
      Link: "https://dash-stack-dashboard.vercel.app/",
      image: "/images/dashboard.jfif",
    },
    {
      title: "ClickUp Templae",
      Link: "https://clickup-template-xi.vercel.app/",
      image: "/images/clickup.jfif",
    },
  ];

  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Projects</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
                <AiOutlinePlus className="text-2xl" />
              </div>
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
                <svg
                  role="img"
                  aria-hidden="false"
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  data-test-icon="edit-medium"
                  fill="#FFFFFFE6"
                >
                  <path d="M21.7,2.3c-1.1-1.1-2.9-1.1-4,0L15.1,4.9L19.1,9l2.6-2.6C22.8,5.1,22.8,3.4,21.7,2.3z M14.1,5.9L3,17v4h4L18.1,9.9L14.1,5.9z"></path>
                </svg>
              </div>
            </div>
          </div>
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className={`mt-3 pb-4 ${
                index < 3 ? "border-b border-darkGray" : ""
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
