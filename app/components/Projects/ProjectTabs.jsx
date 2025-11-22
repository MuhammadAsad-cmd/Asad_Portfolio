"use client";
import React from "react";
import { projectCategories } from "@/app/Data/projectCategories";
import { motion } from "framer-motion";
import {
    Rocket,
    Zap,
    ShoppingCart,
    LayoutDashboard,
    Palette,
    Users
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
    return (
        <div className="mb-8">
            {/* Tabs Container */}
            <div className="relative">
                {/* Horizontal scrollable tabs */}
                <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
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
                                className={`group relative flex min-w-fit items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                                    ? "text-white"
                                    : "border border-lightBorder bg-white text-lightPrimarytext hover:border-SkyBlue hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:text-white dark:hover:border-darkHover dark:hover:text-darkHover"
                                    }`}
                            >
                                {/* Active Background Animation */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-SkyBlue to-lightHover shadow-lg shadow-SkyBlue/20 dark:to-darkHover"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Content (Relative to sit on top of motion background) */}
                                <div className="relative flex items-center gap-2">
                                    {/* Icon */}
                                    {IconComponent && (
                                        <IconComponent
                                            className={`h-4 w-4 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                                                }`}
                                        />
                                    )}

                                    {/* Category Name */}
                                    <span className="whitespace-nowrap">{category.name}</span>

                                    {/* Count Badge */}
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
