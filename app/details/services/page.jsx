import React from "react";
import SerDetails from "@/app/components/SerDetails/SerDetails";
import { enhancedServicesData } from "@/app/Data/enhancedServices";

export const metadata = {
  title: "Services | M. Asad - Professional Web Development Services | MERN Stack Developer",
  description:
    "Comprehensive web development services by Muhammad Asad - MERN Stack Developer. Offering 20+ professional services including front-end development, backend APIs, full-stack solutions, UI/UX implementation, e-commerce development, performance optimization, and more. Based in Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Web Development Services",
    "MERN Stack Services",
    "Front-End Development Services",
    "Full-Stack Development",
    "Backend Development Services",
    "UI/UX Design Implementation",
    "E-commerce Development",
    "API Integration Services",
    "React.js Development",
    "Next.js Development",
    "Node.js Services",
    "MongoDB Development",
    "Performance Optimization",
    "SEO Services",
    "Website Development",
    "Web Application Development",
    "Muhammad Asad Services",
    "Lahore Web Developer",
    "Pakistan Web Development",
    "Freelance Web Developer",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/details/services`,
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
    title: "Professional Web Development Services | Muhammad Asad - MERN Stack Developer",
    description:
      "Explore 20+ professional web development services by Muhammad Asad. Specializing in MERN Stack development, React.js, Next.js, Node.js, and modern web technologies. Custom solutions for businesses and startups.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/services`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`,
        width: 1200,
        height: 630,
        alt: "Web development services by Muhammad Asad - MERN Stack Developer offering professional web solutions",
        type: "image/png",
      },
    ],
    type: "website",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | M. Asad - Professional Web Development Services",
    description:
      "Check out 20+ professional web development services offered by Muhammad Asad, specializing in MERN Stack, React.js, Next.js, and modern web technologies.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`],
  },
};

const page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Service ItemList Schema for all services
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Services by Muhammad Asad",
    description:
      "Comprehensive list of professional web development services including MERN Stack development, frontend, backend, full-stack solutions, and more.",
    itemListElement: enhancedServicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.category,
        provider: {
          "@type": "Person",
          name: "Muhammad Asad",
        },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
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
        name: "Services",
        item: `${baseUrl}/details/services`,
      },
    ],
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Development Services by Muhammad Asad",
    description:
      "Professional web development services including MERN Stack development, frontend and backend solutions, e-commerce development, API integration, and more.",
    provider: {
      "@type": "Person",
      name: "Muhammad Asad",
      jobTitle: "MERN Stack Developer",
      email: "189asadali@gmail.com",
      url: baseUrl,
      sameAs: [
        "https://www.linkedin.com/in/masadali",
        "https://github.com/MuhammadAsad-cmd",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    serviceType: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "MERN Stack Development",
      "E-commerce Development",
      "API Integration",
      "UI/UX Implementation",
      "Performance Optimization",
      "SEO Services",
    ],
    url: `${baseUrl}/details/services`,
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="service-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema),
        }}
      />
      <script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />

      <SerDetails />
    </>
  );
};

export default page;
