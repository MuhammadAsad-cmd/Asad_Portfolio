"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black p-[19px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">About</p>
          </div>
        </div>
        <div className="py-5 text-sm">
          <p>
            <strong>About Me</strong>
            <br />
            Hi, I’m Muhammad Asad, a passionate Frontend Developer with over a
            year of hands-on experience in crafting modern, interactive, and
            high-performance web applications. My expertise lies in React.js,
            Next.js, JavaScript, Redux Toolkit, and Tailwind CSS, enabling me to
            build solutions that are not just functional but also visually
            appealing.
          </p>
          <p className="mt-4">
            <strong>What I Do</strong>
            <br />I specialize in delivering:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong>Custom Websites for Businesses:</strong> Tailored to your
              brand’s identity and goals.
            </li>
            <li>
              <strong>Responsive & Scalable Applications:</strong> Ensuring
              seamless performance across all devices.
            </li>
            <li>
              <strong>Cutting-Edge Frontend Solutions:</strong> Using the latest
              tools and technologies to bring your ideas to life.
            </li>
          </ul>
          <p className="mt-4">
            Whether you need a business website to establish your online
            presence or a robust frontend solution for your project, I’m here to
            make it happen.
          </p>
          <div className="mb-1 mt-4 flex items-center justify-between">
            <h1 className="font-medium">Why Choose Me?</h1>
            <button
              onClick={toggleReadMore}
              className="text-[#a4a5a7] hover:text-Sky-Blue"
            >
              {isExpanded ? "" : "...see more"}
            </button>
          </div>
          {isExpanded && (
            <>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>
                  <strong>Modern Technologies:</strong> Expert in advanced
                  frameworks like React and Next.js.
                </li>
                <li>
                  <strong>Attention to Detail:</strong> Committed to clean,
                  efficient, and user-friendly designs.
                </li>
                <li>
                  <strong>Client-Centric Approach:</strong> Your vision is my
                  priority, delivered with precision.
                </li>
              </ul>
              <p className="mt-4">
                <strong>Let’s Collaborate!</strong>
                <br />I also offer freelance services for businesses and
                individuals who need impactful websites that drive results. Feel
                free to reach out through the Contact Us section or send me a
                message to discuss your project.
              </p>
            </>
          )}
        </div>

        <div className="my-3 flex items-center justify-between rounded-lg border border-darkGray p-3">
          <div className="flex gap-2">
            <div>
              <IoDiamondOutline className="mt-1.5 text-2xl" />
            </div>
            <div>
              <h2 className="text-base font-semibold">Top Skills</h2>
              <p className="text-sm">
                Next.js • React.js • JavaScript • Redux Toolkit • Front-End
                Development
              </p>
            </div>
          </div>
          <Link
            href="/details/skills"
            aria-label="View details about skills"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#FFFFFFE6] hover:bg-[#2c2f33]"
          >
            <IoMdArrowRoundForward className="text-xl" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
