"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";

const Certifications = () => {
  return (
    <>
      <div className="my-2 rounded-lg bg-raisin-black">
        <div className="p-[19px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Licenses & certifications</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2 border-b border-darkGray pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/evs.jfif"
                alt="Vu Logo"
              />
            </div>
            <div>
              <h2 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                Certified Front End Web Development
              </h2>
              <p className="cursor-pointer text-sm">
                EVS Professional Training Institute
              </p>
              <p className="ShowH text-[13px]">Issued Aug 2023</p>
              <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="rounded-lg border border-darkGray">
                  <Image
                    width={106}
                    height={56}
                    unoptimized
                    src="/images/frontend.jfif"
                    alt="kanban"
                    className="h-14 rounded-lg object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">
                  Front End Web Development
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-2 pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/evs.jfif"
                alt="Vu Logo"
              />
            </div>
            <div>
              <h2 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                Certified Mern Stack Web Developer
              </h2>
              <p className="cursor-pointer text-sm">
                EVS Professional Training Institute
              </p>
              <p className="ShowH text-[13px]">Issued Aug 2023</p>
              <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="rounded-lg border border-darkGray">
                  <Image
                    width={106}
                    height={56}
                    unoptimized
                    src="/images/frontend.jfif"
                    alt="kanban"
                    className="h-14 rounded-lg object-cover"
                  />
                </div>
                <p className="text-sm font-semibold">
                  Front End Web Development
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-2 pb-4">
            <div>
              <Image
                width={48}
                height={48}
                unoptimized
                src="/images/c-essentials-1.png"
                alt="C++"
              />
            </div>
            <div>
              <h2 className="cursor-pointer text-base font-semibold hover:text-Sky-Blue hover:underline">
                C++ Essentials 1
              </h2>
              <p className="cursor-pointer text-sm">Cisco</p>
              <p className="ShowH text-[13px]">Issued Dec 2024</p>
              <p className="ShowH text-[13px]">
                Issue by{" "}
                <span>
                  {" "}
                  <Link
                    className="text-Sky-Blue"
                    href="https://www.netacad.com/"
                  >
                    {" "}
                    Cisco{" "}
                  </Link>{" "}
                </span>
              </p>
              <Link href="https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url">
                <div className="mt-3 flex items-center gap-3">
                  <div className="rounded-lg border border-darkGray">
                    <Image
                      width={106}
                      height={56}
                      unoptimized
                      src="/images/c-essentials-1.png"
                      alt="c++"
                      className="h-14 rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold">C++ Essentials 1</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <Link
          href="/details/education"
          className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t border-darkGray duration-200 ease-in-out hover:bg-[#2c2f33]"
        >
          <p className="text-base font-semibold">Show all</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Link> */}
      </div>
    </>
  );
};

export default Certifications;
