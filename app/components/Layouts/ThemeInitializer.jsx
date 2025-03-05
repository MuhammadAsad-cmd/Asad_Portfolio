"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "@/redux/themeSlice";

export default function ThemeInitializer({ children }) {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  // Apply the theme to <html> when Redux state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return children;
}
