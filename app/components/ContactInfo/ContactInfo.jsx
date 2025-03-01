import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <div className="mb-2 rounded-xl bg-white p-4 dark:bg-discordDark">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Contact Info</p>
          </div>
        </div>
        {/* Linkedin Url */}
        <div className="mt-3 flex items-start gap-4">
          <div className="mt-1">
            <FaLinkedin className="text-2xl" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Linkedin Profile URL</h3>
            <a target="_blank" href="https://www.linkedin.com/in/asad189/">
              <p className="mb-6 overflow-hidden text-ellipsis text-sm font-semibold text-SkyBlue hover:underline">
                https://www.linkedin.com/in/asad189/
              </p>
            </a>
          </div>
        </div>
        {/* Website */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <IoIosLink className="text-2xl font-medium" />
          </div>
          <div>
            <h3 className="text-base font-semibold">GitHub</h3>
            <a target="_blank" href="https://github.com/MuhammadAsad-cmd">
              <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-SkyBlue hover:underline">
                https://github.com/MuhammadAsad-cmd
              </p>
            </a>
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
              <a
                href="tel:+923193148320"
                className="text-SkyBlue hover:underline"
              >
                +923193148320
              </a>
              <span className="ml-1 font-normal text-[#FFFFFF99]">
                (
                <a
                  href="https://wa.me/923059971189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  Mobile/Whatsapp
                </a>
                )
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
            <Link target="_blank" href="mailto:189asadali@gmail.com">
              <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-SkyBlue hover:underline">
                189asadali@gmail.com
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
            <a
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&query=Hasilpur"
            >
              <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-SkyBlue">
                Hasilpur, Punjab Pakistan
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
