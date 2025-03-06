import React, { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import Right from "./Right";
import useFormLogic from "@/Hooks/FormLogic";

const ContactForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const onSuccess = () => {
    alert("Message sent successfully!");
  };

  const onError = () => {
    alert("Failed to send the message. Please try again.");
  };

  const { formData, handleChange, handleSubmit } = useFormLogic(
    serviceId,
    templateId,
    publicKey,
    onSuccess,
    onError,
  );

  return (
    <div id="contact" className="animated-border my-6 md:rounded-xl">
      <div className="bg-white p-5 dark:bg-discordDark">
        <section>
          <h1 className="text-xl font-semibold">Let’s connect</h1>
          <div className="mt-4 flex flex-col-reverse gap-y-6 lg:flex-row">
            <form onSubmit={handleSubmit} className="w-full lg:mb-0 lg:w-[60%]">
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="w-full">
                  <label className="mb-[2px] block font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="inputfeild"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="mb-[2px] block font-medium" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="inputfeild"
                  />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="w-full">
                  <label className="mb-[2px] block font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="inputfeild"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Enter your email address"
                    required
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
                    type="text"
                    name="subject"
                    id="subject"
                    className="inputfeild"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              <div className="mb-4 w-full">
                <label className="mb-[2px] block font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="inputfeild"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  required
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
              <Right />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;

// Service
