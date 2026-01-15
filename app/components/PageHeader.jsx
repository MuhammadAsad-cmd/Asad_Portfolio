"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoHomeOutline, IoShareOutline } from "react-icons/io5";
import { FaChevronLeft, FaDownload } from "react-icons/fa";

const PageHeader = ({
  title,
  subtitle,
  icon,
  backUrl = "/",
  showBreadcrumb = true,
  rightContent,
  experienceYears,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
    } else {
      router.back();
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Muhammad Asad - ${title}`,
          text: `Check out Muhammad Asad's ${title.toLowerCase()}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
      {/* Breadcrumb Navigation */}
      {showBreadcrumb && (
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Link
            href="/"
            className="group flex items-center gap-1 text-lightSecondarytext transition-colors duration-300 hover:text-SkyBlue dark:text-darkPrimaryGray dark:hover:text-darkHover"
          >
            <IoHomeOutline className="text-xs transition-transform duration-300 group-hover:scale-110 sm:text-sm" />
            <span className="">Home</span>
          </Link>
          <FaChevronLeft className="rotate-180 text-xs text-lightSecondarytext dark:text-darkPrimaryGray" />
          <span className="max-w-[150px] truncate font-medium text-SkyBlue sm:max-w-none">
            {title}
          </span>
        </div>
      )}

      {/* Main Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Section */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          {/* Back Button */}
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="group flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-lightBorder bg-lightbg transition-all duration-300 hover:scale-105 hover:border-SkyBlue hover:bg-SkyBlue/5 hover:shadow-lg hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover dark:hover:bg-SkyBlue/10 sm:h-10 sm:w-10 sm:rounded-xl"
          >
            <IoArrowBack className="text-sm text-lightPrimarytext transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover sm:text-lg" />
          </button>

          {/* Title Section */}
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <div className="h-6 w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover sm:h-8"></div>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-lg font-bold text-lightPrimarytext dark:text-white sm:text-xl md:text-2xl">
                {title}
              </h1>
              {subtitle && (
                <p className="line-clamp-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray sm:line-clamp-none sm:text-sm">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-shrink-0 items-center justify-between gap-2 sm:justify-end sm:gap-3">
          {/* Experience Years Badge - Mobile: Full width, Desktop: Auto */}
          {experienceYears && (
            <div className="flex flex-1 items-center justify-center gap-1 rounded-md border border-SkyBlue/20 bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-2 py-1 dark:border-darkHover/20 dark:from-SkyBlue/20 dark:to-darkHover/20 sm:flex-none sm:justify-start sm:gap-2 sm:rounded-lg sm:px-3 sm:py-2">
              {icon &&
                React.cloneElement(icon, {
                  className: "text-sm sm:text-lg text-SkyBlue flex-shrink-0",
                })}
              <span className="truncate text-xs font-medium text-SkyBlue sm:text-sm">
                {experienceYears}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              aria-label="Share this page"
              onClick={handleShare}
              className="group flex h-8 w-8 items-center justify-center rounded-md border border-lightBorder bg-lightbg transition-all duration-300 hover:scale-105 hover:border-SkyBlue hover:bg-SkyBlue/5 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover dark:hover:bg-SkyBlue/10 sm:h-9 sm:w-9 sm:rounded-lg"
              title="Share"
            >
              <IoShareOutline className="text-xs text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover sm:text-sm" />
            </button>

            <Link
              href="/Asad Front End resume.pdf"
              target="_blank"
              className="group flex h-8 w-8 items-center justify-center rounded-md border border-lightBorder bg-lightbg transition-all duration-300 hover:scale-105 hover:border-SkyBlue hover:bg-SkyBlue/5 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover dark:hover:bg-SkyBlue/10 sm:h-9 sm:w-9 sm:rounded-lg"
              title="Download Resume"
            >
              <FaDownload className="text-xs text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover sm:text-sm" />
            </Link>
          </div>

          {/* Animated Dots - Hidden on very small screens */}
          <div className="xs:flex hidden gap-1">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-SkyBlue sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-SkyBlue/70 delay-200 sm:h-2 sm:w-2"></div>
          </div>

          {/* Custom Right Content */}
          {rightContent && (
            <div className="hidden sm:block">{rightContent}</div>
          )}
        </div>
      </div>

      {/* Mobile-only Custom Right Content */}
      {rightContent && <div className="block sm:hidden">{rightContent}</div>}
    </div>
  );
};

export default PageHeader;
