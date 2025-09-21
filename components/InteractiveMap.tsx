'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveMap = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cities = [
    { 
      id: 'chennai',
      name: 'Chennai',
      description: 'Headquarters - Leading 15+ educational institutions',
      x: 370,
      y: 280,
    },
    {
      id: 'bangalore',
      name: 'Bangalore',
      description: 'Tech Hub - 8 corporate partnerships',
      x: 350,
      y: 300,
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      description: 'Financial Center - 12 industry collaborations',
      x: 280,
      y: 220,
    },
    {
      id: 'delhi',
      name: 'Delhi',
      description: 'National Capital - Government partnerships',
      x: 310,
      y: 140,
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      description: 'Eastern Hub - 6 educational partnerships',
      x: 380,
      y: 200,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Presence</h2>
          <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
            Nationwide network of partnerships and collaborations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative" onMouseMove={handleMouseMove}>
              {/* Simplified India Map SVG */}
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                {/* India outline (simplified) */}
                <path
                  d="M 200 100 Q 250 80 300 100 L 380 120 Q 400 150 390 200 L 380 250 Q 370 300 340 320 L 300 340 Q 250 350 200 340 L 150 320 Q 120 300 110 250 L 100 200 Q 110 150 130 120 L 200 100 Z"
                  fill="#0f513eff"
                  fillOpacity="0.1"
                  stroke="#0f513eff"
                  strokeWidth="2"
                />
                
                {/* Cities */}
                {cities.map((city) => (
                  <motion.circle
                    key={city.id}
                    cx={city.x}
                    cy={city.y}
                    r="8"
                    fill="#0f513eff"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.5, fill: '#3B82F6' }}
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                  />
                ))}
              </svg>

              {/* Tooltip */}
              {hoveredCity && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="fixed bg-white/90 backdrop-blur-md border border-white/30 rounded-lg p-3 shadow-lg pointer-events-none z-50"
                  style={{
                    left: mousePosition.x + 10,
                    top: mousePosition.y - 10,
                  }}
                >
                  <div className="font-bold text-darkCyanGreen">
                    {cities.find(c => c.id === hoveredCity)?.name}
                  </div>
                  <div className="text-sm text-darkCyanGreen/80">
                    {cities.find(c => c.id === hoveredCity)?.description}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;