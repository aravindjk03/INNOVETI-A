'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Users } from 'lucide-react';
import GlassCard from './GlassCard';

const ServicesOverview = () => {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12 text-darkCyanGreen" />,
      title: 'Educational Solutions',
      frontDescription: 'Comprehensive training and development programs',
      backDescription: 'Faculty development, student training, placement assistance, and curriculum enhancement for educational institutions.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-darkCyanGreen" />,
      title: 'Corporate Training',
      frontDescription: 'Industry-focused skill development programs',
      backDescription: 'ESG consulting, sustainability training, legal audits, digital transformation, and corporate skill development.',
    },
    {
      icon: <Users className="w-12 h-12 text-darkCyanGreen" />,
      title: 'Community Engagement',
      frontDescription: 'Building bridges between education and industry',
      backDescription: 'Webinars, symposiums, skill challenges, and community outreach programs for holistic development.',
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Services</h2>
          <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
            Comprehensive solutions bridging the gap between education and industry
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <GlassCard
                flip={true}
                className="h-80"
                flipContent={
                  <div className="flex flex-col h-full">
                    {service.icon}
                    <h3 className="text-xl font-bold text-darkCyanGreen mt-4 mb-4">{service.title}</h3>
                    <p className="text-darkCyanGreen/80 flex-1 flex items-center">{service.backDescription}</p>
                  </div>
                }
              >
                <div className="flex flex-col items-center h-full">
                  {service.icon}
                  <h3 className="text-xl font-bold text-darkCyanGreen mt-4 mb-4">{service.title}</h3>
                  <p className="text-darkCyanGreen/80 text-center flex-1 flex items-center">{service.frontDescription}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;