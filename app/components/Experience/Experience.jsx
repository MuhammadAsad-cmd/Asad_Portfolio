"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoBriefcaseOutline, IoCalendarOutline, IoLocationOutline, IoArrowForward } from "react-icons/io5";
import { experiences } from "@/app/Data/experiences";
import dayjs from "dayjs";

const formatDate = (date) => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${new Date(year, month - 1).toLocaleString("en-US", { month: "short" })} ${year}`;
};

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                Experience
              </h1>
              <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                My professional journey and career milestones
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative ml-4 space-y-12 border-l-2 border-lightBorder dark:border-darkSecondaryGray md:ml-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 transition-all duration-700 md:pl-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-4 border-white bg-SkyBlue dark:border-discordDark"></div>

              {/* Content */}
              <div className="group flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Company Info */}
                <div className="flex-shrink-0 md:w-48">
                  <div className="mb-2 flex items-center gap-3 md:hidden">
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-lightBorder dark:border-darkSecondaryGray">
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-lightPrimarytext dark:text-white">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="hidden h-16 w-16 overflow-hidden rounded-xl border border-lightBorder dark:border-darkSecondaryGray md:block">
                     <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                  </div>
                  <div className="mt-3 hidden md:block">
                    <h3 className="font-bold text-lightPrimarytext dark:text-white">
                      {exp.company}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                      <IoLocationOutline />
                      {exp.location.split("·")[0].trim()}
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="flex-1 space-y-8">
                  {exp.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative">
                      {/* Connector for multiple roles */}
                      {exp.roles.length > 1 && rIndex !== exp.roles.length - 1 && (
                         <div className="absolute left-0 top-10 h-full w-0.5 bg-lightBorder dark:bg-darkSecondaryGray md:-left-8"></div>
                      )}
                      
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h4 className="text-lg font-bold text-lightPrimarytext dark:text-white">
                          {role.title}
                        </h4>
                        <span className="flex-shrink-0 text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                          {formatDate(role.startDate)} -{" "}
                          {formatDate(role.endDate)}
                        </span>
                      </div>
                      
                      <div className="mt-1 mb-3 flex items-center gap-3 text-sm">
                        <span className="rounded-md bg-SkyBlue/10 px-2.5 py-0.5 font-medium text-SkyBlue dark:bg-SkyBlue/20">
                          {role.type}
                        </span>
                        <span className="hidden text-lightSecondarytext dark:text-darkPrimaryGray sm:inline">
                           • {exp.location}
                        </span>
                      </div>

                      {/* Skills Tags */}
                      {role.skills && (
                        <div className="flex flex-wrap gap-2">
                          {role.skills.split(",").map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium text-lightSecondarytext underline decoration-lightBorder underline-offset-4 dark:text-darkPrimaryGray dark:decoration-darkSecondaryGray"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/details/experience"
            className="group inline-flex items-center gap-2 rounded-full border border-lightBorder bg-lightbg px-6 py-2.5 text-sm font-semibold text-lightPrimarytext transition-all hover:border-SkyBlue hover:text-SkyBlue dark:border-darkSecondaryGray dark:bg-darkSecondaryGray dark:text-white dark:hover:border-darkHover"
          >
            View Full Resume
            <IoArrowForward className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
