"use client";
import { useTheme } from "@/app/ThemeContext";
import initAOS from "@/app/Utils/Aos";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutBold } from "react-icons/pi";

const Projects = () => {
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
        <div className="container mx-auto max-w-[1200px]">
          <div className="Source mb-[100px] flex flex-col items-center justify-center px-5 pt-16 text-center md:pt-20 lg:pt-[120px]">
            <h2
              className={`text-[40px] ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-semibold uppercase  tracking-wider`}
            >
              PROJECTS
            </h2>
            <div className="mt-5 h-[5px] w-[30px] rounded-md bg-[#7843E9]"></div>
            <p
              className={`mt-3  max-w-[800px] text-xl ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} font-medium leading-8`}
            >
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>

          <div className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2  xl:gap-14">
            <div
              className="px-5 lg:px-9"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              <Image
                width={300}
                height={300}
                unoptimized
                src="/images/Medicalathletic-Medical-Athletic (14).png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
            <div className="Open-Sans flex flex-col items-center justify-center text-center">
              <div data-aos="zoom-out" className="flex items-center gap-2">
                <h3
                  className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
                >
                  Medical Athletic
                </h3>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/Medical-Athletic logo.webp"
                  alt=""
                  className=""
                />
              </div>
              <p
                data-aos="fade-up"
                className={`mt-3 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} px-5 text-base leading-7 xl:px-10`}
              >
                Developed a sleek and responsive website with Next.js, Tailwind
                CSS, and Redux Toolkit for efficient data management and
                visualization.Seamlessly integrated state management for
                enhanced data handling, resulting in an intuitive user
                experience
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                >
                  Redux Toolkit
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                  target="_blank"
                  href="https://github.com/MuhammadAsad-cmd/DashStack-Dashboard"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="450"
                  target="_blank"
                  href="https://dash-stack-dashboard.vercel.app/"
                  className="group flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2  xl:gap-14">
            <div
              data-aos="zoom-out"
              className="Open-Sans flex flex-col items-center justify-center text-center"
            >
              <h3
                className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
              >
                DashStack Dashboard
              </h3>
              <p
                data-aos="fade-up"
                className={`mt-3 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} px-5 text-base leading-7 xl:px-10`}
              >
                Developed a sleek and responsive dashboard with Next.js,
                Tailwind CSS, and Redux Toolkit for efficient data management
                and visualization.Seamlessly integrated state management for
                enhanced data handling, resulting in an intuitive user
                experience
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                >
                  Redux Toolkit
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                  target="_blank"
                  href="https://github.com/waleedahmad-nbt/Medical-Athletics--Template"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="450"
                  target="_blank"
                  href="https://medical-athletics-template.vercel.app/"
                  className="group flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl duration-300 ease-in-out" />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="px-5 lg:px-9"
            >
              <Image
                width={300}
                height={300}
                unoptimized
                src="/images/dash-stack-frontend-vercel-app.png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
          </div>
          <div className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2  xl:gap-14">
            <div className="Open-Sans flex flex-col items-center justify-center text-center">
              <div data-aos="zoom-out" className="flex items-center gap-2">
                <h3
                  className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
                >
                  Supergear E-Commerce
                </h3>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/next-js-template1-nbt-vercel-app-removebg-preview.png"
                  alt=""
                  className=""
                />
              </div>
              <p
                data-aos="fade-up"
                className={`mt-3 px-5 text-base leading-7 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} xl:px-10`}
              >
                Crafted SuperGear, a sleek e-commerce interface using Next.js,
                Tailwind CSS, and Redux Toolkit. Implemented seamless frontend
                functionalities such as &apos;Add to Cart&apos; and
                &apos;Favorites&apos; with Redux Toolkit for an enhanced user
                experience
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                >
                  Redux Toolkit
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="250"
                  href="https://github.com/MuhammadAsad-cmd/NextJS-NBT-Template1"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="450"
                  href="https://next-js-template1-nbt.vercel.app/"
                  className="group flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl duration-300 ease-in-out" />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="px-5 lg:px-9"
            >
              <Image
                width={300}
                height={300}
                unoptimized
                src="/images/next-js-template1-nbt-vercel-app.png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
          </div>
          <div className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2  xl:gap-14">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="px-5 lg:px-9"
            >
              <Image
                width={300}
                height={300}
                unoptimized
                src="/images/Dental-Health.png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
            <div className="Open-Sans flex flex-col items-center justify-center text-center">
              <div data-aos="zoom-out" className="flex items-center gap-2">
                <h3
                  className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
                >
                  Dental Health
                </h3>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/Iconlogo.svg"
                  className=""
                  alt=""
                />
              </div>

              <p
                data-aos="fade-up"
                className={`mt-3 px-5 text-base leading-7 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} xl:px-10`}
              >
                Developed the Dental Health frontend with Next.js and Tailwind
                CSS, creating a visually appealing and user-friendly interface.
                Leveraged Next.js for efficient routing and Tailwind CSS for
                rapid styling. Resulted in a modern and responsive website,
                enhancing user experience in accessing dental health information
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>

                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="400"
                  href="https://github.com/MuhammadAsad-cmd/Ui-Fry"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="500"
                  href="https://ui-fry-green.vercel.app/"
                  className="group flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-28 grid grid-cols-1 gap-0 gap-y-8 lg:grid-cols-2  xl:gap-14">
            <div className="Open-Sans flex flex-col items-center justify-center text-center">
              <div data-aos="zoom-out" className="flex items-center gap-2">
                <h3
                  className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
                >
                  Logoipsum
                </h3>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/tablogo.svg"
                  className=""
                  alt=""
                />
              </div>
              <p
                data-aos="fade-up"
                className={`mt-3 px-5 text-base leading-7 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} xl:px-10`}
              >
                Developed a sleek and responsive Logoipsum Frontend with
                Next.js, Tailwind CSS, and Redux Toolkit for efficient data
                management and visualization.Seamlessly integrated state
                management for enhanced data handling, resulting in an intuitive
                user experience
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>

                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="400"
                  href="https://github.com/MuhammadAsad-cmd/Logoipsum-Template"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="500"
                  href="https://logoipsum-template.vercel.app/"
                  className="flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl" />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="px-5 lg:px-9"
            >
              <Image
                width={300}
                height={300}
                unoptimized
                src="/images/Logoipsum.png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-0 gap-y-8 pb-28 lg:grid-cols-2  xl:gap-14">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="px-5 lg:px-9"
            >
              <Image
                width={30}
                height={30}
                unoptimized
                src="/images/Bizzy-Front-End.png"
                alt="main image"
                className="HoverImg h-full w-full cursor-pointer rounded-xl"
              />
            </div>
            <div className="Open-Sans flex flex-col items-center justify-center text-center">
              <div data-aos="zoom-out" className="flex items-center gap-2">
                <h3
                  className={`text-xl ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase`}
                >
                  Bizzy
                </h3>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/btaB.png"
                  alt="logo"
                  className="h-8 w-8"
                />
              </div>
              <p
                data-aos="fade-up"
                className={`mt-3 px-5 text-base leading-7 ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} xl:px-10`}
              >
                Developed a sleek and responsive Bizzy Frontend with Next.js,
                Tailwind CSS, and Redux Toolkit for efficient data management
                and visualization.Seamlessly integrated state management for
                enhanced data handling, resulting in an intuitive user
                experience
              </p>
              <div
                className={`my-10 flex flex-wrap items-center justify-center gap-10 text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold`}
              >
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                >
                  Next Js
                </p>

                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="350"
                >
                  Tailwind CSS
                </p>
              </div>
              <div
                className={`my-6 flex items-center justify-center gap-10 font-sans text-base ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-medium leading-6`}
              >
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="400"
                  href="https://github.com/MuhammadAsad-cmd/Bizzy-FrontEnd"
                  className="flex items-center gap-2"
                >
                  <p>Code </p>
                  <FaGithub className="text-2xl " />
                </a>
                <a
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="500"
                  href="https://bizzy-front-end.vercel.app/"
                  className="flex items-center gap-2"
                >
                  <p>Live Demo </p>
                  <PiArrowSquareOutBold className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
