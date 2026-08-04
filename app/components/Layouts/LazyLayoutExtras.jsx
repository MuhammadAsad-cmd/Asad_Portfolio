"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../ContactForm/ContactForm"), {
  ssr: false,
});

const ScrollToTopButton = dynamic(
  () => import("../ScrollToTopButton/ScrollToTopButton"),
  { ssr: false },
);

const Toaster = dynamic(
  () => import("sonner").then((mod) => mod.Toaster),
  { ssr: false },
);

export default function LazyLayoutExtras() {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <ScrollToTopButton />
      <ContactForm />
    </>
  );
}
