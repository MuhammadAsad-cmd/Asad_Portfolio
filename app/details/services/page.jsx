import React from "react";
import SerDetails from "@/app/components/SerDetails/SerDetails";
import { enhancedServicesData } from "@/app/Data/enhancedServices";
import {
  AREA_SERVED,
  EMAIL,
  JOB_TITLE,
  PERSON_ID,
  SAME_AS,
  SITE_URL,
} from "@/app/lib/site";

export const metadata = {
  title: "Business Solutions | M. Asad - ERP, Automation & Enterprise Infrastructure",
  description:
    "ERP, automation, and business system services by Muhammad Asad. Custom internal tooling, workflow automation, e-commerce operations, integrations, dashboards, and scalable Node.js/Next.js applications.",
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
    "Enterprise Stack Services",
    "Full-Stack Development",
    "Backend Development Services",
    "API Integration Services",
    "React.js Development",
    "Next.js Development",
    "Node.js Services",
    "MongoDB Development",
    "Performance Optimization",
    "Web Application Development",
    "Custom ERP Developer",
    "Shopify Walmart Amazon Integration",
    "ShipStation Integration",
    "Warehouse Management System",
    "Muhammad Asad Services",
    "Remote ERP Developer",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${SITE_URL}`),
  alternates: {
    canonical: `${SITE_URL}/details/services`,
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
      "Explore business-focused services by Muhammad Asad: ERP-style tooling, workflow automation, integrations, dashboards, e-commerce operations systems, and scalable Node.js/Next.js applications.",
    url: `${SITE_URL}/details/services`,
    images: [
      {
        url: `${SITE_URL}/images/servicsmeta.png`,
        width: 1200,
        height: 630,
        alt: "ERP, automation, and integration services by Muhammad Asad",
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
      "ERP, automation, integrations, dashboards, and scalable enterprise business systems for growing operations.",
    images: [`${SITE_URL}/images/servicsmeta.png`],
  },
};

const page = () => {
  const baseUrl = SITE_URL;

  // Service ItemList Schema for all services
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business System Services by Muhammad Asad",
    description:
      "Business-focused services including ERP-style internal tooling, workflow automation, e-commerce operations systems, integrations, dashboards, and scalable Node.js/Next.js applications.",
    itemListElement: enhancedServicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.category,
        provider: { "@id": PERSON_ID },
        areaServed: AREA_SERVED,
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
      "Professional services for ERP-style tooling, workflow automation, business dashboards, e-commerce operations, API integrations, and scalable Node.js/Next.js applications.",
    provider: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Muhammad Asad",
      jobTitle: JOB_TITLE,
      email: EMAIL,
      url: baseUrl,
      sameAs: SAME_AS,
    },
    areaServed: AREA_SERVED,
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
      "Enterprise Stack Development",
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
