import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Active link styling: red color + bold font
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-bold transition-colors" 
      : "hover:text-red-500 transition-colors";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="
        relative
        w-full
        h-24
        lg:h-25
        bg-black/90
        backdrop-blur-xl
        border-b
        border-red-500/20
        shadow-[0_0_30px_rgba(220,38,38,0.15)]
      ">
        <div className="
          w-full
          px-6
          lg:px-16
          h-full
          flex
          items-center
          justify-between
        ">
          {/* Logo Section */}
          <a href="https://dbtechx.com/" className="flex items-center overflow-visible py-2">
            <img
              src="/logo.png"
              alt="DBTECHX"
              width="260"
              height="96"
              loading="eager"
              className="
                h-16 
                w-auto 
                lg:h-24 
                max-w-[180px] 
                lg:max-w-[260px] 
                object-contain 
                scale-110 
                lg:scale-125
                cursor-pointer 
                transition-transform 
                duration-200 
                active:scale-95
              "
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-white font-medium">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/team" className={navLinkClass}>Team</NavLink>
            <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            <a
              href="https://wa.me/919504393419"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="lg:hidden text-white text-2xl cursor-pointer p-2 select-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-start gap-6 py-8 px-8 text-white border-b border-red-500/20 shadow-lg">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>Services</NavLink>
            <NavLink to="/team" onClick={() => setMenuOpen(false)} className={navLinkClass}>Team</NavLink>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)} className={navLinkClass}>Careers</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact</NavLink>

            <a
              href="https://wa.me/919504393419"
              className="bg-red-600 active:bg-red-700 px-8 py-3 rounded-xl font-semibold text-center w-full mt-4"
            >
              Get Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;