import "./globals.css";
import MainLayout from "./components/Layouts/MainLayouts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
      "Muhammad Asad — Enterprise ERP & Infrastructure Engineer",
    description:
      "High-scale ERP systems, workflow automation, and Node.js/Next.js infrastructure for growing operations—with multi-tenant architecture, integrations, admin dashboards, and reliable backends.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/asadimg.avif`,
        width: 1200,
        height: 630,
        alt: "Muhammad Asad — Enterprise ERP and infrastructure engineer",
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
      "Portfolio | M. Asad — Enterprise ERP & Infrastructure Engineer",
    description:
      "Node.js, Next.js, React—ERP systems, automation, and enterprise infrastructure for operations teams.",
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
    hasOccupation: {
      "@type": "Occupation",
      name: "Enterprise ERP & Infrastructure Engineer",
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
