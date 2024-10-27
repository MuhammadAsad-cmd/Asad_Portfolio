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

  const openWhatsApp = () => {
    const phoneNumber = "923193148320";
    const message =
      "Hello! I found your services online and would like to inquire more about your offerings. Could you please provide me with further details?"; // Customize your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="rounded-xl bg-raisin-black">
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
            <div className="-mt-20 h-[120px] w-[120px] rounded-full border-4 border-[#1b1f23] bg-[#1b1f23] md:-mt-32 md:h-[160px] md:w-[160px]">
              <Image
                width={160}
                height={160}
                unoptimized
                src="/images/profileimg.jfif"
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
            {/* <div className="w-10 h-10 rounded-full hover:bg-[#2c2f33] flex items-center justify-center -mt-5">
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
            </div> */}
          </div>{" "}
          <div className="relative mt-2">
            <div className="absolute right-3 hidden w-[232px] lg:block">
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/motivecoder/"
                className="mb-2 flex items-center gap-3"
              >
                <Image
                  width={32}
                  height={32}
                  unoptimized
                  src="/images/motivecoder_logo.jfif"
                  alt="motivecoder"
                  className="cursor-pointer"
                />
                <p className="cursor-pointer text-sm font-semibold hover:text-Sky-Blue hover:underline">
                  Motive Coder
                </p>
              </Link>
              <Link
                target="_blank"
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
                <p className="cursor-pointer text-sm font-semibold hover:text-Sky-Blue hover:underline">
                  Virtual University
                </p>
              </Link>
            </div>
            <div className="w-full max-w-[332px] xl:max-w-[500px]">
              <h1 className="text-2xl font-semibold leading-8">
                Muhammad Asad
              </h1>
              <div className="text-wrap text-base leading-5">
                Skilled Frontend Developer | Proficient in React, Next.js,
                JavaScript, Redux Toolkit, and Tailwind CSS
              </div>
              <div className="mt-2 flex">
                <span className="text-sm leading-5 text-[#a4a5a7]">
                  Lahore, Punjab, Pakistan.
                </span>
                <span
                  onClick={handleContactModal}
                  className="ml-3 block cursor-pointer text-sm font-semibold text-Sky-Blue hover:underline md:hidden"
                >
                  Contact Info
                </span>
              </div>
              <button
                onClick={openWhatsApp}
                className="mt-3 flex h-8 w-full max-w-[113px] items-center justify-center gap-2 rounded-full bg-Sky-Blue text-black"
              >
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
