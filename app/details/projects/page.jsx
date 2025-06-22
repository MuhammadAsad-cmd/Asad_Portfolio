import ProjectDetails from "@/app/components/ProjectDetails/ProjectDetails";
import React from "react";

export const metadata = {
  title: "Project Details | M. Asad - Web Developer",
  description:
    "Explore the diverse range of web development projects by Muhammad Asad. From front-end design to full-stack development, discover innovative solutions built with modern technologies like React, Next.js, and Tailwind CSS.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Projects",
    "Web Development Projects",
    "Front-End Developer",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Muhammad Asad",
  ],
  openGraph: {
    title: "Muhammad Asad - Project Details",
    description:
      "Discover Muhammad Asad's portfolio of web development projects, showcasing expertise in building high-quality, scalable web applications with modern technologies.",
    url: "https://masadali.vercel.app/details/projects", // Update with the correct URL
    images: [
      {
        url: "/images/proj.png", // Update with a relevant image
        width: 1200,
        height: 630,
        alt: "Web development projects by Muhammad Asad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Details | M. Asad - Web Developer",
    description:
      "Explore Muhammad Asad’s web development projects, built with React, Next.js, and other modern technologies.",
    images: ["/images/proj.png"], // Update with a relevant image
  },
};

const page = () => {
  return (
    <>
      <ProjectDetails />
    </>
  );
};

export default page;
