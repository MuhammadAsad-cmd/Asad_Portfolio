"use client";
import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-12 right-4 z-[80] flex size-11 transform items-center justify-center rounded-full bg-SkyBlue text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-lightHover dark:hover:bg-darkHover ${
        isVisible
          ? "translate-y-0 opacity-100 dark:shadow-lg dark:shadow-white/50"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUpLong className="text-xl text-white" />
    </button>
  );
};

export default ScrollToTopButton;
