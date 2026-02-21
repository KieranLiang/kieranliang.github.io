// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Minimal top navigation with ink-style hover effects and scroll progress

import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/#about", label: "关于", labelEn: "About" },
  { href: "/#experience", label: "经历", labelEn: "Experience" },
  { href: "/blog", label: "博客", labelEn: "Blog" },
];

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a section by id, retrying until the element is found (for cross-page navigation)
  const scrollToSection = useCallback((id: string) => {
    let attempts = 0;
    const maxAttempts = 20;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        attempts++;
        requestAnimationFrame(tryScroll);
      }
    };
    tryScroll();
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (location === "/") {
        // Already on home page, just scroll
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home page first, then scroll to section after render
        navigate("/");
        requestAnimationFrame(() => scrollToSection(id));
      }
    } else if (href === "/") {
      e.preventDefault();
      if (location === "/") {
        // Already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        window.scrollTo({ top: 0 });
      }
    } else {
      // For /blog etc., navigate and scroll to top
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-parchment/92 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-indigo/20 origin-left"
        style={{ scaleX, opacity: isScrolled ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      <nav className="max-w-[780px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="/" onClick={(e) => handleNavClick(e, "/")}>
          <motion.span
            className="font-serif-en text-base font-bold text-ink tracking-widest"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Kieran Liang
          </motion.span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location === "/"
                : link.href === "/blog"
                  ? location.startsWith("/blog")
                  : false;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13px] transition-colors duration-300 pb-0.5 tracking-wide cursor-pointer ${isActive
                  ? "text-indigo"
                  : "text-ink-light/70 hover:text-ink"
                  }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-indigo/40"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-ink-light hover:text-ink transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-parchment/95 backdrop-blur-md border-b border-border/30 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="block text-sm text-ink-light/80 hover:text-ink transition-colors duration-300 py-1 tracking-wide cursor-pointer"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
