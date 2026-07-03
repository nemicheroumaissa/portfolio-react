import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Scrolls to a home section when navigating from another route (e.g. case study → projects).
 * Usage: navigate("/", { state: { scrollTo: "projects" } })
 */
export function useScrollOnNavigate(scrollTo) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target || location.pathname !== "/") return;

    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => {
      scrollTo(target);
      navigate(location.pathname, { replace: true, state: {} });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location, navigate, scrollTo]);
}

/**
 * Scrolls to top when a case study page loads or the slug changes.
 */
export function useScrollToTop(deps = []) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, deps);
}
