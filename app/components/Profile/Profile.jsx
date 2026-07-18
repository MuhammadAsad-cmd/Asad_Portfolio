"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsSendFill, BsDownload } from "react-icons/bs";
import { IoLocationOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import ContactModal from "../ContactModal/ContactModal";
import Code from "../Icons/Code";
import XLogo from "../Icons/XLogo";
import EnhancedMarquee from "../Marquee/Marquee";
import Link from "next/link";

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "923193148320";
    const message =
      "Hello Muhammad Asad! I found your portfolio online and would like to discuss a potential project. Could you please provide me with more details about your services?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <header className="animated-border overflow-hidden md:rounded-xl" role="banner">
        <div className="relative bg-white dark:bg-discordDark">
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-SkyBlue/20 to-lightHover/20 dark:to-darkHover/20"></div>
            <div className='bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%2371b7fb" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] absolute left-0 top-0 h-full w-full'></div>
          </div>

          <div className="relative flex flex-col gap-x-6 p-6 max-md:gap-y-8 md:flex-row md:px-8 md:py-10">
            <div className="flex w-full items-center justify-center md:w-1/2">
              <div
                className={`relative transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
              >
                <div className="relative size-[280px] md:size-[320px] lg:size-[380px]">
                  <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-SkyBlue via-lightHover to-SkyBlue p-1 dark:to-darkHover">
                    <div className="h-full w-full rounded-full bg-white p-2 dark:bg-discordDark">
                      <div className="group relative h-full w-full overflow-hidden rounded-full border-4 border-lightbg dark:border-darkSecondaryGray">
                        <Image
                          width={380}
                          height={380}
                          src="/images/asadimg.avif"
                          alt="Muhammad Asad — Enterprise ERP and infrastructure engineer building high-scale business systems with Next.js, Node.js, and React."
                          className="h-full w-full object-cover transition-transform duration-500"
                          priority
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-SkyBlue/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                    Available for Work
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform transition-transform duration-300 hover:scale-110">
                    <Code />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`w-full space-y-6 transition-all delay-300 duration-1000 md:w-1/2 md:max-w-[600px] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="space-y-1">
                <p className="text-base text-lightSecondarytext dark:text-darkPrimaryGray sm:text-lg">
                  Hey, I&apos;m{" "}
                  <span className="font-semibold text-lightPrimarytext dark:text-white">
                    Muhammad Asad
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight text-lightPrimarytext dark:text-white sm:text-3xl md:text-[2.35rem] lg:text-5xl">
                  Building High-Scale{" "}
                  <span className="bg-gradient-to-r from-SkyBlue to-lightHover bg-clip-text text-transparent dark:to-darkHover">
                    ERP &amp; Business Infrastructure
                  </span>
                </h1>
                <p className="max-w-xl text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray sm:text-base">
                  Full-Stack Developer{" "}
                  <span className="text-lightPrimarytext dark:text-white">
                    (Node.js, Next.js, React)
                  </span>{" "}
                  specializing in optimizing enterprise workflows, custom data
                  pipelines, and high-performance business applications.
                </p>
              </div>

              <EnhancedMarquee />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-2 text-lightSecondarytext dark:text-darkPrimaryGray">
                  <IoLocationOutline className="shrink-0 text-SkyBlue" />
                  <span className="text-sm">Lahore, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircle className="shrink-0 text-sm text-green-500" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available for Freelance
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:gap-4">
                <button
                  onClick={openWhatsApp}
                  title="Start WhatsApp Chat"
                  className="group col-span-2 flex items-center justify-center gap-2 rounded-xl bg-SkyBlue px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-SkyBlue/30 active:scale-95 sm:col-span-1 sm:min-w-[160px] sm:px-6 sm:py-3"
                >
                  <FaWhatsapp className="text-lg transition-transform group-hover:rotate-12 sm:text-xl" />
                  <span>Let&apos;s Talk</span>
                </button>

                <Link
                  href="mailto:189asadali@gmail.com"
                  className="group flex items-center justify-center gap-1.5 rounded-xl bg-SkyBlue/10 px-3 py-2.5 text-sm font-semibold text-SkyBlue transition-all duration-300 hover:bg-SkyBlue/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:min-w-[160px] sm:gap-2 sm:px-6 sm:py-3"
                >
                  <FaEnvelope className="text-base sm:text-lg" />
                  <span>Email Me</span>
                  <BsSendFill className="hidden text-xs transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:inline" />
                </Link>

                <a
                  href="/Asad Front End resume.pdf"
                  download
                  className="group flex items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-SkyBlue hover:text-SkyBlue dark:border-white/10 dark:text-white/70 dark:hover:border-SkyBlue dark:hover:text-SkyBlue sm:min-w-[160px] sm:gap-2 sm:px-6 sm:py-3"
                >
                  <BsDownload className="text-base group-hover:animate-bounce sm:text-lg" />
                  <span className="whitespace-nowrap">Download CV</span>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                  Connect:
                </span>
                <div className="flex gap-3">
                  <Link href="https://www.linkedin.com/in/masadali">
                    <button
                      title="LinkedIn Profile - Muhammad Asad"
                      aria-label="Open LinkedIn profile"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <FaLinkedin className="text-sm" />
                    </button>
                  </Link>
                  <Link href="https://github.com/MuhammadAsad-cmd">
                    <button
                      title="GitHub Profile - Muhammad Asad"
                      aria-label="Open GitHub profile"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg dark:bg-gray-700"
                    >
                      <FaGithub className="text-sm" />
                    </button>
                  </Link>
                  <Link
                    href="https://x.com/MAsad96668934"
                    target="_blank"
                    title="X (Twitter) — Muhammad Asad"
                    aria-label="Open X (Twitter) profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg dark:bg-white dark:text-neutral-900"
                  >
                    <XLogo className="h-4 w-4" />
                  </Link>
                  <Link
                    href="mailto:189asadali@gmail.com"
                    title="Send Email to Muhammad Asad"
                    aria-label="Send Email"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg dark:bg-gray-500"
                  >
                    <FaEnvelope className="text-sm" />
                  </Link>
                  {/* add instagram link */}
                  <Link target="_blank" href="https://www.instagram.com/masadali_189" title="Instagram Profile - Muhammad Asad"
                    aria-label="Open Instagram profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg dark:bg-gray-500">
                    <FaInstagram className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenModal && <ContactModal onClose={handleCloseModal} />}
    </>
  );
};

export default Profile;
