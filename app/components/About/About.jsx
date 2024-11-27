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
          {/* <div className="w-12 h-12 rounded-full hover:bg-[#2c2f33] flex items-center justify-center">
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
          </div> */}
        </div>
        <div className="py-5 text-sm">
          <p>
            Hi, I’m Muhammad Asad, a dedicated Frontend Developer with over a
            year of experience in creating seamless and dynamic user interfaces.
            I specialize in React.js, Next.js, JavaScript, Redux Toolkit, and
            Tailwind CSS.
          </p>{" "}
          <div className="mb-1 mt-4 flex items-center justify-between">
            <h1 className="font-medium">My Expertise:</h1>
            <button
              onClick={toggleReadMore}
              className="text-[#a4a5a7] hover:text-Sky-Blue"
            >
              {isExpanded ? "" : "...see more"}
            </button>
          </div>
          {isExpanded && (
            <>
              <p className="">
                <ul className="list-inside list-disc space-y-1">
                  {" "}
                  <li>
                    React.js & Next.js: Building responsive and high-performance
                    web applications.
                  </li>{" "}
                  <li>
                    JavaScript: Writing clean, efficient, and maintainable code.
                  </li>{" "}
                  <li>
                    Redux Toolkit: Managing state effectively in complex
                    applications.
                  </li>
                  <li>
                    Tailwind CSS: Designing visually appealing and responsive
                    UIs.
                  </li>
                </ul>
              </p>
              <p className="mt-4">
                {" "}
                I am passionate about the MERN stack and constantly strive to
                enhance my skills and stay updated with the latest technologies.
                My career goal is to become a top-notch Frontend Developer and a
                successful entrepreneur, bringing innovative tech solutions to
                life.
              </p>
              <p className="mt-4">
                Career Goals: Frontend Excellence: Master advanced JavaScript
                frameworks and deliver high-quality web applications.
                Entrepreneurship: Explore innovative ideas and create impactful
                tech solutions.
              </p>
              <p className="mt-4">
                I am actively seeking new opportunities as a Frontend Developer
                where I can contribute my skills and grow professionally. If
                you’re looking for a passionate and skilled developer to join
                your team, let’s connect!
              </p>
            </>
          )}
        </div>

        <div className="my-3 flex items-center justify-between rounded-lg border border-darkGray p-3 ">
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
