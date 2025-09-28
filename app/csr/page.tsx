'use client';

import { motion } from 'framer-motion';
import { Leaf, Users, Globe, TrendingUp, Heart, Award } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';

const CSRPage = () => {
  const impactMetrics = [
    { value: 2500, label: 'CO₂ Tons Reduced', suffix: '', icon: <Leaf className="w-8 h-8" /> },
    { value: 1200, label: 'Green Jobs Enabled', suffix: '+', icon: <Users className="w-8 h-8" /> },
    { value: 50, label: 'Communities Reached', suffix: '+', icon: <Globe className="w-8 h-8" /> },
    { value: 95, label: 'Satisfaction Rate', suffix: '%', icon: <Heart className="w-8 h-8" /> },
  ];

  const initiatives = [
    {
      title: 'Digital Inclusion Program',
      description: 'Bridging the digital divide in rural communities through free digital literacy training and device access programs.',
      impact: '5,000+ individuals trained in digital skills',
      category: 'Education',
      icon: <Users className="w-12 h-12" />,
    },
    {
      title: 'Green Skills Development',
      description: 'Training programs focused on renewable energy, sustainable agriculture, and environmental conservation skills.',
      impact: '1,200+ green jobs created',
      category: 'Environment',
      icon: <Leaf className="w-12 h-12" />,
    },
    {
      title: 'Women Entrepreneur Support',
      description: 'Mentorship and training programs supporting women-led startups and small businesses across India.',
      impact: '800+ women entrepreneurs supported',
      category: 'Empowerment',
      icon: <Award className="w-12 h-12" />,
    },
    {
      title: 'Sustainable Corporate Practices',
      description: 'Consulting and training services helping corporations implement ESG practices and reduce environmental impact.',
      impact: '2,500 tons CO₂ emissions reduced',
      category: 'Sustainability',
      icon: <TrendingUp className="w-12 h-12" />,
    },
  ];

  const sdgGoals = [
    { number: 4, title: 'Quality Education', description: 'Ensuring inclusive and equitable quality education' },
    { number: 8, title: 'Decent Work', description: 'Promoting sustained economic growth and employment' },
    { number: 9, title: 'Industry, Innovation and Infrastructure', description: 'Building resilient infrastructure and promoting sustainable industrialization' },
    { number: 10, title: 'Reduced Inequalities', description: 'Reducing inequality within and among countries' },
    { number: 13, title: 'Climate Action', description: 'Taking urgent action to combat climate change' },
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
            CSR & ESG Impact
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our commitment to creating positive social and environmental impact through 
            sustainable business practices, community engagement, and responsible innovation.
          </motion.p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Impact Dashboard</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Measurable outcomes from our ESG initiatives and community programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="text-center">
                  <div className="text-darkCyanGreen mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-darkCyanGreen mb-2">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-darkCyanGreen/80 font-medium text-sm">{metric.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Impact Charts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Impact Over Time</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Visual representation of our growing positive impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CO₂ Reduction Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold text-darkCyanGreen mb-6 flex items-center">
                  <Leaf className="w-6 h-6 mr-2" />
                  CO₂ Emissions Reduced
                </h3>
                <div className="space-y-4">
                  {[
                    { year: '2021', value: 500, percentage: 20 },
                    { year: '2022', value: 1200, percentage: 48 },
                    { year: '2023', value: 2000, percentage: 80 },
                    { year: '2024', value: 2500, percentage: 100 },
                  ].map((item, index) => (
                    <div key={item.year}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-darkCyanGreen">{item.year}</span>
                        <span className="font-bold text-darkCyanGreen">{item.value} tons</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className="bg-green-500 h-3 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Green Jobs Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard>
                <h3 className="text-2xl font-bold text-darkCyanGreen mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Green Jobs Enabled
                </h3>
                <div className="space-y-4">
                  {[
                    { year: '2021', value: 200, percentage: 16.7 },
                    { year: '2022', value: 500, percentage: 41.7 },
                    { year: '2023', value: 900, percentage: 75 },
                    { year: '2024', value: 1200, percentage: 100 },
                  ].map((item, index) => (
                    <div key={item.year}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-darkCyanGreen">{item.year}</span>
                        <span className="font-bold text-darkCyanGreen">{item.value} jobs</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className="bg-blue-500 h-3 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Key Initiatives</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Our flagship programs driving positive social and environmental change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start mb-4">
                    <div className="text-darkCyanGreen mr-4 flex-shrink-0">
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-darkCyanGreen">{initiative.title}</h3>
                        <span className="text-xs bg-darkCyanGreen/10 text-darkCyanGreen px-2 py-1 rounded">
                          {initiative.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-darkCyanGreen/80 mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="bg-darkCyanGreen/10 rounded-lg p-4">
                    <h4 className="font-semibold text-darkCyanGreen mb-2">Key Impact:</h4>
                    <p className="text-darkCyanGreen/80 font-medium">{initiative.impact}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">UN SDG Alignment</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Our initiatives directly contribute to achieving the United Nations Sustainable Development Goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="bg-darkCyanGreen text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {goal.number}
                  </div>
                  <h3 className="text-lg font-bold text-darkCyanGreen mb-2">{goal.title}</h3>
                  <p className="text-darkCyanGreen/80 text-sm">{goal.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Join Our Impact Journey</h2>
            <p className="text-xl text-darkCyanGreen/80 mb-8 max-w-3xl mx-auto">
              Partner with us to create meaningful change in your organization and community. 
              Together, we can build a more sustainable and equitable future.
            </p>
            <motion.button
              className="bg-darkCyanGreen text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your ESG Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSRPage;
