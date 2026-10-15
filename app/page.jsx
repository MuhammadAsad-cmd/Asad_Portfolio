import dynamic from "next/dynamic";
import About from "./components/About/About";
import Credentials from "./components/Credentials/Credentials";
import Experience from "./components/Experience/Experience";
import Faq from "./components/Faq/Faq";
import Profile from "./components/Profile/Profile";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import WhoIWorkWith from "./components/WhoIWorkWith/WhoIWorkWith";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProfessionalServiceSchema,
  buildProfilePageSchema,
  buildWebsiteSchema,
} from "./lib/site";

const Projects2 = dynamic(() => import("./components/Projects/Projects2"));
const Recommendations = dynamic(
  () => import("./components/Recommendations/Recommendations"),
);

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
    "masadali",
    "masadali.com",
    "Portfolio",
    "Lahore Pakistan",
    "Freelance Developer",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(`${SITE_URL}`),
  alternates: {
    canonical: `${SITE_URL}`,
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

  // Open Graph metadata
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "profile",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    locale: "en_US",
    firstName: "Muhammad",
    lastName: "Asad",
    username: "Muhammad Asad",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Node.js, Next.js, React—ERP systems, automation, and enterprise infrastructure for operations teams.",
    site: "@MAsad96668934",
    creator: "@MAsad96668934",
  },
};

export default function Home() {
  const websiteSchema = buildWebsiteSchema();
  const professionalServiceSchema = buildProfessionalServiceSchema();
  const faqSchema = buildFaqSchema();
  const profilePageSchema = buildProfilePageSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
  ]);

  return (
    <>
      <script
        id="profile-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full">
        <Profile />
        <About />
        <div className="below-fold">
          <Projects2 />
        </div>
        <div className="below-fold">
          <WhoIWorkWith />
        </div>
        <div className="below-fold">
          <Services />
        </div>
        <div className="below-fold">
          <Experience />
        </div>
        <div className="below-fold">
          <Credentials />
        </div>
        <div className="below-fold">
          <Skills />
        </div>
        <div className="below-fold">
          <Recommendations />
        </div>
        <Faq />
      </div>
    </>
  );
}
