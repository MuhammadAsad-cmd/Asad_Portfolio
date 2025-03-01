"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import store, { persistor } from "@/redux/store";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { setDark } from "@/redux/themeSlice";
import { PersistGate } from "redux-persist/integration/react";
import Image from "next/image";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import TopLoader from "../TopLoader/TopLoader";

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeInitializer>
          <div className="container max-w-[1380px]">
            <TopLoader />
            <Header />
            <div className="absolute start-0 top-0 -z-10 h-full w-full">
              <Image
                width={100}
                height={100}
                src="/images/bg-dark.png"
                alt="darkbg"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 flex w-full flex-col gap-5 md:flex-row">
              <div className="w-full">{children}</div>
              {/* <aside className="hidden w-full max-w-[300px] md:block">
              <ContactInfo />
            </aside> */}
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeInitializer>
      </PersistGate>
    </Provider>
  );
}

// This component handles the initial theme detection and updates the <html> class.
function ThemeInitializer({ children }) {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  // On mount, check localStorage and system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setDark(storedTheme === "dark"));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setDark(true));
      localStorage.setItem("theme", "dark");
    } else {
      dispatch(setDark(false));
      localStorage.setItem("theme", "light");
    }
  }, [dispatch]);

  // Update the HTML element’s class and localStorage whenever isDark changes.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return children;
}
