'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Particles with SSR disabled
const Particles = dynamic(
  () => import('@/components/magicui/particles').then((mod) => mod.Particles),
  { ssr: false }
);

export default function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tea Collection", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Tea Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  
  const menuVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        height: { duration: 0.4 },
        opacity: { duration: 0.2 }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        height: { duration: 0.4 },
        opacity: { duration: 0.2 }
      }
    }
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {scrolled && (
        <Particles
          className="absolute inset-0 z-0"
          quantity={20}
          color="#8B4513"
          size={0.4}
          ease={80}
          refresh={false}
        />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              className="font-serif text-4xl font-bold tracking-wider"
              style={{ 
                color: scrolled ? '#8B4513' : 'white',
                textShadow: scrolled 
                  ? "2px 2px 4px rgba(139, 69, 19, 0.3)" 
                  : "2px 2px 4px rgba(0, 0, 0, 0.5)"
              }}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{
                backgroundImage: scrolled 
                  ? "linear-gradient(135deg, #8B4513, #D2691E 50%, #CD853F)" 
                  : "linear-gradient(135deg, #FFFFFF, #F5DEB3 50%, #FFFFFF)",
                backgroundSize: "200% 200%",
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: scrolled ? "transparent" : "white",
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              茶
            </motion.span>
            <div className="ml-2">
              <motion.span
                className="text-sm font-light tracking-widest uppercase"
                style={{ 
                  color: scrolled ? 'rgba(139, 69, 19, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Chinese Tea
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={link.path} 
                  className={`font-medium ${
                    scrolled ? 'text-gray-800 hover:text-tea-brown' : 'text-white hover:text-tea-gold'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mt-4 pb-4 flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={link.path} 
                      className={`block font-medium ${
                        scrolled ? 'text-gray-800 hover:text-tea-brown' : 'text-white hover:text-tea-gold'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 