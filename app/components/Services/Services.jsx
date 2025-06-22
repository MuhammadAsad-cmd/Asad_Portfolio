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

import { servicesData } from "@/app/Data/ProjectsData";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  FaCode,
  FaPaintBrush,
  FaShoppingCart,
  FaPlug,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

// Icon mapping for different services
const getServiceIcon = (serviceName) => {
  const name = serviceName.toLowerCase();
  if (name.includes("website") || name.includes("web")) return FaLaptopCode;
  if (name.includes("front") || name.includes("frontend")) return FaCode;
  if (name.includes("ui") || name.includes("ux") || name.includes("design"))
    return FaPaintBrush;
  if (name.includes("ecommerce") || name.includes("e-commerce"))
    return FaShoppingCart;
  if (name.includes("api") || name.includes("integration")) return FaPlug;
  if (name.includes("mobile")) return FaMobile;
  if (name.includes("database")) return FaDatabase;
  if (name.includes("cloud")) return FaCloud;
  return FaCode; // default icon
};

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="animated-border my-6 overflow-hidden rounded-t-lg sm:rounded-xl"
      >
        <div className="bg-white dark:bg-discordDark">
          <div className="p-4 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-SkyBlue to-lightHover dark:to-darkHover"></div>
                <h1 className="text-2xl font-bold text-lightPrimarytext dark:text-white">
                  Services
                </h1>
              </div>
              <div className="flex gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue"></div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-lightHover delay-100 dark:bg-darkHover"></div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-SkyBlue/70 delay-200"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicesData.slice(0, 5).map((service, index) => {
                const IconComponent = getServiceIcon(service.name);
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-lightBorder bg-lightbg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:hover:border-darkHover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover transition-transform duration-300 group-hover:scale-110 dark:from-SkyBlue dark:to-darkHover">
                        <IconComponent className="text-lg text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold leading-tight text-lightPrimarytext transition-colors duration-300 group-hover:text-SkyBlue dark:text-white dark:group-hover:text-darkHover">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-SkyBlue/5 to-lightHover/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-SkyBlue/10 dark:to-darkHover/10"></div>
                  </div>
                );
              })}

              {/* Show remaining count if there are more services */}
              {servicesData.length > 5 && (
                <div className="group relative flex items-center justify-center rounded-xl border-2 border-dashed border-SkyBlue/50 bg-SkyBlue/5 p-4 transition-all duration-300 hover:border-SkyBlue dark:border-darkHover/50 dark:bg-SkyBlue/10 dark:hover:border-darkHover">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-SkyBlue to-lightHover transition-transform duration-300 group-hover:scale-110 dark:from-SkyBlue dark:to-darkHover">
                      <span className="text-sm font-bold text-white">+15</span>
                    </div>
                    <p className="text-xs font-medium text-lightSecondarytext dark:text-darkPrimaryGray">
                      More Services
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link href="/details/services">
            <div className="group flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 border-t border-lightBorder bg-lightbg text-lightPrimarytext transition-all duration-300 hover:border-SkyBlue hover:bg-SkyBlue/5 hover:text-SkyBlue dark:border-darkPrimaryGray/30 dark:bg-darkSecondaryGray dark:text-darkPrimaryGray dark:hover:border-darkHover dark:hover:bg-SkyBlue/10 dark:hover:text-darkHover">
              <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                <p className="text-base font-semibold">Show all services</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-SkyBlue to-lightHover transition-transform duration-300 group-hover:scale-110 dark:from-SkyBlue dark:to-darkHover">
                  <IoMdArrowRoundForward className="text-lg text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
