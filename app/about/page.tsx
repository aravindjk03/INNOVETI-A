'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import GoogleReviews from '@/components/GoogleReviews';

const AboutPage = () => {
  const values = [
    { icon: <Target className="w-8 h-8" />, title: 'Mission', description: 'To bridge the gap between education and industry through innovative solutions and sustainable practices.' },
    { icon: <Eye className="w-8 h-8" />, title: 'Vision', description: 'To become the leading catalyst for educational transformation and industry excellence across India.' },
    { icon: <Heart className="w-8 h-8" />, title: 'Values', description: 'Innovation, Integrity, Excellence, Sustainability, and Collaborative Growth.' },
  ];

  const milestones = [
    { year: '2018', title: 'Foundation', description: 'INNOVEITY was founded with a vision to transform education' },
    { year: '2019', title: 'First 1000', description: '1500+ students successfully trained across various programs' },
    { year: '2020', title: 'Digital Pivot', description: 'Adapted to digital learning during pandemic, reaching 2000+ students' },
    { year: '2021', title: 'Corporate Expansion', description: 'Expanded to corporate training with 35+ industry partners' },
    { year: '2022', title: 'National Reach', description: 'Established presence across India' },
    { year: '2023', title: 'ESG Focus', description: 'Launched comprehensive ESG and sustainability programs' },
    { year: '2024', title: 'Innovation Hub', description: '50000+  minds Stimulated, 120+ corporate clients, 35+ institution partnerships' },
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
            About <span className="text-brandGreen">INNOVEITY</span>
          </motion.h1>
          <motion.div
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="mb-6">
              INNOVEITY is a forward-looking organization that connects global technology and innovation directly to students by working closely with world-leading corporates such as BMW, Caterpillar, and many others.
            </p>
            
            <p className="mb-6">
              Our mission is to ensure that students gain access to international standards, advanced technologies, and industry practices that prepare them for the future of work.
            </p>
            
            <p>
              Through strategic partnerships with educational institutions and industry leaders, we create comprehensive training programs, development initiatives, and sustainable solutions that bridge the gap between academia and real-world application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Foundation</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              The core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard className="text-center">
                  <div className="text-darkCyanGreen mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-darkCyanGreen mb-4">{value.title}</h3>
                  <p className="text-darkCyanGreen/80">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Journey</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Key milestones in our mission to transform education and industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-darkCyanGreen/30"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2 pl-12 md:pl-0`}
              >
                <div className="absolute left-3 md:left-auto md:right-3 w-4 h-4 bg-darkCyanGreen rounded-full border-4 border-white shadow-lg md:transform md:translate-x-1/2"></div>
                <GlassCard>
                  <div className="text-2xl font-bold text-darkCyanGreen mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-darkCyanGreen mb-2">{milestone.title}</h3>
                  <p className="text-darkCyanGreen/80">{milestone.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Our Strengths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">Our Strengths</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              What makes INNOVEITY the preferred partner for educational transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, title: 'Proven Expertise', description: '6+ years of experience in educational innovation and industry partnerships' },
              { icon: <Users className="w-12 h-12" />, title: 'Strong Network', description: 'Extensive network of educational institutions and corporate partners across India' },
              { icon: <Lightbulb className="w-12 h-12" />, title: 'Innovation Focus', description: 'Cutting-edge solutions combining technology, sustainability, and practical skills' },
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard className="text-center">
                  <div className="text-darkCyanGreen mb-4 flex justify-center">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold text-darkCyanGreen mb-4">{strength.title}</h3>
                  <p className="text-darkCyanGreen/80">{strength.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;