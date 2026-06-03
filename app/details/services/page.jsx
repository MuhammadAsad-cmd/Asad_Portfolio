import React from "react";
import SerDetails from "@/app/components/SerDetails/SerDetails";
import { enhancedServicesData } from "@/app/Data/enhancedServices";

export const metadata = {
  title: "Business Solutions | M. Asad - ERP, Automation & MERN Development",
  description:
    "ERP, automation, and business system services by Muhammad Asad. Custom internal tooling, workflow automation, e-commerce operations, integrations, dashboards, and scalable MERN applications.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Business Solutions",
    "ERP Development",
    "Internal Tooling",
    "Workflow Automation",
    "Business Automation",
    "E-commerce Operations",
    "Inventory Management System",
    "Order Management System",
    "Marketplace Integrations",
    "Shipping Integrations",
    "Admin Dashboard Development",
    "MERN Stack Services",
    "Full-Stack Development",
    "Backend Development Services",
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
    title: "ERP, Automation & Business Solutions | Muhammad Asad",
    description:
      "Explore business-focused services by Muhammad Asad: ERP-style tooling, workflow automation, integrations, dashboards, e-commerce operations systems, and scalable MERN applications.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/services`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`,
        width: 1200,
        height: 630,
        alt: "Web development services by Muhammad Asad - Full Stack Engineer offering professional web solutions",
        type: "image/png",
      },
    ],
    type: "website",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Solutions | M. Asad - ERP & Automation",
    description:
      "ERP, automation, integrations, dashboards, and scalable MERN business systems for growing operations.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/servicsmeta.png`],
  },
};

const page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Service ItemList Schema for all services
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business System Services by Muhammad Asad",
    description:
      "Business-focused services including ERP-style internal tooling, workflow automation, e-commerce operations systems, integrations, dashboards, and scalable MERN applications.",
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
    name: "ERP, Automation and Business System Services by Muhammad Asad",
    description:
      "Professional services for ERP-style tooling, workflow automation, business dashboards, e-commerce operations, API integrations, and scalable MERN stack applications.",
    provider: {
      "@type": "Person",
      name: "Muhammad Asad",
      jobTitle: "Full Stack Engineer",
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
      "ERP Development",
      "Internal Tooling",
      "Business Workflow Automation",
      "E-commerce Operations",
      "Inventory Management",
      "Order Management",
      "Marketplace Integration",
      "Shipping Integration",
      "Admin Dashboards",
      "Database Architecture",
      "Backend Development",
      "Full Stack Development",
      "MERN Stack Development",
      "Performance Optimization",
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
