import { Link, NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { navLinks } from "../data/siteContent";

const portalOrigin = (
  import.meta.env.VITE_PORTAL_ORIGIN || "http://localhost:5174"
).replace(/\/$/, "");
const loginUrl = `${portalOrigin}/login`;

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="shrink-0">
          <BrandLogo className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-slate-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={loginUrl}
            className="inline-flex h-10 items-center px-2 text-sm font-semibold leading-none text-slate-700 transition hover:text-blue-600"
          >
            Log in
          </a>
          <Link
            to="/request-demo"
            className="hidden h-10 items-center justify-center rounded-lg border border-slate-300 px-4 text-sm font-semibold leading-none text-slate-700 transition hover:border-slate-400 md:inline-flex"
          >
            Request Demo
          </Link>
          <Link
            to="/"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold leading-none text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
