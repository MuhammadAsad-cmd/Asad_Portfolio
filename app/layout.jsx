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
  icons: ["/images/name.avif"],
  metadataBase: new URL("https://masadali.vercel.app/"),

  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - MERN Stack Developer",
    description:
      "Showcasing the work of Muhammad Asad, a MERN Stack developer passionate about creating robust full-stack solutions and intuitive user interfaces.",
    images: [
      {
        url: "/images/seoimg.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Asad, MERN Stack Developer",
      },
    ],
    type: "website",
    url: "https://masadali.vercel.app/",
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
    images: ["/images/seoimg.png"],
  },

  // Additional metadata for structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "MERN Stack Developer",
    url: "https://masadali.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="custom-scrollbar m-0 scroll-smooth bg-lightbg p-0 text-lightPrimarytext transition-all duration-300 ease-in-out dark:bg-[#1f1f24] dark:text-white">
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
