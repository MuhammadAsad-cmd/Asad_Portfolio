// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Certifications = () => {
//   return (
//     <>
//       <div className="animated-border my-6 md:rounded-xl">
//         <div className="bg-white dark:bg-discordDark">
//           <div className="p-4">
//             <div className="mb-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
//                 <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
//                   Licenses & certifications
//                 </h1>
//               </div>
//             </div>
//             <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
//               <div>
//                 <Image
//                   width={48}
//                   height={48}
//                   src="/images/evs.jfif"
//                   alt="Vu Logo"
//                 />
//               </div>
//               <div>
//                 <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                   Certified Front End Web Development
//                 </h2>
//                 <p className="cursor-pointer text-sm">
//                   EVS Professional Training Institute
//                 </p>
//                 <p className="ShowH text-[13px]">Issued Aug 2023</p>
//                 <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
//                 <div className="mt-3 flex items-center gap-3">
//                   <div className="rounded-lg border dark:border-darkSecondaryGray">
//                     <Image
//                       width={106}
//                       height={56}
//                       src="/images/frontend.jfif"
//                       alt="kanban"
//                       className="h-14 rounded-lg object-cover"
//                     />
//                   </div>
//                   <p className="text-sm font-semibold">
//                     Front End Web Development
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
//               <div>
//                 <Image
//                   width={48}
//                   height={48}
//                   src="/images/evs.jfif"
//                   alt="Vu Logo"
//                 />
//               </div>
//               <div>
//                 <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                   Certified Mern Stack Web Developer
//                 </h2>
//                 <p className="cursor-pointer text-sm">
//                   EVS Professional Training Institute
//                 </p>
//                 <p className="ShowH text-[13px]">Issued Aug 2023</p>
//                 <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
//                 <div className="mt-3 flex items-center gap-3">
//                   <div className="rounded-lg border dark:border-darkSecondaryGray">
//                     <Image
//                       width={106}
//                       height={56}
//                       src="/images/frontend.jfif"
//                       alt="kanban"
//                       className="h-14 rounded-lg object-cover"
//                     />
//                   </div>
//                   <p className="text-sm font-semibold">
//                     Front End Web Development
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-3 flex gap-2 pb-4">
//               <div>
//                 <Image
//                   width={48}
//                   height={48}
//                   src="/images/c-essentials-1.png"
//                   alt="C++"
//                 />
//               </div>
//               <div>
//                 <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
//                   C++ Essentials 1
//                 </h2>
//                 <p className="cursor-pointer text-sm">Cisco</p>
//                 <p className="ShowH text-[13px]">Issued Dec 2024</p>
//                 <p className="ShowH text-[13px]">
//                   Issue by{" "}
//                   <span>
//                     {" "}
//                     <Link
//                       target="_blank"
//                       className="text-SkyBlue hover:text-lightHover dark:hover:text-darkHover"
//                       href="https://www.netacad.com/"
//                     >
//                       {" "}
//                       Cisco{" "}
//                     </Link>{" "}
//                   </span>
//                 </p>
//                 <Link
//                   target="_blank"
//                   href="https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url"
//                 >
//                   <div className="mt-3 flex items-center gap-3">
//                     <div className="rounded-lg border dark:border-darkSecondaryGray">
//                       <Image
//                         width={106}
//                         height={56}
//                         src="/images/c-essentials-1.png"
//                         alt="c++"
//                         className="h-14 rounded-lg object-cover"
//                       />
//                     </div>
//                     <p className="text-sm font-semibold">C++ Essentials 1</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Certifications;

import Image from "next/image";
import Link from "next/link";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdCard,
} from "react-icons/fa";

const certificationsData = [
  {
    id: 1,
    title: "Certified Front End Web Development",
    issuer: "EVS Professional Training Institute",
    issueDate: "Aug 2023",
    credentialId: "L0122110015",
    logo: "/images/cert/front end.jpg",
    certificateImage: "/images/frontend.jfif",
    certificateTitle: "Front End Web Development",
    link: null,
    verified: true,
  },
  {
    id: 2,
    title: "Certified Mern Stack Web Developer",
    issuer: "EVS Professional Training Institute",
    issueDate: "Aug 2023",
    credentialId: "L0122110015",
    logo: "/images/cert/mern stack.jpg",
    certificateImage: "/images/frontend.jfif",
    certificateTitle: "Front End Web Development",
    link: null,
    verified: true,
  },
  {
    id: 3,
    title: "C++ Essentials 1",
    issuer: "Cisco",
    issueDate: "Dec 2024",
    credentialId: null,
    logo: "/images/c-essentials-1.png",
    certificateImage: "/images/c-essentials-1.png",
    certificateTitle: "C++ Essentials 1",
    link: "https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url",
    issuerLink: "https://www.netacad.com/",
    verified: true,
  },
];

const Certifications = () => {
  return (
    <>
      <div className="animated-border my-6 overflow-hidden md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  Licenses & Certifications
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FaCertificate className="text-xl text-SkyBlue" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue/70 delay-200"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {certificationsData.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group relative rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                >
                  <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Left Section - Main Info */}
                    <div className="flex-1">
                      <div className="mb-4 flex items-start gap-4">
                        {/* Issuer Logo */}
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 overflow-hidden rounded-xl border-2 border-lightBorder transition-colors duration-300 group-hover:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover:border-darkHover">
                            <Image
                              width={48}
                              height={48}
                              src={cert.logo || "/placeholder.svg"}
                              alt={`${cert.issuer} Logo`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Certificate Details */}
                        <div className="min-w-0 flex-1">
                          <h2 className="mb-1 cursor-pointer text-lg font-semibold text-lightPrimarytext transition-colors duration-300 hover:underline group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                            {cert.title}
                          </h2>

                          <div className="mb-2 flex items-center gap-2">
                            <p className="font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                              {cert.issuerLink ? (
                                <Link
                                  href={cert.issuerLink}
                                  target="_blank"
                                  className="flex items-center gap-1 transition-colors duration-300 hover:text-SkyBlue dark:hover:text-darkHover"
                                >
                                  {cert.issuer}
                                  <FaExternalLinkAlt className="text-xs" />
                                </Link>
                              ) : (
                                cert.issuer
                              )}
                            </p>
                            {cert.verified && (
                              <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 dark:bg-green-900/30">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                                  Verified
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 rounded-full bg-SkyBlue/10 px-3 py-1 dark:bg-SkyBlue/20">
                              <FaCalendarAlt className="text-xs text-SkyBlue" />
                              <span className="font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                                Issued {cert.issueDate}
                              </span>
                            </div>

                            {cert.credentialId && (
                              <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-3 py-1 dark:from-SkyBlue/20 dark:to-darkHover/20">
                                <FaIdCard className="text-xs text-SkyBlue" />
                                <span className="font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                                  ID: {cert.credentialId}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Certificate Preview */}
                    <div className="flex-shrink-0">
                      <div className="group/cert relative">
                        {cert.link ? (
                          <Link
                            href={cert.link}
                            target="_blank"
                            aria-label={`View certificate: ${cert.certificateTitle}`}
                          >
                            <div className="relative cursor-pointer rounded-xl border border-lightBorder bg-white p-3 transition-all duration-300 hover:border-SkyBlue hover:shadow-md dark:border-darkPrimaryGray/30 dark:bg-discordDark dark:hover:border-darkHover">
                              <Image
                                width={120}
                                height={80}
                                src={
                                  cert.certificateImage ||
                                  "/images/c-essentials-1.png"
                                }
                                alt={cert.certificateTitle}
                                className="w-30 h-20 rounded-lg object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-SkyBlue/10 opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100">
                                <FaExternalLinkAlt className="text-lg text-SkyBlue" />
                              </div>
                            </div>
                            <p className="mt-2 text-center text-sm font-semibold text-lightPrimarytext transition-colors duration-300 group-hover/cert:text-SkyBlue dark:text-white dark:group-hover/cert:text-darkHover">
                              {cert.certificateTitle}
                            </p>
                          </Link>
                        ) : (
                          <div>
                            <div className="relative rounded-xl border border-lightBorder bg-white p-3 dark:border-darkPrimaryGray/30 dark:bg-discordDark">
                              <Image
                                width={120}
                                height={80}
                                src={
                                  cert.certificateImage || "/placeholder.svg"
                                }
                                alt={cert.certificateTitle}
                                className="h-20 rounded-lg object-cover md:w-full"
                              />
                            </div>
                            <p className="mt-2 text-center text-sm font-semibold text-lightPrimarytext dark:text-white">
                              {cert.certificateTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
