import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Profile from "./components/Profile/Profile";
import Projects2 from "./components/Projects/Projects2";
import Recommendations from "./components/Recommendations/Recommendations";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

export const metadata = {
  title: "Portfolio | M. Asad - MERN Stack Developer | Full Stack Developer",
  description:
    "Welcome to the portfolio of Muhammad Asad, a creative and detail-oriented MERN Stack developer specializing in building scalable full-stack web applications. Explore innovative solutions, modern designs, and seamless user experiences crafted with MongoDB, Express, React, and Node.js.",
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
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Muhammad Asad",
    "Asad",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Lahore Pakistan",
    "Freelance Developer",
  ],
  icons: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
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
  classification: "Web Development Portfolio",
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.5204;74.3587",
    "ICBM": "31.5204, 74.3587",
  },

  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - MERN Stack Developer | Full Stack Developer",
    description:
      "Showcasing the work of Muhammad Asad, a MERN Stack developer passionate about creating robust full-stack solutions and intuitive user interfaces. 3+ years of experience in building scalable web applications.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Asad, MERN Stack Developer",
        type: "image/png",
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
    title: "Portfolio | M. Asad - MERN Stack Developer",
    description:
      "Explore Muhammad Asad's portfolio, featuring expertise in MERN Stack development, modern web technologies, and exceptional digital experiences.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`],
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
    jobTitle: "MERN Stack Developer",
    description:
      "MERN Stack Developer with 3+ years of experience building scalable full-stack web applications using MongoDB, Express, React, and Node.js.",
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
      "https://www.instagram.com/masadali_189",
    ],
    knowsAbout: [
      "MERN Stack",
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
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
      name: "MERN Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore",
      },
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MERN Stack Development Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Asad",
    },
    description:
      "Full-stack web development services including frontend development with React.js and Next.js, backend API development with Node.js and Express.js, database design with MongoDB, and deployment services.",
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
    ],
    url: `${baseUrl}/details/services`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Asad Portfolio",
    url: baseUrl,
    description:
      "Portfolio website of Muhammad Asad, a MERN Stack Developer showcasing projects, skills, and professional experience.",
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
        <Education />
        <Skills />
        <Recommendations />
        <Certifications />
      </div>
    </>
  );
}
