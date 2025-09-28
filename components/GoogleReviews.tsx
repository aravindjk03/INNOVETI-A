'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Sample reviews - Replace with your actual Google reviews
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Exceptional training programs! INNOVEITY transformed our organization with their innovative approach to skill development. Highly recommended for corporate training.',
      date: '2024-08-15',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      text: 'Outstanding ESG consulting services. Their tree plantation initiative helped us achieve our sustainability goals effectively. Professional and impactful work.',
      date: '2024-07-22',
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      rating: 5,
      text: 'Excellent leadership development programs. The training methodology is innovative and results-oriented. Our team\'s performance improved significantly.',
      date: '2024-06-10',
      verified: true
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'INNOVEITY delivered beyond expectations. Their industrial safety training programs are comprehensive and well-structured. Great team to work with.',
      date: '2024-05-18',
      verified: true
    },
    {
      id: 5,
      name: 'Vikram Singh',
      rating: 5,
      text: 'Impressed with their change management expertise. The consultants are knowledgeable and the implementation was smooth. Definitely recommend their services.',
      date: '2024-04-25',
      verified: true
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  // INNOVEITY Google Business profile URL
  const googleReviewsUrl = "https://share.google/xY3S2t9ud0fW72fT0";

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
          <h2 className="text-4xl md:text-5xl font-bold text-darkCyanGreen mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-darkCyanGreen/80 max-w-3xl mx-auto mb-6">
            Real reviews from our valued partners and clients
          </p>
          
          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-2xl font-bold text-darkCyanGreen">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <div className="text-darkCyanGreen/70">
              Based on {totalReviews}+ Google Reviews
            </div>
          </motion.div>

          <motion.a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-darkCyanGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-darkCyanGreen/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Google Reviews
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Featured Review Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 text-center">
              <Quote className="w-12 h-12 text-darkCyanGreen/30 mx-auto mb-4" />
              <blockquote className="text-lg md:text-xl text-darkCyanGreen/90 italic mb-6">
                "{reviews[currentReview].text}"
              </blockquote>
              <div className="flex items-center justify-center gap-2 mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <div className="text-darkCyanGreen font-semibold">
                {reviews[currentReview].name}
                {reviews[currentReview].verified && (
                  <span className="text-sm text-darkCyanGreen/70 ml-2">✓ Verified</span>
                )}
              </div>
              <div className="text-sm text-darkCyanGreen/60 mt-1">
                {new Date(reviews[currentReview].date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-darkCyanGreen/90 mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-darkCyanGreen">
                    {review.name}
                    {review.verified && (
                      <span className="text-darkCyanGreen/70 ml-1">✓</span>
                    )}
                  </div>
                  <div className="text-darkCyanGreen/60">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-darkCyanGreen/80 mb-4">
            Experience the INNOVEITY difference yourself
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/30 text-darkCyanGreen px-8 py-3 rounded-lg font-semibold hover:bg-white/40 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;