'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface AnimatedTeaCategoryProps {
  title: string;
  description: string;
  color: string;
  href: string;
  index: number;
}

export default function AnimatedTeaCategory({ title, description, color, href, index }: AnimatedTeaCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }
    })
  };
  
  return (
    <motion.div 
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="relative overflow-hidden rounded-2xl shadow-xl"
    >
      <div className={`h-full bg-opacity-10 p-6 transition-all duration-300 hover:bg-opacity-20 ${color}`}>
        <motion.div 
          className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-opacity-30"
          style={{ backgroundColor: color.replace('bg-', '') }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-opacity-20"
          style={{ backgroundColor: color.replace('bg-', '') }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="mb-4 font-serif text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="mb-6 text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
          
          <Link href={href}>
            <motion.button 
              className="rounded-full px-6 py-2 font-medium text-white"
              style={{ backgroundColor: color.replace('bg-', '') }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 