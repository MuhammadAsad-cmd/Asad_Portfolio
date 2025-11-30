"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";

const recommendationsData = {
  received: [
    {
      id: 1,
      name: "Ali Shan",
      title: "Web Developer Mern Stack | Front End | jQuery | Node.js",
      profileImage: "/images/ali-shan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/ali-shan-1798a4229",
      date: "November 14, 2024",
      relationship: "Ali and Muhammad studied together",
      recommendation:
        "I had the pleasure of studying and working closely with Muhammad Asad on several projects. Asad is an incredibly talented and dedicated individual who consistently demonstrates a strong grasp of technical skills, especially in Web Development. His problem-solving abilities, combined with his proactive attitude, make him an excellent team member. Asad's ability to adapt quickly to new challenges and his commitment to delivering high-quality work are truly commendable.",
    },
  ],
  given: [
    {
      id: 1,
      name: "Ali Shan",
      title: "Web Developer Mern Stack | Front End | jQuery | Node.js",
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
    <div className="animated-border my-6 overflow-hidden md:rounded-xl">
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header & Tabs */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                Recommendations
              </h1>
              <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                Feedback from colleagues and peers
              </p>
            </div>
          </div>

          {/* Clean Tabs */}
          <div className="flex gap-6 border-b border-lightBorder dark:border-darkSecondaryGray">
            {["received", "given"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-sm font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "text-SkyBlue"
                    : "text-lightSecondarytext hover:text-lightPrimarytext dark:text-darkPrimaryGray dark:hover:text-white"
                }`}
              >
                {tab} ({recommendationsData[tab].length})
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-SkyBlue"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {recommendationsData[activeTab].map((rec) => (
            <div key={rec.id} className="relative pl-0 md:pl-8">
              {/* Large Quote Decoration */}
              <div className="absolute -left-2 -top-2 hidden text-6xl text-lightBorder/30 dark:text-darkSecondaryGray md:block">
                <FaQuoteLeft />
              </div>

              <div className="relative z-10">
                <p className="mb-6 text-lg leading-relaxed italic text-lightPrimarytext dark:text-white">
                  &quot;{rec.recommendation}&quot;
                </p>

                {/* Author Info - Clean Row */}
                <div className="flex items-center gap-4">
                  <Link href={rec.linkedinUrl} target="_blank" className="group">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={rec.profileImage || "/placeholder.svg"}
                        alt={rec.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div>
                    <Link href={rec.linkedinUrl} target="_blank">
                      <h3 className="font-bold text-lightPrimarytext hover:underline dark:text-white">
                        {rec.name}
                      </h3>
                    </Link>
                    <p className="line-clamp-1 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                      {rec.title.split("|")[0]}
                    </p>
                    <p className="mt-0.5 text-xs text-lightSecondarytext/70 dark:text-darkPrimaryGray/70">
                      {rec.date} • {rec.relationship}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;