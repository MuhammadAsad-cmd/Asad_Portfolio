// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// const Recommendations = () => {
//   const [activeTab, setActiveTab] = useState("received");

//   return (
//     <>
//       <div className="animated-border my-6 md:rounded-xl">
//         <div className="bg-white dark:bg-discordDark">
//           <div className="">
//             <div className="flex items-center justify-between px-4 pt-5">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
//                 <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
//                   Recommendation
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center gap-5 border-b px-4 pt-5 dark:border-darkSecondaryGray">
//               <button
//                 className={`border-b-2 pb-3 ${activeTab === "received" ? "border-[#37c898] font-semibold text-[#37c898]" : "border-transparent font-medium"}`}
//                 onClick={() => setActiveTab("received")}
//               >
//                 Received
//               </button>
//               <button
//                 className={`border-b-2 pb-3 ${activeTab === "given" ? "border-[#37c898] font-semibold text-[#37c898]" : "border-transparent font-medium"}`}
//                 onClick={() => setActiveTab("given")}
//               >
//                 Given
//               </button>
//             </div>

//             <div className="p-4">
//               {activeTab === "received" ? (
//                 <div className="mb-4 flex flex-col items-start gap-y-3 sm:flex-row">
//                   <Link
//                     href="/https://www.linkedin.com/in/ali-shan-1798a4229"
//                     target="_blank"
//                     className="size-12 flex-shrink-0"
//                   >
//                     <Image
//                       width={48}
//                       height={48}
//                       src="/images/ali-shan.jpeg"
//                       alt="Profile"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                   </Link>
//                   <div className="sm:ml-4">
//                     <Link
//                       href="/https://www.linkedin.com/in/ali-shan-1798a4229"
//                       target="_blank"
//                       className="hover:text-SkyBlue hover:underline"
//                     >
//                       <h3 className="text-base font-semibold">Ali Shan </h3>
//                     </Link>
//                     <p className="text-sm ">
//                       Web Developer Mern Stack | Front End | jQuery | Node.js |
//                       React.js Express.js | MongoDB | HTML | CSS | Javascript |
//                       Bootstrap
//                     </p>
//                     {/* Date and Relationship */}
//                     <p className=" mb-4 text-sm text-[#83878a]">
//                       November 14, 2024, Ali and Muhammad studied together
//                     </p>
//                     {/* Recommendation Text */}
//                     <p className="mt-5 text-sm">
//                       I had the pleasure of studying and working closely with
//                       Muhammad Asad on several projects. Asad is an incredibly
//                       talented and dedicated individual who consistently
//                       demonstrates a strong grasp of technical skills,
//                       especially in Web Development. His problem-solving
//                       abilities, combined with his proactive attitude, make him
//                       an excellent team member. Asad&apos;s ability to adapt
//                       quickly to new challenges and his commitment to delivering
//                       high-quality work are truly commendable. I highly
//                       recommend Asad for any role that requires technical
//                       expertise and a collaborative mindset.
//                     </p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="mb-4 flex flex-col items-start gap-y-3 sm:flex-row">
//                   <Link
//                     href="/https://www.linkedin.com/in/ali-shan-1798a4229"
//                     target="_blank"
//                     className="size-12 flex-shrink-0"
//                   >
//                     <Image
//                       width={48}
//                       height={48}
//                       src="/images/ali-shan.jpeg"
//                       alt="Profile"
//                       className="h-full w-full rounded-full object-cover"
//                     />
//                   </Link>
//                   <div className="sm:ml-4">
//                     <Link
//                       href="/https://www.linkedin.com/in/ali-shan-1798a4229"
//                       target="_blank"
//                       className="hover:text-SkyBlue hover:underline"
//                     >
//                       <h3 className="text-base font-semibold">Ali Shan </h3>
//                     </Link>
//                     <p className="text-sm ">
//                       Web Developer Mern Stack | Front End | jQuery | Node.js |
//                       React.js Express.js | MongoDB | HTML | CSS | Javascript |
//                       Bootstrap
//                     </p>
//                     {/* Date and Relationship */}
//                     <p className=" mb-4 text-sm text-[#83878a]">
//                       November 14, 2024, Ali and Muhammad studied together
//                     </p>
//                     {/* Recommendation Text */}
//                     <p className="mt-5 text-sm">
//                       I had the pleasure of studying alongside Ali Shan and
//                       wholeheartedly recommend him. Ali is an exceptional
//                       student with a keen understanding of the material. His
//                       collaborative approach, dedication to excellence, and
//                       positive attitude make him a standout peer. I am confident
//                       that Ali will excel in any academic or professional
//                       pursuit he undertakes.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recommendations;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaQuoteLeft,
  FaLinkedin,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

const recommendationsData = {
  received: [
    {
      id: 1,
      name: "Ali Shan",
      title:
        "Web Developer Mern Stack | Front End | jQuery | Node.js | React.js Express.js | MongoDB | HTML | CSS | Javascript | Bootstrap",
      profileImage: "/images/ali-shan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/ali-shan-1798a4229",
      date: "November 14, 2024",
      relationship: "Ali and Muhammad studied together",
      recommendation:
        "I had the pleasure of studying and working closely with Muhammad Asad on several projects. Asad is an incredibly talented and dedicated individual who consistently demonstrates a strong grasp of technical skills, especially in Web Development. His problem-solving abilities, combined with his proactive attitude, make him an excellent team member. Asad's ability to adapt quickly to new challenges and his commitment to delivering high-quality work are truly commendable. I highly recommend Asad for any role that requires technical expertise and a collaborative mindset.",
    },
  ],
  given: [
    {
      id: 1,
      name: "Ali Shan",
      title:
        "Web Developer Mern Stack | Front End | jQuery | Node.js | React.js Express.js | MongoDB | HTML | CSS | Javascript | Bootstrap",
      profileImage: "/images/ali-shan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/ali-shan-1798a4229",
      date: "November 14, 2024",
      relationship: "Ali and Muhammad studied together",
      recommendation:
        "I had the pleasure of studying alongside Ali Shan and wholeheartedly recommend him. Ali is an exceptional student with a keen understanding of the material. His collaborative approach, dedication to excellence, and positive attitude make him a standout peer. I am confident that Ali will excel in any academic or professional pursuit he undertakes.",
    },
  ],
};

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState("received");

  return (
    <>
      <div className="animated-border my-6 overflow-hidden md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  Recommendations
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FaQuoteLeft className="text-xl text-SkyBlue" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="mb-6 flex items-center gap-1 rounded-xl bg-lightbg dark:bg-darkSecondaryGray">
              <button
                className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all duration-300 ${
                  activeTab === "received"
                    ? "bg-gradient-to-r from-SkyBlue to-lightHover text-white shadow-lg dark:to-darkHover"
                    : "text-lightSecondarytext hover:text-SkyBlue dark:text-darkPrimaryGray dark:hover:text-darkHover"
                }`}
                onClick={() => setActiveTab("received")}
              >
                Received ({recommendationsData.received.length})
              </button>
              <button
                className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all duration-300 ${
                  activeTab === "given"
                    ? "bg-gradient-to-r from-SkyBlue to-lightHover text-white shadow-lg dark:to-darkHover"
                    : "text-lightSecondarytext hover:text-SkyBlue dark:text-darkPrimaryGray dark:hover:text-darkHover"
                }`}
                onClick={() => setActiveTab("given")}
              >
                Given ({recommendationsData.given.length})
              </button>
            </div>

            {/* Recommendations Content */}
            <div className="space-y-6">
              {recommendationsData[activeTab].map((rec) => (
                <div
                  key={rec.id}
                  className="group relative rounded-xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                >
                  {/* Quote Icon */}
                  <div className="absolute right-4 top-4 text-SkyBlue/20 dark:text-SkyBlue/30">
                    <FaQuoteLeft className="text-3xl" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    {/* Profile Section */}
                    <div className="flex-shrink-0">
                      <Link
                        href={rec.linkedinUrl}
                        target="_blank"
                        className="group/profile"
                      >
                        <div className="relative">
                          <div className="border-3 h-16 w-16 overflow-hidden rounded-full border-lightBorder transition-colors duration-300 group-hover/profile:border-SkyBlue dark:border-darkPrimaryGray/30 dark:group-hover/profile:border-darkHover">
                            <Image
                              width={64}
                              height={64}
                              src={rec.profileImage || "/placeholder.svg"}
                              alt={`${rec.name} Profile`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0077B5] dark:border-discordDark">
                            <FaLinkedin className="text-xs text-white" />
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Content Section */}
                    <div className="min-w-0 flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <Link
                          href={rec.linkedinUrl}
                          target="_blank"
                          className="group/name inline-block"
                        >
                          <h3 className="text-lg font-semibold text-lightPrimarytext transition-colors duration-300 group-hover/name:text-SkyBlue dark:text-white dark:group-hover/name:text-darkHover">
                            {rec.name}
                          </h3>
                        </Link>
                        <p className="mt-1 line-clamp-2 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                          {rec.title}
                        </p>

                        {/* Meta Information */}
                        <div className="mt-3 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-1 rounded-full bg-SkyBlue/10 px-3 py-1 dark:bg-SkyBlue/20">
                            <FaCalendarAlt className="text-xs text-SkyBlue" />
                            <span className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                              {rec.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-SkyBlue/10 to-lightHover/10 px-3 py-1 dark:from-SkyBlue/20 dark:to-darkHover/20">
                            <FaUserFriends className="text-xs text-SkyBlue" />
                            <span className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                              {rec.relationship}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Recommendation Text */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                        <blockquote className="pl-6 leading-relaxed text-lightPrimarytext dark:text-white">
                          <p className="text-sm italic">
                            &quot;{rec.recommendation}&quot;
                          </p>
                        </blockquote>
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

export default Recommendations;
