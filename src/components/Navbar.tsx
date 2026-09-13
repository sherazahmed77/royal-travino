import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CONTACT, NAV_LINKS } from "../data/content";
import { cn } from "../utils/cn";

/** Prefetch a lazy page chunk when user hovers a nav link */
const PAGE_PREFETCH: Record<string, () => Promise<unknown>> = {
  "/": () => import("../pages/Home"),
  "/services": () => import("../pages/Services"),
  "/fleet": () => import("../pages/Fleet"),
  "/about": () => import("../pages/About"),
  "/contact": () => import("../pages/Contact"),
};

function LogoMark() {
  return (
    <Link
      to="/"
      id="brand-logo-link"
      className="group flex items-center gap-3.5"
      aria-label="Royal Travino — Home"
    >
      <span className="grid h-10 w-10 shrink-0 rotate-45 place-items-center border border-gold/60 transition-colors duration-500 group-hover:border-gold">
        <span className="-rotate-45 font-display text-xs font-semibold tracking-wider leading-none text-gold">RT</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-[0.22em] text-ivory">
          ROYAL
        </span>
        <span className="mt-1.5 block text-[8.5px] font-bold uppercase tracking-[0.52em] text-gold">
          Travino
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const prefetch = useCallback((to: string) => {
    PAGE_PREFETCH[to]?.();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-10">
          <LogoMark />

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                id={`nav-link-${link.to.replace("/", "") || "home"}`}
                to={link.to}
                onMouseEnter={() => prefetch(link.to)}
                className={({ isActive }) =>
                  cn(
                    "group relative py-2 text-[11px] font-semibold uppercase tracking-[0.26em] transition-colors duration-400",
                    isActive ? "text-gold" : "text-ivory/75 hover:text-ivory"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <span className="h-5 w-px bg-ivory/15" />
            <Link
              to="/contact"
              id="nav-contact-button"
              className="border border-gold/50 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-gold transition-all duration-500 hover:bg-gold hover:text-ink"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <LogoMark />
              <button
                id="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "group flex items-center gap-5 border-b border-ivory/8 py-5",
                        isActive ? "text-gold" : "text-ivory"
                      )
                    }
                  >
                    <span className="font-serif text-sm italic text-gold/70">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl tracking-wide transition-transform duration-500 group-hover:translate-x-2">
                      {link.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="px-8 pb-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                {CONTACT.address}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block text-sm text-sand transition-colors hover:text-ivory"
              >
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                className="mt-1.5 block text-sm text-sand transition-colors hover:text-ivory"
              >
                {CONTACT.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
