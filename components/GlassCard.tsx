'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  flip?: boolean;
  flipContent?: ReactNode;
}

const GlassCard = ({ children, className = '', hover = true, flip = false, flipContent }: GlassCardProps) => {
  if (flip) {
    return (
      <motion.div
        className={`group perspective-1000 ${className}`}
        whileHover={hover ? { y: -5 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-xl p-6">
            {children}
          </div>
          {/* Back */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-xl p-6">
            {flipContent}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-xl p-6 ${className}`}
      whileHover={hover ? { y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;