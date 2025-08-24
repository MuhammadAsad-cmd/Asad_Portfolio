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
      <Link href="/" title="Go to homepage" className="flex items-center gap-2">
        <FaCode
          className="text-4xl text-SkyBlue"
          title="Asad.dev logo"
          aria-label="Site logo"
        />
        <h1
          className="text-2xl font-semibold text-black dark:text-white"
          title="Asad.dev"
        >
          Asad
          <span className="bg-gradient-to-r from-black to-black/20 bg-clip-text text-transparent dark:from-white dark:to-white/20">
            .dev
          </span>
        </h1>
      </Link>

      <div className="flex items-center justify-center gap-4 text-xl">
        <Link
          href="https://www.linkedin.com/in/masadali/"
          target="_blank"
          aria-label="LinkedIn profile"
          title="LinkedIn – Muhammad Asad"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <TfiLinkedin />
        </Link>
        <Link
          href="https://github.com/MuhammadAsad-cmd"
          target="_blank"
          aria-label="GitHub profile"
          title="GitHub – Muhammad Asad"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.instagram.com/muhammadasad9017"
          target="_blank"
          aria-label="Instagram profile"
          title="Instagram – @muhammadasad9017"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~01a30bffb100551bb2?mp_source=share"
          target="_blank"
          aria-label="Upwork profile"
          title="Upwork – Muhammad Asad"
          className="text-lightSecondarytext duration-300 ease-in-out hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-SkyBlue"
        >
          <SiUpwork />
        </Link>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 md:gap-6">
        <NavLink href="/details/services" title="Go to Services page">
          Services
        </NavLink>
        <NavLink href="/details/experience" title="Go to Experience page">
          Experience
        </NavLink>
        <NavLink href="/details/projects" title="Go to Projects page">
          Projects
        </NavLink>
        <NavLink href="/details/skills" title="Go to Skills page">
          Skills
        </NavLink>
        <NavLink href="#contact" title="Jump to Contact section">
          Contact
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
