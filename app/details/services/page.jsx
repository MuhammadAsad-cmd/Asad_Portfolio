import React from "react";
import SerDetails from "@/app/components/SerDetails/SerDetails";

export const metadata = {
  title: "Services | M. Asad - Web Development & Front-End Expertise",
  description:
    "Discover a range of web development services offered by Muhammad Asad, including front-end development, UI/UX design, and full-stack solutions using React, Next.js, and modern web technologies.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Services",
    "Web Development Services",
    "Front-End Development",
    "Full-Stack Development",
    "UI/UX Design",
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Muhammad Asad",
  ],
  openGraph: {
    title: "Muhammad Asad - Web Development Services",
    description:
      "Explore professional web development services by Muhammad Asad, offering custom front-end solutions, UI/UX design, and full-stack development expertise.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/services`, // Update with the correct URL
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`, // Update with a relevant image
        width: 1200,
        height: 630,
        alt: "Web development services by Muhammad Asad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | M. Asad - Web Development & Front-End Expertise",
    description:
      "Check out the range of web development services offered by Muhammad Asad, specializing in modern, user-focused solutions.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`], // Update with a relevant image
  },
};

const page = () => {
  return (
    <>
      <SerDetails />
    </>
  );
};

export default page;
