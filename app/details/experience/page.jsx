import React from "react";
import ExpDetails from "@/app/components/ExpDetails/ExpDetails";
import { experiences } from "@/app/Data/experiences";

export const metadata = {
  title: "Professional Experience | M. Asad - MERN Stack Developer | Career Journey",
  description:
    "Explore the professional experience of Muhammad Asad, a MERN Stack Developer with 3+ years of experience. Work history at Retrovgames, Motive Coder, and EVS Institute. Specializing in React.js, Next.js, Node.js, MongoDB, and full-stack web development. Based in Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Professional Experience",
    "Work Experience",
    "Career History",
    "MERN Stack Developer Experience",
    "Front-End Developer Experience",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Experience",
    "Muhammad Asad Experience",
    "Retrovgames",
    "Motive Coder",
    "EVS Institute",
    "Lahore Web Developer",
    "Pakistan Developer",
    "Portfolio Experience",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/details/experience`,
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
    title: "Professional Experience | Muhammad Asad - MERN Stack Developer",
    description:
      "Learn about Muhammad Asad's professional journey with 3+ years of experience. Work history at Retrovgames, Motive Coder, and EVS Institute. Specializing in MERN Stack development, React.js, Next.js, and modern web technologies.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/experience`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/exp.png`,
        width: 1200,
        height: 630,
        alt: "Professional experience and career journey of Muhammad Asad - MERN Stack Developer",
        type: "image/png",
      },
    ],
    type: "profile",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Experience | M. Asad - MERN Stack Developer",
    description:
      "Discover Muhammad Asad's professional experience with 3+ years in web development. Work history at Retrovgames, Motive Coder, and EVS Institute. Specializing in MERN Stack, React.js, and Next.js.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/exp.png`],
  },
};

const page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Helper function to format dates for schema
  const formatDateForSchema = (date) => {
    if (!date) return null;
    const [year, month] = date.split("-");
    return `${year}-${month.padStart(2, "0")}-01`;
  };

  // Person Schema with Work History
  const personWithWorkHistorySchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "MERN Stack Developer",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
    worksFor: experiences.map((exp) => ({
      "@type": "Organization",
      name: exp.company,
      url: exp.link || undefined,
      address: {
        "@type": "PostalAddress",
        addressLocality: exp.location.split(",")[0]?.trim() || "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    })),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Virtual University of Pakistan",
    },
  };

  // Work History ItemList Schema
  const workHistorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional Work Experience of Muhammad Asad",
    description:
      "Complete work history and professional experience of Muhammad Asad, MERN Stack Developer",
    itemListElement: experiences.flatMap((exp, expIndex) =>
      exp.roles.map((role, roleIndex) => ({
        "@type": "ListItem",
        position: expIndex * 10 + roleIndex + 1,
        item: {
          "@type": "JobPosting",
          title: role.title,
          employmentType: role.type,
          datePosted: formatDateForSchema(role.startDate),
          validThrough: role.endDate ? formatDateForSchema(role.endDate) : undefined,
          hiringOrganization: {
            "@type": "Organization",
            name: exp.company,
            url: exp.link || undefined,
            logo: exp.image ? `${baseUrl}${exp.image}` : undefined,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: exp.location.split(",")[0]?.trim() || "Lahore",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
          skills: role.skills,
        },
      }))
    ),
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
        name: "Experience",
        item: `${baseUrl}/details/experience`,
      },
    ],
  };

  // Organization Schemas for each company
  const organizationSchemas = experiences.map((exp) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: exp.company,
    url: exp.link || undefined,
    logo: exp.image ? `${baseUrl}${exp.image}` : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: exp.location.split(",")[0]?.trim() || "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  }));

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="person-work-history-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personWithWorkHistorySchema),
        }}
      />
      <script
        id="work-history-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workHistorySchema),
        }}
      />
      <script
        id="experience-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {organizationSchemas.map((schema, index) => (
        <script
          key={index}
          id={`organization-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <ExpDetails />
    </>
  );
};

export default page;
