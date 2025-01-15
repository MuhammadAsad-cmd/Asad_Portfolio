import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Skills = () => {
  const SkillsData = [
    { name: "Next.js" },
    { name: "React" },
    { name: "JavaScript" },
    { name: "Redux Toolkit" },
    { name: "Tailwind CSS" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "HTML" },
    { name: "CSS" },
  ];

  return (
    <>
      <div className="my-2 bg-raisin-black sm:rounded-lg">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Skills</p>
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

      {/* <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Courses</p>
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
      </div> */}
    </>
  );
};

export default Skills;
