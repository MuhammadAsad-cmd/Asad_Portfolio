import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications = () => {
  return (
    <>
      <div className="animated-border my-6 md:rounded-xl">
        <div className="bg-white dark:bg-discordDark">
          <div className="p-[19px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">
                  Licenses & certifications
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
              <div>
                <Image
                  width={48}
                  height={48}
                  src="/images/evs.jfif"
                  alt="Vu Logo"
                />
              </div>
              <div>
                <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
                  Certified Front End Web Development
                </h2>
                <p className="cursor-pointer text-sm">
                  EVS Professional Training Institute
                </p>
                <p className="ShowH text-[13px]">Issued Aug 2023</p>
                <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="rounded-lg border dark:border-darkSecondaryGray">
                    <Image
                      width={106}
                      height={56}
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
            <div className="mt-3 flex gap-2 border-b pb-4 dark:border-darkSecondaryGray">
              <div>
                <Image
                  width={48}
                  height={48}
                  src="/images/evs.jfif"
                  alt="Vu Logo"
                />
              </div>
              <div>
                <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
                  Certified Mern Stack Web Developer
                </h2>
                <p className="cursor-pointer text-sm">
                  EVS Professional Training Institute
                </p>
                <p className="ShowH text-[13px]">Issued Aug 2023</p>
                <p className="ShowH text-[13px]">Credential ID: L0122110015</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="rounded-lg border dark:border-darkSecondaryGray">
                    <Image
                      width={106}
                      height={56}
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
                  src="/images/c-essentials-1.png"
                  alt="C++"
                />
              </div>
              <div>
                <h2 className="cursor-pointer text-base font-semibold hover:text-SkyBlue hover:underline">
                  C++ Essentials 1
                </h2>
                <p className="cursor-pointer text-sm">Cisco</p>
                <p className="ShowH text-[13px]">Issued Dec 2024</p>
                <p className="ShowH text-[13px]">
                  Issue by{" "}
                  <span>
                    {" "}
                    <Link
                      className="text-SkyBlue hover:text-lightHover dark:hover:text-darkHover"
                      href="https://www.netacad.com/"
                    >
                      {" "}
                      Cisco{" "}
                    </Link>{" "}
                  </span>
                </p>
                <Link href="https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url">
                  <div className="mt-3 flex items-center gap-3">
                    <div className="rounded-lg border dark:border-darkSecondaryGray">
                      <Image
                        width={106}
                        height={56}
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
          className="ShowH flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t dark:border-darkSecondaryGray duration-200 ease-in-out hover:bg-discordDark"
        >
          <p className="text-base font-semibold">Show all</p>
          <IoMdArrowRoundForward className="text-xl" />
        </Link> */}
        </div>
      </div>
    </>
  );
};

export default Certifications;
