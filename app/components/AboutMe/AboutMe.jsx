"use client";
import { useTheme } from "@/app/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  const { darkMode } = useTheme();
  const skills = [
    { image: "/images/next.webp", width: 80, height: 45 },
    { name: "React", image: "/images/react.webp", width: 80, height: 45 },
    { image: "/images/tailwind.webp", width: 80, height: 45 },
    {
      name: "Javascript",
      image: "/images/javascript.webp",
      width: 80,
      height: 45,
    },
    { image: "/images/node.png", width: 80, height: 45 },
    { image: "/images/mongoDB.webp", width: 80, height: 45 },
    { image: "/images/redux toolkit.webp", width: 80, height: 45 },
    { image: "/images/github.png", width: 80, height: 45 },
    { image: "/images/Git-logo.svg.png", width: 80, height: 45 },
    { image: "/images/vs_code.webp", width: 80, height: 45 },
    { name: "HTML", image: "/images/html.webp", width: 80, height: 45 },
    { name: "CSS", image: "/images/css.webp", width: 80, height: 45 },
  ];

  return (
    <>
      <div
        id="About"
        className={`${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"}`}
      >
        <div className="container mx-auto max-w-[1200px] py-0 md:py-[60px] lg:py-[110px]">
          <div className="Source mb-[35px] flex flex-col items-center justify-center px-2 pt-16 text-center md:px-5 md:pt-20 lg:pt-[120px]">
            <h2
              className={`text-[40px]  ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold  uppercase text-[#111]`}
            >
              About Me
            </h2>

            <div className="mt-5 h-[5px] w-[30px] rounded-md bg-[#7843E9]"></div>
            <p
              className={`mt-3  max-w-[800px] text-xl font-medium ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} leading-8 `}
            >
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="grid grid-cols-1 gap-0 gap-y-10 lg:grid-cols-2 xl:gap-14">
            <div className="px-5 lg:px-9">
              <h3
                className={`mb-[30px] ${darkMode ? "text-[#fff]" : "text-[#374151]"} text-[28px] font-bold`}
              >
                Get to know me!
              </h3>
              <div
                className={`text-lg ${darkMode ? "text-[#979797]" : "text-[#4B5563] "} leading-7 text-[#666]`}
              >
                <p className="mb-3">
                  I&apos;m a <strong>Frontend Focused Web Developer</strong>{" "}
                  building and managing the Front-end of Websites and Web
                  Applications that leads to the success of the overall product.
                  Check out some of my work in the <strong>Projects</strong>{" "}
                  section.
                </p>
                <p className="mb-3">
                  I also enjoy sharing content related to what I&apos;ve learned
                  in <strong>Web Development</strong> over the past year, hoping
                  it can benefit others in the Dev Community. Feel free to
                  connect or follow me on my{" "}
                  <Link
                    href="https://www.linkedin.com/in/asad189/"
                    target="_blank"
                    className="mx-1 font-bold text-[#7843E9] underline"
                  >
                    Linkedin
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://github.com/MuhammadAsad-cmd"
                    target="_blank"
                    className="mx-1 font-bold text-[#7843E9] underline"
                  >
                    GitHub
                  </Link>{" "}
                  where I post useful content related to Web Development and
                  Programming
                </p>

                <p className="mb-10">
                  I&apos;m open to <strong>Job</strong> opportunities where I
                  can contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don&apos;t hesitate
                  to <strong>contact</strong> me.
                </p>
              </div>
              <Link href="#Contact">
                <p className="BtnShadow px-[50px] py-4 text-base">Contact</p>
              </Link>
            </div>
            <div className="px-0 lg:px-9">
              <h3
                className={`mb-[30px] ${darkMode ? "text-[#fff]" : "text-[#374151]"} hidden px-5 text-[28px] font-bold lg:block`}
              >
                My Skills
              </h3>
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2  items-center justify-center gap-x-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`Skills-Shadow flex h-[85px] ${darkMode ? "bg-white" : "bg-white"}  w-[110px] flex-col items-center justify-center rounded-2xl `}
                    >
                      <Image
                        width={skill.width}
                        height={skill.height}
                        unoptimized
                        src={skill.image}
                        alt={skill.name || "Image"}
                        className="h-[45px] w-[85px] object-contain"
                      />
                      <h3 className="mt-[5px] text-xs font-semibold text-[#0F141E]">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
