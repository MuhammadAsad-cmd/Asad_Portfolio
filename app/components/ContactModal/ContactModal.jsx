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
      <div className="fixed inset-0 flex-col flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="w-full max-w-[552px] max-h-[500px] bg-raisin-black overflow-hidden rounded-lg">
          {/* Header */}
          <div className="flex sticky left-0 right-0 top-0 bg-raisin-black z-50 rounded-t-lg items-center justify-between border-b border-darkGray px-4 h-[61px]">
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <div
              onClick={handleClose}
              className="w-10 text-xl font-medium cursor-pointer h-10 rounded-full hover:bg-[#2c2f33] flex items-center justify-center"
            >
              <RxCross2 />
            </div>
          </div>
          {/* Main */}
          <div className="bg-raisin-black overflow-auto p-6 max-h-[350px]">
            {/* Linkedin Url */}
            <div className="flex items-start gap-4 mt-3">
              <div className="mt-1">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  Linkedin Profile URL
                </h3>
                <Link href="https://www.linkedin.com/in/asad189/">
                  <p className="mb-6 overflow-hidden hover:underline text-sm font-semibold text-Sky-Blue">
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
                  <p className="mb-6 overflow-hidden text-sm hover:underline font-semibold text-Sky-Blue">
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
                  <span className="text-[#FFFFFF99] font-normal ml-1">
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
                  <p className="truncate mb-6 hover:underline overflow-hidden text-sm font-semibold text-Sky-Blue">
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
                <Link href="https://www.google.com/maps/search/?api=1&query=Lahore">
                  <p className="truncate mb-6 overflow-hidden text-sm font-semibold text-Sky-Blue">
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
