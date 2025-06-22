"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href.startsWith("#") && pathname === "/");

  return (
    <Link href={href} onClick={onClick} className="h-full px-4">
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
