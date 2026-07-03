import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import { useScrollOnNavigate } from "../controllers/useScrollOnNavigate.js";

/**
 * PAGE — Home. Assembles scrollable sections (Hero, About, Skills, Projects, Contact).
 */
export default function Home({ theme, darkMode, refs, scrollTo }) {
  useScrollOnNavigate(scrollTo);

  return (
    <>
      <Hero theme={theme} heroRef={refs.hero} scrollTo={scrollTo} />
      <About theme={theme} darkMode={darkMode} aboutRef={refs.about} />
      <Skills theme={theme} darkMode={darkMode} skillsRef={refs.skills} />
      <Projects theme={theme} darkMode={darkMode} projectsRef={refs.projects} />
      <Contact theme={theme} darkMode={darkMode} contactRef={refs.contact} />
    </>
  );
}
