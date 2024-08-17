"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";

const Skills = () => {
  const SkillsData = [
    { name: "Next.js" },
    { name: "React" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Tailwind CSS" },
    { name: "Redux" },
    { name: "MongoDB" },
    { name: "HTML" },
    { name: "CSS" },
  ];

  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Skills</p>
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
          <div>
            {SkillsData.slice(0, 5).map((skill, index) => (
              <h2
                key={index}
                className={`cursor-pointer py-6 text-base font-semibold hover:text-Sky-Blue hover:underline ${
                  index < 4 ? "border-b border-darkGray" : ""
                }`}
              >
                {skill.name}
              </h2>
            ))}
          </div>
        </div>
        <Link
          href="/details/skills"
          className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]"
        >
          <p className="text-base font-semibold">Show all Skills</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Link>
      </div>

      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Courses</p>
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
          <div className="py-6">
            <h2
              className={`cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline`}
            >
              Mern Full Stack Web Development
            </h2>
            <p>L0122110015</p>
            <div className="mt-2 flex items-center gap-3">
              <Image
                width={24}
                height={24}
                unoptimized
                src="/images/evs.jfif"
                alt="evs"
              />
              <p className="text-sm">
                Associated with EVS Professional Training Institute
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
