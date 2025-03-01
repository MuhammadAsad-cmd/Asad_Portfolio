import Link from "next/link";
import React from "react";
import { BsSendFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactForm = () => {
  return (
    <>
      <div id="contact" className="animated-border my-6 md:rounded-xl">
        <div className=" bg-white p-5 dark:bg-discordDark">
          <section>
            <h1 className="text-xl font-semibold">Let’s connect</h1>

            <div className="mt-4 flex flex-col lg:flex-row">
              <form className="w-full lg:mb-0 lg:w-[60%]">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <label
                      className="mb-[2px] block font-medium"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full rounded-md border border-lightBorder bg-lightbg px-2 py-3 text-lightPrimarytext 
             outline-none transition duration-300 ease-in-out 
             hover:border-SkyBlue focus:border-SkyBlue focus:ring-2 focus:ring-SkyBlue
             dark:border-darkSecondaryGray dark:bg-darkbg dark:text-white dark:placeholder-darkPrimaryGray
             dark:hover:border-darkHover dark:focus:border-darkHover dark:focus:ring-darkHover"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="mb-[2px] block font-medium "
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Your Phone number"
                      className="w-full rounded-md border border-lightBorder bg-lightbg px-2 py-3 text-lightPrimarytext 
             outline-none transition duration-300 ease-in-out 
             hover:border-SkyBlue focus:border-SkyBlue focus:ring-2 focus:ring-SkyBlue
             dark:border-darkSecondaryGray dark:bg-darkbg dark:text-white dark:placeholder-darkPrimaryGray
             dark:hover:border-darkHover dark:focus:border-darkHover dark:focus:ring-darkHover"
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <label
                      className="mb-[2px] block font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-lightBorder bg-lightbg px-2 py-3 text-lightPrimarytext 
                    outline-none transition duration-300 ease-in-out 
                    hover:border-SkyBlue focus:border-SkyBlue focus:ring-2 focus:ring-SkyBlue
                    dark:border-darkSecondaryGray dark:bg-darkbg dark:text-white dark:placeholder-darkPrimaryGray
                    dark:hover:border-darkHover dark:focus:border-darkHover dark:focus:ring-darkHover"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      className="mb-[2px] block font-medium"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      type="subject"
                      className="w-full rounded-md border border-lightBorder bg-lightbg px-2 py-3 text-lightPrimarytext 
                    outline-none transition duration-300 ease-in-out 
                    hover:border-SkyBlue focus:border-SkyBlue focus:ring-2 focus:ring-SkyBlue
                    dark:border-darkSecondaryGray dark:bg-darkbg dark:text-white dark:placeholder-darkPrimaryGray
                    dark:hover:border-darkHover dark:focus:border-darkHover dark:focus:ring-darkHover"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="mb-[2px] block font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-md border border-lightBorder bg-lightbg px-2 py-3 text-lightPrimarytext 
                    outline-none transition duration-300 ease-in-out 
                    hover:border-SkyBlue focus:border-SkyBlue focus:ring-2 focus:ring-SkyBlue
                    dark:border-darkSecondaryGray dark:bg-darkbg dark:text-white dark:placeholder-darkPrimaryGray
                    dark:hover:border-darkHover dark:focus:border-darkHover dark:focus:ring-darkHover"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-3 flex h-10 items-center justify-center gap-2 rounded-full bg-SkyBlue px-3 text-black hover:bg-lightHover dark:hover:bg-darkHover"
                >
                  <p className="text-base font-semibold">Send Message</p>
                  <BsSendFill className="text-lg" />
                </button>
              </form>

              <div className="w-full lg:w-[40%]">
                <div className="flex flex-col gap-y-6">
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block p-4 text-2xl">
                          <MdOutlineMailOutline />
                        </div>
                      </div>
                      <div className="grow">
                        <p className="mb-1 font-bold tracking-wide">Email</p>
                        <Link
                          target="_blank"
                          href="mailto:189asadali@gmail.com"
                        >
                          <p className="tracking-wide text-neutral-500">
                            189asadali@gmail.com
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="grow">
                        <p className="mb-1 font-bold tracking-wide">Phone</p>
                        <Link target="_blank" href="https://wa.me/923193148320">
                          <p className="tracking-wide text-neutral-500">
                            +923193148320
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block p-4 text-2xl">
                          <FaLinkedinIn />
                        </div>
                      </div>
                      <div className="grow">
                        <p className="mb-1 font-bold tracking-wide">Linkedin</p>
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com/in/asad189/"
                        >
                          <p className="overflow-hidden text-ellipsis tracking-wide text-SkyBlue underline hover:text-lightHover dark:hover:text-darkHover max-md:w-[60%]">
                            https://www.linkedin.com/in/asad189/
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
