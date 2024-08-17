import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
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
    { name: "Git" },
    { name: "GitHub" },
  ];
  return (
    <>
      <div className="mb-10 rounded-lg bg-raisin-black">
        <div className="flex items-center justify-between px-5 pt-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <FaArrowLeft />
            </Link>
            <p className="text-xl font-semibold">Skills</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
              <AiOutlinePlus className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <div>
            {SkillsData.map((skill, index) => (
              <h2
                key={index}
                className="cursor-pointer border-b border-darkGray py-6 text-base font-semibold hover:text-Sky-Blue hover:underline"
              >
                {skill.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
