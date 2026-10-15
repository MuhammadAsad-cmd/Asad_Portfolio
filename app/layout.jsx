import "./globals.css";
import { Outfit } from "next/font/google";
import MainLayout from "./components/Layouts/MainLayouts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  buildPersonSchema,
  indexRobots,
} from "./lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

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
    "ERP Development",
    "Business Automation",
    "Internal Tools",
    "React.js",
    "Node.js",
    "MongoDB",
    "Muhammad Asad",
    "masadali",
    "masadali.com",
    "Portfolio",
    "Lahore Pakistan",
  ],
  robots: indexRobots,
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  // Open Graph metadata
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
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

  // Search engine verification
  verification: {
    google: "googleb6adf1a902f0ceed",
  },

};

export const viewport = {
  themeColor: "#1f1f24",
};

export default function RootLayout({ children }) {
  const personSchema = buildPersonSchema();

  return (
    <html lang="en" className={`dark ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/images/asadimg.avif"
          as="image"
          type="image/avif"
          fetchPriority="high"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('site-theme');if(s){if(JSON.parse(s).isDark===false)document.documentElement.classList.remove('dark');return;}var l=localStorage.getItem('persist:root');if(l){if(JSON.parse(JSON.parse(l).theme).isDark===false)document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${outfit.className} custom-scrollbar m-0 scroll-smooth bg-lightbg p-0 text-lightPrimarytext dark:bg-[#1f1f24] dark:text-white`}>
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
