import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
  const ServicesData = [
    { name: "Website Development" },
    { name: "UI/UX Design Implementation" },
    { name: "E-commerce Solutions" },
    { name: "Web Application Development" },
    { name: "API Integration" },
    { name: "Performance Optimization" },
    { name: "Front End Development" },
  ];

  return (
    <>
      <div className="mb-10 rounded-lg bg-raisin-black">
        <div className="flex items-center justify-between px-5 pt-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <FaArrowLeft />
            </Link>
            <p className="text-xl font-semibold">Services</p>
          </div>
          {/* <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-[#2c2f33]">
              <AiOutlinePlus className="text-2xl" />
            </div>
          </div> */}
        </div>
        <div className="px-5 pb-5">
          <div>
            {ServicesData.map((skill, index) => (
              <h2
                key={index}
                className="cursor-pointer border-b border-darkGray py-6 text-base font-semibold hover:text-Sky-Blue hover:underline"
              >
                {skill.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
