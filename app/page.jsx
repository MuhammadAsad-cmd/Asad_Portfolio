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
  title: "Portfolio | M. Asad - Web Developer | Front-End Developer",
  description:
    "Welcome to the portfolio of Muhammad Asad, a creative and detail-oriented web developer specializing in front-end development. Explore innovative solutions, modern designs, and seamless user experiences crafted to bring ideas to life.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Front-End Developer",
    "UI/UX Design",
    "Muhammad Asad",
    "Asad",
    "Portfolio",
    "Web Developer",
    "UI/UX Developer",
  ],
  icons: ["/images/seoimg.png"],
  metadataBase: new URL("https://masadali.vercel.app/"),

  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - Front End Developer",
    description:
      "Showcasing the work of Muhammad Asad, a web developer passionate about creating cutting-edge digital solutions and intuitive user interfaces.",
    images: [
      {
        url: "/images/seoimg.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Asad, Web Developer",
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
    title: "Portfolio | M. Asad - Web Developer",
    description:
      "Explore Muhammad Asad's portfolio, featuring expertise in front-end development, modern web technologies, and exceptional digital experiences.",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    images: ["/images/seoimg.png"],
  },

  // Additional metadata for structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "Web Developer",
    url: "https://masadali.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/masadali",
      "https://github.com/MuhammadAsad-cmd",
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Profile />
        <About />
        <Services />
        <Experience />
        <Education />
        <Projects2 />
        <Skills />
        <Recommendations />
        <Certifications />
      </div>
    </>
  );
}
