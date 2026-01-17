// import { servicesData } from "@/app/Data/ProjectsData";
// import Link from "next/link";
// import React from "react";
// import { IoMdArrowRoundForward } from "react-icons/io";

// const Services = () => {
//   return (
//     <>
//       <div
//         id="services"
//         className="animated-border my-6 rounded-t-lg sm:rounded-xl"
//       >
//         <div className="bg-white dark:bg-discordDark">
//           <div className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xl font-semibold">Services</p>
//               </div>
//             </div>
//             <div className="pt-3">
//               <ul>
//                 {servicesData
//                   .slice(0, 5)
//                   .map((service) => service.name)
//                   .join(" • ")}
//               </ul>
//             </div>
//           </div>
//           <Link href="/details/services">
//             <div className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg border-t text-lightPrimarytext duration-200 ease-in-out dark:border-darkSecondaryGray dark:text-white dark:hover:bg-discordDark">
//               <p className="text-base font-semibold">Show all</p>
//               <IoMdArrowRoundForward className="text-xl" />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  IoCodeSlashOutline,
  IoServerOutline,
  IoLayersOutline,
  IoRocketOutline,
  IoColorPaletteOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Main highlighted service
  const primaryService = {
    title: "MERN Stack Development",
    description: "Complete web applications from concept to deployment.",
    features: [
      "Custom Architecture",
      "High Performance",
      "Scalable Backend",
    ],
  };

  // Secondary services list
  const otherServices = [
    {
      icon: IoCodeSlashOutline,
      title: "Frontend Development",
      description: "Responsive, pixel-perfect UIs with React & Next.js",
    },
    {
      icon: IoServerOutline,
      title: "Backend API Development",
      description: "Secure RESTful APIs using Node.js & Express",
    },
    {
      icon: IoLayersOutline,
      title: "Database Design",
      description: "Efficient data schemas with MongoDB & Mongoose",
    },
    {
      icon: IoColorPaletteOutline,
      title: "UI/UX Implementation",
      description: "Turning designs into interactive functional interfaces",
    },
    {
      icon: IoRocketOutline,
      title: "Performance Optimization",
      description: "Speed enhancement, SEO, and core web vitals",
    },
    {
      icon: IoCloudUploadOutline,
      title: "Deployment & DevOps",
      description: "CI/CD pipelines, Vercel/AWS hosting setup",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="services-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-1.5 rounded-full bg-SkyBlue"></div>
            <div>
              <h2 id="services-heading" className="text-3xl font-bold text-lightPrimarytext dark:text-white">
                Services
              </h2>
              <p className="mt-1 text-base text-lightSecondarytext dark:text-darkPrimaryGray">
                Comprehensive technical solutions for your business
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: Primary Service Highlight */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="relative h-full rounded-2xl bg-gradient-to-b from-SkyBlue/10 to-transparent p-8 dark:from-SkyBlue/5">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-SkyBlue text-white shadow-lg shadow-SkyBlue/20">
                <IoLayersOutline className="text-3xl" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-lightPrimarytext dark:text-white">
                {primaryService.title}
              </h3>
              <p className="mb-6 text-lightSecondarytext dark:text-darkPrimaryGray">
                {primaryService.description}
              </p>
              
              <div className="space-y-3">
                {primaryService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-SkyBlue"></div>
                    <span className="text-sm font-medium text-lightPrimarytext dark:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-SkyBlue/20 dark:border-white/10">
                 <p className="text-sm font-medium text-SkyBlue">
                    Most Popular Choice
                 </p>
              </div>
            </div>
          </div>

          {/* Right: Service List */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-lightbg text-SkyBlue transition-colors group-hover:bg-SkyBlue group-hover:text-white dark:bg-darkSecondaryGray">
                    <service.icon className="text-lg" />
                  </div>
                  <div className="flex-1 border-b border-lightBorder pb-6 dark:border-darkSecondaryGray">
                    <h4 className="mb-1 text-base font-bold text-lightPrimarytext transition-colors group-hover:text-SkyBlue dark:text-white">
                      {service.title}
                    </h4>
                    <p className="text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div
              className={`mt-6 flex justify-end transition-all duration-700 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
               <Link
                href="/details/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-SkyBlue transition-colors hover:text-lightHover dark:hover:text-darkHover"
              >
                View all 15+ services
                <IoMdArrowRoundForward className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
