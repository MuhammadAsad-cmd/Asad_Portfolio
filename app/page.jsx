import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

export const metadata = {
  title: "Muhammad Asad |  Frontend Web Developer",
  description: "Generated by Muhammad Asad",
  icons: ["/images/name.avif"],
};
export default function Home() {
  return (
    <>
      <div className="w-full">
        <Profile />
        <About />
        <Services />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
      </div>
    </>
  );
}
