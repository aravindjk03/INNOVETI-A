'use client';

import { useState } from 'react';
import Link from 'next/link';
// Using regular img for static export compatibility
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/knowledge-hub', label: 'Knowledge Hub' },
    { href: '/events', label: 'Our Courses' },
    { href: '/csr', label: 'CSR' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <img
                  src={getAssetPath("/iinvlogo.jpg")}
                  alt="INNOVEITY Logo"
                  className="w-full h-full rounded-lg object-contain"
                />
              </div>
              <span className="text-2xl font-black text-brandGreen tracking-widest uppercase drop-shadow-md">
                INNOVEITY
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-darkCyanGreen hover:text-darkCyanGreen/80 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-darkCyanGreen hover:text-darkCyanGreen/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-md rounded-lg mt-2 p-4 border border-white/20 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-darkCyanGreen hover:text-darkCyanGreen/80 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;