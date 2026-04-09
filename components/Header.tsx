"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100 dark:border-emerald-900/30 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-6 sm:px-12 relative">
        
        {/* Logo sekcija */}
        <Link href="/" className="flex items-center gap-3 z-50">
          {/* Fiksirane dimenzije kako se logo ne bi deformisao */}
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0">
            <Image 
              src="/Buruj-logo.jpeg" 
              alt="Buruj Fondacija Logo"
              fill
              className="object-contain object-left" 
              priority 
            />
          </div>
          {/* Uklonjen dodatni tekst "Buruj" jer ga logo već sadrži, što daje čistiji izgled */}
        </Link>

        {/* Desktop Navigacija - Skrivena na mobilnim telefonima */}
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-zinc-700 dark:text-zinc-300">
          <Link href="/" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Akcije
          </Link>
          <Link href="/about-us" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            O nama
          </Link>
          <Link href="/contact" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Kontakt
          </Link>
        </nav>

        {/* Hamburger Dugme (Prikazuje se samo na mobilnim uređajima) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-emerald-950 dark:text-emerald-50 focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              // X ikonica kada je meni otvoren
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger ikonica kada je meni zatvoren
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobilna Navigacija (Dropdown Meni) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-emerald-100 dark:border-emerald-900/30 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6 text-lg font-semibold text-center text-zinc-700 dark:text-zinc-300">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            Akcije
          </Link>
          <Link 
            href="/about-us" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            O nama
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}