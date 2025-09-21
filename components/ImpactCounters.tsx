'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import GlassCard from './GlassCard';
import { Value } from '@radix-ui/react-select';

const ImpactCounters = () => {
  const stats = [
    { value: 50000, label: 'Minds Stimulated', suffix: '+' },
    { value: 120, label: 'Corporate Clients', suffix: '+' },
    { value: 35, label: 'Institutions Partnered', suffix: '+' },
    { value: 4.8, label: 'Google Rating', suffix: '' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Impact</h2>
          <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
            Measurable results across education and industry partnerships
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-darkCyanGreen mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-darkCyanGreen/80 font-medium">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;