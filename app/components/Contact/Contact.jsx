import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] px-10">
        <div className="flex items-center justify-between px-7">
          <div>
            <h2 className=" text-[38px] font-semibold text-[#333333]">
              We’d love to here from you.
            </h2>
          </div>
          <div>
            <button className=" flex h-12 w-[142px] items-center justify-center rounded-xl bg-[#f7faff] ">
              <a
                href="https://asad-portfolio-ai.vercel.app/"
                className="ReadMore"
              >
                {" "}
                See Portfolio
              </a>
            </button>
          </div>
        </div>
        <div className="mt-[60px] flex gap-[50px] px-7">
          <div className="w-full rounded-2xl border border-gray-300 p-[30px]">
            <form>
              <div class="mb-6 grid grid-cols-2 gap-10">
                <div className="space-y-10">
                  <div>
                    <label
                      for="first_name"
                      className="mb-2 block text-base font-medium text-[#4C4C4C] "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="block h-[52px] w-full rounded-lg border border-gray-300 px-2  text-sm text-black outline-none"
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      className="mb-2 block text-base font-medium text-[#4C4C4C] "
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block h-[52px] w-full rounded-lg border border-gray-300 px-2  text-sm text-black outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="message"
                    className="mb-2 block text-base font-medium text-[#4C4C4C] "
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="9"
                    className="block  w-full rounded-lg border border-gray-300 px-2 py-2 text-sm text-black outline-none"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
              >
                Submit
              </button>
            </form>
          </div>

          <div className="space-y-10">
            <div className="flex h-[70px] w-[190px] items-center gap-3 rounded-2xl border border-gray-300 px-5">
              <div>
                <img
                  src="/images/Vector.svg"
                  alt="img"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <a
                  href="https://wa.me/03059971189"
                  className="ReadMore cursor-pointer text-base font-medium leading-5"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/03059971189"
                  className="cursor-pointer text-sm font-normal leading-5 text-[#999999]"
                >
                  Schedule a call
                </a>
              </div>
            </div>
            <div className="flex h-[70px] w-[190px] items-center gap-3 rounded-2xl border border-gray-300 px-5">
              <div>
                <img
                  src="/images/mail.svg"
                  alt="img"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <a
                  href="mailto:ma6530028@gmail.com"
                  className="ReadMore cursor-pointer text-base font-medium leading-5"
                >
                  Email
                </a>
                <a
                  href="mailto:ma6530028@gmail.com"
                  className="cursor-pointer text-sm font-normal leading-5 text-[#999999]"
                >
                  Email Me
                </a>
              </div>
            </div>
            <div className="flex h-[70px] w-[190px] items-center gap-3 rounded-2xl border border-gray-300 px-5">
              <div>
                <img
                  src="/images/Vector.svg"
                  alt="img"
                  className="cursor-pointer"
                />
              </div>
              <div>
                <h4 className="ReadMore cursor-pointer text-base font-medium leading-5">
                  Call
                </h4>
                <p className="cursor-pointer text-sm font-normal leading-5 text-[#999999]">
                  Schedule a call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
