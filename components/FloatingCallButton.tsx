'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const FloatingCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '8807824373';

  const handleCall = () => {
    window.open(`tel:+91${phoneNumber}`, '_self');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-darkCyanGreen">Call Us Now</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close call popup"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
            <div className="text-sm text-darkCyanGreen/80 mb-3">
              Get instant support and consultation
            </div>
            <button
              onClick={handleCall}
              className="w-full bg-darkCyanGreen text-white px-4 py-2 rounded-lg hover:bg-darkCyanGreen/90 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={16} />
              <span>+91 {phoneNumber}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-darkCyanGreen text-white rounded-full shadow-lg hover:bg-darkCyanGreen/90 transition-colors duration-200 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 4px 14px 0 rgba(0, 169, 122, 0.3)',
            '0 6px 20px 0 rgba(0, 169, 122, 0.4)',
            '0 4px 14px 0 rgba(0, 169, 122, 0.3)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? <X size={24} /> : <Phone size={24} />}
        </motion.div>
      </motion.button>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-darkCyanGreen rounded-full -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default FloatingCallButton;