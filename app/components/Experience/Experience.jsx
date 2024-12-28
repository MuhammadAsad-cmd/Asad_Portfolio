"use client";
import { experiences } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Experience</p>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            {experiences.map((experience, index) => (
              <div key={index}>
                {experience.roles.length === 1 ? (
                  <div className="flex gap-2">
                    <Link href={experience.link || "#"} passHref>
                      <div className="h-12 w-12 cursor-pointer rounded-full bg-blue-500">
                        <Image
                          width={48}
                          height={48}
                          unoptimized
                          src={experience.image}
                          alt={experience.company}
                          className=""
                        />
                      </div>
                    </Link>
                    <div>
                      <div className="flex-shrink-0 text-sm">
                        <h4 className="text-base font-semibold">
                          {experience.roles[0].title}
                        </h4>
                        {experience.link ? (
                          <Link href={experience.link}>
                            <h3 className="cursor-pointer text-base font-semibold">
                              {experience.company}
                            </h3>
                          </Link>
                        ) : (
                          <h3 className="text-base font-semibold">
                            {experience.company}
                          </h3>
                        )}
                        <p>{experience.roles[0].type}</p>

                        <p className="text-[#a4a5a7]">
                          {experience.roles[0].duration}
                        </p>
                        <p className="text-[#a4a5a7]">
                          {experience.roles[0].description}
                        </p>
                        <p className="text-[#a4a5a7]"> {experience.location}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <IoDiamondOutline />
                        {experience.skills}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Link href={experience.link || "#"} passHref>
                          <div className="h-12 w-12 cursor-pointer bg-blue-500">
                            <Image
                              width={48}
                              height={48}
                              unoptimized
                              src={experience.image}
                              alt={experience.company}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="ml-2">
                        <Link href={experience.link}>
                          <h3 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                            {experience.company}
                          </h3>
                        </Link>
                        <p className="text-sm">{experience.time}</p>
                        <p className="text-sm text-[#a4a5a7]">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    <div className="relative ml-14 mt-4 space-y-4">
                      <div className="absolute -left-9 bottom-0 top-0 w-px bg-[#76797b]"></div>
                      {experience.roles.map((role, i) => (
                        <div key={i} className="relative">
                          <div
                            className={`absolute -left-[42px] h-3 w-3 rounded-full bg-[#76797b] ${
                              i === 0
                                ? "top-0"
                                : i === experience.roles.length - 1
                                  ? "bottom-0"
                                  : "top-[50%] -translate-y-1/2"
                            }`}
                          ></div>
                          <h4 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                            {role.title}
                          </h4>
                          <p className="text-sm">{role.type}</p>
                          <p className="text-sm text-[#a4a5a7]">
                            {role.duration}
                          </p>
                          {role.description && (
                            <p className="text-gray-700">{role.description}</p>
                          )}
                          <div className="mt-2 flex items-center gap-3 text-sm">
                            <IoDiamondOutline />
                            {role.skills}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Link href="/details/experience">
          <div className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]">
            <p className="text-base font-semibold">Show all</p>
            <IoMdArrowRoundForward className="text-xl" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Experience;
