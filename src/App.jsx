import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";

import { useTheme } from "./controllers/useTheme.js";
import { useScrollNav } from "./controllers/useScrollNav.js";
import { useMobileMenu } from "./controllers/useMobileMenu.js";
import { useActiveSection } from "./controllers/useActiveSection.js";

/**
 * AppShell — contient toute la logique et le rendu. Doit être rendu
 * À L'INTÉRIEUR de <HashRouter> car useActiveSection (et Navbar) utilisent
 * useLocation/useNavigate, qui nécessitent le contexte du Router.
 */
function AppShell() {
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
        <Routes>
          <Route path="/" element={<Home theme={theme} darkMode={darkMode} refs={refs} scrollTo={scrollTo} />} />
          <Route path="/projects/:slug" element={<CaseStudy theme={theme} darkMode={darkMode} />} />
        </Routes>
      </main>

      <Footer theme={theme} />
    </div>
  );
}

/**
 * APP — point d'assemblage. Monte le Router puis l'AppShell.
 *
 * Deux routes :
 *  - "/"                    → page d'accueil (scroll sections)
 *  - "/projects/:slug"      → étude de cas détaillée d'un projet
 *
 * HashRouter est utilisé (URLs en /#/...) car le site est déployé sur
 * GitHub Pages sans configuration de fallback SPA : ça évite les 404
 * au rechargement d'une page de projet.
 */
export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
