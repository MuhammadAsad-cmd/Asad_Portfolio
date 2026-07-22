import About from "./components/About/About";
import Credentials from "./components/Credentials/Credentials";
import Experience from "./components/Experience/Experience";
import Profile from "./components/Profile/Profile";
import Projects2 from "./components/Projects/Projects2";
import Recommendations from "./components/Recommendations/Recommendations";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import WhoIWorkWith from "./components/WhoIWorkWith/WhoIWorkWith";

export const metadata = {
  title:
    "Portfolio | M. Asad — Enterprise ERP & Infrastructure Engineer",
  description:
    "Muhammad Asad engineers high-scale ERP systems, business infrastructure, and workflow automation with Node.js, Next.js, and React—multi-tenant platforms, API pipelines, admin dashboards, and scalable backends for enterprise operations. Lahore, Pakistan.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Enterprise ERP Engineer",
    "Infrastructure Engineer",
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
      alt: "Muhammad Asad — Enterprise ERP and infrastructure engineer",
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
      "Muhammad Asad — Enterprise ERP & Infrastructure Engineer",
    description:
      "High-scale ERP systems, workflow automation, and Node.js/Next.js infrastructure for growing operations—with multi-tenant architecture, integrations, admin dashboards, and reliable backends.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/asadimg.avif`,
        width: 1200,
        height: 630,
        alt: "Muhammad Asad — Enterprise ERP and infrastructure engineer",
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
      "Portfolio | M. Asad — Enterprise ERP & Infrastructure Engineer",
    description:
      "Node.js, Next.js, React—ERP systems, automation, and enterprise infrastructure for operations teams.",
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
    jobTitle: "Enterprise ERP & Infrastructure Engineer",
    description:
      "Enterprise engineer with 3+ years building multi-tenant ERP systems, workflow automation, and scalable Node.js/Next.js infrastructure for operations, e-commerce, and logistics.",
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
      "Enterprise ERP Systems",
      "Distributed Systems Architecture",
      "ERP and internal tooling",
      "Business process automation",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multi-Tenant Architecture",
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
      name: "Enterprise ERP & Infrastructure Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore",
      },
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ERP, Automation and Enterprise Infrastructure Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Asad",
    },
    description:
      "Business-focused engineering services including multi-tenant ERP systems, workflow automation, e-commerce operations platforms, API integrations, dashboards, database architecture, and scalable Node.js/Next.js applications.",
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
      "Enterprise Stack Development",
    ],
    url: `${baseUrl}/details/services`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Asad Portfolio",
    url: baseUrl,
    description:
      "Muhammad Asad — portfolio of enterprise ERP systems, automation, Node.js/Next.js projects, skills, and experience.",
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
        <Projects2 />
        <WhoIWorkWith />
        <Services />
        <Experience />
        <Credentials />
        <Skills />
        <Recommendations />
      </div>
    </>
  );
}
