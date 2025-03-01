"use client";
import { openSidebar } from "@/redux/sidebarSlice";
import Link from "next/link";
import React from "react";
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

  return (
    <>
      <div className="h-16 w-full bg-white transition-all duration-300 dark:bg-discordDark md:mt-6 md:rounded-lg md:border md:border-lightBorder md:dark:border-discordDark">
        <div className="flex h-full w-full items-center justify-between">
          <div
            onClick={() => dispatch(openSidebar("leftSidebar"))}
            className="hidden h-full cursor-pointer items-center justify-center rounded-l-lg bg-white p-4 dark:bg-lightPrimarytext md:flex"
          >
            <p className="text-3xl text-lightPrimarytext dark:text-darkPrimaryGray">
              <HiMenuAlt1 />
            </p>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <FaCode className="text-4xl text-SkyBlue" />
                <h1 className="text-2xl font-semibold text-black dark:text-white">
                  Asad
                  <span className="bg-gradient-to-r from-black to-black/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
                    .dev
                  </span>
                </h1>
              </Link>
            </div>
            <div className="hidden w-full items-center justify-around px-4 lg:flex">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="hidden items-center gap-4 text-xl max-lg:justify-center md:flex">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/asad189"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <TfiLinkedin />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/MuhammadAsad-cmd"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/muhammadasad9017"
                className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex h-full items-center justify-center gap-4 rounded-r-lg p-4 md:gap-2 lg:bg-white lg:dark:bg-lightPrimarytext">
            <div
              onClick={() => dispatch(toggleTheme())}
              className="cursor-pointer text-2xl text-lightPrimarytext dark:text-darkPrimaryGray md:text-3xl "
            >
              {isDark ? <LuMoon /> : <LuSun />}
            </div>
            <div
              onClick={() => dispatch(openSidebar("rightSidebar"))}
              className="border-darkGray flex size-9 cursor-pointer items-center justify-center rounded-md border text-xl lg:hidden"
            >
              <LuMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Left Sidebar */}
      <Sidebar id="leftSidebar" position="left">
        <LeftSidebar />
      </Sidebar>

      {/* Right Sidebar */}
      <Sidebar id="rightSidebar" position="right">
        <RightSidebar />
      </Sidebar>
    </>
  );
};

export default Header;
