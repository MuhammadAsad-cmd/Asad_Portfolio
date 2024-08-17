"use client";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Header from "./components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </head>

      <body>
        <Header />
        <div className="container mx-auto mt-5 flex w-full max-w-[720px] flex-col gap-5 md:flex-row lg:max-w-[960px] xl:max-w-[1128px]">
          <div className="w-full">{children}</div>
          {/* Aside */}
          <aside className="hidden w-full max-w-[300px] md:block">
            {/* Contact Info */}
            <ContactInfo />
          </aside>
        </div>
      </body>
    </html>
  );
}
