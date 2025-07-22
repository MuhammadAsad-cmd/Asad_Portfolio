import React, { useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { toast } from "sonner";
import Right from "./Right";
import useFormLogic from "@/Hooks/FormLogic";

const ContactForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const onSuccess = () => {
    toast.success("Message sent successfully!", {
      description: "Thank you for your message. I'll get back to you soon!",
      duration: 4000,
    });
  };

  const onError = () => {
    toast.error("Failed to send message", {
      description: "Please try again or contact me directly.",
      duration: 4000,
    });
  };

  const { formData, handleChange, handleSubmit, isSubmitting } = useFormLogic(
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
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
            <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
              Let&apos;s connect
            </h1>
          </div>

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
                disabled={isSubmitting}
                className={`mt-3 flex h-10 items-center justify-center gap-2 rounded-full px-3 text-black transition-colors ${
                  isSubmitting
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-SkyBlue hover:bg-lightHover dark:hover:bg-darkHover"
                }`}
              >
                <p className="text-base font-semibold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </p>
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
