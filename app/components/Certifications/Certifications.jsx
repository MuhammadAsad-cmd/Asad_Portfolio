"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificationsData = [
  {
    id: 1,
    title: "Certified Front End Web Development",
    issuer: "EVS Professional Training Institute",
    issueDate: "Aug 2023",
    credentialId: "L0122110015",
    logo: "/images/cert/front end.jpg",
    link: null,
  },
  {
    id: 2,
    title: "Certified Mern Stack Web Developer",
    issuer: "EVS Professional Training Institute",
    issueDate: "Aug 2023",
    credentialId: "L0122110015",
    logo: "/images/cert/mern stack.jpg",
    link: null,
  },
  {
    id: 3,
    title: "C++ Essentials 1",
    issuer: "Cisco",
    issueDate: "Dec 2024",
    logo: "/images/c-essentials-1.png",
    link: "https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url",
  },
];

const Certifications = () => {
  return (
    <div className="animated-border my-6 overflow-hidden md:rounded-xl">
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
          <div>
            <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
              Certifications
            </h1>
            <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
              Verified credentials and licenses
            </p>
          </div>
        </div>

        {/* List */}
        <div className="space-y-8">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className={`group flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${
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