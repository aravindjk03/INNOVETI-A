'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    'Bridging Education ↔ Industry',
    'Building Skills ↔ Driving Growth',
    'Empowering Minds ↔ Transforming Business',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = (type: 'institutions' | 'industries') => {
    const element = document.getElementById(type === 'institutions' ? 'education-services' : 'industry-services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-100/30"
        animate={{ backgroundPosition: '0% 50%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-brandGreen mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            INNOVEITY
          </motion.h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
          <motion.h2
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-darkCyanGreen font-semibold"
            >
              {taglines[currentTagline]}
            </motion.h2>
          </div>
          
          <motion.p
            className="text-lg md:text-xl text-darkCyanGreen/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming education through innovative solutions, corporate training, and sustainable development initiatives across India.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToServices('institutions')}
              className="bg-darkCyanGreen text-white px-8 py-4 rounded-lg font-semibold hover:bg-darkCyanGreen/90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              For Institutions
            </motion.button>
            <motion.button
              onClick={() => scrollToServices('industries')}
              className="bg-white/30 backdrop-blur-md border border-white/30 text-darkCyanGreen px-8 py-4 rounded-lg font-semibold hover:bg-white/40 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              For Industries
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-darkCyanGreen w-8 h-8" />
        </motion.div>
    </section>
  );
};

export default HeroSection;