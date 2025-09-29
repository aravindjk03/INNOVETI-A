'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Using regular img for static export compatibility
import { getAssetPath } from '@/lib/assets';

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: getAssetPath('/inv1.jpg'),
      alt: 'Change Management Classes',
      title: 'Change Management Classes',
      description: 'Empowering organizations to navigate transformation effectively'
    },
    {
      src: getAssetPath('/inv2.jpg'),
      alt: 'Information Security',
      title: 'Information Security',
      description: 'Comprehensive cybersecurity training and awareness programs'
    },
    {
      src: getAssetPath('/inv3.jpg'),
      alt: 'Industrial Safety Classes',
      title: 'Industrial Safety Classes',
      description: 'Creating safer workplaces through expert safety training'
    },
    {
      src: getAssetPath('/inv4.jpg'),
      alt: 'Tree Plantation',
      title: 'Tree Plantation',
      description: 'Environmental sustainability through afforestation initiatives'
    },
    {
      src: getAssetPath('/inv5.jpg'),
      alt: 'Titan Road Safety Programs',
      title: 'Titan Road Safety Programs',
      description: 'Promoting road safety awareness and responsible driving'
    },
    {
      src: getAssetPath('/inv6.jpg'),
      alt: 'Titan Road Safety Programs',
      title: 'Titan Road Safety Programs',
      description: 'Comprehensive road safety education and training initiatives'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Action
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Witness the transformation we bring to educational institutions and industries
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    {images[currentImage].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg md:text-xl opacity-90"
                  >
                    {images[currentImage].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full hover:bg-white/30 transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;