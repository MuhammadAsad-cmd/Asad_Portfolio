"use client";
import { useState, useEffect, useCallback } from "react";

export const useSidebar = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openSidebar = useCallback(() => setIsOpen(true), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);
  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeSidebar]);

  return { isOpen, openSidebar, closeSidebar, toggleSidebar };
};
