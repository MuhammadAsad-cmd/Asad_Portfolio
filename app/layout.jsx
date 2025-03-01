import "./globals.css";
import MainLayout from "./components/Layouts/MainLayouts";

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
  icons: ["/images/name.avif"],
  metadataBase: new URL("https://asad-portfolio-ai.vercel.app/"),

  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - Front End Developer",
    description:
      "Showcasing the work of Muhammad Asad, a web developer passionate about creating cutting-edge digital solutions and intuitive user interfaces.",
    images: [
      {
        url: "/images/asad.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Asad, Web Developer",
      },
    ],
    type: "website",
    url: "https://asad-portfolio-ai.vercel.app/",
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
    images: ["/images/asad.png"],
  },

  // Additional metadata for structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "Web Developer",
    url: "https://asad-portfolio-ai.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/asad189/",
      "https://github.com/MuhammadAsad-cmd",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 scroll-smooth bg-lightbg p-0 text-lightPrimarytext transition-all duration-300 ease-in-out dark:bg-[#1f1f24] dark:text-white">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
