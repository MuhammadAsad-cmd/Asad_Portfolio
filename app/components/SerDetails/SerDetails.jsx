'use client';
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  FaCode,
  FaPaintBrush,
  FaShoppingCart,
  FaPlug,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaCogs,
  FaSearch,
  FaBug,
  FaGitAlt,
  FaCubes,
  FaTachometerAlt,
  FaDesktop,
} from "react-icons/fa";
import {
  IoCodeSlash,
  IoCheckmarkCircle,
  IoTimeOutline,
  IoStarOutline,
} from "react-icons/io5";
import PageHeader from "../PageHeader";
import { useState } from "react";
import { enhancedServicesData } from "@/app/Data/enhancedServices";


const SerDetails = () => {
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [expandedTech, setExpandedTech] = useState({});

  const getServiceIcon = (serviceName) => {
    const name = serviceName.toLowerCase();
    if (name.includes("website") || name.includes("web")) return FaLaptopCode;
    if (name.includes("front") || name.includes("frontend")) return FaCode;
    if (name.includes("ui") || name.includes("ux") || name.includes("design"))
      return FaPaintBrush;
    if (name.includes("ecommerce") || name.includes("e-commerce"))
      return FaShoppingCart;
    if (name.includes("api") || name.includes("integration")) return FaPlug;
    if (name.includes("mobile")) return FaMobile;
    if (name.includes("database")) return FaDatabase;
    if (name.includes("cloud") || name.includes("deployment")) return FaCloud;
    if (name.includes("performance") || name.includes("optimization"))
      return FaTachometerAlt;
    if (name.includes("state") || name.includes("management")) return FaCogs;
    if (name.includes("responsive") || name.includes("design"))
      return FaDesktop;
    if (name.includes("browser") || name.includes("compatibility"))
      return FaDesktop;
    if (name.includes("git") || name.includes("version")) return FaGitAlt;
    if (name.includes("component") || name.includes("architecture"))
      return FaCubes;
    if (name.includes("seo")) return FaSearch;
    if (name.includes("testing") || name.includes("debugging")) return FaBug;
    if (name.includes("backend")) return FaDatabase;
    if (name.includes("maintenance") || name.includes("support")) return FaCogs;
    return FaCode; // default icon
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Frontend":
        return "from-blue-500 to-cyan-500";
      case "Backend":
        return "from-green-500 to-emerald-500";
      case "Full Stack":
        return "from-purple-500 to-pink-500";
      case "Database":
        return "from-orange-500 to-red-500";
      case "DevOps":
        return "from-gray-500 to-slate-500";
      case "Testing":
        return "from-yellow-500 to-amber-500";
      case "SEO":
        return "from-indigo-500 to-blue-500";
      case "Optimization":
        return "from-teal-500 to-cyan-500";
      case "Architecture":
        return "from-violet-500 to-purple-500";
      case "Support":
        return "from-rose-500 to-pink-500";
      default:
        return "from-SkyBlue to-lightHover dark:to-darkHover";
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case "Low":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30";
      case "Low to Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30";
      case "Medium":
        return "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30";
      case "Medium to High":
        return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
      case "High":
        return "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  const toggleFeatures = (index) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleTech = (index) => {
    setExpandedTech((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div
        id="services"
        className="animated-border my-6 overflow-hidden rounded-t-lg sm:rounded-xl"
      >
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <PageHeader
              title="Muhammad Asad's Services"
              subtitle="Comprehensive web development solutions and expertise"
              icon={<IoCodeSlash />}
              experienceYears={`${enhancedServicesData.length} Services`}
              backUrl="/"
            />

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enhancedServicesData.map((service, index) => {
                const IconComponent = getServiceIcon(service.name);
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:-translate-y-2 hover:border-SkyBlue hover:shadow-xl hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                  >
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <IconComponent className="text-lg text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-bold leading-tight text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                            {service.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-2">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-semibold ${getCategoryColor(service.category)} bg-gradient-to-r text-white`}
                            >
                              {service.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="mb-2 flex items-center gap-1 text-sm font-semibold text-lightPrimarytext dark:text-white">
                        <IoCheckmarkCircle className="text-SkyBlue" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {(expandedFeatures[index]
                          ? service.features
                          : service.features.slice(0, 3)
                        ).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="rounded-md border border-lightBorder bg-white px-2 py-1 text-xs font-medium text-lightPrimarytext dark:border-darkPrimaryGray/30 dark:bg-discordDark dark:text-white"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <button
                            onClick={() => toggleFeatures(index)}
                            className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-white transition-all hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 cursor-pointer relative z-10"
                          >
                            {expandedFeatures[index]
                              ? "Show Less"
                              : `+${service.features.length - 3} more`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="mb-2 flex items-center gap-1 text-sm font-semibold text-lightPrimarytext dark:text-white">
                        <IoCodeSlash className="text-SkyBlue" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {(expandedTech[index]
                          ? service.technologies
                          : service.technologies.slice(0, 3)
                        ).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-md border border-SkyBlue/20 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-2 py-1 text-xs font-medium text-SkyBlue dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <button
                            onClick={() => toggleTech(index)}
                            className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-white transition-all hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700 cursor-pointer relative z-10"
                          >
                            {expandedTech[index]
                              ? "Show Less"
                              : `+${service.technologies.length - 3}`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between border-t border-lightBorder pt-4 dark:border-darkPrimaryGray/30">
                      <div className="flex items-center gap-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                        <IoTimeOutline className="text-SkyBlue" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${getComplexityColor(service.complexity)}`}
                      >
                        {service.complexity}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-12 rounded-xl border border-SkyBlue/20 bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 p-8 text-center dark:border-darkHover/20 dark:from-SkyBlue/10 dark:to-darkHover/10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover dark:to-darkHover">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-lightPrimarytext dark:text-white">
                Ready to Start Your Project?
              </h3>
              <p className="mb-6 text-lightSecondarytext dark:text-darkPrimaryGray">
                Let&apos;s discuss your requirements and create something
                amazing together. I&apos;m here to help bring your vision to
                life.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-SkyBlue to-lightHover px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-SkyBlue/30 dark:to-darkHover"
                >
                  <span>Get Started</span>
                  <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/details/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-SkyBlue px-6 py-3 font-semibold text-SkyBlue transition-all duration-300 hover:bg-SkyBlue hover:text-white"
                >
                  <IoStarOutline />
                  <span>View Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerDetails;
