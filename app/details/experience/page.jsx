import React from "react";
import ExpDetails from "@/app/components/ExpDetails/ExpDetails";

export const metadata = {
  title: "Experience Details | M. Asad - Web Developer",
  description:
    "Explore the professional experience of Muhammad Asad, a front-end web developer with a proven track record of building dynamic, responsive web applications using modern technologies like React, Next.js, and Tailwind CSS.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Experience",
    "Professional Experience",
    "Web Development",
    "Front-End Developer",
    "Muhammad Asad",
    "Portfolio",
    "React.js",
    "Next.js",
    "JavaScript",
  ],
  openGraph: {
    title: "Muhammad Asad - Experience Details",
    description:
      "Learn about Muhammad Asad’s professional journey, skills, and expertise in developing high-quality web applications using modern web technologies.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/experience`, // Update with the correct URL
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/exp.png`, // Update with a relevant image
        width: 1200,
        height: 630,
        alt: "Professional experience of Muhammad Asad, Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience Details | M. Asad - Web Developer",
    description:
      "Discover Muhammad Asad's professional experience in front-end web development, specializing in modern technologies and user-friendly applications.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/exp.png`], // Update with a relevant image
  },
};

const page = () => {
  return (
    <>
      <ExpDetails />
    </>
  );
};

export default page;
