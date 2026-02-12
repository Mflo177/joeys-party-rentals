'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-packers-green shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-packers-gold">
            Joey's Party Rentals
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-white hover:text-packers-gold transition">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-packers-gold transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-packers-gold transition">
              Contact
            </Link>
            
            {/* Phone Button */}
            <a 
              href="tel:+15551234567"
              className="flex items-center gap-2 bg-packers-gold text-packers-green px-4 py-2 rounded-lg hover:bg-yellow-400 transition font-bold"
            >
              📞 (555) 123-4567
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <a 
              href="tel:+15551234567"
              className="text-3xl text-packers-gold"
              aria-label="Call us"
            >
              📞
            </a>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-3xl text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-packers-light pt-4">
            <Link 
              href="/services" 
              className="block text-white hover:text-packers-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block text-white hover:text-packers-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-packers-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}