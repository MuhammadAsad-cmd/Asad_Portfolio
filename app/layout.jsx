import ContactInfo from "./components/ContactInfo/ContactInfo";
import Header from "./components/Header/Header";

import "./globals.css";

export const metadata = {
  title: "Portfolio | M. Asad - Web Developer | Front-End Developer",
  description:
    "I build web-based solutions that prioritize functionality and user experience. I enjoy turning ideas into reality by creating practical and visually appealing web applications.",
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
  ],
  icons: ["/images/name.avif"],
  metadataBase: new URL("https://asad-portfolio-ai.vercel.app/"),

  // Open Graph metadata
  openGraph: {
    title: "Muhammad Asad - Creative Web Developer",
    description:
      "Creative developer specializing in web development and user experience.",
    images: [
      {
        url: "/images/asad.png", // Ensure this is a large, high-quality image
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
    card: "summary_large_image", // Use a large image for visibility
    title: "Portfolio | M. Asad - Web Developer",
    description:
      "Explore the portfolio of M. Asad, a web developer specializing in creating user-friendly applications.",
    site: "@yourTwitterHandle", // Replace with your Twitter handle
    creator: "@yourTwitterHandle", // Replace with your Twitter handle
    images: ["/images/asad.png"], // Use the same image for Twitter
  },

  // Additional metadata for structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asad",
    jobTitle: "Web Developer",
    url: "https://asad-portfolio-ai.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/asad189/", // Replace with your LinkedIn link
      "https://github.com/MuhammadAsad-cmd", // Replace with your GitHub link
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container mx-auto mt-5 flex w-full max-w-[720px] flex-col gap-5 md:flex-row lg:max-w-[960px] xl:max-w-[1128px]">
          <div className="w-full">{children}</div>
          {/* Aside */}
          <aside className="hidden w-full max-w-[300px] md:block">
            {/* Contact Info */}
            <ContactInfo />
          </aside>
        </div>
      </body>
    </html>
  );
}
