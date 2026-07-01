import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import { useTheme } from "./controllers/useTheme.js";
import { useScrollNav } from "./controllers/useScrollNav.js";
import { useMobileMenu } from "./controllers/useMobileMenu.js";
import { useActiveSection } from "./controllers/useActiveSection.js";

/**
 * APP — point d'assemblage. Récupère l'état depuis les Controllers
 * et le distribue aux Views. Aucune logique métier ici.
 */
export default function App() {
  const { darkMode, theme, toggleTheme } = useTheme();
  const { refs, scrollTo } = useScrollNav();
  const mobileMenu = useMobileMenu();
  const activeSection = useActiveSection();

  return (
    <div
      className="pf-app"
      style={{
        backgroundColor: theme.background,
        color: theme.onSurface,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Navbar
        theme={theme}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        scrollTo={scrollTo}
        mobileMenu={mobileMenu}
        activeSection={activeSection}
      />

      <main>
        <Hero theme={theme} heroRef={refs.hero} scrollTo={scrollTo} />
        <About theme={theme} darkMode={darkMode} aboutRef={refs.about} />
        <Skills theme={theme} darkMode={darkMode} skillsRef={refs.skills} />
        <Projects theme={theme} darkMode={darkMode} projectsRef={refs.projects} />
        <Contact theme={theme} darkMode={darkMode} contactRef={refs.contact} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}
