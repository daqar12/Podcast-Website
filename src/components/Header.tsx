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

          {/* Minimalist Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-bold tracking-tight text-gray-300 transition-colors duration-300 hover:text-red-600"
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* The Liquid Line - Animated from center */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-600 -translate-x-1/2 transition-all duration-300 " />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-red-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-8 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-2xl font-black text-white hover:text-red-600 transition-all px-4"
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