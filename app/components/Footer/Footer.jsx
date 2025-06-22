"use client";
import Link from "next/link";
import React from "react";
import { FaCode, FaGithub, FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { SiUpwork } from "react-icons/si";
import NavLink from "../Navlink/Navlink";

const Footer = () => {
  return (
    <footer className="mt-8 flex flex-col items-center gap-y-4 border-t p-6 text-center dark:border-darkSecondaryGray">
      <Link href="/" className="flex items-center gap-2">
        <FaCode className="text-4xl text-SkyBlue" />
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          Asad
          <span className="bg-gradient-to-r from-black to-black/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
            .dev
          </span>
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-4 text-xl">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/masadali/"
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
        <Link
          target="_blank"
          href="https://www.upwork.com/freelancers/~01a30bffb100551bb2?mp_source=share"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <SiUpwork />
        </Link>
        {/* <Link
          target="_blank"
          href="https://www.upwork.com/freelancers/~01a30bffb100551bb2?mp_source=share"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <FaUpwork />
        </Link> */}
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 md:gap-6">
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
      {/* <p className="mb-2 text-sm text-neutral-500">
        © {new Date().getFullYear()} Asad.dev.
      </p> */}
    </footer>
  );
};

export default Footer;
