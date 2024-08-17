"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-raisin-black rounded-xl p-4 mb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Contact Info</p>
          </div>
          <div>
            <svg
              role="img"
              aria-hidden="false"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              data-test-icon="edit-medium"
              fill="#FFFFFFE6"
            >
              <path d="M21.7,2.3c-1.1-1.1-2.9-1.1-4,0L15.1,4.9L19.1,9l2.6-2.6C22.8,5.1,22.8,3.4,21.7,2.3z M14.1,5.9L3,17v4h4L18.1,9.9L14.1,5.9z"></path>
            </svg>
          </div>
        </div>
        {/* Linkedin Url */}
        <div className="flex items-start gap-4 mt-3">
          <div className="mt-1">
            <FaLinkedin className="text-2xl" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Linkedin Profile URL</h3>
            <Link href="https://www.linkedin.com/in/asad189/">
              <p className="text-ellipsis max-w-[220px] mb-6 overflow-hidden hover:underline text-sm font-semibold text-Sky-Blue">
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
              <p className="truncate mb-6 max-w-[220px] overflow-hidden text-sm hover:underline font-semibold text-Sky-Blue">
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
    </>
  );
};

export default ContactInfo;
