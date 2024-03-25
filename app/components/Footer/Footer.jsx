"use client";
import { useTheme } from "@/app/ThemeContext";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <div
        className={`h-full w-full ${darkMode ? "bg-[#343f4b] text-white" : "bg-black text-white"}`}
      >
        <div className="container mx-auto max-w-screen-2xl ">
          <div className="flex flex-col-reverse justify-between gap-10 p-10 sm:flex-row sm:items-center lg:p-20">
            <div className="w-full md:w-[50%]">
              <h2 className="text-[22px] font-bold uppercase leading-8 tracking-wide text-white">
                Muhammad Asad
              </h2>
              <p className="mt-5 text-sm leading-6 text-[#EEEEEE]">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div>
              <h2>
                <span className="text-[22px] font-bold leading-8 tracking-wide text-white">
                  Social
                </span>
              </h2>
              <div className="mt-5 flex gap-5 md:items-center md:justify-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/muhammad-asad-2a75b0276/"
                >
                  <FaLinkedinIn className="text-[22px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MuhammadAsad-cmd"
                >
                  <FaGithub className="text-[22px]" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/muhammadasad9017?igsh=b3plYndiaDVuN2Rl"
                >
                  <FaInstagram className="text-[22px]" />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100071035773905&mibextid=ZbWKwL"
                >
                  <FaFacebook className="text-[22px]" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`mx-10  ${darkMode ? "border-t border-[#fff]" : "border-t border-[#444]"}  p-10 text-center text-xs lg:mx-20`}
          >
            © Copyright 2024 . Made by
            <a
              rel="noreferrer"
              target="_blank"
              href="https://asad-portfolio-ai.vercel.app/"
              className="ml-2"
            >
              Muhammad Asad
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
