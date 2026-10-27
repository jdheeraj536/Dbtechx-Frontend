import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaWhatsapp,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa";

const aboutLinks = [
  { to: "/about", label: "About Us", detail: "Who we are" },
  { to: "/team", label: "Our Team", detail: "Meet the people" },
  { to: "/projects", label: "Projects", detail: "Work we are proud of" },
  { to: "/gallery", label: "Gallery", detail: "Inside Dbtechx" },
];

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  // Close the drawer and dropdown whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  // Lock background scrolling while the mobile drawer is open; restore prior value on cleanup.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative inline-flex items-center py-2 text-sm xl:text-[15px] font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-white after:w-full"
        : "text-zinc-300 hover:text-white after:w-0 hover:after:w-full"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 ${
      isActive
        ? "bg-red-500/10 text-red-300 ring-1 ring-red-500/20"
        : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Slim brand accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-red-700 via-red-400 to-orange-400" />

      <nav className="border-b border-white/[0.08] bg-[#08090d]/90 shadow-[0_12px_45px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:h-[88px] lg:px-10 2xl:px-14">
          {/* Brand */}
          <Link
            to="/"
            aria-label="Dbtechx home"
            className="group relative z-[60] flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <img
              src="/logo.png"
              alt="Dbtechx"
              width="220"
              height="80"
              fetchPriority="high"
              className="h-12 w-auto max-w-[155px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14 sm:max-w-[190px] lg:h-[68px] lg:max-w-[220px]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center gap-1.5">
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
                <button
                  type="button"
                  aria-label="Toggle About menu"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="rounded-md p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-red-400" : ""}`}
                  />
                </button>
              </div>

              <div
                className={`absolute left-1/2 top-full w-[270px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                  dropdownOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101116]/[0.98] p-2 shadow-[0_22px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                  <div className="px-3 pb-2 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-400">
                      Discover Dbtechx
                    </p>
                  </div>
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setDropdownOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.06]"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-zinc-100 group-hover:text-red-300">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-zinc-500">
                          {item.detail}
                        </span>
                      </span>
                      <FaArrowRight className="text-xs text-zinc-600 transition group-hover:translate-x-1 group-hover:text-red-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20would%20like%20a%20quote%20for%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(220,38,38,0.24)] transition duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-orange-500 hover:shadow-[0_12px_32px_rgba(220,38,38,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <FaBolt className="text-xs transition-transform group-hover:scale-110" />
              Get a Quote
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile action + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/919504393419"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Dbtechx on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-lg text-emerald-300 transition hover:bg-emerald-400/20"
            >
              <FaWhatsapp />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xl text-white shadow-inner transition hover:border-red-400/40 hover:bg-red-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span className={`transition-all duration-200 ${menuOpen ? "rotate-90 scale-90" : "rotate-0"}`}>
                {menuOpen ? <FaTimes className="text-red-300" /> : <FaBars />}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Premium mobile drawer */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-[88%] max-w-[390px] flex-col overflow-hidden border-l border-white/10 bg-[#0b0c11] shadow-[-25px_0_80px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="relative shrink-0 overflow-hidden border-b border-white/[0.08] bg-[#08090d] px-5 pb-5 pt-7 sm:px-6">
          <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
          <div className="relative flex items-center justify-between gap-3">
            <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Dbtechx home">
              <img src="/logo.png" alt="Dbtechx" className="h-12 w-auto max-w-[175px] object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:border-red-400/30 hover:text-red-300"
            >
              <FaTimes />
            </button>
          </div>
          <div className="relative mt-5 flex items-center gap-2.5 rounded-xl border border-red-500/15 bg-red-500/[0.07] px-3.5 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-300">
              <FaBolt />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Ideas into impact.</p>
              <p className="mt-0.5 text-xs text-zinc-400">Technology · Strategy · Growth</p>
            </div>
          </div>
        </div>

        {/* Scrollable navigation */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5">
          <p className="mb-3 px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
            Navigation
          </p>
          <div className="flex flex-col gap-1.5">
            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
              Home <FaArrowRight className="text-[10px] opacity-40" />
            </NavLink>

            <div className="overflow-hidden rounded-xl">
              <div className="flex items-center gap-1">
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex flex-1 items-center rounded-xl px-4 py-3.5 text-[15px] font-semibold transition ${
                      isActive ? "text-red-300" : "text-zinc-300 hover:text-white"
                    }`
                  }
                >
                  About
                </NavLink>
                <button
                  type="button"
                  aria-label="Expand About links"
                  aria-expanded={mobileAboutOpen}
                  onClick={() => setMobileAboutOpen((open) => !open)}
                  className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-white/[0.06] hover:text-red-300"
                >
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${mobileAboutOpen ? "rotate-180 text-red-300" : ""}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-300 ${mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="ml-4 flex flex-col gap-1 border-l border-red-500/25 py-1 pl-3">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-red-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {primaryLinks.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                {item.label} <FaArrowRight className="text-[10px] opacity-40" />
              </NavLink>
            ))}
          </div>

          <div className="mt-7 border-t border-white/[0.08] pt-5">
            <p className="mb-3 px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
              Let's connect
            </p>
            <a href="tel:+919504393419" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-300"><FaPhoneAlt /></span>
              <span><span className="block text-[11px] text-zinc-500">Call us</span><span className="mt-0.5 block font-semibold">+91 95043 93419</span></span>
            </a>
            <a href="mailto:contact@dbtechx.com" className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-300"><FaEnvelope /></span>
              <span className="min-w-0"><span className="block text-[11px] text-zinc-500">Email us</span><span className="mt-0.5 block break-all font-semibold">contact@dbtechx.com</span></span>
            </a>
          </div>
        </div>

        {/* Sticky drawer CTA */}
        <div className="shrink-0 border-t border-white/[0.08] bg-[#08090d] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-5">
          <a
            href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20would%20like%20a%20free%20consultation."
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-orange-500 px-5 py-4 text-sm font-bold text-white shadow-[0_10px_28px_rgba(220,38,38,0.24)] transition duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            <FaWhatsapp className="text-lg" />
            Get Free Consultation
            <FaArrowRight className="ml-auto text-xs transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-center text-[10px] tracking-wide text-zinc-600">© {new Date().getFullYear()} Dbtechx · Built for growth</p>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
