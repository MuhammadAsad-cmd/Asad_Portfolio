"use client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { certificationsData } from "@/app/Data/certifications";

const Certifications = ({ variant = "section" }) => {
  const isStandalone = variant === "standalone";

  return (
    <div className="animated-border my-6 overflow-hidden md:rounded-xl">
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {isStandalone && (
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
          >
            <IoArrowBack className="text-lg" aria-hidden />
            Back to Home
          </Link>
        )}

        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl">
              Certifications
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
              Verified credentials and licenses
            </p>
          </div>
        </div>

        {/* List */}
        <div className="space-y-8">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              id={`cert-${cert.id}`}
              className={`group flex flex-col gap-4 scroll-mt-24 md:flex-row md:items-center md:justify-between ${
                index !== certificationsData.length - 1
                  ? "border-b border-lightBorder pb-8 dark:border-darkSecondaryGray"
                  : ""
              }`}
            >
              {/* Left Info */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-lightBorder bg-white dark:border-darkSecondaryGray dark:bg-darkbg">
                  <Image
                    width={56}
                    height={56}
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.issuer}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-lightPrimarytext dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                    {cert.issuer}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-lightSecondarytext/80 dark:text-darkPrimaryGray/80">
                    <span>Issued {cert.issueDate}</span>
                    {cert.credentialId && (
                      <>
                        <span>•</span>
                        <span>ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Action */}
              {cert.link && (
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex w-fit items-center gap-2 rounded-full border border-lightBorder px-4 py-2 text-sm font-semibold text-lightPrimarytext transition-all hover:border-SkyBlue hover:text-SkyBlue dark:border-darkSecondaryGray dark:text-white dark:hover:border-SkyBlue"
                >
                  Show Credential
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
