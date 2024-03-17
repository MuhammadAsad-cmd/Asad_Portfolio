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
    <div>
      {isVisible && (
        <button
          className="scrollToTopBtn z-40 duration-300 ease-in-out"
          onClick={scrollToTop}
        >
          <FaArrowUpLong className="Icon text-xl text-white" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
