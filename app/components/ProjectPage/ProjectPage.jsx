"use client";
import { ProjectsData } from "@/app/Data";
import { useTheme } from "@/app/ThemeContext";
import initAOS from "@/app/Utils/Aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutBold } from "react-icons/pi";
const ProjectPage = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <div
        id="Projects"
        className={`${
          darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"
        } overflow-hidden`}
      >
        <div className="container mx-auto mb-10 max-w-[1200px]">
          <div className="Source mb-12 flex flex-col items-center justify-center px-5 pt-10 text-center">
            <h2
              className={`text-[40px] ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-semibold uppercase  tracking-wider`}
            >
              PROJECTS
            </h2>
            <div className="mt-5 h-[5px] w-20 rounded-md bg-[#7843E9]"></div>
          </div>

          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2 xl:gap-14"
            >
              <div
                className={`px-5 lg:px-9 ${index % 2 === 0 ? "" : "order-last"}`}
              >
                <Image
                  width={300}
                  height={300}
                  unoptimized
                  src={project.mainImage}
                  alt="main image"
                  className="HoverImg h-full w-full cursor-pointer rounded-xl"
                />
              </div>
              <div className="Open-Sans flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-xl ${
                      darkMode ? "text-[#fff]" : "text-[#374151]"
                    } font-bold uppercase`}
                  >
                    {project.title}
                  </h3>
                  {project.logoImage && (
                    <Image
                      width={30}
                      height={30}
                      unoptimized
                      src={project.logoImage}
                      alt=""
                      className=""
                    />
                  )}
                </div>
                <p
                  className={`mt-3 px-5 text-base leading-7 ${
                    darkMode ? "text-[#979797]" : "text-[#4B5563]"
                  } xl:px-10`}
                >
                  {project.description}
                </p>
                <div
                  className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${
                    darkMode ? "text-[#fff]" : "text-[#374151]"
                  } font-bold`}
                >
                  {project.technologies.map((tech, i) => (
                    <p key={i}>{tech}</p>
                  ))}
                </div>
                <div
                  className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${
                    darkMode ? "text-[#fff]" : "text-[#374151]"
                  } font-medium leading-6`}
                >
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <p>Code </p>
                    <FaGithub className="text-2xl " />
                  </Link>
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="group flex items-center gap-2"
                  >
                    <p>Live Demo </p>
                    <PiArrowSquareOutBold className="text-2xl duration-300 ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
