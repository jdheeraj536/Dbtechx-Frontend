import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Background scroll lock when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Active Link Styling
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-bold text-base transition-colors"
      : "text-zinc-300 hover:text-red-500 font-medium text-base transition-colors";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full h-24 bg-black/90 backdrop-blur-xl border-b border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
        <div className="w-full px-6 lg:px-16 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="https://dbtechx.com/" className="flex items-center py-2 z-50">
            <img
              src="/logo.png"
              alt="DBTECHX"
              width="260"
              height="96"
              loading="eager"
              className="h-16 w-auto lg:h-24 max-w-[180px] lg:max-w-[260px] object-contain scale-110 lg:scale-125 cursor-pointer"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500 font-bold text-base" : "hover:text-red-500 text-base text-zinc-300 transition-colors"}>Home</NavLink>
            
            {/* About Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center gap-1.5 cursor-pointer text-zinc-300 group-hover:text-red-500 text-base font-medium transition-colors">
                <Link to="/about" className="hover:text-red-500">About</Link>
                <FaChevronDown className={`text-[10px] transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-red-500" : ""}`} />
              </div>

              {/* Dropdown Menu Box */}
              <div className={`absolute top-full left-0 w-48 bg-[#090a0f] border border-zinc-800 rounded-xl shadow-2xl py-2 transition-all duration-300 transform origin-top ${
                dropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}>
                <Link to="/about" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-red-600/20 transition-colors">
                  About Us
                </Link>
                <Link to="/team" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-red-600/20 transition-colors">
                  Our Team
                </Link>
                <Link to="/projects" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-red-600/20 transition-colors">
                  Projects
                </Link>
                <Link to="/gallery" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-red-600/20 transition-colors">
                  Gallery
                </Link>
              </div>
            </div>

            <NavLink to="/services" className={({ isActive }) => isActive ? "text-red-500 font-bold text-base" : "hover:text-red-500 text-base text-zinc-300 transition-colors"}>Services</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "text-red-500 font-bold text-base" : "hover:text-red-500 text-base text-zinc-300 transition-colors"}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold text-base" : "hover:text-red-500 text-base text-zinc-300 transition-colors"}>Contact</NavLink>

            <a href="https://wa.me/919504393419" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-red-600/30 text-white text-sm transition-all">
              Get Quote
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            type="button"
            className="lg:hidden text-white text-xl p-3 z-50 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sliding Right-Side Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#0b0c10] border-l border-red-500/30 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Drawer Top Header */}
        <div className="p-5 border-b border-zinc-900 flex items-center justify-between bg-black">
          <img src="/logo.png" alt="DBTECHX" className="h-14 w-auto object-contain" />
          <button 
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 p-2 rounded-lg"
          >
            <FaTimes className="text-base text-red-500" />
          </button>
        </div>

        {/* Scrollable Nav Links Section */}
        <div className="px-6 py-6 flex flex-col gap-4 overflow-y-auto flex-grow">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          
          {/* Mobile About Accordion */}
          <div className="flex flex-col">
            <div 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex items-center justify-between text-zinc-300 hover:text-red-500 text-base font-medium cursor-pointer py-1"
            >
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-500">About</Link>
              <FaChevronDown className={`text-xs transition-transform duration-300 ${mobileAboutOpen ? "rotate-180 text-red-500" : ""}`} />
            </div>

            {mobileAboutOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2.5 border-l border-red-500/30">
                <Link to="/about" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400 hover:text-red-500">About Us</Link>
                <Link to="/team" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400 hover:text-red-500">Our Team</Link>
                <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400 hover:text-red-500">Projects</Link>
                <Link to="/gallery" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-400 hover:text-red-500">Gallery</Link>
              </div>
            )}
          </div>

          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>Services</NavLink>
          <NavLink to="/careers" onClick={() => setMenuOpen(false)} className={navLinkClass}>Careers</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact Us</NavLink>
        </div>

        {/* Drawer Bottom Contact Details & Quote CTA */}
        <div className="p-5 bg-black border-t border-zinc-900">
          <div className="mb-4 space-y-1.5 text-xs text-zinc-400">
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-red-500 text-[10px]" /> +91 95043 93419</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-red-500 text-[10px]" /> support@dbtechx.com</p>
          </div>
          <a
            href="https://wa.me/919504393419"
            onClick={() => setMenuOpen(false)}
            className="block bg-red-600 active:bg-red-700 py-3 rounded-xl font-bold text-center text-white text-xs shadow-lg shadow-red-600/30 transition-all"
          >
            Get Free Quote
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;