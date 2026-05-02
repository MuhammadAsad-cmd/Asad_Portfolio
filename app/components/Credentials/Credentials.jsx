"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { educationData } from "@/app/Data/education";
import { certificationsData } from "@/app/Data/certifications";

const Credentials = () => {
  return (
    <section
      id="credentials"
      className="animated-border my-4 overflow-hidden md:my-6 md:rounded-xl"
      aria-labelledby="credentials-heading"
    >
      <div className="bg-white p-5 dark:bg-discordDark md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
          <div>
            <h2
              id="credentials-heading"
              className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl"
            >
              Credentials
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
              Education and certifications—open a tile for full detail
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
                Education
              </h3>
              <Link
                href="/details/education"
                className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
              >
                View all
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {educationData.map((edu) => (
                <Link
                  key={edu.id}
                  href="/details/education"
                  className="group flex flex-col items-center gap-2 rounded-xl border border-lightBorder bg-lightbg/40 p-3 text-center transition-all hover:border-SkyBlue/50 hover:shadow-md dark:border-darkSecondaryGray dark:bg-darkbg/40 dark:hover:border-darkHover"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-lightBorder bg-white dark:border-darkSecondaryGray dark:bg-darkbg">
                    <Image
                      width={56}
                      height={56}
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold leading-snug text-lightPrimarytext line-clamp-2 dark:text-white">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] leading-snug text-lightSecondarytext line-clamp-2 dark:text-darkPrimaryGray">
                    {edu.degree}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
                Certifications
              </h3>
              <Link
                href="/details/certifications"
                className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
              >
                View all
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {certificationsData.map((cert) => {
                const external = Boolean(cert.link);
                const href =
                  cert.link ?? `/details/certifications#cert-${cert.id}`;
                return (
                  <Link
                    key={cert.id}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-lightBorder bg-lightbg/40 p-2.5 text-center transition-all hover:border-SkyBlue/50 hover:shadow-md dark:border-darkSecondaryGray dark:bg-darkbg/40 dark:hover:border-darkHover sm:p-3"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-lightBorder bg-white sm:h-14 sm:w-14 dark:border-darkSecondaryGray dark:bg-darkbg">
                      <Image
                        width={56}
                        height={56}
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.title} badge`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-[10px] font-semibold leading-snug text-lightPrimarytext line-clamp-3 dark:text-white sm:text-[11px]">
                      {cert.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
