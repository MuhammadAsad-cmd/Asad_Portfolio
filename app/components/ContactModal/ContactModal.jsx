import Link from "next/link";
import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ContactModal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="animated-border my-6 rounded-t-lg  sm:rounded-xl">
          <div className="max-h-[500px] w-full max-w-[552px] overflow-hidden rounded-lg bg-white dark:bg-discordDark">
            {/* Header */}
            <div className="sticky left-0 right-0 top-0 z-50 flex h-[61px] items-center justify-between rounded-t-lg border-b bg-white px-4 dark:border-darkSecondaryGray dark:bg-discordDark">
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <div
                onClick={handleClose}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl font-medium hover:bg-discordDark"
              >
                <RxCross2 />
              </div>
            </div>
            {/* Main */}
            <div className="max-h-[350px] overflow-auto bg-white p-6 dark:bg-discordDark">
              {/* Linkedin Url */}
              <div className="mt-3 flex items-start gap-4">
                <div className="mt-1">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    Linkedin Profile URL
                  </h3>
                  <a href="https://www.linkedin.com/in/asad189/">
                    <p className="mb-6 overflow-hidden text-sm font-semibold text-SkyBlue hover:underline">
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
                  <a href="https://github.com/MuhammadAsad-cmd">
                    <p className="mb-6 overflow-hidden text-sm font-semibold text-SkyBlue hover:underline">
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
                  <a
                    href="https://wa.me/923059971189"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-6 text-sm font-semibold">
                      +923193148320
                      <span className="ml-1 font-normal text-[#FFFFFF99]">
                        (Mobile/Whatsapp)
                      </span>
                    </p>
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MdOutlineEmail className="text-2xl font-medium" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Email</h3>
                  <Link href="mailto:189asadali@gmail.com">
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
                    href="https://www.google.com/maps/search/?api=1&query=Lahore"
                  >
                    <p className="mb-6 overflow-hidden truncate text-sm font-semibold text-SkyBlue">
                      Hasilpur, Punjab Pakistan
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
