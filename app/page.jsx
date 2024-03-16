import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
    </>
  );
}
