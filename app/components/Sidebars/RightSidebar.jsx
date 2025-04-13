"use client";
import { useDispatch } from "react-redux";
import { closeSidebar } from "@/redux/sidebarSlice";
import NavLink from "../Navlink/Navlink";

const RightSidebar = ({ id }) => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeSidebar(id));
  };

  return (
    <div className="mt-5 flex w-full flex-col gap-y-4 p-7">
      <NavLink onClick={handleLinkClick} href="#about">
        About
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#services">
        Services
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#experience">
        Experience
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#education">
        Education
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#projects">
        Projects
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#skills">
        Skills
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#contact">
        Contact
      </NavLink>
    </div>
  );
};

export default RightSidebar;
