"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoArrowForward,
  IoChevronDown,
  IoLayersOutline,
  IoGitNetworkOutline,
  IoHardwareChipOutline,
  IoStatsChartOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
} from "react-icons/io5";
import PageHeader from "../PageHeader";
import { hectorCaseStudy as data } from "@/app/Data/caseStudies/hector";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

function DomainAccordion({ domain, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="overflow-hidden rounded-2xl border border-lightBorder bg-lightbg/50 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/30"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/60 dark:hover:bg-discordDark/40 md:p-6"
      >
        <div
          className={`h-12 w-1.5 shrink-0 rounded-full bg-gradient-to-b ${domain.color}`}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-lightPrimarytext dark:text-white md:text-lg">
            {domain.name}
          </h3>
          <p className="mt-0.5 text-xs text-lightSecondarytext dark:text-darkPrimaryGray md:text-sm">
            {domain.modules.length} module{domain.modules.length !== 1 ? "s" : ""}
          </p>
        </div>
        <IoChevronDown
          className={`shrink-0 text-xl text-SkyBlue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-lightBorder px-5 pb-5 pt-4 dark:border-darkSecondaryGray md:px-6 md:pb-6">
              {domain.modules.map((mod, modIdx) => (
                <div
                  key={modIdx}
                  className="rounded-xl border border-lightBorder/80 bg-white p-4 dark:border-darkPrimaryGray/20 dark:bg-discordDark"
                >
                  <h4 className="font-semibold text-lightPrimarytext dark:text-white">
                    {mod.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                    {mod.description}
                  </p>
                  {mod.highlights?.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {mod.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-2 text-xs leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-sm"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-SkyBlue" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HectorCaseStudy() {
  const [isVisible, setIsVisible] = useState(false);
  const [openDomain, setOpenDomain] = useState(data.domains[0]?.id ?? null);
  const [activeIntegration, setActiveIntegration] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <article
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="hector-case-study-heading"
    >
      <div className="bg-white dark:bg-discordDark">
        {/* ── Header bar ── */}
        <div className="border-b border-lightBorder p-4 dark:border-darkSecondaryGray md:p-6">
          <PageHeader
            title="Hector Case Study"
            subtitle="Enterprise operations platform · Full system review"
            backUrl="/#projects"
            experienceYears="28+ Modules"
          />
        </div>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-SkyBlue/10 via-transparent to-lightHover/10 dark:from-SkyBlue/5 dark:to-darkHover/5" />
          <div className="relative grid gap-8 p-5 md:grid-cols-2 md:gap-12 md:p-8 lg:p-10">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-col justify-center"
            >
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-SkyBlue/30 bg-SkyBlue/10 px-3 py-1 text-xs font-semibold text-SkyBlue dark:border-SkyBlue/40 dark:bg-SkyBlue/15">
                <IoLayersOutline aria-hidden />
                Enterprise ERP · Case Study
              </span>
              <h1
                id="hector-case-study-heading"
                className="text-3xl font-bold leading-tight tracking-tight text-lightPrimarytext dark:text-white md:text-4xl lg:text-5xl"
              >
                {data.title}
                <span className="mt-1 block bg-gradient-to-r from-SkyBlue to-lightHover bg-clip-text text-2xl text-transparent dark:to-darkHover md:text-3xl lg:text-4xl">
                  {data.subtitle}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                {data.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-md bg-lightbg px-2.5 py-1 text-xs font-medium text-lightSecondarytext dark:bg-darkSecondaryGray dark:text-darkPrimaryGray"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-SkyBlue px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-SkyBlue/25 transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-SkyBlue/30"
                >
                  Discuss a Similar Build
                  <IoArrowForward aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-lightBorder bg-lightbg shadow-2xl shadow-SkyBlue/10 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray">
                <div className="flex h-8 items-center gap-1.5 border-b border-lightBorder bg-white px-4 dark:border-white/5 dark:bg-[#1e2124]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] text-lightSecondarytext dark:text-darkPrimaryGray">
                    Hector ERP
                  </span>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={data.image}
                    alt="Hector enterprise operations platform dashboard"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-t border-lightBorder px-5 py-8 dark:border-darkSecondaryGray md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-lightBorder bg-lightbg/60 p-4 text-center dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/40"
              >
                <div className="text-2xl font-bold text-SkyBlue md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Challenge / Solution / Impact ── */}
        <section className="border-t border-lightBorder px-5 py-10 dark:border-darkSecondaryGray md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
              <div>
                <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                  Business Context
                </h2>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Problem, approach, and outcome at a glance
                </p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: IoFlashOutline,
                  title: "The Challenge",
                  body: data.summary.challenge,
                  accent: "border-orange-500/30 bg-orange-500/5",
                },
                {
                  icon: IoGitNetworkOutline,
                  title: "The Solution",
                  body: data.summary.solution,
                  accent: "border-SkyBlue/30 bg-SkyBlue/5",
                },
                {
                  icon: IoStatsChartOutline,
                  title: "The Impact",
                  body: data.summary.impact,
                  accent: "border-emerald-500/30 bg-emerald-500/5",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`rounded-2xl border p-5 md:p-6 ${card.accent} dark:bg-opacity-20`}
                >
                  <card.icon className="mb-3 text-2xl text-SkyBlue" aria-hidden />
                  <h3 className="mb-2 font-bold text-lightPrimarytext dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Sales Channels ── */}
        <section className="border-t border-lightBorder bg-lightbg/40 px-5 py-10 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/20 md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={4}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
              <div>
                <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                  11 Sales Channels
                </h2>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Unified order intake pipeline
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.salesChannels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-lg border border-lightBorder bg-white px-3 py-2 text-xs font-medium text-lightPrimarytext shadow-sm dark:border-darkSecondaryGray dark:bg-discordDark dark:text-white md:text-sm"
                >
                  {channel}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Modules by Domain ── */}
        <section className="border-t border-lightBorder px-5 py-10 dark:border-darkSecondaryGray md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={5}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
              <div>
                <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                  7 Business Domains · 28+ Modules
                </h2>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Expand each domain to explore the full module breakdown
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {data.domains.map((domain, index) => (
                <DomainAccordion
                  key={domain.id}
                  domain={domain}
                  index={index}
                  isOpen={openDomain === domain.id}
                  onToggle={() =>
                    setOpenDomain(openDomain === domain.id ? null : domain.id)
                  }
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Architecture ── */}
        <section className="border-t border-lightBorder bg-lightbg/40 px-5 py-10 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/20 md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={6}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
              <div>
                <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                  Key Architecture Decisions
                </h2>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Patterns that make Hector production-grade
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.architecture.map((item, i) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-lightBorder bg-white p-5 transition-all hover:border-SkyBlue/40 hover:shadow-lg hover:shadow-SkyBlue/5 dark:border-darkSecondaryGray dark:bg-discordDark dark:hover:border-darkHover"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-SkyBlue/10 text-sm font-bold text-SkyBlue dark:bg-SkyBlue/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <IoShieldCheckmarkOutline className="text-lg text-SkyBlue opacity-60" aria-hidden />
                  </div>
                  <h3 className="font-bold text-lightPrimarytext dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {data.infrastructure.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-SkyBlue/20 bg-SkyBlue/5 p-4 text-center dark:border-SkyBlue/30 dark:bg-SkyBlue/10"
                >
                  <div className="text-xl font-bold text-SkyBlue">{item.value}</div>
                  <div className="mt-1 text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Integrations ── */}
        <section className="border-t border-lightBorder px-5 py-10 dark:border-darkSecondaryGray md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={7}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
              <div>
                <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                  20+ Third-Party Integrations
                </h2>
                <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                  Marketplaces, shipping, hardware, queues, and more
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
              {data.integrations.map((group, idx) => (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveIntegration(idx)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all md:text-sm ${
                    activeIntegration === idx
                      ? "bg-SkyBlue text-white shadow-md shadow-SkyBlue/25"
                      : "border border-lightBorder bg-lightbg text-lightSecondarytext hover:border-SkyBlue/50 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray dark:text-darkPrimaryGray"
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIntegration}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-lightBorder bg-lightbg/50 p-5 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/30 md:p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <IoHardwareChipOutline className="text-SkyBlue" aria-hidden />
                  <h3 className="font-bold text-lightPrimarytext dark:text-white">
                    {data.integrations[activeIntegration].category}
                  </h3>
                  <span className="rounded-full bg-SkyBlue/10 px-2 py-0.5 text-xs font-medium text-SkyBlue">
                    {data.integrations[activeIntegration].count} integrations
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.integrations[activeIntegration].items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-lightBorder bg-white p-4 dark:border-darkPrimaryGray/20 dark:bg-discordDark"
                    >
                      <div className="font-semibold text-lightPrimarytext dark:text-white">
                        {item.name}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="border-t border-lightBorder bg-lightbg/40 px-5 py-10 dark:border-darkSecondaryGray dark:bg-darkSecondaryGray/20 md:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeUp}
            custom={8}
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
                Core Technology Stack
              </h2>
              <p className="mt-1 text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                {data.role} · {data.repoStructure}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-SkyBlue/20 bg-SkyBlue/10 px-3 py-1.5 text-xs font-medium text-lightPrimarytext dark:border-SkyBlue/30 dark:bg-SkyBlue/15 dark:text-white md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-lightBorder px-5 py-10 dark:border-darkSecondaryGray md:px-8 lg:px-10">
          <div className="rounded-2xl bg-gradient-to-br from-SkyBlue/15 via-lightHover/10 to-SkyBlue/5 p-8 text-center dark:from-SkyBlue/20 dark:via-darkHover/10 dark:to-SkyBlue/10 md:p-12">
            <h2 className="text-xl font-bold text-lightPrimarytext dark:text-white md:text-2xl">
              Need an operations platform at this scale?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
              Hector represents the kind of enterprise infrastructure I design and
              ship — multi-channel order ops, warehouse integrations, and RBAC
              across dozens of modules.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-SkyBlue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-SkyBlue/25 transition-transform hover:-translate-y-0.5"
              >
                Start a Conversation
                <IoArrowForward aria-hidden />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-lightBorder bg-white/80 px-8 py-3 text-sm font-semibold text-lightPrimarytext transition-colors hover:border-SkyBlue dark:border-darkSecondaryGray dark:bg-discordDark dark:text-white"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
