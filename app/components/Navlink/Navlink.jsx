"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href.startsWith("#") && pathname === "/");

  return (
    <Link href={href}>
      <p
        className={`text-lg font-medium duration-300 ease-in-out 
          ${
            isActive
              ? "font-semibold text-lightPrimarytext dark:text-white"
              : "text-lightSecondarytext hover:text-lightHover dark:text-darkPrimaryGray dark:hover:text-darkHover"
          }`}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavLink;
