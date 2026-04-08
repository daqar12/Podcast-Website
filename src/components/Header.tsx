"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Episodes", href: "/episodes" },
    { name: "About", href: "/about" },
    { name: "Subscribe", href: "/subscribe" },
    { name: "Guests", href: "/Guests" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/daq.png"
                alt="Logo"
                width={100} 
                height={100} 
                className="rounded-full transition-transform duration-300 group-hover:scale-110" 
              />
              {/* Subtle glow behind logo on hover */}
              <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Modern Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium text-gray-400 transition-all duration-300 
                           hover:text-white hover:bg-white/10 hover:backdrop-blur-lg 
                           rounded-full border border-transparent hover:border-white/20
                           active:scale-95 active:bg-white/20"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Animated Slide Down */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}