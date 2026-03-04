'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/domestic', label: 'Domestic' },
  { href: '/international', label: 'International' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16 bg-white rounded-full shadow-lg shadow-primary/25 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/Logo.jpg"
                alt="Hithu Global Holidays"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className={`font-heading font-bold text-lg leading-tight block ${scrolled ? 'text-text' : 'text-white'}`}>
                Hithu Global
              </span>
              <span className={`text-xs leading-tight block ${scrolled ? 'text-primary' : 'text-accent-light'}`}>
                Holidays
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled
                  ? 'text-text-light hover:text-primary hover:bg-primary/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20your%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-primary to-coral text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              🌴 Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-text' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-light hover:text-primary hover:bg-primary/5 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/918639978917?text=Hi%20Hithu%20Global%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20your%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center px-5 py-3 bg-gradient-to-r from-primary to-coral text-white rounded-xl font-semibold transition-all"
              >
                🌴 Get a Quote on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
