import HectorCaseStudy from "@/app/components/CaseStudy/HectorCaseStudy";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "Hector Case Study | M. Asad — Enterprise ERP Operations Platform",
  description:
    "In-depth case study of Hector — a multi-brand enterprise operations platform with 28+ modules, 11 sales channels, 20+ API integrations, RBAC, BullMQ pipelines, warehouse hardware, and real-time Socket.IO infrastructure. Built by Muhammad Asad.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Hector ERP Case Study",
    "Enterprise Operations Platform",
    "Multi-Tenant ERP",
    "E-commerce Operations",
    "Order Management System",
    "Warehouse Management",
    "Supply Chain Software",
    "BullMQ",
    "Socket.IO",
    "ShipStation Integration",
    "Muhammad Asad",
    "Full Stack Case Study",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/case-study/hector`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hector Case Study — Enterprise Operations Platform | Muhammad Asad",
    description:
      "28+ modules across 7 business domains. 11 sales channels, 20+ integrations, hardware-connected warehouse workflows, and production-grade architecture.",
    url: `${siteUrl}/case-study/hector`,
    images: [
      {
        url: `${siteUrl}/images/hector.png`,
        width: 1200,
        height: 630,
        alt: "Hector enterprise operations platform case study",
      },
    ],
    type: "article",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector Case Study | Enterprise ERP Platform",
    description:
      "Full system review: 28+ modules, 11 channels, warehouse hardware, BullMQ, Socket.IO — built for multi-brand e-commerce ops.",
    images: [`${siteUrl}/images/hector.png`],
  },
};

export default function HectorCaseStudyPage() {
  const baseUrl = siteUrl;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hector — Multi-Tenant Enterprise Operations Platform",
    description:
      "Case study of a full-stack internal operations platform for multi-brand e-commerce with 28+ modules and 20+ integrations.",
    author: {
      "@type": "Person",
      name: "Muhammad Asad",
      jobTitle: "Enterprise ERP & Infrastructure Engineer",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Muhammad Asad",
    },
    image: `${baseUrl}/images/hector.png`,
    url: `${baseUrl}/case-study/hector`,
    mainEntityOfPage: `${baseUrl}/case-study/hector`,
    inLanguage: "en-US",
  };

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
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hector Case Study",
        item: `${baseUrl}/case-study/hector`,
      },
    ],
  };

  return (
    <>
      <script
        id="hector-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="hector-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HectorCaseStudy />
    </>
  );
}
