'use client';

import Link from "next/link";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedTeaCategory from "@/components/AnimatedTeaCategory";
import AnimatedTestimonial from "@/components/AnimatedTestimonial";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const teaCategories = [
  {
    title: "Green Tea",
    description: "Fresh, grassy, and rich in antioxidants",
    color: "bg-green-500",
    href: "/"
  },
  {
    title: "Oolong Tea",
    description: "Semi-oxidized with complex flavors",
    color: "bg-amber-700",
    href: "/"
  },
  {
    title: "Black Tea",
    description: "Fully oxidized with robust flavors",
    color: "bg-red-800",
    href: "/"
  },
  {
    title: "Pu-erh Tea",
    description: "Aged and fermented with earthy notes",
    color: "bg-amber-900",
    href: "/"
  }
];

const testimonials = [
  {
    quote: "The Dragon Well green tea is exceptional. It brings me back to my travels through Hangzhou.",
    author: "Emily Chen",
    role: "Tea Enthusiast"
  },
  {
    quote: "I've never experienced such authentic Chinese teas outside of China. The quality is unmatched.",
    author: "James Wilson",
    role: "Tea Collector"
  },
  {
    quote: "Their Tie Guan Yin oolong has become my daily ritual. The floral notes are divine.",
    author: "Sarah Park",
    role: "Certified Tea Sommelier"
  }
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedNavbar />
      <AnimatedHero />
      
      {/* Featured Products */}
      <section className="py-20 px-4">
        <motion.div 
          className="container mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="font-serif text-4xl text-center font-bold mb-4"
            variants={itemVariants}
          >
            Our Tea Collection
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={itemVariants}
          >
            Explore our selection of authentic Chinese teas, carefully sourced from the finest tea gardens
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teaCategories.map((category, index) => (
              <AnimatedTeaCategory
                key={category.title}
                title={category.title}
                description={category.description}
                color={category.color}
                href={category.href}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-tea-green bg-opacity-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-tea-brown bg-opacity-10 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 text-7xl flex items-center justify-center text-tea-brown"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  茶
                </motion.div>
              </div>
              <motion.div 
                className="absolute inset-0 p-10 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                  <p className="text-tea-brown text-xl italic">
                    "Tea is the elixir of life." - Chinese Proverb
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="md:w-1/2">
              <motion.h2 
                className="font-serif text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Tea Heritage
              </motion.h2>
              
              <motion.p 
                className="mb-4 text-gray-700"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                For over three generations, our family has been sourcing the finest teas from the most prestigious regions of China. 
                We take pride in our direct relationships with tea farmers who practice traditional cultivation methods.
              </motion.p>
              
              <motion.p 
                className="mb-8 text-gray-700"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Each tea in our collection is carefully selected for its exceptional quality, authentic flavor, and cultural significance.
              </motion.p>
              
              <motion.button
                className="px-8 py-3 bg-tea-brown text-white font-bold rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="font-serif text-4xl text-center font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Visitors Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover what tea enthusiasts have to say about our authentic Chinese teas
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedTestimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-tea-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="font-serif text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Tea Community
          </motion.h2>
          
          <motion.p 
            className="mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Subscribe to our newsletter for tea education, cultural insights, and tea ceremony traditions.
          </motion.p>
          
          <motion.form 
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 flex-grow rounded-full text-gray-800"
              required
            />
            <motion.button 
              type="submit" 
              className="px-6 py-3 bg-tea-gold text-tea-brown font-bold rounded-full"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
