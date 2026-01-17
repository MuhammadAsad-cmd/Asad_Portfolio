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
import ContactForm from "../ContactForm/ContactForm";
import { Toaster } from "sonner";

export default function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeInitializer>
          <TopLoader />
          <Toaster position="top-center" richColors closeButton />
          <div className="absolute start-0 top-0 -z-10 h-full w-full">
            <Image
              width={100}
              height={100}
              src="/images/bg-dark.png"
              alt="darkbg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="container max-w-[1380px]">
            <Header />
            <main id="main-content" className="mt-6 flex w-full flex-col gap-5 md:mt-12 md:flex-row">
              <div className="w-full">{children}</div>
            </main>
            <ScrollToTopButton />
            <ContactForm />
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

  // On mount, check system preference
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setDark(true));
    } else {
      dispatch(setDark(false));
    }
  }, [dispatch]);

  // Update the HTML element’s class whenever isDark changes.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return children;
}
