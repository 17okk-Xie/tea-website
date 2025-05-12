"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaHistory, FaGlassCheers } from "react-icons/fa";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 leading-tight">
              Premium Chinese Tea
            </h1>
            <h2 className="text-xl md:text-2xl text-green-700 mb-6">
              Authentic Chinese Tea Tradition
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Explore thousands of years of tea culture, and experience the perfect blend of nature and tradition. 
              We carefully select quality tea leaves and preserve ancient craftsmanship to bring you an authentic Chinese tea experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaLeaf className="mr-2" />
                Explore Our Teas
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative h-64 md:h-96 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-green-50 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-green-300 via-green-100 to-green-50 opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl font-bold text-center mb-4 text-green-800"
            >
              Featured Teas
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-20 h-1 bg-green-600 mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Tea Product 1 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-green-200 to-green-100 opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Longjing Tea</h3>
                <p className="text-gray-600 mb-4">
                  Produced in Longjing village of West Lake in Hangzhou, with emerald color, high fragrance, mellow taste, and flat smooth shape.
                </p>
                <Link
                  href="/products/longjing"
                  className="text-green-700 hover:text-green-800 font-medium inline-flex items-center group"
                >
                  Learn More 
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Tea Product 2 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-300 via-amber-200 to-amber-100 opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tieguanyin</h3>
                <p className="text-gray-600 mb-4">
                  A specialty from Anxi, Fujian, this light fragrant Tieguanyin has a fresh and lasting aroma with a rich, lingering sweet aftertaste.
                </p>
                <Link
                  href="/products/tieguanyin"
                  className="text-green-700 hover:text-green-800 font-medium inline-flex items-center group"
                >
                  Learn More 
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Tea Product 3 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-800 via-amber-700 to-amber-600 opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pu'er Tea</h3>
                <p className="text-gray-600 mb-4">
                  From Pu'er in Yunnan, this tea gets better with age, featuring a unique aged aroma and a rich, sweet aftertaste.
                </p>
                <Link
                  href="/products/puer"
                  className="text-green-700 hover:text-green-800 font-medium inline-flex items-center group"
                >
                  Learn More 
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tea Culture Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Chinese Tea Culture</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaHistory className="text-green-700 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-green-700">A Rich History</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Chinese tea culture has a history spanning over five thousand years, from Shennong tasting herbs to Lu Yu's "Tea Classic" in the Tang Dynasty, 
                to the rise of whisked tea in the Song Dynasty. Chinese tea culture has developed unique aesthetic tastes and spiritual connotations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaGlassCheers className="text-green-700 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-green-700">The Spirit of Tea Ceremony</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The tea ceremony integrates Confucian, Taoist, and Zen philosophies, pursuing a spiritual realm of "harmony, respect, purity, and tranquility." 
                Tea appreciation is not only about the tea itself but also a lifestyle and an elevation of one's personal state.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="mb-8 max-w-2xl mx-auto">
            If you have any questions about our teas or would like to learn more about Chinese tea culture, please feel free to contact us.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg inline-block transition duration-300 shadow-md hover:shadow-xl"
            >
              Contact Information
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
