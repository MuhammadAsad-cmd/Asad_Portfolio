"use client";
import { homepageFeaturedProjectIds, projectsData } from "@/app/Data/projects";
import { projectCategories } from "@/app/Data/projectCategories";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import CollapsibleDescription from "./CollapsibleDescription";
import ProjectTabs from "./ProjectTabs";

/** Max featured rows on the homepage — full catalog lives on /details/projects */
const HOME_FEATURED_LIMIT = 5;

const Projects2 = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projectsData;
    }
    const category = projectCategories.find((cat) => cat.id === activeCategory);
    return projectsData.filter(
      (project) => project.category === category?.filterValue,
    );
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    if (activeCategory === "all") {
      return homepageFeaturedProjectIds
        .map((id) => projectsData.find((p) => p.id === id))
        .filter(Boolean)
        .slice(0, HOME_FEATURED_LIMIT);
    }
    return filteredProjects.slice(0, HOME_FEATURED_LIMIT);
  }, [activeCategory, filteredProjects]);

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    projectCategories.forEach((category) => {
      if (category.id !== "all") {
        counts[category.id] = projectsData.filter(
          (project) => project.category === category.filterValue,
        ).length;
      }
    });
    return counts;
  }, []);

  return (
    <>
      <section
        id="projects"
        className="animated-border my-4 overflow-hidden md:my-6 md:rounded-xl"
        aria-labelledby="projects-heading"
      >
        <div className="bg-white dark:bg-discordDark">
          <div className="p-5 md:p-8">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
                  <div>
                    <h2 id="projects-heading" className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl">
                      Featured Projects
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                      Hector, RetroFam, RetrovGames, Canrover, Telegram—then the full catalog
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/details/projects"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-SkyBlue/30 bg-SkyBlue/5 px-4 py-2 text-sm font-semibold text-SkyBlue transition-colors hover:border-SkyBlue hover:bg-SkyBlue/10 dark:border-darkHover/40 dark:hover:border-darkHover"
              >
                Full portfolio
                <span className="text-lightSecondarytext dark:text-darkPrimaryGray group-hover:text-SkyBlue">
                  ({projectsData.length})
                </span>
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Project Tabs — edge-to-edge row (arrows overlap; cancels horizontal padding) */}
            <div className="-mx-5 md:-mx-8">
              <ProjectTabs
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                projectCounts={projectCounts}
              />
            </div>

            {(() => {
              const filteredCount = filteredProjects.length;
              const hasMoreOnHome = filteredCount > HOME_FEATURED_LIMIT;
              const categoryLabel =
                activeCategory === "all"
                  ? null
                  : projectCategories.find((c) => c.id === activeCategory)
                      ?.name;
              if (
                !hasMoreOnHome &&
                !(activeCategory === "all" && projectsData.length > HOME_FEATURED_LIMIT)
              ) {
                return null;
              }
              return (
                <p className="mb-5 mt-1 text-center text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:mb-6">
                  {activeCategory === "all" ? (
                    <>
                      <span className="font-semibold text-lightPrimarytext dark:text-white">
                        {Math.min(HOME_FEATURED_LIMIT, displayedProjects.length)} flagship
                      </span>{" "}
                      projects in this order on the home page.
                      {projectsData.length > HOME_FEATURED_LIMIT && (
                        <>
                          {" "}
                          Full portfolio lists all{" "}
                          <span className="font-semibold text-lightPrimarytext dark:text-white">
                            {projectsData.length}
                          </span>{" "}
                          builds.
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      Showing up to{" "}
                      <span className="font-semibold text-lightPrimarytext dark:text-white">
                        {HOME_FEATURED_LIMIT}
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold text-lightPrimarytext dark:text-white">
                        {filteredCount}
                      </span>{" "}
                      in “{categoryLabel}”. Open the full portfolio for the
                      complete list.
                    </>
                  )}
                </p>
              );
            })()}

            {/* Projects Grid */}
            <div className="space-y-10 md:space-y-16">
              {displayedProjects.map((project, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div key={project.id} className="group relative">
                    <div
                      className={`flex flex-col gap-6 lg:gap-10 ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-start`}
                    >
                      {/* Project Image */}
                      <div className="w-full lg:w-7/12">
                        <div className="relative overflow-hidden rounded-2xl bg-lightbg shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-SkyBlue/10 dark:bg-darkSecondaryGray">
                          {/* Browser Toolbar Decoration */}
                          <div className="flex h-8 items-center gap-1.5 border-b border-lightBorder bg-white px-4 dark:border-white/5 dark:bg-[#1e2124]">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></div>
                          </div>

                          <div className="relative aspect-video cursor-pointer overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={`${project.title} - ${project.stackUsed?.join(', ') || 'Web Development Project'} by Muhammad Asad, MERN Stack Developer`}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 60vw"
                              quality={90}
                            />
                            {/* Overlay on hover */}
                            <Link
                              href={project.Link || "#"}
                              target="_blank"
                              className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="flex w-full flex-col justify-center lg:w-5/12">
                        {/* Project Number & Decoration */}
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-4xl font-black text-lightBorder/50 dark:text-white/5 md:text-5xl">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-lightBorder dark:bg-darkSecondaryGray"></div>
                        </div>

                        <h3 className="mb-3 text-2xl font-bold text-lightPrimarytext dark:text-white md:text-3xl">
                          {project?.title}
                        </h3>

                        <div className="mb-4">
                          <CollapsibleDescription
                            description={project.description}
                            maxLines={2}
                          />
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-5 flex flex-wrap gap-2 md:mb-6">
                          {project.stackUsed.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-md bg-lightbg px-3 py-1 text-xs font-medium text-lightSecondarytext dark:bg-darkSecondaryGray dark:text-darkPrimaryGray"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                          <Link
                            href={project.Link || "#"}
                            target="_blank"
                            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-SkyBlue px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-SkyBlue/30 active:translate-y-0"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Live Demo
                              <FiExternalLink />
                            </span>
                          </Link>

                          {project.codeUrl && (
                            <Link
                              href={project.codeUrl}
                              target="_blank"
                              className="inline-flex items-center gap-2 rounded-full border border-lightBorder px-6 py-2.5 text-sm font-semibold text-lightPrimarytext transition-colors hover:border-SkyBlue hover:text-SkyBlue dark:border-darkSecondaryGray dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                            >
                              <FiGithub className="text-lg" />
                              Code
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Action */}
            <div className="mt-10 flex justify-center border-t border-lightBorder pt-6 dark:border-darkSecondaryGray md:mt-14 md:pt-7">
              <Link
                href="/details/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-SkyBlue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-SkyBlue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-SkyBlue/25 dark:text-white"
              >
                <IoRocketOutline className="text-lg" aria-hidden />
                Browse all {projectsData.length} projects
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects2;
