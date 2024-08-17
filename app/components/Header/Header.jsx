import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        // Change 50 to the scroll distance you prefer
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };

  return (
    <div
      className={`h-full w-full border-b border-[#373a3d] bg-raisin-black p-1 md:h-12 ${
        isSticky ? "fixed left-0 top-0 z-50" : ""
      } transition-all duration-1000`}
    >
      <div className="container mx-auto h-full w-full max-w-[1128px]">
        <div
          onClick={scrollToTop}
          className="flex h-full cursor-pointer items-center gap-3"
        >
          <div className="flex-shrink-0">
            <Image
              width={32}
              height={32}
              unoptimized
              src="/images/profileimg.jfif"
              alt="profileimg"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold">Muhammad Asad</h1>
            <div className="text-wrap text-xs">
              Skilled Frontend Developer | Proficient in React, Next.js,
              JavaScript, Redux Toolkit, and Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
