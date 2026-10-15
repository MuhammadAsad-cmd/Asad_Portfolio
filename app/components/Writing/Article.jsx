import Link from "next/link";
import { BOOKING_URL } from "@/app/lib/site";

export default function Article({ kicker, title, lede, quote, sections, links = [] }) {
  return (
    <article className="animated-border my-6 overflow-hidden md:rounded-xl">
      <div className="bg-white px-5 py-8 dark:bg-discordDark md:px-10 md:py-12">
        <p className="text-sm font-semibold text-SkyBlue">{kicker}</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
          {lede}
        </p>

        {quote && (
          <blockquote className="mt-8 max-w-3xl border-l-4 border-SkyBlue pl-4">
            <p className="text-lg font-medium leading-relaxed text-lightPrimarytext dark:text-white">
              {quote}
            </p>
            <footer className="mt-2 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
              From the production system, not a projected figure.
            </footer>
          </blockquote>
        )}

        <div className="mt-10 max-w-3xl space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-base leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="rounded-full border border-lightBorder px-4 py-2 text-sm font-semibold text-SkyBlue dark:border-darkSecondaryGray"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-SkyBlue px-6 py-3 text-sm font-semibold text-white"
          >
            Book a 20-min workflow call
          </a>
        </div>
      </div>
    </article>
  );
}
