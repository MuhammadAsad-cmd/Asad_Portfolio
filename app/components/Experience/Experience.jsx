"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoArrowForward } from "react-icons/io5";
import { experiences } from "@/app/Data/experiences";

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
    <section
      id="experience"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="experience-heading"
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
              <h2 id="experience-heading" className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl">
                Experience
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                My professional journey and career milestones
              </p>
            </div>
          </div>
        </div>

        {/* Timeline — flex rail (reliable on narrow screens; no negative positioning clashes) */}
        <ol className="m-0 list-none p-0" role="list">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={`relative flex gap-3 sm:gap-5 ${
                index < experiences.length - 1 ? "pb-10 sm:pb-12" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Rail: dot + vertical line to next item */}
              <div className="relative flex w-4 shrink-0 flex-col items-center sm:w-5">
                {index < experiences.length - 1 && (
                  <div
                    className="absolute left-1/2 top-[14px] bottom-0 z-0 w-0.5 -translate-x-1/2 bg-lightBorder dark:bg-darkSecondaryGray"
                    aria-hidden
                  />
                )}
                <div
                  className="relative z-10 mt-0.5 size-[10px] shrink-0 rounded-full border-[3px] border-white bg-SkyBlue shadow-sm dark:border-discordDark sm:size-3 sm:border-[3px]"
                  aria-hidden
                />
              </div>

              {/* Content — min-w-0 lets text wrap instead of overflowing */}
              <div className="min-w-0 flex-1">
                <div className="group flex flex-col gap-5 sm:flex-row sm:gap-8">
                  {/* Company */}
                  <div className="shrink-0 sm:w-48">
                    <div className="flex items-start gap-3 sm:flex-col sm:gap-3">
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-lightBorder dark:border-darkSecondaryGray sm:h-16 sm:w-16 sm:rounded-xl">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={`${exp.company} company logo - ${exp.roles[0]?.title || "Company"}`}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1 sm:flex-none">
                        <h3 className="text-base font-bold leading-snug text-lightPrimarytext dark:text-white sm:text-lg">
                          {exp.company}
                        </h3>
                        <div className="mt-0.5 flex items-start gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray sm:mt-1">
                          <IoLocationOutline className="mt-0.5 shrink-0" aria-hidden />
                          <span className="leading-snug">
                            {exp.location.split("·")[0].trim()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="flex-1 space-y-6 sm:space-y-8">
                    {exp.roles.map((role, rIndex) => (
                      <div
                        key={rIndex}
                        className={`relative min-w-0 ${
                          exp.roles.length > 1 && rIndex < exp.roles.length - 1
                            ? "border-b border-lightBorder pb-6 dark:border-darkSecondaryGray sm:pb-8"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                          <h4 className="text-base font-bold leading-snug text-lightPrimarytext dark:text-white sm:text-lg">
                            {role.title}
                          </h4>
                          <span className="shrink-0 text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray sm:text-sm">
                            {formatDate(role.startDate)} –{" "}
                            {formatDate(role.endDate)}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                          <span className="rounded-md bg-SkyBlue/10 px-2.5 py-0.5 text-xs font-medium text-SkyBlue dark:bg-SkyBlue/20 sm:text-sm">
                            {role.type}
                          </span>
                        </div>

                        {role.skills && (
                          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                            {role.skills.split(",").map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="max-w-full break-words rounded-md border border-lightBorder bg-lightbg px-2 py-0.5 text-[11px] font-medium leading-tight text-lightSecondarytext dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/80 dark:text-darkPrimaryGray sm:text-xs"
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
            </li>
          ))}
        </ol>

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
    </section>
  );
};

export default Experience;
