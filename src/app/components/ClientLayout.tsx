"use client";

import Link from "next/link";
import { FaLeaf, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const linkVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2 }
  }
};

const logoVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <Link href="/" className="flex items-center text-2xl font-bold text-green-800">
                <motion.div 
                  className="inline-block"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <FaLeaf className="mr-2 text-green-700" />
                </motion.div>
                <span>Chinese Tea</span>
              </Link>
            </motion.div>
            <motion.ul 
              className="flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Tea Products" },
                { href: "/culture", label: "Tea Culture" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.li 
                  key={link.href}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div variants={linkVariants}>
                    <Link 
                      href={link.href} 
                      className="text-gray-700 hover:text-green-700 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </header>
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, staggerChildren: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ scale: 1.03 }}
              >
                Chinese Tea
              </motion.h3>
              <p className="text-green-100">
                Premium Chinese tea selections, preserving thousands of years of tea culture.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/" className="text-green-100 hover:text-white transition duration-200 flex items-center group">
                    <motion.span 
                      className="mr-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >→</motion.span> 
                    <span className="group-hover:underline">Home</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/products" className="text-green-100 hover:text-white transition duration-200 flex items-center group">
                    <motion.span 
                      className="mr-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >→</motion.span> 
                    <span className="group-hover:underline">Tea Products</span>
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/culture" className="text-green-100 hover:text-white transition duration-200 flex items-center group">
                    <motion.span 
                      className="mr-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >→</motion.span> 
                    <span className="group-hover:underline">Tea Culture</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-green-100">Phone: +86 123 4567 8900</li>
                <li className="text-green-100">Email: info@chineseteahouse.com</li>
                <li className="text-green-100">Address: 88 Tea Street, West Lake District, Hangzhou, China</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="text-green-100">Monday to Friday: 9:00 - 18:00</li>
                <li className="text-green-100">Saturday and Sunday: 10:00 - 17:00</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-green-800 mt-8 pt-8 text-center text-green-100"
          >
            <p>&copy; {new Date().getFullYear()} Chinese Tea. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
} 