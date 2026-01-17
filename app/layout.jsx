import "./globals.css";
import MainLayout from "./components/Layouts/MainLayouts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
  ],
  icons: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/name.avif`],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - MERN Stack Developer",
    description:
      "Showcasing the work of Muhammad Asad, a MERN Stack developer passionate about creating robust full-stack solutions and intuitive user interfaces.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Asad, MERN Stack Developer",
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
    title: "Portfolio | M. Asad - MERN Stack Developer",
    description:
      "Explore Muhammad Asad's portfolio, featuring expertise in MERN Stack development, modern web technologies, and exceptional digital experiences.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`],
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
    hasOccupation: {
      "@type": "Occupation",
      name: "MERN Stack Developer",
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
