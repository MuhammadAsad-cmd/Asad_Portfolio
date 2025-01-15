"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 bg-raisin-black p-6 text-center">
      <p className="mb-2 text-sm text-gray-300">
        © {new Date().getFullYear()} Muhammad Asad. All rights reserved.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm text-Sky-Blue transition-colors duration-200 ease-in-out hover:underline"
      >
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
