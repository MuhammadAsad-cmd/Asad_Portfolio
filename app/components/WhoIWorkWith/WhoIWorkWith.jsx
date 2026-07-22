"use client";

import { useEffect, useRef, useState } from "react";
import {
  IoCheckmarkCircle,
  IoCloseCircleOutline,
} from "react-icons/io5";

const goodFit = [
  "Teams replacing spreadsheets with ERP-style internal systems",
  "Operations that need multi-channel orders, inventory, or warehouse workflows",
  "Companies wiring marketplaces, shipping, or third-party APIs into one stack",
  "Founders and CTOs who need Node.js / Next.js infrastructure that scales with volume",
];

const notFit = [
  "One-page marketing sites or brochure-only builds",
  "Pure design-only work with no engineering scope",
];

export default function WhoIWorkWith() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="who-i-work-with"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="who-i-work-with-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
            <div>
              <h2
                id="who-i-work-with-heading"
                className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl"
              >
                Who I Work With
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                I build enterprise operations software — not generic landing pages.
                Best fit if your problem lives in workflows, data, and integrations.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-SkyBlue">
              Strong fit
            </h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed md:text-base">
                  <IoCheckmarkCircle
                    className="mt-0.5 shrink-0 text-lg text-emerald-500"
                    aria-hidden
                  />
                  <span className="text-lightPrimarytext dark:text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-lightBorder bg-lightbg/60 p-5 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/40 md:p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lightSecondarytext dark:text-darkPrimaryGray">
              Usually not a fit
            </h3>
            <ul className="space-y-3">
              {notFit.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <IoCloseCircleOutline
                    className="mt-0.5 shrink-0 text-lg text-lightSecondarytext dark:text-darkPrimaryGray"
                    aria-hidden
                  />
                  <span className="text-lightSecondarytext dark:text-darkPrimaryGray">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-lightBorder pt-4 text-xs leading-relaxed text-lightSecondarytext dark:border-darkSecondaryGray dark:text-darkPrimaryGray md:text-sm">
              If you&apos;re unsure, reach out anyway — a short message is enough
              to see if there&apos;s overlap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
