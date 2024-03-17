import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <div id="/">
        <Header />
        <HeroSection />
      </div>
      <div id="About">
        <AboutMe />
      </div>
      <div id="Projects">
        <Projects />
      </div>
    </>
  );
}
