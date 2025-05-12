'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Particles with SSR disabled
const Particles = dynamic(
  () => import('@/components/magicui/particles').then((mod) => mod.Particles),
  { ssr: false }
);

export default function Footer() {
  return (
    <footer className="bg-tea-brown text-white relative overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={30}
        color="#FFFFFF"
        size={0.3}
        ease={100}
        refresh={false}
      />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <motion.span 
                className="font-serif text-3xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF, #F5DEB3 50%, #FFFFFF)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                茶
              </motion.span>
            </div>
            <p className="mb-4 text-gray-300">
              Bringing authentic Chinese tea culture to your home since 2005.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-tea-gold"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-tea-gold"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-tea-gold"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">Tea Collection</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">Tea Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Tea Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tea Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/green-tea" className="text-gray-300 hover:text-white">Green Tea</Link>
              </li>
              <li>
                <Link href="/products/oolong-tea" className="text-gray-300 hover:text-white">Oolong Tea</Link>
              </li>
              <li>
                <Link href="/products/black-tea" className="text-gray-300 hover:text-white">Black Tea</Link>
              </li>
              <li>
                <Link href="/products/puerh-tea" className="text-gray-300 hover:text-white">Pu-erh Tea</Link>
              </li>
              <li>
                <Link href="/products/white-tea" className="text-gray-300 hover:text-white">White Tea</Link>
              </li>
              <li>
                <Link href="/products/herbal-tea" className="text-gray-300 hover:text-white">Herbal Tea</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-300">123 Tea Garden Street</p>
              <p className="mb-2 text-gray-300">San Francisco, CA 94103</p>
              <p className="mb-2 text-gray-300">
                <a href="tel:+14155551234" className="hover:text-white">+1 (415) 555-1234</a>
              </p>
              <p className="mb-2 text-gray-300">
                <a href="mailto:info@teaessence.com" className="hover:text-white">info@teaessence.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} 茶. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 