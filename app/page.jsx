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
  ],
  icons: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/seoimg.png`],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

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

  // Additional metadata for structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "MERN Stack Developer",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
  },
};

export default function Home() {
  return (
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
  );
}
