import EducationDetails from "@/app/components/EducationDetails/EducationDetails";
import React from "react";

export const metadata = {
  title: "Education Details | M. Asad - Web Developer",
  description:
    "Explore the educational background of Muhammad Asad, a skilled web developer with expertise in modern technologies and a strong foundation in computer science.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Education",
    "Web Development",
    "Front-End Developer",
    "Muhammad Asad",
    "Portfolio",
    "JavaScript",
    "Computer Science",
    "Software Engineering",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  openGraph: {
    title: "Muhammad Asad - Education Details",
    description:
      "Discover the academic achievements and educational background of Muhammad Asad, a dedicated web developer with expertise in building modern, user-friendly web applications.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/education`, // Update with the correct URL
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/educationdet.png`,
        width: 1200,
        height: 630,
        alt: "Education details of Muhammad Asad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Details | M. Asad - Web Developer",
    description:
      "Learn about the education of Muhammad Asad, a skilled front-end developer with expertise in web technologies.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/educationdet.png`,
  },
};

const page = () => {
  return (
    <>
      <EducationDetails />
    </>
  );
};

export default page;
