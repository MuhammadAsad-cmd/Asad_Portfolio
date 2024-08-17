"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import ContactModal from "../ContactModal/ContactModal";

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleContactModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="bg-raisin-black rounded-xl">
        <div>
          <Image
            width={300}
            height={201}
            unoptimized
            src="/images/banner.jfif"
            alt="banner"
            className="w-full rounded-t-xl"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="bg-[#1b1f23] w-[120px] md:w-[160px] h-[120px] md:h-[160px] border-4 border-[#1b1f23] -mt-20 md:-mt-32 rounded-full">
              <Image
                width={160}
                height={160}
                unoptimized
                src="/images/profileimg.jfif"
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full hover:bg-[#2c2f33] flex items-center justify-center -mt-5">
              <svg
                role="img"
                aria-hidden="false"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                data-test-icon="edit-medium"
                fill="#FFFFFFE6"
              >
                <path d="M21.7,2.3c-1.1-1.1-2.9-1.1-4,0L15.1,4.9L19.1,9l2.6-2.6C22.8,5.1,22.8,3.4,21.7,2.3z M14.1,5.9L3,17v4h4L18.1,9.9L14.1,5.9z"></path>
              </svg>
            </div>
          </div>{" "}
          <div className="mt-2 relative">
            <div className="absolute w-[232px] lg:block hidden right-3">
              <Link
                href="https://www.linkedin.com/company/motivecoder/"
                className="flex items-center gap-3 mb-2"
              >
                <Image
                  width={32}
                  height={32}
                  unoptimized
                  src="/images/motivecoder_logo.jfif"
                  alt="motivecoder"
                  className="cursor-pointer"
                />
                <p className="text-sm font-semibold hover:text-Sky-Blue cursor-pointer hover:underline">
                  Motive Coder
                </p>
              </Link>
              <Link
                href="https://www.linkedin.com/school/vupakistan/"
                className="flex items-center gap-3"
              >
                <Image
                  width={32}
                  height={32}
                  unoptimized
                  src="/images/vupakistan_logo.jfif"
                  alt="motivecoder"
                  className="cursor-pointer"
                />
                <p className="text-sm font-semibold hover:text-Sky-Blue cursor-pointer hover:underline">
                  Virtual University
                </p>
              </Link>
            </div>
            <div className="max-w-[332px] xl:max-w-[500px] w-full">
              <h1 className="text-2xl font-semibold leading-8">
                Muhammad Asad
              </h1>
              <div className="text-base leading-5 text-wrap">
                Skilled Frontend Developer | Proficient in React, Next.js,
                JavaScript, Redux Toolkit, and Tailwind CSS
              </div>
              <div className="mt-2 flex">
                <span className="text-[#a4a5a7] text-sm leading-5">
                  Lahore, Punjab, Pakistan.
                </span>
                <span
                  onClick={handleContactModal}
                  className="hover:underline ml-3 md:hidden block cursor-pointer text-sm font-semibold text-Sky-Blue"
                >
                  Contact Info
                </span>
              </div>
              <button className="flex mt-3 items-center justify-center h-8 rounded-full text-black w-full gap-2 max-w-[113px] bg-Sky-Blue">
                <BsSendFill className="text-lg" />
                <p className="text-base font-semibold">Message</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && <ContactModal onClose={handleCloseModal} />}
    </>
  );
};

export default Profile;
