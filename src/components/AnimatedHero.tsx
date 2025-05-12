'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Particles with SSR disabled
const Particles = dynamic(
  () => import('@/components/magicui/particles').then((mod) => mod.Particles),
  { ssr: false }
);

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    // Initialize window size
    handleResize();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const calculateMovement = (axis: 'x' | 'y', intensity = 0.02) => {
    if (typeof window === 'undefined') return 0; // Check if running on server
    
    if (axis === 'x') {
      return (mousePosition.x - windowSize.width / 2) * intensity;
    }
    return (mousePosition.y - windowSize.height / 2) * intensity;
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-tea-brown">
      {/* Particles animation */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={50}
        color="#8B4513"
        size={1.5}
        ease={50}
        refresh={false}
      />
      <Particles
        className="absolute inset-0 z-10"
        quantity={30}
        color="#CD853F"
        size={1}
        ease={40}
        refresh={false}
      />
      <Particles
        className="absolute inset-0 z-10"
        quantity={20}
        color="#F5DEB3"
        size={0.6}
        ease={30}
        refresh={false}
      />
      
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 bg-[url('/tea-bg.jpg')] bg-cover bg-center"
        style={{ 
          y,
          backgroundPositionX: `calc(50% + ${calculateMovement('x')}px)`,
          backgroundPositionY: `calc(50% + ${calculateMovement('y')}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-20 flex h-full items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white p-4">
          <motion.h1 
            className="font-serif text-6xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-tea-gold">茶</span> Authentic Chinese Tea
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the ancient tradition and exquisite flavors of premium Chinese teas
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <motion.button 
                className="px-8 py-3 bg-tea-gold text-tea-brown font-bold rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Teas
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
} 