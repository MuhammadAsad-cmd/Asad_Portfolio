"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoBriefcaseOutline, IoCalendarOutline, IoLocationOutline, IoArrowBack } from "react-icons/io5";
import { experiences } from "@/app/Data/experiences";
import dayjs from "dayjs";

const formatDate = (date) => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  return `${new Date(year, month - 1).toLocaleString("en-US", { month: "short" })} ${year}`;
};

const ExpDetails = () => {
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
    <main
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      role="main"
      aria-labelledby="experience-main-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header with Back Button */}
        <nav
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          aria-label="Breadcrumb navigation"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
            aria-label="Navigate back to home page"
          >
            <IoArrowBack aria-hidden="true" />
            Back to Home
          </Link>
          <header>
            <div className="flex items-center gap-4">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" aria-hidden="true"></div>
              <div>
                <h1 id="experience-main-heading" className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                  Professional Experience
                </h1>
                <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                  Complete career journey and achievements - {experiences.length} companies
                </p>
              </div>
            </div>
          </header>
        </nav>

        {/* Timeline Container */}
        <section aria-labelledby="experience-timeline-heading" className="mb-8">
          <h2 id="experience-timeline-heading" className="sr-only">
            Work Experience Timeline
          </h2>
          <ol className="relative ml-4 space-y-12 border-l-2 border-lightBorder dark:border-darkSecondaryGray md:ml-6" role="list">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className={`relative pl-8 transition-all duration-700 md:pl-12 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/Organization"
              >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-4 border-white bg-SkyBlue dark:border-discordDark" aria-hidden="true"></div>

              {/* Content */}
              <article className="group flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Company Info */}
                <div className="flex-shrink-0 md:w-48">
                  <div className="mb-2 flex items-center gap-3 md:hidden">
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-lightBorder dark:border-darkSecondaryGray">
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={`${exp.company} company logo - ${exp.roles[0]?.title || 'Company'}`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                        itemProp="logo"
                      />
                    </div>
                    <h3 
                      className="text-lg font-bold text-lightPrimarytext dark:text-white"
                      itemProp="name"
                    >
                      {exp.company}
                    </h3>
                  </div>

                  <div className="hidden h-16 w-16 overflow-hidden rounded-xl border border-lightBorder dark:border-darkSecondaryGray md:block">
                     <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={`${exp.company} company logo - ${exp.roles[0]?.title || 'Company'}`}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        itemProp="logo"
                      />
                  </div>
                  <div className="mt-3 hidden md:block">
                    <h3 
                      className="font-bold text-lightPrimarytext dark:text-white"
                      itemProp="name"
                    >
                      {exp.company}
                    </h3>
                    <div 
                      className="mt-1 flex items-center gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <IoLocationOutline aria-hidden="true" />
                      <span itemProp="addressLocality">{exp.location.split("·")[0].trim()}</span>
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="flex-1 space-y-8">
                  {exp.roles.map((role, rIndex) => (
                    <div 
                      key={rIndex} 
                      className="relative"
                      itemScope
                      itemType="https://schema.org/JobPosting"
                    >
                      {/* Connector for multiple roles */}
                      {exp.roles.length > 1 && rIndex !== exp.roles.length - 1 && (
                         <div className="absolute left-0 top-10 h-full w-0.5 bg-lightBorder dark:bg-darkSecondaryGray md:-left-8" aria-hidden="true"></div>
                      )}
                      
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h4 
                          className="text-lg font-bold text-lightPrimarytext dark:text-white"
                          itemProp="title"
                        >
                          {role.title}
                        </h4>
                        <time 
                          className="flex-shrink-0 text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray"
                          itemProp="datePosted"
                          dateTime={role.startDate}
                        >
                          {formatDate(role.startDate)} -{" "}
                          {formatDate(role.endDate)}
                        </time>
                      </div>
                      
                      <div className="mt-1 mb-3 flex items-center gap-3 text-sm">
                        <span 
                          className="rounded-md bg-SkyBlue/10 px-2.5 py-0.5 font-medium text-SkyBlue dark:bg-SkyBlue/20"
                          itemProp="employmentType"
                        >
                          {role.type}
                        </span>
                        <span className="hidden text-lightSecondarytext dark:text-darkPrimaryGray sm:inline">
                           • {exp.location}
                        </span>
                      </div>

                      {/* Skills Tags */}
                      {role.skills && (
                        <div className="flex flex-wrap gap-2" aria-label="Skills used in this role">
                          {role.skills.split(",").map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium text-lightSecondarytext underline decoration-lightBorder underline-offset-4 dark:text-darkPrimaryGray dark:decoration-darkSecondaryGray"
                              itemProp="skills"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
        </section>
      </div>
    </main>
  );
};

export default ExpDetails;
