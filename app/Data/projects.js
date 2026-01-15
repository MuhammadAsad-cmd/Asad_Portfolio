// Projects data
export const projectsData = [
  // 1. Hector - Full Stack
  {
    id: 0,
    title: "Hector — Multi-Module Enterprise ERP System",
    category: "Full Stack",
    description: `Hector is a comprehensive, multi-module Enterprise Resource Planning (ERP) system designed to streamline complex business operations. As a Full Stack Developer, I architected and implemented core modules including Order Processing, Inventory Management, User & Role Management, Product Management, Employee Management, and an Attendance System.

    The system also features specialized modules for Sourcing, Procurement, Order Fulfillment, and Barcode Scanning. I led the full-stack development for key modules while collaborating on frontend components for others. The application integrates seamless barcode scanning for inventory tracking and utilizes a robust tech stack to ensure high performance and scalability across all business functions.`,
    stackUsed: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design (AntD)",
      "TanStack Query",
      "JavaScript",
      "Barcode Scanning Integration",
    ],
    image: "/images/hector.png",
    Link: "https://app.retroventures.co/",
    caseStudy: "/case-study/hector",
  },

  // 2. RetrovGames CP - Customer Portal
  {
    id: 1,
    title: "RetrovGames — Customer Portal",
    category: "Customer Portals",
    description: `A responsive Shopify customer portal that centralizes post-purchase operations: order management, shipment tracking, returns, PDF invoices, coupons & gift cards, and a trade-in program for selling gaming items. I led the frontend — implementing the full UI, interactions, and dynamic client-side behavior, while backend APIs were provided by a Node.js service.`,
    stackUsed: [
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "React.js",
      "JavaScript",
      "Node.js (backend)",
    ],
    contribution:
      "Frontend Engineer — UI/UX design, client-side logic, responsive layouts, TanStack data fetching and state, PDF invoice UI, trade-in & return flows",
    image: "/images/retrovgamecp.png",
    Link: "https://app.retrovgames.com/",
    caseStudy: "/case-study/retrovgamecp.png",
  },

  // 3. RetroFam CP - Customer Portal
  {
    id: 2,
    title: "RetroFam — Customer Portal",
    category: "Customer Portals",
    description: `A responsive Shopify customer portal that centralizes post-purchase operations: order management, shipment tracking, returns, PDF invoices, coupons & gift cards, and a trade-in program for selling gaming items. I led the frontend — implementing the full UI, interactions, and dynamic client-side behavior, while backend APIs were provided by a Node.js service.`,
    stackUsed: [
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "React.js",
      "JavaScript",
      "Node.js (backend)",
    ],
    contribution:
      "Frontend Engineer — UI/UX design, client-side logic, responsive layouts, TanStack data fetching and state, PDF invoice UI, trade-in & return flows",
    image: "/images/customer portal.png",
    Link: "https://app.retrofam.com",
    caseStudy: "/case-study/retrofam-customer-portal",
  },

  // 4. GL Dream Home - E-commerce
  {
    id: 3,
    title: "GL Dream Home",
    category: "E-commerce",
    description: `A premium furniture and interior design platform that blends curated collections with inspirational galleries. It offers detailed showcases, a user-friendly interface, and a fully responsive design for seamless shopping across devices.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/gldreamhome.png",
    Link: "https://gldreamhome.com",
    caseStudy: "/case-study/gl-dream-home",
  },

  // 5. GL Group UAE - UI/UX
  {
    id: 4,
    title: "GL Group UAE",
    category: "UI/UX",
    description: `The GL Group UAE site presents a diversified business portfolio—from real estate to hospitality—in a clean, corporate design. It highlights projects, investor relations, and brand identity through intuitive navigation and responsive layouts.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/groupuae.png",
    Link: "https://www.glgroupuae.com",
    caseStudy: "/case-study/gl-group-uae",
  },

  // 6. BitKnit - UI/UX
  {
    id: 5,
    title: "BitKnit Limited — Digital Agency Portfolio",
    category: "UI/UX",
    description: `BitKnit Limited is a premium digital agency website showcasing services in paid advertising, business automation, and custom web development. The site features stunning Framer Motion animations, smooth page transitions, and interactive UI elements that create an engaging user experience. Highlights include an animated hero section, dynamic service showcases, client testimonials carousel, and a comprehensive portfolio of redesigned websites for various industries including e-commerce, SaaS, healthcare, and more. Built to demonstrate cutting-edge web design and development capabilities.`,
    stackUsed: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    image: "/images/bitknit.png",
    Link: "https://bitknitlimited.com/",
    caseStudy: "/case-study/bitknit",
  },
  // 6. Bourter - Landing Page
  {
    id: 6,
    title: "Bourter",
    category: "UI/UX",
    description: `Bourter is a comprehensive ride-sharing platform landing page that connects riders with verified drivers for fast, safe, and reliable transportation. The platform features an all-in-one solution for booking rides, tracking in real-time, and seamless payments.

    The landing page showcases Bourter's core features including how the platform works with a 4-step process (Request, Match, Ride, Arrive), real-time GPS tracking and navigation, multiple ride type options (Economy, Comfort, Luxury), and secure payment integrations. The site includes detailed sections explaining why users should choose Bourter, highlighting verified drivers, safety features, and innovative technology.

    Key functionality includes two registration pathways: "Join as Driver" and "Join as Company". The driver registration features a multi-step form where users can upload required documents (license, vehicle registration, insurance), select subscription plans, and complete their profile. Similarly, the company registration allows fleet owners to register their business, upload company logo, cover image, and letterhead, and manage multiple drivers and vehicles through a comprehensive dashboard.

    The landing page is fully responsive, includes app store links for iOS and Android, features an FAQ section, and provides seamless user experience with smooth animations and modern UI/UX design principles.`,
    stackUsed: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Form Validation",
      "File Upload",
      "Multi-step Forms",
      "JavaScript",
    ],
    contribution:
      "Frontend Developer — Complete landing page development including hero sections, how it works flow, multi-step registration forms for drivers and companies, document upload functionality, plan selection system, responsive design, animations, and seamless user experience",
    image: "/images/bourter-landing.jpeg",
    Link: "https://bourter-landing-page.vercel.app/",
    caseStudy: "/case-study/bourter-landing-page",
  },

  // 7. Canrover - Admin Dashboard
  {
    id: 7,
    title: "Canrover Admin Panel",
    category: "Admin Dashboards",
    description: `Developed a fully dynamic Next.js/Node.js admin dashboard for a US scooter-rental client, featuring live map tracking, remote lock/unlock, QR-code ride activation, form validation, and secure access. Added Google Maps-based zone management to visualize parking zones, maintenance areas, danger zones, and more—all in a responsive, server-rendered interface for robust type safety and performance.`,
    stackUsed: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Google Maps API",
      "Tailwind CSS",
    ],
    image: "/images/canrover.png",
    Link: "https://canrover.vercel.app",
    caseStudy: "/case-study/canrover-admin",
  },

  // 8. Ryde - Admin Dashboard
  {
    id: 8,
    title: "Ryde Admin Dashboard",
    category: "Admin Dashboards",
    description: `Ryde Admin Dashboard is a web-based task management tool built around a dynamic Kanban board. Users can create projects, add and organize tasks across Backlog, To-Do, In-Progress, and Done columns, and easily move cards via drag-and-drop. Real-time status updates keep teams in sync, while a clean, responsive UI—powered by Tailwind CSS—ensures a seamless experience across devices.`,
    stackUsed: [
      "Next.js",
      "React.js",
      "Tanstack Query",
      "Redux Toolkit",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/ryde.png",
    Link: "https://ryde24.vercel.app",
    caseStudy: "/case-study/kanban-board",
  },

  // 9. Bourter - Admin Dashboard
  {
    id: 8,
    title: "Bourter — Admin Dashboard",
    category: "Admin Dashboards",
    description: `Bourter is a modern, feature-rich admin dashboard built with the latest web technologies. The dashboard provides comprehensive data visualization, user management, analytics tracking, and administrative controls. Features include interactive charts and graphs, real-time data updates with TanStack Query, smooth animations powered by Framer Motion, responsive design for all devices, and an intuitive interface for managing complex data. Built with performance and user experience in mind, utilizing server-side rendering and optimized data fetching strategies.`,
    stackUsed: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "TanStack Query",
      "Framer Motion",
      "JavaScript",
    ],
    image: "/images/bourter.png",
    Link: "https://bourter.vercel.app/",
    caseStudy: "/case-study/bourter",
  },

  // 10. CodesInc - UI/UX
  {
    id: 10,
    title: "CodesInc – IT Solutions & Services",
    category: "UI/UX",
    description: `A corporate website showcasing IT services with a modern, responsive design. It includes smooth page transitions, custom animations, and an intuitive layout. Optimized for performance and built to reflect professional branding.`,
    stackUsed: ["Next.js", "Tailwind CSS", "JavaScript"],
    image: "/images/codesinc.png",
    Link: "https://codes-inc.com",
    caseStudy: "/case-study/codesinc",
  },

  // 11. GlobalZairGuide - UI/UX
  {
    id: 10,
    title: "GlobalZairGuide — Spiritual Journey & Ziyarat Platform",
    category: "UI/UX",
    description: `GlobalZairGuide is a comprehensive spiritual journey and Ziyarat guidance platform designed for religious tourism. The platform helps pilgrims discover and visit sacred places in Makkah, Madinah, and Iraq's holy shrines. Features include interactive maps of sacred locations, tailored religious tourism packages from verified agents, integrated faith tools (Quranic verses, Hadiths, Qibla direction), and a seamless booking experience. Built with modern UI/UX principles to provide a serene and intuitive user experience for spiritual travelers.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/globalzair.png",
    Link: "https://globalzairguide.com/",
    caseStudy: "/case-study/globalzairguide",
  },

  // 12. RizqApp - UI/UX
  {
    id: 12,
    title: "RizqApp — Digital Loyalty Program for Restaurants",
    category: "UI/UX",
    description: `RizqApp is a modern digital loyalty platform that helps restaurants boost customer retention and increase repeat visits. The platform replaces traditional paper loyalty cards with a 100% digital solution featuring QR code scanning, points tracking, and automated rewards. Customers can manage all their loyalty cards in one app, while restaurants get a comprehensive dashboard to manage their loyalty programs, track customer engagement, and attract new clients. Built with a clean, user-friendly interface optimized for both customers and restaurant owners.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/rizqapp.png",
    Link: "https://rizqapp.com/",
    caseStudy: "/case-study/rizqapp",
  },

  // 13. Aziz Store/HairOil - E-commerce
  {
    id: 13,
    title: "HairOil — Premium E-commerce Platform",
    category: "E-commerce",
    description: `A full-stack e-commerce platform for premium hair oil products featuring a modern customer-facing website and comprehensive admin dashboard. The platform includes dynamic product catalog with 10+ premium hair oils, advanced shopping cart with Redux state management, secure checkout process with address validation, order management system, and real-time admin analytics. Built with Next.js 15 and React 19, featuring responsive design, smooth animations, and seamless user experience across all devices.`,
    stackUsed: [
      "Next.js 15",
      "React 19",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS 4",
      "Framer Motion",
      "Axios",
      "React Hook Form",
      "Zod",
      "SweetAlert2",
      "Swiper.js",
    ],
    contribution:
      "Full-Stack Developer — Complete frontend development including responsive UI/UX design, Redux state management for cart/wishlist, admin dashboard with CRUD operations, order management system, API integration, form validation, and real-time data fetching with TanStack Query",
    image: "/images/hairoil.jpg",
    Link: "https://www.azizstore.online/",
    caseStudy: "/case-study/hair-oil-ecommerce",
  },

  // 14. Kanban Board - Admin Dashboard
  {
    id: 13,
    title: "Kanban Board Project",
    category: "Admin Dashboards",
    description: `A task-management Kanban board with Backlog, To-Do, In-Progress, and Done columns. Features include project creation, drag-and-drop cards, and real-time status updates in a clean, responsive interface.`,
    stackUsed: [
      "Next.js",
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "/images/kanban.png",
    Link: "https://projectkanban.vercel.app",
    caseStudy: "/case-study/kanban-board",
  },

  // Rest of the projects...
  {
    id: 15,
    title: "the ENTERTAINER – Ultimate BOGO Deals & Lifestyle Savings",
    category: "UI/UX",
    description: `A savings platform offering Buy One Get One Free deals across dining, wellness, and more in the Middle East. It features intuitive navigation, responsive design, and a dedicated mobile experience to unlock premium offers seamlessly.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/entertainer.png",
    Link: "https://main.d3n4dxq4vxj5a8.amplifyapp.com",
    caseStudy: "/case-study/the-entertainer",
  },
  {
    id: 15,
    title: "Breaking Balls Sports – Multi-Sport Analytics",
    category: "UI/UX",
    description: `A comprehensive fantasy and betting analytics hub covering NFL, NBA, MLB, and more. Offers in-depth research, community features, and a user-friendly interface for informed decision-making in fantasy leagues and betting.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/breaking balls.jpeg",
    Link: "https://breaking-balls-sport.vercel.app",
    caseStudy: "/case-study/breaking-balls-sports",
  },
  {
    id: 17,
    title: "E-Commerce Minimog Template",
    category: "E-commerce",
    description: `A sleek, minimal e-commerce storefront template with product grids, filters, and checkout flows. Optimized for performance and responsive across all devices, it delivers a smooth shopping experience.`,
    stackUsed: ["Next.js", "Tailwind CSS", "JavaScript"],
    image: "/images/nextjsweb.png",
    Link: "https://next-js-template1-nbt.vercel.app",
    caseStudy: "/case-study/minimog-template",
  },
  {
    id: 17,
    title: "Github Profile Viewer",
    category: "UI/UX",
    description: `A real-time GitHub user lookup tool that fetches and displays profile data, repositories, and stats. It features live search, responsive design, and error handling for seamless browsing.`,
    stackUsed: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    image: "/images/github.png",
    Link: "https://github-profile-viewer-alpha.vercel.app",
    caseStudy: "/case-study/github-profile-viewer",
  },
  {
    id: 19,
    title: "ClickUp Template",
    category: "UI/UX",
    description: `A customizable ClickUp dashboard clone with task lists, statuses, and filters. Built for teams to visualize workflows, assign tasks, and track progress in a clean, responsive interface.`,
    stackUsed: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/images/clickuptemp.png",
    Link: "https://clickup-template-xi.vercel.app",
    caseStudy: "/case-study/clickup-template",
  },
  {
    id: 19,
    title: "Dental Health Frontend",
    category: "UI/UX",
    description: `A dental clinic frontend template with service showcases, appointment booking UI, and doctor profiles. Features a crisp, responsive design optimized for patient engagement.`,
    stackUsed: ["Next.js", "Tailwind CSS", "React.js", "JavaScript"],
    image: "/images/medical.png",
    Link: "https://ui-fry-green.vercel.app",
    caseStudy: "/case-study/dental-health",
  },
  {
    id: 21,
    title: "DashStack-Dashboard",
    category: "Admin Dashboards",
    description: `An analytics dashboard template with charts, tables, and KPI widgets. It provides real-time data visualization, filtering, and a modular layout for enterprise applications.`,
    stackUsed: [
      "Next.js",
      "Tailwind CSS",
      "Chart.js",
      "React.js",
      "JavaScript",
    ],
    image: "/images/dashstack.png",
    Link: "https://dash-stack-dashboard.vercel.app",
    caseStudy: "/case-study/dashstack-dashboard",
  },
];
