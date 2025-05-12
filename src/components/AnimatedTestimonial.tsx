'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export default function AnimatedTestimonial({ quote, author, role, index }: AnimatedTestimonialProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-white rounded-lg overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className="absolute top-0 right-0 w-20 h-20 bg-tea-green bg-opacity-10 rounded-full"
        style={{ transform: 'translate(50%, -50%)' }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="absolute bottom-0 left-0 w-16 h-16 bg-tea-brown bg-opacity-10 rounded-full"
        style={{ transform: 'translate(-50%, 50%)' }}
      />
      
      <div className="p-6 shadow-lg relative z-10 bg-white">
        <motion.div 
          className="text-tea-gold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
          </svg>
        </motion.div>
        
        <motion.p 
          className="text-gray-700 mb-6 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          "{quote}"
        </motion.p>
        
        <motion.div 
          className="pt-4 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          <p className="font-bold text-tea-brown">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
} 