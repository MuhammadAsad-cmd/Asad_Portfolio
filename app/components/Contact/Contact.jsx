"use client";
import { useTheme } from "@/app/ThemeContext";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        id="Contact"
        className={`py-[100px] ${darkMode ? "bg-[#343f4b]" : "bg-[#ecf0f3]"}`}
      >
        <div className="flex flex-col items-center justify-center px-5 text-center">
          <h2
            className={`text-[40px] ${darkMode ? "text-[#fff]" : "text-[#374151]"} font-bold uppercase tracking-wider`}
          >
            CONTACT
          </h2>
          <div className="mt-5 h-[5px] w-[30px] rounded-md bg-[#7843E9]"></div>
          <p
            className={`mt-3  max-w-[800px] text-xl font-medium ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} leading-8 `}
          >
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="container mx-auto mt-[50px]  max-w-[630px]">
          <form>
            <fieldset
              className={`mx-5 rounded-2xl border  ${darkMode ? "border-[#979797] bg-[#343f4b] text-white" : "border-gray-300 bg-white text-[#333333]"} p-[30px] pr-12`}
            >
              <legend className="mx-auto flex items-center justify-center">
                <img src="/images/Container.svg" alt="msg" />
              </legend>

              <div className="mb-6 mt-5">
                <label
                  htmlFor="first_name"
                  className={`mb-2 block ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} text-base font-medium `}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block h-[52px] w-full rounded-lg border border-gray-300 bg-transparent px-2 text-base  outline-none"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`mb-2 block ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} text-base font-medium `}
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block h-[52px] w-full rounded-lg border border-gray-300 bg-transparent px-2 text-base  outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block ${darkMode ? "text-[#979797]" : "text-[#4B5563]"} text-base font-medium `}
                >
                  Your message
                </label>
                <textarea
                  rows="9"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-transparent px-2 py-2 text-base outline-none"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="SubmitBrn mx-2 mt-10 flex h-[52px] items-center rounded-lg px-6 text-center text-base font-medium leading-6 text-white "
                >
                  <p>Send message</p>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
