export const posts = [
  {
    slug: "shopify-inventory-sync",
    title: "Shopify inventory sync for a multi-brand operation",
    description:
      "How Hector keeps Shopify stock aligned with warehouse quantity, kits, and the other sales channels, without a second spreadsheet.",
    date: "2026-10-15",
    kicker: "Shopify",
    lede: "A Shopify store is one channel. When the same SKU also sells on Walmart, Amazon, and a second Shopify brand, the number in Shopify admin stops being the number in the warehouse. Hector is the system that holds the warehouse quantity and pushes a consistent picture back out.",
    quote:
      "Report corrections that used to be pulled from separate tools now come out of Hector in one click.",
    sections: [
      {
        heading: "Where the count drifts",
        paragraphs: [
          "Staff were copying an order out of Shopify, then updating a sheet, then updating the shipping tool. Each copy was a chance for the stock figure to disagree with the shelf. Two brands, RetroFam and Retro vGames, shared products. One brand's sale had to reduce stock the other brand could still sell.",
          "The fix is a master catalog: base products, kits, and a marketplace listing mapped back to the same SKU. Shopify is a sales channel into that catalog, not the place the quantity lives.",
        ],
      },
      {
        heading: "What sync actually does",
        paragraphs: [
          "Orders from both Shopify stores land in the same order queue as Walmart, Amazon, WooCommerce, Newegg, Temu, eBay, and manual orders. Fulfillment events update a pre-computed record for that order. Stock movement is written to a ledger, so a cycle count has something to compare against.",
          "During the cutover the old inventory module stayed live next to the new one. New work shipped only in the new module, so the floor did not stop while the data moved.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "Three to four people were doing this order work by hand. The same flow now runs with one person. Hector processes 200 to 300 orders a day across the marketplaces. This was built as a full-stack engineer at Retrovgames. The platform is theirs.",
        ],
      },
    ],
    links: [
      { href: "/case-study/hector", label: "Hector case study" },
      { href: "/blog/multi-channel-order-management", label: "Multi-channel orders" },
    ],
  },
  {
    slug: "multi-channel-order-management",
    title: "One order queue for Shopify, Walmart, and Amazon",
    description:
      "Eleven sales channels into one fulfill queue: Shopify, Walmart US/CA/MX, Amazon SP-API, and the rest of the Hector stack.",
    date: "2026-10-15",
    kicker: "Order management",
    lede: "A team that sells on Shopify and also on Walmart or Amazon does not have an order problem inside one admin. They have eleven inboxes. Hector is the queue those inboxes empty into.",
    quote:
      "Three to four people were doing this order work by hand. The same flow now runs with one person.",
    sections: [
      {
        heading: "The channels",
        paragraphs: [
          "Hector ingests Shopify for RetroFam and Retro vGames, Walmart US, Canada, and Mexico, WooCommerce, Newegg, Temu, Amazon SP-API, eBay, Mercari by CSV, and orders typed in by hand. Walmart fulfillment uses a USB scale and ShipStation rate shopping. Temu has its own label path. Amazon has its own processing view.",
          "The point of one queue is that a picker does not care which website took the money. They care which order is next, which warehouse it ships from, and which label prints.",
        ],
      },
      {
        heading: "Labels and the floor",
        paragraphs: [
          "ShipStation is the shipping backbone: labels, rate shopping, and tracking. Thermal labels print through QZ Tray with the certificate signed on the server, so the browser does not open a print dialog on the warehouse floor. A DYMO scale sends weight over a serial connection, and that weight reaches the packing screen over Socket.IO.",
          "After packing, a background job updates the single record for that order. Staff do not retype the shipment into a sheet so a report can be built later.",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "Hector processes 200 to 300 orders a day across those marketplaces. The manual flow that took three to four people now runs with one. Reports that used to be assembled from several tools come out of Hector in one click. Built at Retrovgames, for their brands.",
        ],
      },
    ],
    links: [
      { href: "/case-study/hector", label: "Hector case study" },
      { href: "/blog/shopify-inventory-sync", label: "Shopify inventory sync" },
      { href: "/blog/erp-for-ecommerce-sellers", label: "ERP for sellers" },
    ],
  },
  {
    slug: "erp-for-ecommerce-sellers",
    title: "When a multi-brand seller needs their own ERP",
    description:
      "The point where spreadsheets and a shipping tool stop being enough, and what a first operations system has to cover.",
    date: "2026-10-15",
    kicker: "ERP",
    lede: "A shipping tool tracks a parcel. A spreadsheet tracks a promise. Neither one knows that two brands must not see each other's orders, or that a return has to come back through the warehouse and into stock. That is the gap a custom ERP fills.",
    quote:
      "Hector processes 200 to 300 orders a day across the marketplaces, and the reports come out in one click.",
    sections: [
      {
        heading: "Who this is for",
        paragraphs: [
          "The fit is a founder or operations lead whose team has outgrown copying orders between a marketplace, a sheet, and a carrier. A one-page marketing site is a different job. The work here is the system the team opens every day: orders, stock, purchasing, and who is allowed to see which brand.",
          "Hector runs that for more than one brand on one platform. Each brand's orders, stock, and users stay isolated. Multi-brand is the business. Isolation is how the data is separated.",
        ],
      },
      {
        heading: "What the first system has to include",
        paragraphs: [
          "Order intake from the channels you actually sell on. A stock ledger, not a cell someone overwrites. Purchasing and inbound receiving if product is still arriving while you ship. A role for the person on the floor, and a different role for the person reading the report.",
          "Hector also covers returns, reshipment, repair, trade-ins, payroll, and attendance, because the same company was already doing that work in other tools. A new build does not have to start with all of it. It has to start with the handoff that is failing.",
        ],
      },
      {
        heading: "Proof, and who owns it",
        paragraphs: [
          "The production system is Hector, built while I was a full-stack engineer at Retrovgames. The platform belongs to them. Three to four people were on the manual order flow. It now runs with one person, at 200 to 300 orders a day, with reports from the same system.",
          "The customer portals for those brands are separate apps. A shopper signs in, then tracks an order, starts a return, downloads an invoice, or submits a trade-in. Those apps are at app.retrofam.com and app.retrovgames.com.",
        ],
      },
    ],
    links: [
      { href: "/case-study/hector", label: "Hector case study" },
      { href: "/case-study/customer-portals", label: "Customer portals" },
      { href: "/blog/multi-channel-order-management", label: "Multi-channel orders" },
    ],
  },
];

export const caseStudies = {
  "customer-portals": {
    slug: "customer-portals",
    title: "Customer portals for RetroFam and RetrovGames",
    description:
      "Post-purchase portals for two gaming brands: orders, tracking, returns, invoices, gift cards, and trade-ins. Built at Retrovgames.",
    kicker: "Case study",
    lede: "After the sale, a shopper should not have to email support to find a parcel, start a return, or download an invoice. RetroFam and RetrovGames each have a portal for that. Both open after the customer signs in.",
    quote:
      "Signed-in customers track orders, start returns, download invoices, and submit trade-ins.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Both brands sell on Shopify. The work after checkout was scattered: where is the shipment, how does a return start, where is the invoice, what happens to a trade-in. Support was the interface.",
        ],
      },
      {
        heading: "What was built",
        paragraphs: [
          "I led the frontend at Retrovgames. Each portal is a Next.js app on a Node.js API. The customer sees orders, shipment tracking, returns, PDF invoices, coupons and gift cards, and a trade-in flow for selling gaming items back.",
          "The same backend pattern serves both brands. The screens, the brand, and the data are not shared with the other brand's customers. Hector, the internal ERP, reads trade-in records from the portal database so warehouse staff can act on them without asking the customer to resend the form.",
        ],
      },
      {
        heading: "Where to open them",
        paragraphs: [
          "RetroFam is at app.retrofam.com. RetrovGames is at app.retrovgames.com. Both require a customer sign-in. They are not public demos.",
        ],
      },
    ],
    links: [
      { href: "https://app.retrofam.com", label: "RetroFam portal", external: true },
      { href: "https://app.retrovgames.com", label: "RetrovGames portal", external: true },
      { href: "/case-study/hector", label: "Hector case study" },
    ],
  },
  canrover: {
    slug: "canrover",
    title: "Canrover fleet admin",
    description:
      "A US scooter-rental admin: live map, remote lock, QR ride start, and geofenced zones.",
    kicker: "Case study",
    lede: "Canrover needed an operations desk for scooters already on the street: where each one is, whether it should be locked, and which zone it is allowed to sit in.",
    quote:
      "Operators see the fleet on a live map, lock scooters remotely, and start rides with a QR code.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A rental fleet is not a catalog. An operator has to see vehicles move, mark a danger zone, and stop a scooter without driving to it. A brochure site does not do that.",
        ],
      },
      {
        heading: "What was built",
        paragraphs: [
          "A Next.js and Node.js admin for a US client. The map shows the fleet. An operator can lock or unlock a scooter remotely. A rider starts a trip with a QR code. Zones on the map mark parking, maintenance, and danger areas.",
          "Forms are validated before they hit the API. The interface is server-rendered so the map and the controls load as one screen, not a dashboard that fills in after the fact.",
        ],
      },
    ],
    links: [
      { href: "https://canrover.vercel.app", label: "Canrover demo", external: true },
      { href: "/case-study/hector", label: "Hector case study" },
    ],
  },
};
