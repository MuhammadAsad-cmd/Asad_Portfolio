"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.opacity = 1;
      }
    };

    const handleMouseLeave = () => {
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.opacity = 0;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleLinkHover = () => {
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.querySelector(".cursor-circle").style.width = "50px";
      cursor.querySelector(".cursor-circle").style.height = "0px";
    }
  };

  const handleLinkLeave = () => {
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.querySelector(".cursor-circle").style.width = "35px";
      cursor.querySelector(".cursor-circle").style.height = "35px";
    }
  };

  return (
    <div ref={cursorRef} className={`custom-cursor`}>
      <div
        className={`cursor-circle`}
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
      />
      <div className={`cursor-dot`} />
    </div>
  );
};

export default CustomCursor;
