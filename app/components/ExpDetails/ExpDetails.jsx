"use client";
import { experiences } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const ExpDetails = () => {
  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <FaArrowLeft />
              </Link>
              <p className="text-xl font-semibold">Experience</p>
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
          <div className="flex flex-col space-y-8">
            {experiences.map((experience, index) => (
              <div key={index}>
                {experience.roles.length === 1 ? (
                  <div className="flex gap-2">
                    <div className="h-12 w-12 cursor-pointer rounded-full bg-blue-500">
                      <Image
                        width={48}
                        height={48}
                        unoptimized
                        src={experience.image}
                        alt={experience.company}
                        className="rounded-full"
                      />
                    </div>
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
                        {/* {experience.roles.description && ( */}
                        <p className="text-[#a4a5a7]">
                          {experience.roles[0].description}
                        </p>
                        {/* )} */}
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
                        <div className="h-12 w-12 cursor-pointer rounded-full bg-blue-500">
                          <Image
                            width={48}
                            height={48}
                            unoptimized
                            src={experience.image}
                            alt={experience.company}
                            className="rounded-full"
                          />
                        </div>
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
      </div>
    </>
  );
};

export default ExpDetails;
