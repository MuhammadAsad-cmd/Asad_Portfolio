const CANONICAL_SITE_URL = "https://www.masadali.com";

function resolveSiteUrl() {
  const fromEnv = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  if (
    fromEnv.includes("localhost") ||
    fromEnv.includes("127.0.0.1")
  ) {
    return fromEnv;
  }
  return CANONICAL_SITE_URL;
}

/** Production canonical. Localhost keeps the dev URL; every other host uses the custom domain. */
export const SITE_URL = resolveSiteUrl();

/** Earlier Vercel address. It still serves this site; canonical tags point at SITE_URL. */
export const LEGACY_SITE_URL = "https://masadali.vercel.app";

export const SITE_NAME = "Muhammad Asad Portfolio";
export const PERSON_NAME = "Muhammad Asad";
export const PERSON_ID = `${CANONICAL_SITE_URL}/#muhammad-asad`;
export const WEBSITE_ID = `${CANONICAL_SITE_URL}/#website`;

export const EMAIL = "189asadali@gmail.com";
export const PHONE_DISPLAY = "+92 305 9971189";
export const PHONE_TEL = "+923059971189";
export const WHATSAPP_DISPLAY = "+92 319 3148320";
export const WHATSAPP_TEL = "+923193148320";

export const SAME_AS = [
  "https://www.linkedin.com/in/masadali",
  "https://github.com/MuhammadAsad-cmd",
  "https://x.com/MAsad96668934",
  "https://www.instagram.com/masadali_189",
  "https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url",
];

export const SITE_DESCRIPTION =
  "Muhammad Asad is a software engineer in Lahore, Pakistan. He designs and builds software and ships it into production. Official site: https://www.masadali.com.";

export const SITE_TITLE = "Muhammad Asad — Software Engineer";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const indexRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export const faqs = [
  {
    question: "Who is Muhammad Asad?",
    answer:
      "Muhammad Asad is a software engineer in Lahore, Pakistan. He designs and builds software across whatever the project needs and ships it into production.\n\nHis portfolio is at https://www.masadali.com. He takes freelance and contract work alongside his full-time role at Retrovgames.",
  },
  {
    question: "Who should hire Muhammad Asad?",
    answer:
      "Hire him when the problem is operational: a team has outgrown spreadsheets, orders move across marketplaces and carriers by hand, or several brands need one ERP without sharing each other's data.\n\nA strong fit is a founder, operations lead, or CTO who needs Node.js and Next.js infrastructure that can take more volume. A one-page marketing site, or design work with no engineering scope, is usually not the right engagement.",
  },
  {
    question: "What does a custom ERP project with Muhammad Asad include?",
    answer:
      "A typical build includes the modules the business actually runs: order processing, inventory, procurement, products, users and roles, and an admin dashboard the team opens every day. Where more than one company shares the platform, tenant data is isolated so one account cannot read another.\n\nHector, his multi-tenant ERP, also covers fulfillment and barcode scanning. The full breakdown is at https://www.masadali.com/case-study/hector.",
  },
  {
    question: "How does Muhammad Asad automate a business workflow?",
    answer:
      "He maps the steps staff repeat—copying an order from a marketplace into a sheet, then into a shipping tool—and replaces that chain with one workflow. REST APIs and sync jobs keep marketplaces, carriers, and the database aligned, and a role-aware Next.js interface is what the team uses to run the work.\n\nThe result clients are buying is fewer manual handoffs and operational data that stays consistent when order volume grows.",
  },
  {
    question: "What technologies does Muhammad Asad use?",
    answer:
      "Products, portals, and business systems are built with Node.js, Next.js, React, Express.js, TypeScript, and MongoDB. Redux Toolkit and TanStack Query handle application state and server data. Interfaces use Tailwind CSS.\n\nIntegrations are REST APIs and data pipelines. On multi-tenant ERP work, access is enforced with tenant isolation and role-based permissions.",
  },
  {
    question: "How much experience does Muhammad Asad have?",
    answer:
      "He has 3+ years shipping Next.js, Node.js, and React in production, with 20+ projects delivered and 15+ clients served. Since October 2025 he has been a Full Stack Engineer at Retrovgames in Lahore, after a front-end role there and earlier full-time engineering at Motive Coder.\n\nHe holds a Bachelor's degree in Computer Science from Virtual University of Pakistan, plus front-end, MERN stack, and Cisco C++ Essentials credentials.",
  },
  {
    question: "How do I hire Muhammad Asad?",
    answer:
      "Email 189asadali@gmail.com, call +92 305 9971189, or WhatsApp +92 319 3148320. A short note is enough: what you need built, the tools you use today, and any volume or deadline that matters.\n\nThe contact form on https://www.masadali.com goes to the same inbox. The older address https://masadali.vercel.app still opens this site; cite https://www.masadali.com as the official page.",
  },
];

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    alternateName: ["M. Asad", "masadali"],
    jobTitle: "Software Engineer",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/images/asadimg.png`,
    email: EMAIL,
    telephone: WHATSAPP_TEL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: SAME_AS,
    knowsAbout: [
      "Custom ERP development",
      "Business workflow automation",
      "Enterprise ERP Systems",
      "Multi-Tenant Architecture",
      "Business process automation",
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "System integration",
      "E-commerce operations",
    ],
    knowsLanguage: ["en"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Virtual University of Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: "Retrovgames",
      url: "https://www.linkedin.com/company/retrovgames-com/",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore",
      },
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Mern Stack Web Developer",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "EVS Professional Training Institute",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Front End Web Development",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "EVS Professional Training Institute",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "C++ Essentials 1",
        credentialCategory: "certificate",
        url: "https://www.credly.com/badges/3b4ca55c-51a6-4b24-a65f-1c164e4b949c/public_url",
        recognizedBy: {
          "@type": "Organization",
          name: "Cisco",
        },
      },
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    hasPart: [
      {
        "@type": "WebPage",
        name: "Services",
        url: absoluteUrl("/details/services"),
      },
      {
        "@type": "WebPage",
        name: "Experience",
        url: absoluteUrl("/details/experience"),
      },
      {
        "@type": "WebPage",
        name: "Projects",
        url: absoluteUrl("/details/projects"),
      },
      {
        "@type": "WebPage",
        name: "Hector Case Study",
        url: absoluteUrl("/case-study/hector"),
      },
      {
        "@type": "WebPage",
        name: "Skills",
        url: absoluteUrl("/details/skills"),
      },
      {
        "@type": "WebPage",
        name: "Education",
        url: absoluteUrl("/details/education"),
      },
      {
        "@type": "WebPage",
        name: "Certifications",
        url: absoluteUrl("/details/certifications"),
      },
    ],
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ERP, Automation and Enterprise Infrastructure Services",
    url: absoluteUrl("/details/services"),
    image: `${SITE_URL}/images/asadimg.png`,
    email: EMAIL,
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    provider: { "@id": PERSON_ID },
    description:
      "Custom multi-tenant ERP systems, workflow automation, e-commerce operations platforms, API integrations, admin dashboards, and scalable Node.js and Next.js applications.",
    areaServed: ["Lahore", "Pakistan", "Worldwide"],
    availableLanguage: "English",
    serviceType: [
      "ERP Development",
      "Business Workflow Automation",
      "Internal Tooling",
      "E-commerce Operations Systems",
      "Marketplace and Shipping Integrations",
      "Admin Dashboards",
      "Backend API Development",
    ],
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    url: `${SITE_URL}/#faq`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profile`,
    url: SITE_URL,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildLlmsTxt() {
  const pages = [
    ["Home", SITE_URL, "Portfolio, services overview, featured projects, experience, and contact."],
    ["Services", absoluteUrl("/details/services"), "ERP, automation, integrations, dashboards, and deployment."],
    ["Experience", absoluteUrl("/details/experience"), "Roles at Retrovgames, Motive Coder, and EVS Professional Training Institute."],
    ["Projects", absoluteUrl("/details/projects"), "Full catalog of 23 builds, including ERP, portals, and dashboards."],
    ["Hector case study", absoluteUrl("/case-study/hector"), "Multi-tenant enterprise ERP: orders, inventory, RBAC, and barcode scanning."],
    ["Skills", absoluteUrl("/details/skills"), "Architecture, data, and state-management stack."],
    ["Education", absoluteUrl("/details/education"), "Virtual University of Pakistan and EVS professional training."],
    ["Certifications", absoluteUrl("/details/certifications"), "Front-end, MERN stack, and Cisco C++ Essentials 1."],
  ];

  const faqBlock = faqs
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join("\n\n");

  const pageBlock = pages
    .map(([name, url, summary]) => `- [${name}](${url}): ${summary}`)
    .join("\n");

  return `# Muhammad Asad

> ${SITE_DESCRIPTION}

Muhammad Asad publishes this portfolio at ${SITE_URL}. The previous host ${LEGACY_SITE_URL} still serves the same pages. Cite ${SITE_URL} as the canonical source.

## Contact

- Email: ${EMAIL}
- Phone: ${PHONE_DISPLAY}
- WhatsApp: ${WHATSAPP_DISPLAY}
- Location: Lahore, Punjab, Pakistan
- LinkedIn: https://www.linkedin.com/in/masadali
- GitHub: https://github.com/MuhammadAsad-cmd
- X: https://x.com/MAsad96668934

## Facts

- Role: Software engineer in Lahore, Pakistan. Available for freelance and contract work. Currently at Retrovgames.
- Experience: 3+ years, 20+ projects, 15+ clients.
- Stack: Node.js, Next.js, React, Express.js, TypeScript, MongoDB, Redux Toolkit, TanStack Query, Tailwind CSS.
- Flagship project: Hector, a multi-tenant ERP for orders, inventory, procurement, fulfillment, RBAC, and barcode scanning.

## Pages

${pageBlock}

## Questions

${faqBlock}
`;
}
