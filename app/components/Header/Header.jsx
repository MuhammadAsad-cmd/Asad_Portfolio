"use client";
import { openSidebar } from "@/redux/sidebarSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";
import { TfiLinkedin } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebars/Sidebar";
import LeftSidebar from "../Sidebars/LeftSidebar";
import { toggleTheme } from "@/redux/themeSlice";
import RightSidebar from "../Sidebars/RightSidebar";
import NavLink from "../Navlink/Navlink";

const Header = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events to toggle blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[999] h-16 w-full transition-all duration-300
          ${
            isScrolled
              ? "bg-white/50 shadow-lg backdrop-blur-md dark:bg-discordDark/70"
              : "bg-white dark:bg-discordDark"
          }
          md:top-6 md:rounded-lg md:border md:border-lightBorder md:dark:border-discordDark`}
      >
        <div className="flex h-full w-full items-center justify-between">
          <div
            onClick={() => dispatch(openSidebar("leftSidebar"))}
            className="hidden h-full cursor-pointer items-center justify-center rounded-l-lg bg-white p-4 dark:bg-lightPrimarytext md:flex"
          >
            <HiMenuAlt1 className="text-3xl text-lightPrimarytext dark:text-darkPrimaryGray" />
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <FaCode className="text-4xl text-SkyBlue" />
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                Asad
                <span className="bg-gradient-to-r from-black to-black/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
                  .dev
                </span>
              </h1>
            </Link>
            <nav className="hidden h-full w-full items-center justify-center gap-4 px-4 lg:flex">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="hidden items-center gap-4 text-xl max-lg:justify-center md:flex">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/masadali/"
                aria-label="LinkedIn profile"
                title="LinkedIn - Muhammad Asad"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <TfiLinkedin />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/MuhammadAsad-cmd"
                aria-label="GitHub profile"
                title="GitHub - Muhammad Asad"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/muhammadasad9017"
                aria-label="Instagram profile"
                title="Instagram - @muhammadasad9017"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex h-full cursor-pointer items-center justify-center gap-4 rounded-r-lg p-4 md:gap-2 lg:bg-white lg:dark:bg-lightPrimarytext">
            <div
              onClick={() => dispatch(toggleTheme())}
              className="flex h-full cursor-pointer items-center justify-center text-2xl text-lightPrimarytext dark:text-darkPrimaryGray md:text-3xl"
            >
              {isDark ? <LuMoon /> : <LuSun />}
            </div>
            <div
              onClick={() => dispatch(openSidebar("rightSidebar"))}
              className="flex size-9 cursor-pointer items-center justify-center rounded-md border text-xl dark:border-darkSecondaryGray lg:hidden"
            >
              <LuMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Left Sidebar */}
      <Sidebar id="leftSidebar" position="left">
        <LeftSidebar />
      </Sidebar>

      {/* Right Sidebar */}
      <Sidebar id="rightSidebar" position="right">
        <RightSidebar id="rightSidebar" />
      </Sidebar>
    </>
  );
};

export default Header;
