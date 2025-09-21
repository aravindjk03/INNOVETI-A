'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Users, BookOpen, TrendingUp, Shield, Leaf, Code, Scale, Globe } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'For Educational Institutions',
      id: 'education-services',
      services: [
        { icon: <BookOpen className="w-8 h-8" />, title: 'Faculty Development', description: 'Comprehensive training programs for educators to enhance teaching methodologies and industry relevance.' },
        { icon: <GraduationCap className="w-8 h-8" />, title: 'Student Training', description: 'Skill development programs preparing students for industry requirements and career success.' },
        { icon: <TrendingUp className="w-8 h-8" />, title: 'Placement Assistance', description: 'Career guidance, interview preparation, and industry connections for student placements.' },
      ]
    },
    {
      title: 'For Industries',
      id: 'industry-services',
      services: [
        { icon: <Building2 className="w-8 h-8" />, title: 'Corporate Training', description: 'Customized training solutions for workforce development and skill enhancement.' },
        { icon: <Leaf className="w-8 h-8" />, title: 'ESG Consulting', description: 'Environmental, Social, and Governance consulting for sustainable business practices.' },
        { icon: <Shield className="w-8 h-8" />, title: 'Legal Audits', description: 'Comprehensive legal compliance audits and risk assessment services.' },
        { icon: <Code className="w-8 h-8" />, title: 'Digital Solutions', description: 'Technology consulting and digital transformation services.' },
      ]
    },
    {
      title: 'For Communities',
      id: 'community-services',
      services: [
        { icon: <Users className="w-8 h-8" />, title: 'Webinars & Symposiums', description: 'Educational events bringing together industry experts and academia.' },
        { icon: <Scale className="w-8 h-8" />, title: 'Skill Challenges', description: 'Competitive programs to identify and nurture talent across various domains.' },
        { icon: <Globe className="w-8 h-8" />, title: 'Community Outreach', description: 'Social impact programs for underserved communities and regions.' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-darkCyanGreen mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Comprehensive solutions designed to bridge the gap between education and industry, 
            fostering growth, innovation, and sustainable development.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 1 ? 'bg-gradient-to-r from-blue-50/30 to-white/50' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">{category.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
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
                      <div className="flex flex-col h-full justify-center">
                        <div className="text-darkCyanGreen mb-4 flex justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-darkCyanGreen mb-4 text-center">{service.title}</h3>
                        <p className="text-darkCyanGreen/80 text-center flex-1 flex items-center">{service.description}</p>
                        <motion.button
                          className="mt-4 bg-darkCyanGreen text-white px-6 py-2 rounded-lg hover:bg-darkCyanGreen/90 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    }
                  >
                    <div className="flex flex-col items-center h-full justify-center">
                      <div className="text-darkCyanGreen mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-darkCyanGreen mb-4 text-center">{service.title}</h3>
                      <p className="text-darkCyanGreen/80 text-center">Hover to learn more</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Ready to Transform?</h2>
            <p className="text-xl text-darkCyanGreen/80 mb-8 max-w-3xl mx-auto">
              Partner with INNOVEITY to bridge the gap between education and industry. 
              Let's create meaningful impact together.
            </p>
            <motion.button
              className="bg-darkCyanGreen text-white px-8 py-4 rounded-lg font-semibold hover:bg-darkCyanGreen/90 transition-colors duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;