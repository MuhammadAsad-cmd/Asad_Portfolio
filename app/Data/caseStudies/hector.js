export const hectorCaseStudy = {
  slug: "hector",
  title: "Hector",
  subtitle: "Multi-Tenant Enterprise Operations Platform",
  tagline:
    "A full-stack internal operations platform powering multi-brand e-commerce — from 11 sales channels through warehouse, supply chain, HR, and analytics in one system.",
  image: "/images/hector.png",
  role: "Full Stack Engineer",
  repoStructure:
    "Separate repos — React 19 + Vite frontend, Node.js/Express backend",
  brands: ["RetroFam", "Retro vGames", "Related brands"],
  stack: [
    "React 19",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Socket.IO",
    "BullMQ",
    "Redis",
    "JWT + RBAC",
    "AWS S3",
    "ShipStation",
  ],

  stats: [
    { label: "Business Domains", value: "7" },
    { label: "Modules", value: "28+" },
    { label: "Sales Channels", value: "11" },
    { label: "API Integrations", value: "20+" },
    { label: "Mongoose Models", value: "100+" },
    { label: "Route Files", value: "80+" },
  ],

  summary: {
    challenge:
      "A multi-brand e-commerce operation was running orders, inventory, procurement, fulfillment, returns, and HR across disconnected tools — manual handoffs, duplicate data entry, and no single source of truth under heavy transactional load.",
    solution:
      "Hector unifies the entire operational lifecycle in one platform: order intake from 11 channels, warehouse fulfillment with hardware integrations, supply chain procurement, inventory (dual-system migration), post-sale workflows, analytics, and granular RBAC across every module.",
    impact:
      "One system replaces fragmented ops tooling — with async SSOT aggregation, silent label printing on the warehouse floor, real-time auctions and SLA alerts, and multi-warehouse scoping baked into procurement, transfers, and QA from day one.",
  },

  architecture: [
    {
      title: "Separate Frontend & Backend Repos",
      description:
        "Hector-client (React 19 + Vite) and the Hector server (Node.js/Express) are maintained as separate repositories — clear ownership boundaries with REST APIs and shared domain contracts connecting both codebases.",
    },
    {
      title: "JWT + Granular RBAC",
      description:
        "Authentication via JWT + express-session. RequirePermission on the client and requirePermission() middleware on the server. Every module registers in modulesRegistry.js with configurable role permissions.",
    },
    {
      title: "Eventually-Consistent SSOT",
      description:
        "Single Source of Truth is a pre-computed master collection — updated asynchronously via BullMQ workers after fulfillment events. Never written to directly; always query-optimized.",
    },
    {
      title: "Silent Warehouse Printing",
      description:
        "QZ Tray signs certificates server-side (RSA) and sends labels directly to thermal printers — ShipStation, WFO, and TOF native labels print with zero browser dialogs.",
    },
    {
      title: "Dual Inventory Migration",
      description:
        "Legacy inventory coexists with the new Inventory Management module during migration. New features ship only in the new system; zero downtime cutover strategy.",
    },
    {
      title: "Hardware + Real-Time Layer",
      description:
        "DYMO USB scales communicate via Node.js SerialPort; weight telemetry streams to browsers over Socket.IO for WFO workflows. Multi-warehouse scoping across procurement, transfers, inventory, and QA.",
    },
  ],

  infrastructure: [
    { label: "Background Crons", value: "13" },
    { label: "BullMQ Workers", value: "2" },
    { label: "WebSocket Events", value: "6" },
    { label: "Client Page Folders", value: "40+" },
  ],

  domains: [
    {
      id: "sales",
      name: "Sales & Order Processing",
      color: "from-blue-500 to-cyan-500",
      modules: [
        {
          name: "Order Processing",
          description:
            "Central hub ingesting orders from 11 channels simultaneously — Shopify (RetroFam & Retro vGames), Walmart US/CA/MX, WooCommerce, Newegg, Temu, Amazon SP-API, eBay Scrapper, Mercari CSV, and manual orders.",
          highlights: [
            "WFO — Walmart Fulfillment with USB scale integration via SerialPort and ShipStation rate shopping",
            "TOF — Temu native label system with PDF rendering and label history",
            "Dedicated Amazon order processing view and order analytics dashboard",
          ],
        },
        {
          name: "Order Fulfillment + SSOT",
          description:
            "Post-pick workflow: packing with photo capture, dropship OOS tracking, ShipStation label generation, and SSOT — a pre-computed aggregate per order updated via BullMQ.",
          highlights: [
            "Performance & activity logs for fulfillment teams",
            "Multi-carrier rate shopping through ShipStation",
          ],
        },
        {
          name: "eBay Scrapper",
          description:
            "Separate from marketplace eBay — manages buyer accounts, generates labels via EasyPost, tracks shipments via webhooks, with dedicated health check routes.",
        },
      ],
    },
    {
      id: "supply-chain",
      name: "Supply Chain",
      color: "from-emerald-500 to-teal-500",
      modules: [
        {
          name: "Sourcing",
          description:
            "Staff submit sourcing requests; sourcers create, purchasers pick up. Role mapping via sourcerPurchaserMappingModel with dashboard and timeline logs.",
        },
        {
          name: "Purchasing",
          description:
            "Purchasers act on sourcing requests — pending queue, active listings, returned listings, cross-referenced with SNP data.",
        },
        {
          name: "SNP — Seller & Purchaser Dashboard",
          description:
            "Feature-rich supply chain hub: SKU listings, real-time auctions via Socket.IO, price management feeding the Pricing Engine, supplier management, and competitor scrape crons via BullMQ.",
        },
        {
          name: "Procurement Management",
          description:
            "Most complex module — PO creation with multi-step forms, box tracking, document attachments, shipping details, landed cost allocation, kits, targets, barcode receive scans, CSV bulk import, and multi-warehouse delivery routing.",
        },
        {
          name: "Inbound",
          description:
            "Receives procurement at warehouse — parcel and bulk shipments, flagged orders, unidentified parcels, activity logs, and period-scoped inbound inventory valuation.",
        },
        {
          name: "Internal Warehouse Transfer",
          description:
            "Mirrors procurement pattern for inter-warehouse stock moves — boxes, documents, costs, shipping, serial numbers, activity logs, and dashboard with multi-warehouse support.",
        },
      ],
    },
    {
      id: "inventory",
      name: "Inventory & Products",
      color: "from-violet-500 to-purple-500",
      modules: [
        {
          name: "Inventory Management (New)",
          description:
            "Future-state inventory: master SKU quantities warmed in memory at startup, warehouse scoping, ledger for every stock movement, cycle counts, exceptions, reports, and WFS overlay.",
        },
        {
          name: "Inventory Management (Legacy)",
          description:
            "Original system still live during migration — coexists with new module; no deletion until cutover complete.",
        },
        {
          name: "Virtual Inventory",
          description:
            "All-time in/out calculation per SKU — answers 'what do we have right now?' across procurement, transfers, sales, and returns.",
        },
        {
          name: "WFS Inventory",
          description:
            "Walmart Fulfillment Services stock tracking at Walmart FCs with replenishment pipeline service.",
        },
        {
          name: "Products",
          description:
            "Master catalog — base products, kits/bundles, serial number tracking with auto-generation, marketplace listings, and cross-platform SKU mapping.",
        },
        {
          name: "Scan",
          description:
            "Warehouse floor tool with GlobalScannerContext, barcode + QR lookup, camera scanning via Quagga2 and ZXing.",
        },
      ],
    },
    {
      id: "post-sale",
      name: "Post-Sale & Customer",
      color: "from-orange-500 to-red-500",
      modules: [
        {
          name: "Brand Returns (RMA)",
          description:
            "Full return lifecycle — customer and manual returns, defect reports with activity logs, physical receiving, auto-sync from Shopify/WooCommerce/Walmart crons, Freshdesk ticket creation, ShipStation label tracking.",
        },
        {
          name: "Reshipment",
          description:
            "Re-sends when original shipment fails — links to dropship and FFJ records with export support.",
        },
        {
          name: "Repair & QA (Refurbishment)",
          description:
            "Multi-stage QA: scan-in, workshop repair tracking, PDF testing guides, troubleshooting docs, multi-warehouse QA stages.",
        },
        {
          name: "Trade-Ins",
          description:
            "Reads trade-in data from Customer Portal MongoDB, staff comments locally, email notifications, two-way reply webhook, portal sync.",
        },
      ],
    },
    {
      id: "marketing",
      name: "Customer-Facing & Marketing",
      color: "from-pink-500 to-rose-500",
      modules: [
        {
          name: "Customer Portal Management",
          description:
            "Portal users, coupons, reviews, FAQs, Retrocoins loyalty, and product sync management.",
        },
        {
          name: "Email Configuration",
          description:
            "Per-event email rules, customizable HTML templates, activity logs, Omnisend marketing events, custom SMTP (Namecheap Private Email).",
        },
        {
          name: "Refunds",
          description:
            "Unified refund management — approval workflow, platform execution, Shopify-native refund posting, unified log across platforms.",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics & Tooling",
      color: "from-indigo-500 to-blue-500",
      modules: [
        {
          name: "Sellerboard Analytics",
          description:
            "Platform-by-platform sales analytics — Shopify live; Amazon, eBay, Walmart, Newegg built with per-platform P&L analysis.",
        },
        {
          name: "Pricing Engine (CPS)",
          description:
            "Competitive price system scraping 10+ competitor sites (DKOldies, GameStop, Amazon, eBay, Walmart, Best Buy, Newegg, PriceCharting, etc.) via BullMQ + Cheerio with scrape health monitoring.",
        },
        {
          name: "Export Center",
          description:
            "Download any data as Excel/CSV — platform sales, inventory reports, custom configs via ExcelJS and xlsx.",
        },
        {
          name: "Administration & Live Monitoring",
          description:
            "Real-time active user monitoring via Socket.IO presence — login/logout, page activity, heartbeat, stale presence cron. Admin-only view.",
        },
        {
          name: "SLA & Tickets Management",
          description:
            "Internal ticketing with assignment, escalation, SLA departments, activity audit trail, handling time tracking, real-time due-soon alerts via Socket.IO.",
        },
      ],
    },
    {
      id: "hr",
      name: "People & HR",
      color: "from-amber-500 to-yellow-500",
      modules: [
        {
          name: "User Management",
          description:
            "Granular RBAC from modulesRegistry.js, login history, session logs, failed login tracking, user activity logs, multi-company structure.",
        },
        {
          name: "Employee Management",
          description:
            "Employee records separate from auth users with payroll data per employee.",
        },
        {
          name: "Attendance",
          description:
            "Clock-in/out with kiosk mode for warehouse tablets, validation rules, and company attendance configuration.",
        },
        {
          name: "Time Off Management",
          description:
            "Leave requests with approval workflow, time off types, and per-employee allocation management.",
        },
        {
          name: "Payroll",
          description:
            "Calculation engine, PDF payslip generation, tax configuration, and payroll recalculation support.",
        },
      ],
    },
  ],

  integrations: [
    {
      category: "Marketplace / Sales Channels",
      count: 7,
      items: [
        { name: "Shopify API", detail: "Order sync, webhooks, refunds — RetroFam & Retro vGames" },
        { name: "Walmart Marketplace", detail: "US/CA/MX orders, WFO labels, returns, tracking" },
        { name: "WooCommerce REST", detail: "Order sync, webhooks, returns, hold/cancel" },
        { name: "Newegg Marketplace", detail: "Order sync, label tracking" },
        { name: "Temu Open API", detail: "Order sync, TOF native labels, after-sales" },
        { name: "Amazon SP-API", detail: "Order processing" },
        { name: "eBay + EasyPost", detail: "Scrapper module labels and tracking" },
      ],
    },
    {
      category: "Shipping & Fulfillment",
      count: 3,
      items: [
        { name: "ShipStation v1 + v2", detail: "Core shipping backbone — labels, rate shopping, tracking" },
        { name: "ShipEngine", detail: "Rate shopping supplement" },
        { name: "EasyPost", detail: "eBay scrapper labels, WOF tracking webhooks" },
      ],
    },
    {
      category: "Printing & Hardware",
      count: 3,
      items: [
        { name: "QZ Tray", detail: "Silent thermal label printing — RSA-signed certificates" },
        { name: "SerialPort / DYMO Scales", detail: "Live USB weight for WFO workflow" },
        { name: "Camera Scanners", detail: "Quagga2, ZXing, jsQR for warehouse floor" },
      ],
    },
    {
      category: "Cloud, Email & CRM",
      count: 5,
      items: [
        { name: "AWS S3", detail: "Packing photos, documents, uploads" },
        { name: "Hostinger SFTP", detail: "Product image hosting" },
        { name: "Nodemailer + SMTP", detail: "Transactional emails across all modules" },
        { name: "Omnisend", detail: "WooCommerce dropship marketing events" },
        { name: "Freshdesk", detail: "CRM tickets from brand returns" },
      ],
    },
    {
      category: "Database & AI",
      count: 2,
      items: [
        { name: "Google Cloud Vision", detail: "OCR and document scanning" },
        { name: "MongoDB Atlas × 2", detail: "Hector DB + Customer Portal DB" },
      ],
    },
    {
      category: "Real-Time & Queues",
      count: 3,
      items: [
        { name: "Socket.IO", detail: "Presence, auctions, SLA alerts, scale telemetry" },
        { name: "BullMQ + Redis", detail: "SSOT sync, scrapes, label tracking jobs" },
        { name: "node-cron", detail: "Returns sync, presence cleanup, cross-ref sync" },
      ],
    },
  ],

  salesChannels: [
    "Shopify (RetroFam)",
    "Shopify (Retro vGames)",
    "Walmart US / CA / MX",
    "WooCommerce",
    "Newegg",
    "Temu",
    "Amazon SP-API",
    "eBay Scrapper",
    "Mercari (CSV)",
    "Manual Orders",
    "Amazon (Dedicated View)",
  ],
};
