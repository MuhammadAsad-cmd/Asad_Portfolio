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
      <NavLink onClick={handleLinkClick} href="/">
        Home
      </NavLink>
      <NavLink onClick={handleLinkClick} href="/details/services">
        Services
      </NavLink>
      <NavLink onClick={handleLinkClick} href="/details/experience">
        Experience
      </NavLink>
      <NavLink onClick={handleLinkClick} href="/details/education">
        Education
      </NavLink>
      <NavLink onClick={handleLinkClick} href="/details/projects">
        Projects
      </NavLink>
      <NavLink onClick={handleLinkClick} href="/details/skills">
        Skills
      </NavLink>
      <NavLink onClick={handleLinkClick} href="#contact">
        Contact
      </NavLink>
    </div>
  );
};

export default RightSidebar;
