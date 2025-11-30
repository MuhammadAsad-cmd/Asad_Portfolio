"use client";
import React, { useRef, useState, useEffect } from "react";
import { BsSendFill } from "react-icons/bs";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import useFormLogic from "@/Hooks/FormLogic";
import Link from "next/link";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

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

  const contactMethods = [
    {
      icon: IoMailOutline,
      label: "Email",
      value: "189asadali@gmail.com",
      link: "mailto:189asadali@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: IoCallOutline,
      label: "Phone / WhatsApp",
      value: "+923193148320",
      link: "https://wa.me/923193148320",
      color: "text-green-500",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: "linkedin.com/in/masadali",
      link: "https://www.linkedin.com/in/masadali",
      color: "text-[#0077B5]",
    },
    // {
    //   icon: FaGithub,
    //   label: "GitHub",
    //   value: "github.com/MuhammadAsad-cmd",
    //   link: "https://github.com/MuhammadAsad-cmd",
    //   color: "text-gray-800 dark:text-white",
    // },
  ];

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                Let&apos;s Connect
              </h1>
              <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                Have a project in mind? Let&apos;s discuss how I can help
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: Form */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold text-lightPrimarytext dark:text-white"
                    htmlFor="name"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="inputfeild"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold text-lightPrimarytext dark:text-white"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="inputfeild"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold text-lightPrimarytext dark:text-white"
                    htmlFor="phone"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="inputfeild"
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold text-lightPrimarytext dark:text-white"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="inputfeild"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold text-lightPrimarytext dark:text-white"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className="inputfeild resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-all ${
                  isSubmitting
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-SkyBlue hover:bg-lightHover hover:shadow-lg hover:shadow-SkyBlue/30 dark:hover:bg-darkHover"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <BsSendFill className="text-lg" />
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-xl font-bold text-lightPrimarytext dark:text-white">
                  Get in Touch
                </h3>
                <p className="text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                  Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Link
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    className="group flex items-start gap-4 rounded-xl bg-lightbg p-4 transition-all hover:bg-white hover:shadow-md dark:bg-darkSecondaryGray dark:hover:bg-discordDark"
                  >
                    <div className={`mt-0.5 text-2xl ${method.color}`}>
                      <method.icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 font-semibold text-lightPrimarytext dark:text-white">
                        {method.label}
                      </h4>
                      <p className="truncate text-sm text-lightSecondarytext transition-colors group-hover:text-SkyBlue dark:text-darkPrimaryGray">
                        {method.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
