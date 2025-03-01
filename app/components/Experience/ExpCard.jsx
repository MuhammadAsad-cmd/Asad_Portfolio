import { experiences } from "@/app/Data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import dayjs from "dayjs";

const formatDate = (date) => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${new Date(year, month - 1).toLocaleString("en-US", { month: "short" })} ${year}`;
};

const calculateDuration = (startDate, endDate = null) => {
  const start = dayjs(startDate);
  const end = endDate ? dayjs(endDate) : dayjs();
  const totalMonths = end.diff(start, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`.trim();
};

const calculateTotalDuration = (roles) => {
  let totalMonths = 0;

  roles.forEach(({ startDate, endDate }) => {
    const start = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : dayjs();
    totalMonths += end.diff(start, "month");
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""}${
    months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`.trim();
};

const ExpCard = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        {experiences.map((experience, index) => (
          <div key={index}>
            {experience.roles.length === 1 ? (
              <div className="flex gap-2">
                <Link
                  href={experience.link || "#"}
                  passHref
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-500"
                >
                  <Image
                    width={48}
                    height={48}
                    src={experience.image}
                    alt={experience.company}
                    className=""
                  />
                </Link>
                <div>
                  <div className="flex-shrink-0 text-sm">
                    <Link href={experience.link || "#"} passHref>
                      <h4 className="text-base font-semibold">
                        {experience.roles[0].title}
                      </h4>
                    </Link>
                    {experience.link ? (
                      <Link href={experience.link}>
                        <h3 className="cursor-pointer text-sm font-normal">
                          {experience.company} <span className="mx-2">·</span>
                          <span>{experience.roles[0].type}</span>
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-base font-semibold">
                        {experience.company} <span className="mx-2">·</span>
                        <span>{experience.roles[0].type}</span>
                      </h3>
                    )}

                    <p className="text-darkPrimaryGray flex items-center">
                      {experience.roles[0].duration}{" "}
                      <span className="mx-2">·</span>
                      <span> {calculateTotalDuration(experience.roles)} </span>
                    </p>
                    <p className="text-darkPrimaryGray">
                      {experience.roles[0].description}
                    </p>
                    <p className="text-darkPrimaryGray">
                      {" "}
                      {experience.location}
                    </p>
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
                    <Link
                      href={experience.link || "#"}
                      passHref
                      className="h-12 w-12 cursor-pointer bg-blue-500"
                    >
                      <Image
                        width={48}
                        height={48}
                        src={experience.image}
                        alt={experience.company}
                      />
                    </Link>
                  </div>
                  <div className="ml-2">
                    <Link href={experience.link}>
                      <h3 className="hover:text-SkyBlue cursor-pointer text-lg font-semibold hover:underline">
                        {experience.company}
                      </h3>
                    </Link>
                    <p className="text-sm">{experience.time}</p>
                    <p className="text-darkPrimaryGray text-sm">
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
                      <Link href={experience.link || "#"} passHref>
                        <h4 className="hover:text-SkyBlue cursor-pointer text-base font-semibold hover:underline">
                          {role.title}
                        </h4>
                      </Link>
                      <p className="text-sm">{role.type}</p>
                      <p className="text-darkPrimaryGray text-sm">
                        {formatDate(role.startDate)} -{" "}
                        {formatDate(role.endDate)} ·{" "}
                        {calculateDuration(role.startDate, role.endDate)}
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
    </>
  );
};

export default ExpCard;
