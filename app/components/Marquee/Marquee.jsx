// import Image from "next/image";

// export const techLogos = [
//   { src: "/images/react.svg", alt: "React.js" },
//   { src: "/images/next.svg", alt: "Next.js" },
//   { src: "/images/js.svg", alt: "JavaScript" },
//   { src: "/images/ts.svg", alt: "TypeScript" },
//   { src: "/images/tailwind.svg", alt: "Tailwind CSS" },
//   { src: "/images/redux.svg", alt: "Redux" },
//   { src: "/images/html.svg", alt: "HTML" },
//   { src: "/images/css.svg", alt: "CSS" },
//   { src: "/images/skills/git.avif", alt: "Git" },
//   { src: "/images/skills/mongoDB.webp", alt: "MongoDB" },
//   { src: "/images/skills/node.svg", alt: "Node.js" },
//   { src: "/images/skills/npm.webp", alt: "NPM" },
//   { src: "/images/skills/postman.avif", alt: "Postman" },
//   { src: "/images/skills/vs_code.webp", alt: "VS Code" },
// ];

// export default function Marquee() {
//   return (
//     <div className="relative overflow-hidden  py-4">
//       <div className="animate-marquee flex w-full space-x-2">
//         {/* Duplicate logos to create a seamless loop */}
//         {[...techLogos, ...techLogos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex h-[60px] w-[60px] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[#c0dcbc] bg-[#f8f8f8] p-2 text-white duration-300 ease-in-out hover:bg-neutral-200 dark:border-[#3b413d] dark:bg-[#24242d] dark:hover:bg-[#242424]"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={60}
//               height={60}
//               loading="eager"
//               unoptimized
//               className="h-full w-full object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export const techLogos = [
  { src: "/images/react.svg", alt: "React.js", category: "Frontend" },
  { src: "/images/next.svg", alt: "Next.js", category: "Framework" },
  { src: "/images/js.svg", alt: "JavaScript", category: "Language" },
  { src: "/images/ts.svg", alt: "TypeScript", category: "Language" },
  { src: "/images/tailwind.svg", alt: "Tailwind CSS", category: "Styling" },
  { src: "/images/redux.svg", alt: "Redux", category: "State Management" },
  { src: "/images/html.svg", alt: "HTML", category: "Markup" },
  { src: "/images/css.svg", alt: "CSS", category: "Styling" },
  { src: "/images/skills/git.avif", alt: "Git", category: "Version Control" },
  { src: "/images/skills/mongoDB.webp", alt: "MongoDB", category: "Database" },
  { src: "/images/skills/node.svg", alt: "Node.js", category: "Backend" },
  { src: "/images/skills/npm.webp", alt: "NPM", category: "Package Manager" },
];

export default function EnhancedMarquee() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-lightBorder bg-gradient-to-r from-lightbg/50 to-transparent py-4 dark:border-darkPrimaryGray/30 dark:from-darkSecondaryGray/50">
      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-discordDark"></div>
      <div className="absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-discordDark"></div>

      <div className="animate-marquee flex space-x-4">
        {[...techLogos, ...techLogos, ...techLogos].map((logo, index) => (
          <div
            key={index}
            className="group flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-lightBorder bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={32}
              height={32}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              loading="eager"
            />

            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-12 left-1/2 z-[999] -translate-x-1/2 transform whitespace-nowrap rounded-md bg-lightPrimarytext px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-lightPrimarytext">
              {logo.alt}
              <div className="absolute left-1/2 top-full z-[999] h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-lightPrimarytext dark:border-t-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
