import NavLink from "../Navlink/Navlink";

const RightSidebar = () => {
  return (
    <>
      <div className="mt-5  flex w-full flex-col gap-y-4 p-7">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </>
  );
};

export default RightSidebar;
