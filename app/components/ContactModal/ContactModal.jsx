"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ContactModal = ({ onClose }) => {
  const handleClose = () => {
    console.log("Close button clicked");
    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="max-h-[500px] w-full max-w-[552px] overflow-hidden rounded-lg bg-raisin-black">
          {/* Header */}
          <div className="sticky left-0 right-0 top-0 z-50 flex h-[61px] items-center justify-between rounded-t-lg border-b border-darkGray bg-raisin-black px-4">
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <div
              onClick={handleClose}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl font-medium hover:bg-[#2c2f33]"
            >
              <RxCross2 />
            </div>
          </div>
          {/* Main */}
          <div className="max-h-[350px] overflow-auto bg-raisin-black p-6">
            {/* Linkedin Url */}
            <div className="mt-3 flex items-start gap-4">
              <div className="mt-1">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  Linkedin Profile URL
                </h3>
                <Link href="https://www.linkedin.com/in/asad189/">
                  <p className="mb-6 overflow-hidden text-sm font-semibold text-Sky-Blue hover:underline">
                    https://www.linkedin.com/in/asad189/
                  </p>
                </Link>
              </div>
            </div>
            {/* Website */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <IoIosLink className="text-2xl font-medium" />
              </div>
              <div>
                <h3 className="text-base font-semibold">GitHub</h3>
                <Link href="https://github.com/MuhammadAsad-cmd">
                  <p className="mb-6 overflow-hidden text-sm font-semibold text-Sky-Blue hover:underline">
                    https://github.com/MuhammadAsad-cmd
                  </p>
                </Link>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Phone</h3>
                <p className="mb-6 text-sm font-semibold">
                  03059971189
                  <span className="ml-1 font-normal text-[#FFFFFF99]">
                    (Mobile/Whatsapp)
                  </span>
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MdOutlineEmail className="text-2xl font-medium" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Email</h3>
                <Link href={`mailto:ma6530028@gmail.com`}>
                  <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-Sky-Blue hover:underline">
                    ma6530028@gmail.com
                  </p>
                </Link>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <FaLocationDot className="text-2xl font-medium" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Address</h3>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/search/?api=1&query=Lahore"
                >
                  <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-Sky-Blue">
                    Lahore
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
