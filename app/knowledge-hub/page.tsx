'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Play } from 'lucide-react';
import YouTube from 'react-youtube';
import GlassCard from '@/components/GlassCard';

const KnowledgeHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = ['all', 'skills', 'industry', 'technology', 'sustainability'];

  const articles = [
    {
      id: 1,
      title: 'Top 5 Skills Students Need in 2025',
      excerpt: 'Explore the most in-demand skills that will define career success in the coming years.',
      category: 'skills',
      date: '2024-01-15',
      author: 'Dr. Priya Sharma',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Digital Transformation in Indian Education',
      excerpt: 'How technology is reshaping the educational landscape across India.',
      category: 'technology',
      date: '2024-01-10',
      author: 'Rajesh Kumar',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Sustainable Business Practices: A Corporate Guide',
      excerpt: 'Essential ESG practices every business should implement for long-term success.',
      category: 'sustainability',
      date: '2024-01-05',
      author: 'Anita Desai',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Industry 4.0: Preparing the Workforce',
      excerpt: 'Understanding the skills gap and how educational institutions can bridge it.',
      category: 'industry',
      date: '2023-12-28',
      author: 'Vikram Singh',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Building Resilient Learning Communities',
      excerpt: 'Strategies for creating adaptive and supportive educational environments.',
      category: 'skills',
      date: '2023-12-20',
      author: 'Meera Patel',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Green Technology Adoption in Corporations',
      excerpt: 'Case studies of successful green technology implementations in Indian companies.',
      category: 'sustainability',
      date: '2023-12-15',
      author: 'Arjun Reddy',
      videoId: 'dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Knowledge Hub
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Insights, trends, and expert perspectives on education, technology, 
            and sustainable business practices from our team of thought leaders.
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkCyanGreen/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:ring-2 focus:ring-darkCyanGreen focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-darkCyanGreen text-white'
                          : 'bg-white/30 text-darkCyanGreen hover:bg-white/50'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <GlassCard className="h-full overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => setSelectedVideo(article.videoId)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 group opacity-0 hover:opacity-100"
                    >
                      <motion.div
                        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 group-hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-darkCyanGreen/60 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-darkCyanGreen mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-darkCyanGreen/80 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-darkCyanGreen bg-darkCyanGreen/10 px-2 py-1 rounded">
                        {article.category.toUpperCase()}
                      </span>
                      
                      <motion.button
                        className="text-darkCyanGreen hover:text-darkCyanGreen/80 flex items-center font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-darkCyanGreen/60">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
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
              ✕
            </button>
            <div className="aspect-video">
              <YouTube videoId={selectedVideo} opts={{ ...opts, width: '100%', height: '100%' }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default KnowledgeHubPage;