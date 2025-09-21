'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to transform your organization? Get in touch with our team to discuss 
            how INNOVEITY can help bridge the gap between education and industry.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-darkCyanGreen mb-6">Send us a Message</h2>
              
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100/80 border border-green-300 rounded-lg p-4 mb-6 flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-darkCyanGreen mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:ring-2 focus:ring-darkCyanGreen focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-darkCyanGreen mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:ring-2 focus:ring-darkCyanGreen focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-darkCyanGreen mb-2">
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:ring-2 focus:ring-darkCyanGreen focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your organization name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-darkCyanGreen mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:ring-2 focus:ring-darkCyanGreen focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-darkCyanGreen text-white px-8 py-4 rounded-lg font-semibold hover:bg-darkCyanGreen/90 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <GlassCard>
              <h2 className="text-3xl font-bold text-darkCyanGreen mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-darkCyanGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-darkCyanGreen mb-1">Headquarters</h3>
                    <p className="text-darkCyanGreen/80">
                      No:11 Ritherdon Avenue <br />
                       Ritherdon Road Vepery Chennai - 600007<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-darkCyanGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-darkCyanGreen mb-1">Phone</h3>
                    <p className="text-darkCyanGreen/80">+91 8807824373</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-darkCyanGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-darkCyanGreen mb-1">Email</h3>
                    <p className="text-darkCyanGreen/80">innoveity@gmail.com</p>
                    <p className="text-darkCyanGreen/80">innoveity@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-darkCyanGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-darkCyanGreen mb-1">Business Hours</h3>
                    <p className="text-darkCyanGreen/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-darkCyanGreen/80">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Google Maps Embed */}
            <GlassCard>
              <h2 className="text-2xl font-bold text-darkCyanGreen mb-4">Find Us</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9956937799844!2d80.24321751478126!3d13.040633090821693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c591%3A0x4f74ddbff946af6b!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635789543210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;