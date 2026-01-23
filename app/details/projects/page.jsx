import ProjectDetails from "@/app/components/ProjectDetails/ProjectDetails";
import React from "react";
import { projectsData } from "@/app/Data/projects";

export const metadata = {
  title: "Projects Portfolio | M. Asad - MERN Stack Developer | Web Development Projects",
  description:
    "Explore 20+ web development projects by Muhammad Asad - MERN Stack Developer. Featured projects include enterprise ERP systems, e-commerce platforms, customer portals, admin dashboards, and modern web applications built with React.js, Next.js, Node.js, and MongoDB. Based in Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Web Development Projects",
    "MERN Stack Projects",
    "React.js Projects",
    "Next.js Projects",
    "Full Stack Projects",
    "E-commerce Projects",
    "Admin Dashboard Projects",
    "Customer Portal Projects",
    "UI/UX Projects",
    "Enterprise Applications",
    "Muhammad Asad Projects",
    "Portfolio Projects",
    "Lahore Web Developer Projects",
    "Pakistan Web Development",
    "Node.js Projects",
    "MongoDB Projects",
    "JavaScript Projects",
    "TypeScript Projects",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/details/projects`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Projects Portfolio | Muhammad Asad - MERN Stack Developer",
    description:
      "Discover 20+ professional web development projects by Muhammad Asad. Enterprise ERP systems, e-commerce platforms, customer portals, and modern web applications built with React.js, Next.js, Node.js, and MongoDB.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/projects`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/proj.png`,
        width: 1200,
        height: 630,
        alt: "Web development projects portfolio by Muhammad Asad - MERN Stack Developer",
        type: "image/png",
      },
    ],
    type: "website",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio | M. Asad - MERN Stack Developer",
    description:
      "Explore 20+ web development projects by Muhammad Asad, featuring enterprise applications, e-commerce platforms, and modern web solutions built with React.js, Next.js, and MERN Stack.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/proj.png`],
  },
};

const page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Projects ItemList Schema
  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Projects by Muhammad Asad",
    description:
      "Comprehensive portfolio of web development projects including enterprise applications, e-commerce platforms, customer portals, and admin dashboards.",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": project.Link || `${baseUrl}/details/projects#${project.id}`,
        name: project.title,
        description: project.description,
        url: project.Link || undefined,
        image: project.image ? `${baseUrl}${project.image}` : undefined,
        creator: {
          "@type": "Person",
          name: "Muhammad Asad",
        },
        keywords: project.stackUsed?.join(", ") || "",
        about: {
          "@type": "Thing",
          name: project.category,
        },
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/details/projects`,
      },
    ],
  };

  // Person Schema with Portfolio
  const personPortfolioSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "MERN Stack Developer",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
    knowsAbout: [
      "Web Development",
      "MERN Stack",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
      "E-commerce Development",
      "Enterprise Applications",
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="projects-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsListSchema),
        }}
      />
      <script
        id="projects-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        id="person-portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personPortfolioSchema),
        }}
      />

      <ProjectDetails />
    </>
  );
};

export default page;
