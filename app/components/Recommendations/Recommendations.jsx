"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState("received");

  return (
    <>
      <div className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="">
            <div className="flex items-center justify-between px-5 pt-5">
              <h3 className="text-xl font-semibold">Recommendations</h3>
            </div>
            <div className="flex items-center gap-5 border-b px-5 pt-5 dark:border-darkSecondaryGray">
              <button
                className={`border-b-2 pb-3 ${activeTab === "received" ? "border-[#37c898] font-semibold text-[#37c898]" : "border-transparent font-medium"}`}
                onClick={() => setActiveTab("received")}
              >
                Received
              </button>
              <button
                className={`border-b-2 pb-3 ${activeTab === "given" ? "border-[#37c898] font-semibold text-[#37c898]" : "border-transparent font-medium"}`}
                onClick={() => setActiveTab("given")}
              >
                Given
              </button>
            </div>

            <div className="p-4">
              {activeTab === "received" ? (
                <div className="mb-4 flex flex-col items-start gap-y-3 sm:flex-row">
                  <Link
                    href="/https://www.linkedin.com/in/ali-shan-1798a4229"
                    target="_blank"
                    className="size-12 flex-shrink-0"
                  >
                    <Image
                      width={48}
                      height={48}
                      src="/images/ali-shan.jpeg"
                      alt="Profile"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </Link>
                  <div className="sm:ml-4">
                    <Link
                      href="/https://www.linkedin.com/in/ali-shan-1798a4229"
                      target="_blank"
                      className="hover:text-SkyBlue hover:underline"
                    >
                      <h3 className="text-base font-semibold">Ali Shan </h3>
                    </Link>
                    <p className="text-sm ">
                      Web Developer Mern Stack | Front End | jQuery | Node.js |
                      React.js Express.js | MongoDB | HTML | CSS | Javascript |
                      Bootstrap
                    </p>
                    {/* Date and Relationship */}
                    <p className=" mb-4 text-sm text-[#83878a]">
                      November 14, 2024, Ali and Muhammad studied together
                    </p>
                    {/* Recommendation Text */}
                    <p className="mt-5 text-sm">
                      I had the pleasure of studying and working closely with
                      Muhammad Asad on several projects. Asad is an incredibly
                      talented and dedicated individual who consistently
                      demonstrates a strong grasp of technical skills,
                      especially in Web Development. His problem-solving
                      abilities, combined with his proactive attitude, make him
                      an excellent team member. Asad&apos;s ability to adapt
                      quickly to new challenges and his commitment to delivering
                      high-quality work are truly commendable. I highly
                      recommend Asad for any role that requires technical
                      expertise and a collaborative mindset.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mb-4 flex flex-col items-start gap-y-3 sm:flex-row">
                  <Link
                    href="/https://www.linkedin.com/in/ali-shan-1798a4229"
                    target="_blank"
                    className="size-12 flex-shrink-0"
                  >
                    <Image
                      width={48}
                      height={48}
                      src="/images/ali-shan.jpeg"
                      alt="Profile"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </Link>
                  <div className="sm:ml-4">
                    <Link
                      href="/https://www.linkedin.com/in/ali-shan-1798a4229"
                      target="_blank"
                      className="hover:text-SkyBlue hover:underline"
                    >
                      <h3 className="text-base font-semibold">Ali Shan </h3>
                    </Link>
                    <p className="text-sm ">
                      Web Developer Mern Stack | Front End | jQuery | Node.js |
                      React.js Express.js | MongoDB | HTML | CSS | Javascript |
                      Bootstrap
                    </p>
                    {/* Date and Relationship */}
                    <p className=" mb-4 text-sm text-[#83878a]">
                      November 14, 2024, Ali and Muhammad studied together
                    </p>
                    {/* Recommendation Text */}
                    <p className="mt-5 text-sm">
                      I had the pleasure of studying alongside Ali Shan and
                      wholeheartedly recommend him. Ali is an exceptional
                      student with a keen understanding of the material. His
                      collaborative approach, dedication to excellence, and
                      positive attitude make him a standout peer. I am confident
                      that Ali will excel in any academic or professional
                      pursuit he undertakes.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendations;
