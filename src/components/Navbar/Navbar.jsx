// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // WhatsApp number for Pakistan with pre-filled message
  const whatsappNumber = "923707202459";
  const message =
    "Hello! I'm interested in a free packaging audit for my brand.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary font-display font-bold text-sm">
                PN
              </span>
            </div>
            <span className="font-display font-semibold text-lg text-white tracking-tight">
              Patch<span className="text-accent">Nova</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+923707202459"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <BsTelephone size={14} className="text-accent" />
              <span className="font-medium">+92 370 7202459</span>
            </a>
            <div className="w-px h-4 bg-white/10" />

            {/* WhatsApp Button in Desktop */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-green-700 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)]"
            >
              <BsWhatsapp size={16} /> WhatsApp
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-primary border-t border-white/5"
          >
            <div className="container-custom py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium text-white/70 hover:bg-accent/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#audit"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary justify-center text-center"
                >
                  Get Free Packaging Audit
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm bg-green-600/20 hover:bg-green-600/30 text-white py-3 px-4 rounded-xl transition-colors"
                >
                  <BsWhatsapp size={18} className="text-green-500" /> Chat on
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
