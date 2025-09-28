'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import YouTube from 'react-youtube';
import GlassCard from '@/components/GlassCard';
import { getAssetPath } from '@/lib/assets';

const CaseStudiesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, videoType: string} | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Transforming Engineering Education at Shivani Engineering College',
      description: 'How we helped Shivani Engineering College enhance their curriculum and improve student placement rates by 85%.',
      quote: '"INNOVEITY\'s comprehensive faculty development program revolutionized our teaching methodologies. Our students are now industry-ready from day one."',
      client: 'Shivani Engineering College',
      videoId: '4jwBt2ZUuRc', // YouTube video for Shivani Engineering College
      videoType: 'youtube', // Specify this is a YouTube video
      results: ['85% increase in placement rates', '40+ industry partnerships', '500+ students trained'],
    },
    {
      id: 2,
      title: 'Corporate ESG Transformation at Biocon',
      description: 'Executed a large-scale afforestation initiative by planting 5,000 native trees, directly contributing to carbon reduction, biodiversity enhancement, and stronger ESG performance.',
      quote: '"The sustainability partnership with INNOVEITY enabled us to align our carbon reduction goals with real environmental impact. Planting 5,000 trees was not just an initiative—it became a symbol of our commitment to a greener future."',
      client: 'Biocon',
      videoId: getAssetPath('/invid1.mp4'), // Local video file
      videoType: 'local', // Specify this is a local video
      results: [' 75,000–90,000 kg CO₂ absorbed annually (projected)', ' 5,000 trees planted across strategic sites', ' Community engagement & local employment generated', ' Enhanced ESG ratings & corporate reputation'],
    },
    {
      id: 3,
      title: 'Corporate Leadership Transformation ',
      description: 'Designed and delivered a high-impact leadership development program that empowered managers to enhance decision-making, communication, and team alignment—leading to measurable organizational results.',
      quote: '"The leadership intervention by INNOVEITY inspired our managers to think bigger, lead with confidence, and align their teams towards shared goals. The program created an immediate cultural shift and lasting motivation across the organization."',
      client: 'ManufacturingCorp',
      videoId: getAssetPath('/invid2.mp4'), // Local video file
      videoType: 'local', // Specify this is a local video
      results: [' 80% improvement in leadership effectiveness scores', ' Significant boost in employee engagement & motivation', ' Improved cross-functional collaboration and decision-making', ' Noticeable uplift in productivity and project delivery outcomes'],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  };

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
            Case Studies
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Real stories of transformation, growth, and success from our partnerships 
            across educational institutions, corporations, and communities.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-darkCyanGreen mb-6">
                        {caseStudies[currentSlide].title}
                      </h2>
                      <p className="text-lg text-darkCyanGreen/80 mb-8">
                        {caseStudies[currentSlide].description}
                      </p>
                      
                      <blockquote className="border-l-4 border-darkCyanGreen pl-6 mb-6">
                        <p className="text-lg italic text-darkCyanGreen/90 mb-4">
                          {caseStudies[currentSlide].quote}
                        </p>
                        <cite className="text-sm font-semibold text-darkCyanGreen">
                          — {caseStudies[currentSlide].client}
                        </cite>
                      </blockquote>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-darkCyanGreen mb-4">Key Results:</h3>
                        <ul className="space-y-2">
                          {caseStudies[currentSlide].results.map((result, index) => (
                            <li key={index} className="flex items-center text-darkCyanGreen/80">
                              <div className="w-2 h-2 bg-darkCyanGreen rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative bg-gray-200 rounded-lg overflow-hidden w-full max-w-md aspect-video mb-6">
                        <button
                          onClick={() => setSelectedVideo({videoId: caseStudies[currentSlide].videoId, videoType: caseStudies[currentSlide].videoType})}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 group"
                        >
                          <motion.div
                            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 group-hover:bg-white/30 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        </button>
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                          Case Study Video
                        </div>
                      </div>
                      
                      <motion.button
                        onClick={() => setSelectedVideo({videoId: caseStudies[currentSlide].videoId, videoType: caseStudies[currentSlide].videoType})}
                        className="bg-darkCyanGreen text-white px-6 py-3 rounded-lg hover:bg-darkCyanGreen/90 transition-colors duration-200 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Full Story
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-darkCyanGreen" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-darkCyanGreen" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-darkCyanGreen' : 'bg-darkCyanGreen/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg p-4 max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                {selectedVideo.videoType === 'youtube' ? (
                  <YouTube videoId={selectedVideo.videoId} opts={{ ...opts, width: '100%', height: '100%' }} />
                ) : (
                  <video
                    className="w-full h-full rounded-lg"
                    controls
                    autoPlay
                    src={selectedVideo.videoId}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-6">What Our Partners Say</h2>
            <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto">
              Hear from the leaders and innovators we've had the privilege to work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard>
                  <blockquote className="mb-4">
                    <p className="text-darkCyanGreen/90 italic">"{study.quote}"</p>
                  </blockquote>
                  <cite className="text-sm font-semibold text-darkCyanGreen block">
                    — {study.client}
                  </cite>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;