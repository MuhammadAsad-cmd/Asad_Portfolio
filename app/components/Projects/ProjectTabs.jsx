"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { projectCategories } from "@/app/Data/projectCategories";
import { motion } from "framer-motion";
import {
    Rocket,
    Zap,
    ShoppingCart,
    LayoutDashboard,
    Palette,
    Users,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Icon mapping for categories
const categoryIcons = {
    all: Rocket,
    fullstack: Zap,
    ecommerce: ShoppingCart,
    dashboards: LayoutDashboard,
    uiux: Palette,
    portals: Users,
};

const ProjectTabs = ({ activeCategory, onCategoryChange, projectCounts }) => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollAffordance = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const max = scrollWidth - clientWidth;
        const epsilon = 4;
        setCanScrollLeft(scrollLeft > epsilon);
        setCanScrollRight(max > epsilon && scrollLeft < max - epsilon);
    }, []);

    useEffect(() => {
        updateScrollAffordance();
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => updateScrollAffordance();
        el.addEventListener("scroll", onScroll, { passive: true });
        const ro = new ResizeObserver(() => updateScrollAffordance());
        ro.observe(el);
        return () => {
            el.removeEventListener("scroll", onScroll);
            ro.disconnect();
        };
    }, [updateScrollAffordance, projectCounts]);

    const scrollTabs = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const delta = Math.max(160, el.clientWidth * 0.55) * direction;
        el.scrollBy({ left: delta, behavior: "smooth" });
    };

    const overlayBtn =
        "pointer-events-auto absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-lightBorder bg-white/95 text-lightPrimarytext shadow-md backdrop-blur-sm transition-colors dark:border-darkPrimaryGray/40 dark:bg-darkSecondaryGray/95 dark:text-white lg:hidden";

    return (
        <div className="mb-8">
            <div className="relative w-full">
                {/* Horizontal scrollable tabs — full width; arrows sit on top */}
                <div
                    ref={scrollRef}
                    className="hide-scrollbar flex w-full touch-pan-x scroll-smooth gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {projectCategories.map((category) => {
                        const isActive =
                            activeCategory === category.id ||
                            (activeCategory === "all" && category.id === "all");
                        const count = projectCounts[category.id] || 0;
                        const IconComponent = categoryIcons[category.id];

                        return (
                            <button
                                key={category.id}
                                onClick={() => onCategoryChange(category.id)}
                                className={`group relative flex min-w-fit shrink-0 items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                                    ? "text-white"
                                    : "border border-lightBorder bg-white text-lightPrimarytext hover:border-SkyBlue hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-SkyBlue to-lightHover shadow-lg shadow-SkyBlue/20 dark:to-darkHover"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className="relative flex items-center gap-2">
                                    {IconComponent && (
                                        <IconComponent
                                            className={`h-4 w-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                                                }`}
                                        />
                                    )}

                                    <span className="whitespace-nowrap">{category.name}</span>

                                    <span
                                        className={`flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-bold transition-colors duration-300 ${isActive
                                            ? "bg-white/20 text-white"
                                            : "bg-SkyBlue/10 text-SkyBlue dark:bg-darkHover/20 dark:text-darkHover"
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-11 bg-gradient-to-r from-white to-transparent dark:from-discordDark lg:hidden"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-11 bg-gradient-to-l from-white to-transparent dark:from-discordDark lg:hidden"
                    aria-hidden
                />

                <button
                    type="button"
                    onClick={() => scrollTabs(-1)}
                    disabled={!canScrollLeft}
                    aria-label="Scroll project categories left"
                    className={`${overlayBtn} left-0 ${canScrollLeft
                        ? "text-lightPrimarytext hover:border-SkyBlue hover:text-SkyBlue dark:hover:border-darkHover dark:hover:text-darkHover"
                        : "cursor-not-allowed opacity-35"
                        }`}
                >
                    <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden />
                </button>
                <button
                    type="button"
                    onClick={() => scrollTabs(1)}
                    disabled={!canScrollRight}
                    aria-label="Scroll project categories right"
                    className={`${overlayBtn} right-0 ${canScrollRight
                        ? "text-lightPrimarytext hover:border-SkyBlue hover:text-SkyBlue dark:hover:border-darkHover dark:hover:text-darkHover"
                        : "cursor-not-allowed opacity-35"
                        }`}
                >
                    <ChevronRight className="h-5 w-5 shrink-0" aria-hidden />
                </button>
            </div>

            {/* Active category description (optional) */}
            {/* <div className="mt-4">
                <p className="text-sm text-lightPrimarytext/70 dark:text-white/70">
                    {activeCategory === "all" && "Showing all projects across all categories"}
                    {activeCategory === "fullstack" && "MERN stack projects with full-stack development"}
                    {activeCategory === "ecommerce" && "E-commerce platforms and online stores"}
                    {activeCategory === "dashboards" && "Admin dashboards and management panels"}
                    {activeCategory === "uiux" && "UI/UX focused frontend projects"}
                    {activeCategory === "portals" && "Customer-facing portal applications"}
                </p>
            </div> */}
        </div>
    );
};

export default ProjectTabs;
