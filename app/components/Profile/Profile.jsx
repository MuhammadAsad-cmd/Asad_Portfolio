"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsSendFill, BsDownload } from "react-icons/bs";
import { IoLocationOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import ContactModal from "../ContactModal/ContactModal";
import Code from "../Icons/Code";
import EnhancedMarquee from "../Marquee/Marquee";
import Link from "next/link";

const Profile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Specialist",
    "Next.js Expert",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

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
                          src="/images/asadimg.png"
                          alt="Muhammad Asad - Professional MERN Stack Developer and Full Stack Developer based in Lahore, Pakistan. Expert in React.js, Next.js, Node.js, and MongoDB."
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
              <div className="space-y-2">
                <p className="font-mono text-lg">
                  <span className="animate-pulse text-SkyBlue">
                    &lt;span&gt;
                  </span>
                  <span className="ml-2 text-lightSecondarytext dark:text-darkPrimaryGray">
                    Hey, I&apos;m
                  </span>
                  <span className="ml-3 font-semibold text-lightPrimarytext dark:text-white">
                    Muhammad Asad
                  </span>
                  <span className="animate-pulse text-SkyBlue">
                    {" "}
                    &lt;/span&gt;
                  </span>
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex min-h-[5rem] items-center md:min-h-[6rem] lg:min-h-[7rem]">
                  <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="font-mono text-SkyBlue">&#123;</span>
                    <span className="mx-2 bg-gradient-to-r from-lightPrimarytext to-lightSecondarytext bg-clip-text text-transparent transition-all duration-500 dark:from-white dark:to-darkPrimaryGray">
                      {roles[currentRole]}
                    </span>
                    <span className="font-mono text-SkyBlue">&#125;</span>
                  </h1>
                </div>
              </div>

              <div className="mt-3">
                <p className="font-mono text-lg leading-relaxed">
                  <span className="text-SkyBlue">&lt;p&gt;</span>
                  <span className="ml-2 text-lightSecondarytext dark:text-darkPrimaryGray">
                    With <strong className="text-SkyBlue">3+ years</strong> of
                    expertise in{" "}
                    <strong className="text-lightPrimarytext dark:text-white">
                      MERN Stack (MongoDB, Express, React, Node.js)
                    </strong>{" "}
                    and{" "}
                    <strong className="text-lightPrimarytext dark:text-white">
                      Next.js
                    </strong>
                    , I craft fast, scalable, and modern web applications that
                    drive results.
                  </span>
                  <span className="text-SkyBlue"> &lt;/p&gt;</span>
                </p>
              </div>

              <EnhancedMarquee />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 text-lightSecondarytext dark:text-darkPrimaryGray">
                  <IoLocationOutline className="text-SkyBlue" />
                  <span className="text-sm">Lahore, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-sm text-green-500" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available for Freelance
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={openWhatsApp}
                  title="Start WhatsApp Chat"
                  className="group flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-SkyBlue px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-SkyBlue/30 active:scale-95"
                >
                  <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform" />
                  <span>Let's Talk</span>
                </button>

                <Link
                  href="mailto:189asadali@gmail.com"
                  className="group flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-SkyBlue/10 px-6 py-3 font-semibold text-SkyBlue transition-all duration-300 hover:bg-SkyBlue/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Email Me</span>
                  <BsSendFill className="text-xs transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>

                <a
                  href="/Asad Front End resume.pdf"
                  download
                  className="group flex min-w-[160px] items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-3 font-semibold text-slate-600 transition-all duration-300 hover:border-SkyBlue hover:text-SkyBlue dark:border-white/10 dark:text-white/70 dark:hover:border-SkyBlue dark:hover:text-SkyBlue"
                >
                  <BsDownload className="text-lg group-hover:animate-bounce" />
                  <span>Download CV</span>
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
                    href="mailto:189asadali@gmail.com"
                    title="Send Email to Muhammad Asad"
                    aria-label="Send Email"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg dark:bg-gray-500"
                  >
                    <FaEnvelope className="text-sm" />
                  </Link>
                  {/* add instagram link */}
                  <Link href="https://www.instagram.com/masadali_189" title="Instagram Profile - Muhammad Asad"
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
