import "./globals.css";
import MainLayout from "./components/Layouts/MainLayouts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
    "ERP Development",
    "Business Automation",
    "Internal Tools",
    "React.js",
    "Node.js",
    "MongoDB",
    "Muhammad Asad",
    "Portfolio",
    "Lahore Pakistan",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
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
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
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

  // Search engine verification
  verification: {
    google: "googleb6adf1a902f0ceed",
  },

};

export const viewport = {
  themeColor: "white",
};

export default function RootLayout({ children }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Person Schema for root layout
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
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore",
      },
    },
  };

  return (
    <html lang="en">
      <body className="custom-scrollbar m-0 scroll-smooth bg-lightbg p-0 text-lightPrimarytext transition-all duration-300 ease-in-out dark:bg-[#1f1f24] dark:text-white">
        {/* JSON-LD Structured Data for Root Layout */}
        <script
          id="root-person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
