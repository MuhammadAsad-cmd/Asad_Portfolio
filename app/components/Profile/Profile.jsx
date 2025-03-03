"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import ContactModal from "../ContactModal/ContactModal";
import Code from "../Icons/Code";
import Marquee from "../Marquee/Marquee";

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
      <div className="animated-border md:rounded-xl">
        <div className="flex flex-col gap-x-6 bg-white p-4 dark:bg-discordDark max-md:gap-y-8 md:flex-row md:px-6 md:py-16">
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div className="relative size-[250px] flex-shrink-0 rounded-full border-4 bg-lightbg dark:border-[#1b1f23] md:size-[300px] lg:h-[350px] lg:w-[350px]">
              <Image
                width={160}
                height={160}
                src="/images/profile.jpg"
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <Code />
              </div>
            </div>
          </div>
          <div className="mt-2 w-full md:w-1/2 md:max-w-[500px]">
            <p className="text-base">
              <span className="text-SkyBlue">&lt;span&gt; </span>
              Hey, I&apos;m Muhammad Asad
              <span className="text-SkyBlue"> &lt;/span&gt;</span>
            </p>

            <h1 className="mt-5 text-2xl font-semibold md:text-4xl lg:text-5xl">
              <span className="text-SkyBlue">&#123;</span> Front End Web
              Developer
              <span className="text-SkyBlue"> &#125; </span>
            </h1>

            <p className="mt-3 text-base">
              <span className="text-SkyBlue">&lt;p&gt; </span>
              With expertise in React.js, Next.js, Redux Toolkit, and Tailwind
              CSS, I craft fast, scalable, and modern web applications.
              <span className="text-SkyBlue"> &lt;/p&gt;</span>
            </p>

            <Marquee />

            <div className="mt-2 flex flex-col gap-y-2 sm:flex-row">
              <span className="text-sm leading-5 text-darkPrimaryGray">
                Lahore, Punjab, Pakistan.
              </span>
              <span
                onClick={handleContactModal}
                className="block cursor-pointer text-sm font-semibold text-SkyBlue hover:underline md:ml-3 md:hidden"
              >
                Contact Info
              </span>
            </div>
            <button
              onClick={openWhatsApp}
              className="mt-3 flex h-8 w-full max-w-[113px] items-center justify-center gap-2 rounded-full bg-SkyBlue text-black hover:bg-lightHover dark:hover:bg-darkHover"
            >
              <BsSendFill className="text-lg" />
              <p className="text-base font-semibold">Message</p>
            </button>
          </div>
        </div>
      </div>
      {isOpenModal && <ContactModal onClose={handleCloseModal} />}
    </>
  );
};

export default Profile;
