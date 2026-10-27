import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  { label: "Website Development", to: "/services/website-development" },
  { label: "Digital Marketing", to: "/services/digital-marketing" },
  { label: "SEO Optimization", to: "/services/seo-optimization" },
  { label: "App Development", to: "/services/app-development" },
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590391273500",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dbtechx?igsh=ejhibTV3MmljYzN2",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/131154221/admin/dashboard/",
    icon: FaLinkedinIn,
  },
  { label: "WhatsApp", href: "https://wa.me/919504393419", icon: FaWhatsapp },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#08090d] text-white">
      {/* Subtle brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[min(760px,90%)] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl"
      />

      {/* Compact call to action */}
      <div className="relative border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-red-400">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Let’s build something better
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to grow with <span className="text-red-500">Dbtechx?</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              Tell us your idea. We’ll help you take the next step.
            </p>
          </div>
          <a
            href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20would%20like%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#08090d]"
          >
            Free Consultation
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Main compact footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_0.8fr_1.15fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              aria-label="Dbtechx home"
              className="inline-flex rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <img
                src="/logo.png"
                alt="Dbtechx"
                width="200"
                height="72"
                className="h-16 w-auto max-w-[220px] sm:h-[4.5rem] sm:max-w-[240px] object-contain object-left"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              Digital marketing, web development and creative technology
              solutions for growing businesses.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-500/70 transition-all group-hover:h-1.5 group-hover:w-1.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
                >
                  All services <FaArrowRight size={11} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={scrollToTop}
                    className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white">
              Get in touch
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919504393419"
                className="group flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <FaPhoneAlt size={13} />
                </span>
                <span>
                  <span className="mb-1 block text-xs text-zinc-500">Call us</span>
                  +91 95043 93419
                </span>
              </a>
              <a
                href="mailto:contact@dbtechx.com"
                className="group flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <FaEnvelope size={13} />
                </span>
                <span className="min-w-0">
                  <span className="mb-1 block text-xs text-zinc-500">Email us</span>
                  <span className="break-all">contact@dbtechx.com</span>
                </span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=RPS+Plaza+Near+Hope+Hospital+Purnia+Bihar+854301"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <FaMapMarkerAlt size={14} />
                </span>
                <span>
                  <span className="mb-1 block text-xs text-zinc-500">Visit us</span>
                  RPS Plaza, Near Hope Hospital,
                  <br />
                  Purnia, Bihar 854301
                  <span className="mt-1 block text-xs font-semibold text-red-400">
                    Get directions ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-9 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {currentYear} Dbtechx. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500">
            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={scrollToTop}
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              to="/support"
              onClick={scrollToTop}
              className="transition-colors hover:text-white"
            >
              Support
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-red-500/40 hover:bg-red-600 hover:text-white sm:ml-1"
            >
              <FaArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
