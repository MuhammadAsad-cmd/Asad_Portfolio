import Certifications from "@/app/components/Certifications/Certifications";

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
  openGraph: {
    title: "Certifications | M. Asad",
    description:
      "Front-end, full-stack, and Cisco credentials for Muhammad Asad.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/details/certifications`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | M. Asad",
    description:
      "Verified training and credentials—full-stack, front-end, Cisco C++ Essentials.",
  },
};

export default function CertificationsPage() {
  return <Certifications variant="standalone" />;
}
