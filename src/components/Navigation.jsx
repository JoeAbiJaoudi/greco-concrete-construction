"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-primary">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-heading font-semibold text-white uppercase-wide tracking-widest">
            The Pungo Collective
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/" className="text-white hover:text-accent transition-colors duration-200 uppercase tracking-wider text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/businesses" className="text-white hover:text-accent transition-colors duration-200 uppercase tracking-wider text-sm">
                Businesses
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-accent transition-colors duration-200 uppercase tracking-wider text-sm">
                About
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 bg-primary-dark py-4 rounded-lg">
              <li>
                <Link 
                  href="/" 
                  className="block px-4 py-2 text-white hover:bg-accent/20 transition-colors duration-200 uppercase tracking-wider text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/businesses" 
                  className="block px-4 py-2 text-white hover:bg-accent/20 transition-colors duration-200 uppercase tracking-wider text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Businesses
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block px-4 py-2 text-white hover:bg-accent/20 transition-colors duration-200 uppercase tracking-wider text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}