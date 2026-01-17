import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
} from "react-icons/si";

export const techLogos = [
  { icon: SiReact, alt: "React.js", category: "Frontend", color: "text-[#61DAFB]" },
  { icon: SiNextdotjs, alt: "Next.js", category: "Framework", color: "text-gray-900 dark:text-white" },
  { icon: SiJavascript, alt: "JavaScript", category: "Language", color: "text-[#F7DF1E]" },
  { icon: SiTypescript, alt: "TypeScript", category: "Language", color: "text-[#3178C6]" },
  { icon: SiTailwindcss, alt: "Tailwind CSS", category: "Styling", color: "text-[#06B6D4]" },
  { icon: SiRedux, alt: "Redux", category: "State Management", color: "text-[#764ABC]" },
  { icon: SiHtml5, alt: "HTML", category: "Markup", color: "text-[#E34F26]" },
  { icon: SiCss3, alt: "CSS", category: "Styling", color: "text-[#1572B6]" },
  { icon: SiGit, alt: "Git", category: "Version Control", color: "text-[#F05032]" },
  { icon: SiMongodb, alt: "MongoDB", category: "Database", color: "text-[#47A248]" },
  { icon: SiNodedotjs, alt: "Node.js", category: "Backend", color: "text-[#339933]" },
  { icon: SiNpm, alt: "NPM", category: "Package Manager", color: "text-[#CB3837]" },
];

export default function EnhancedMarquee() {
  const triplicatedLogos = [...techLogos, ...techLogos, ...techLogos].map(
    (logo, index) => ({
      ...logo,
      uniqueKey: `${logo.alt}-${Math.floor(index / techLogos.length)}-${index % techLogos.length}`,
    })
  );

  return (
    <div
      className="relative rounded-lg py-3 opacity-80 overflow-hidden"
      role="region"
      aria-label="Technology stack marquee"
    >
      <span className="sr-only">
        Technology stack: {techLogos.map((logo) => logo.alt).join(", ")}
      </span>

      <div className="relative pb-2">
        {/* <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-discordDark pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-discordDark pointer-events-none"></div> */}

        <div className="animate-marquee flex space-x-4 relative z-20">
          {triplicatedLogos.map((logo) => {
            const IconComponent = logo.icon;
            return (
              <div
                key={logo.uniqueKey}
                className="group relative flex w-10 h-10 flex-shrink-0 items-center justify-center rounded-lg"
              >
                <IconComponent
                  className={`h-8 w-8 ${logo.color} transition-all duration-300 group-hover:scale-125`}
                  aria-hidden="true"
                />
                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:-top-12 group-hover:opacity-100 dark:bg-white dark:text-gray-900 shadow-xl">
                  {logo.alt}
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}