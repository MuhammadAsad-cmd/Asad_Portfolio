"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import store from "@/redux/store";
import Footer from "../Footer/Footer";
import { useLayoutEffect, useRef } from "react";
import { setDark } from "@/redux/themeSlice";
import LazyLayoutExtras from "./LazyLayoutExtras";

function readStoredTheme() {
  try {
    const stored = localStorage.getItem("site-theme");
    if (stored) {
      return JSON.parse(stored).isDark;
    }

    const legacy = localStorage.getItem("persist:root");
    if (legacy) {
      return JSON.parse(JSON.parse(legacy).theme).isDark;
    }
  } catch {}

  return true;
}

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <ThemeInitializer>
        <div
          className="absolute start-0 top-0 -z-10 h-full w-full bg-[#1f1f24]"
          aria-hidden="true"
        />
        <div className="container max-w-[1380px]">
          <Header />
          <main id="main-content" className="mt-6 flex w-full flex-col gap-5 md:mt-12 md:flex-row">
            <div className="w-full">{children}</div>
          </main>
          <LazyLayoutExtras />
          <Footer />
        </div>
      </ThemeInitializer>
    </Provider>
  );
}

function ThemeInitializer({ children }) {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const initialized = useRef(false);

  useLayoutEffect(() => {
    if (!initialized.current) {
      const dark = readStoredTheme();
      dispatch(setDark(dark));
      document.documentElement.classList.toggle("dark", dark);
      initialized.current = true;
      return;
    }

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("site-theme", JSON.stringify({ isDark }));
  }, [isDark, dispatch]);

  return children;
}
