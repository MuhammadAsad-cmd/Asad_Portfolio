import EducationDetails from "@/app/components/EducationDetails/EducationDetails";
import React from "react";
import { SITE_URL, indexRobots } from "@/app/lib/site";

export const dynamic = "force-static";

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/details/education`,
  },
  robots: indexRobots,
  openGraph: {
    title: "Muhammad Asad - Education Details",
    description:
      "Discover the academic achievements and educational background of Muhammad Asad, a dedicated web developer with expertise in building modern, user-friendly web applications.",
    url: `${SITE_URL}/details/education`,
    images: [
      {
        url: `${SITE_URL}/images/educationdet.png`,
        width: 1200,
        height: 630,
        alt: "Education details of Muhammad Asad",
      },
    ],
    type: "website",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Details | M. Asad - Web Developer",
    description:
      "Learn about the education of Muhammad Asad, a skilled front-end developer with expertise in web technologies.",
    images: [`${SITE_URL}/images/educationdet.png`],
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
