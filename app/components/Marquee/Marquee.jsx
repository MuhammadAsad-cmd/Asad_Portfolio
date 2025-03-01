import Image from "next/image";

const techLogos = [
  { src: "/images/react.svg", alt: "React.js" },
  { src: "/images/next.svg", alt: "Next.js" },
  { src: "/images/Js.svg", alt: "Javascript" },
  { src: "/images/ts.svg", alt: "Typescript" },
  { src: "/images/tailwind.svg", alt: "tailwind" },
  { src: "/images/redux.svg", alt: "redux.svg" },
  { src: "/images/html.svg", alt: "html" },
  { src: "/images/css.svg", alt: "css" },
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden  py-4">
      <div className="animate-marquee flex w-full space-x-5">
        {/* Duplicate logos to create a seamless loop */}
        {[...techLogos, ...techLogos].map((logo, index) => (
          <div
            key={index}
            className="flex h-[60px] w-[60px] flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[#c0dcbc] bg-[#f8f8f8] p-2 text-white duration-300 ease-in-out hover:bg-neutral-200 dark:border-[#3b413d] dark:bg-[#24242d] dark:hover:bg-[#242424]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={60}
              height={60}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
