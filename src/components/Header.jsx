import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { navLinks } from "../data/siteContent";

const portalOrigin = (() => {
  const fromEnv = import.meta.env.VITE_PORTAL_ORIGIN?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (import.meta.env.DEV) return "http://localhost:5173";
  return "";
})();
const loginUrl = portalOrigin ? `${portalOrigin}/login` : "#";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-bm-border bg-bm-bg/90 backdrop-blur-md">
      <div className="bm-container flex items-center justify-between py-4">
        <Link to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <BrandLogo className="h-10 w-auto" variant="dark" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-bm-accent ${
                  isActive ? "text-bm-accent" : "text-bm-muted"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={loginUrl}
            className="inline-flex h-10 items-center px-2 text-sm font-semibold text-bm-muted transition hover:text-bm-text"
          >
            Log in
          </a>
          <Link to="/request-demo" className="bm-btn-ghost h-10">
            Request Demo
          </Link>
          <Link to="/request-demo" className="bm-btn-primary h-10">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-bm-border text-bm-text md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-bm-border bg-bm-surface px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium ${isActive ? "text-bm-accent" : "text-bm-muted"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={loginUrl} className="block text-sm font-medium text-bm-muted">
                Log in
              </a>
            </li>
            <li>
              <Link to="/request-demo" className="bm-btn-primary w-full" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
