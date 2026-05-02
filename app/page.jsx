import About from "./components/About/About";
import Credentials from "./components/Credentials/Credentials";
import Experience from "./components/Experience/Experience";
import Profile from "./components/Profile/Profile";
import Projects2 from "./components/Projects/Projects2";
import Recommendations from "./components/Recommendations/Recommendations";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

export const metadata = {
  title:
    "Portfolio | M. Asad — Full-Stack Developer | ERP, Automation & MERN",
  description:
    "Muhammad Asad builds production internal tools, ERP-style systems, and workflow automation with the MERN stack and Next.js—integrations, admin dashboards, and scalable backends for operations teams. Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "Next.js",
    "React.js",
    "Node.js",
    "ERP Development",
    "Business Automation",
    "Internal Tools",
    "Workflow Automation",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Muhammad Asad",
    "Asad",
    "Portfolio",
    "Lahore Pakistan",
    "Freelance Developer",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/asadimg.avif`,
      width: 1200,
      height: 630,
      alt: "Muhammad Asad — Full-stack developer, ERP & business systems",
    },
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
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
  category: "Portfolio",
  classification: "Software Development Portfolio",
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.5204;74.3587",
    "ICBM": "31.5204, 74.3587",
  },

  // Open Graph metadata
  openGraph: {
    title:
      "Muhammad Asad — Full-Stack Developer | ERP, Automation & MERN",
    description:
      "Internal tools, workflow automation, and MERN/Next.js systems for growing operations—with integrations, admin dashboards, and reliable architecture.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/asadimg.avif`,
        width: 1200,
        height: 630,
        alt: "Muhammad Asad — Full-stack developer, ERP & business systems",
        type: "image/avif",
      },
    ],
    type: "profile",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
    firstName: "Muhammad",
    lastName: "Asad",
    username: "Muhammad Asad",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title:
      "Portfolio | M. Asad — Full-Stack & ERP / business systems",
    description:
      "MERN, Next.js, internal tools, automation, and integrations for operations teams.",
    site: "@MAsad96668934",
    creator: "@MAsad96668934",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/asadimg.avif`],
  },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Comprehensive JSON-LD Structured Data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    alternateName: "M. Asad",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer with 3+ years building ERP-style internal tools, workflow automation, and scalable MERN/Next.js applications for operations, e-commerce, and logistics.",
    url: baseUrl,
    image: `${baseUrl}/images/asadimg.png`,
    email: "189asadali@gmail.com",
    telephone: "+92-319-3148320",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
      "https://x.com/MAsad96668934",
      "https://www.instagram.com/masadali_189",
    ],
    knowsAbout: [
      "MERN Stack",
      "Full Stack Development",
      "ERP and internal tooling",
      "Business process automation",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "System integration",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Virtual University of Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore",
      },
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ERP, Automation and MERN Business System Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Asad",
    },
    description:
      "Business-focused full-stack development services including ERP-style internal tooling, workflow automation, e-commerce operations systems, API integrations, dashboards, database architecture, and scalable MERN applications.",
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    serviceType: [
      "ERP Development",
      "Business Workflow Automation",
      "Internal Tooling",
      "E-commerce Operations Systems",
      "Marketplace and Shipping Integrations",
      "Admin Dashboards",
      "Backend API Development",
      "MERN Stack Development",
    ],
    url: `${baseUrl}/details/services`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Asad Portfolio",
    url: baseUrl,
    description:
      "Muhammad Asad — portfolio of ERP-style internal tools, automation, MERN/Next.js projects, skills, and experience.",
    author: {
      "@type": "Person",
      name: "Muhammad Asad",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/details/projects?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full">
        <Profile />
        <About />
        <Services />
        <Experience />
        <Projects2 />
        <Credentials />
        <Skills />
        <Recommendations />
      </div>
    </>
  );
}
