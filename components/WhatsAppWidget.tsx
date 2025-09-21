'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello%20INNOVEITY%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
className="fixed bottom-6 right-6 bg-darkCyanGreen text-white p-3 rounded-full shadow-lg hover:bg-[color:var(--primary)] transition-colors duration-200 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppWidget;