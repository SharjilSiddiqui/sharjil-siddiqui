import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ setShowSkills, setShowContact, setShowProjects }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Skills", id: "skills", onClick: () => setShowSkills(true) },
    { name: "Projects", id: "projects", onClick: () => setShowProjects(true) },
    { name: "Contact", id: "contact", onClick: () => setShowContact(true) }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6 w-[95%] max-w-7xl
                  transition-all duration-500 ${
                    scrolled ? "mt-3 scale-[0.98]" : "mt-6"
                  }`}
    >
      <div
        className={`relative bg-gradient-to-br from-black via-slate-950 to-black
                    backdrop-blur-xl border border-sky-500/30 rounded-3xl
                    shadow-lg shadow-sky-500/10 transition-all duration-500
                    ${scrolled ? "py-3 px-4" : "py-4 px-6"}`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-sky-500/5 rounded-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-sans
                       bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent
                       cursor-pointer select-none"
          >
            Portfolio
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href || "#"}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="relative px-4 py-2 text-white font-medium text-base lg:text-lg
                           transition-colors duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-sky-400 transition-colors">
                  {link.name}
                </span>

                {/* Hover Underline */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow Effect */}
                <motion.span
                  className="absolute inset-0 bg-sky-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden relative z-10 p-2 text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="pt-4 mt-4 border-t border-sky-500/30 space-y-1"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href || "#"}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                      setMenuOpen(false);
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-white text-lg font-medium
                               hover:bg-sky-500/10 hover:text-sky-400 rounded-xl
                               transition-all duration-300 cursor-pointer"
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Glow Bar */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
    </motion.nav>
  );
}

export default Navbar;