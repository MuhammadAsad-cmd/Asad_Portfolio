import Certifications from "@/app/components/Certifications/Certifications";
import { SITE_URL, indexRobots } from "@/app/lib/site";

export const dynamic = "force-static";

export const metadata = {
  title: "Certifications | M. Asad — Portfolio",
  description:
    "Verified training and credentials for Muhammad Asad—including front-end, full-stack development, and Cisco C++ Essentials.",
  authors: [{ name: "M. Asad" }],
  creator: "Muhammad Asad",
  publisher: "Muhammad Asad",
  applicationName: "Portfolio | Muhammad Asad",
  keywords: [
    "Certifications",
    "Full Stack",
    "Web Development",
    "Cisco",
    "Muhammad Asad",
  ],
  icons: {
    icon: "/images/logo a.png",
    shortcut: "/images/logo a.png",
    apple: "/images/logo a.png",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/details/certifications`,
  },
  robots: indexRobots,
  openGraph: {
    title: "Certifications | M. Asad",
    description:
      "Front-end, full-stack, and Cisco credentials for Muhammad Asad.",
    url: `${SITE_URL}/details/certifications`,
    images: [
      {
        url: `${SITE_URL}/images/asadimg.avif`,
        width: 1200,
        height: 630,
        alt: "Certifications of Muhammad Asad",
      },
    ],
    type: "website",
    siteName: "Muhammad Asad Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | M. Asad",
    description:
      "Verified training and credentials—full-stack, front-end, Cisco C++ Essentials.",
    images: [`${SITE_URL}/images/asadimg.avif`],
  },
};

export default function CertificationsPage() {
  return <Certifications variant="standalone" />;
}
