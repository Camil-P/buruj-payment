"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Akcije" },
  { href: "/about-us", label: "O nama" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-2xl"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 z-50">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 overflow-hidden rounded-xl shadow-md shadow-emerald-500/25 transition-all group-hover:shadow-lg group-hover:shadow-emerald-500/40 group-hover:scale-105">
            <Image
              src="/Buruj-logo.jpeg"
              alt="Buruj Fondacija Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="hidden sm:block text-base font-bold text-foreground">
            Emanet
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground rounded-lg hover:text-foreground hover:bg-muted/60 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#akcije"
            className="ml-3 inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#059669] to-[#0ea87a] px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
          >
            Podrži
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-foreground focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-2xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 px-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
                className="mt-2"
              >
                <Link
                  href="/#akcije"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-[#059669] to-[#0ea87a] rounded-lg shadow-md shadow-emerald-500/20 transition-all"
                >
                  Podrži
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
