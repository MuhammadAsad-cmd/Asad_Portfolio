import Image from "next/image";

export const techLogos = [
  { src: "/images/react.svg", alt: "React.js", category: "Frontend" },
  { src: "/images/next.svg", alt: "Next.js", category: "Framework" },
  { src: "/images/Js.svg", alt: "JavaScript", category: "Language" },
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
            title={`${logo.alt} (${logo.category})`}
            className="group relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-lightBorder bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/20 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
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
