import { SkillsData } from "@/app/Data/ProjectsData";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="animated-border my-6 rounded-t-lg sm:rounded-xl"
      >
        <div className="bg-white dark:bg-discordDark">
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
                  className={`cursor-pointer py-6 text-base font-semibold hover:text-SkyBlue hover:underline ${
                    index < 4 ? "border-b dark:border-darkSecondaryGray" : ""
                  }`}
                >
                  <Link href={skill.link} target="_blank">
                    {skill.name}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
          <Link
            href="/details/skills"
            className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark"
          >
            <p className="text-base font-semibold">Show all Skills</p>
            <IoMdArrowRoundForward className="text-xl" />
          </Link>
        </div>
      </div>

      {/* <div className="my-2 rounded-lg bg-darkbg">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Courses</p>
            </div>
          </div>
          <div className="py-6">
            <h2
              className={`cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline`}
            >
              Mern Full Stack Web Development
            </h2>
            <p>L0122110015</p>
            <div className="mt-2 flex items-center gap-3">
              <Image
                width={24}
                height={24}
                
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
