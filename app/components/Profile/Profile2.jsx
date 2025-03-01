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
      <div className="rounded-t-lg bg-white dark:bg-discordDark sm:rounded-xl">
        <div>
          <Image
            width={300}
            height={201}
            src="/images/linkedin banner.png"
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
                src="/images/profile.jpg"
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
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
                  src="/images/motivecoder_logo.jfif"
                  alt="motivecoder"
                  className="cursor-pointer"
                />
                <p className="cursor-pointer text-sm font-semibold hover:text-SkyBlue hover:underline">
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
                  src="/images/vupakistan_logo.jfif"
                  alt="motivecoder"
                  className="cursor-pointer"
                />
                <p className="cursor-pointer text-sm font-semibold hover:text-SkyBlue hover:underline">
                  Virtual University
                </p>
              </Link>
            </div>
            <div className="w-full max-w-[332px] xl:max-w-[500px]">
              <h1 className="text-2xl font-semibold leading-8">
                Muhammad Asad
              </h1>
              <div className="text-wrap text-base leading-5">
                Front-End Developer | Skilled in Next.js, React.js, Redux
                Toolkit, Tailwind CSS, JavaScript, and TypeScript | Crafting
                Scalable and Interactive Web Applications
              </div>
              <div className="mt-2 flex">
                <span className="text-sm leading-5 text-darkPrimaryGray">
                  Lahore, Punjab, Pakistan.
                </span>
                <span
                  onClick={handleContactModal}
                  className="ml-3 block cursor-pointer text-sm font-semibold text-SkyBlue hover:underline md:hidden"
                >
                  Contact Info
                </span>
              </div>
              <button
                onClick={openWhatsApp}
                className="mt-3 flex h-8 w-full max-w-[113px] items-center justify-center gap-2 rounded-full bg-SkyBlue text-black"
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
