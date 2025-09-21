'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, Clock, Users, Star, CheckCircle, Calendar, GraduationCap, FileText, ExternalLink } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

interface Course {
  id: number;
  title: string;
  category: 'me-courses' | 'affiliated-courses';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  features: string[];
  aiciteAffiliated: boolean;
  certified: boolean;
  enrolledStudents: number;
  rating: number;
  nextBatch: string;
  instructor: string;
}

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    // ME Courses
    {
      id: 1,
      title: 'ME in Industrial Safety Engineering',
      category: 'me-courses',
      duration: '2 years',
      level: 'Advanced',
      description: 'Master of Engineering in Industrial Safety Engineering. AICTE affiliated degree program focusing on workplace safety, risk assessment, and safety management systems.',
      features: ['Risk Assessment & Management', 'Safety Engineering Principles', 'Industrial Hygiene', 'Safety Management Systems', 'Accident Investigation', 'Safety Auditing'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 450,
      rating: 4.8,
      nextBatch: 'July 2025',
      instructor: 'Dr. Rajesh Kumar, Safety Engineering Expert'
    },
    {
      id: 2,
      title: 'ME in Environmental Sustainability',
      category: 'me-courses',
      duration: '2 years',
      level: 'Advanced',
      description: 'Master of Engineering in Environmental Sustainability. AICTE affiliated program focusing on sustainable development, environmental management, and green technologies.',
      features: ['Environmental Impact Assessment', 'Sustainable Design', 'Green Technologies', 'Climate Change Mitigation', 'Waste Management', 'Renewable Energy Systems'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 380,
      rating: 4.6,
      nextBatch: 'July 2025',
      instructor: 'Dr. Ananya Patel, Environmental Engineer'
    },
    // Other Affiliated Courses - Safety Programs
    {
      id: 3,
      title: 'Industrial Safety Management',
      category: 'affiliated-courses',
      duration: '6 months',
      level: 'Intermediate',
      description: 'Comprehensive safety management program for industrial professionals. Learn to implement effective safety protocols and manage workplace hazards.',
      features: ['Hazard Identification', 'Safety Protocol Development', 'Risk Management', 'Safety Auditing', 'Incident Investigation', 'Safety Training Methods'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 320,
      rating: 4.7,
      nextBatch: 'February 2025',
      instructor: 'Mr. Vikram Singh, Safety Consultant'
    },
    {
      id: 4,
      title: 'Fire Safety & Emergency Response',
      category: 'affiliated-courses',
      duration: '3 months',
      level: 'Intermediate',
      description: 'Specialized program covering fire safety principles, emergency response procedures, and fire prevention strategies for industrial environments.',
      features: ['Fire Prevention Techniques', 'Emergency Response Planning', 'Fire Fighting Equipment', 'Evacuation Procedures', 'Fire Risk Assessment', 'Emergency Communication'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 280,
      rating: 4.6,
      nextBatch: 'March 2025',
      instructor: 'Col. Ramesh Nair (Retd.), Fire Safety Expert'
    },
    // Industrial Soft Skills Programs
    {
      id: 5,
      title: 'Time Management for Industrial Professionals',
      category: 'affiliated-courses',
      duration: '1 month',
      level: 'Beginner',
      description: 'Essential time management skills tailored for industrial and manufacturing environments. Learn to optimize productivity and manage work priorities effectively.',
      features: ['Priority Setting', 'Task Planning', 'Productivity Tools', 'Workflow Optimization', 'Deadline Management', 'Work-Life Balance'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 450,
      rating: 4.5,
      nextBatch: 'January 2025',
      instructor: 'Ms. Priya Sharma, Productivity Coach'
    },
    {
      id: 6,
      title: 'Leadership & Team Management in Industry',
      category: 'affiliated-courses',
      duration: '2 months',
      level: 'Intermediate',
      description: 'Develop leadership skills specific to industrial environments. Learn to manage teams, resolve conflicts, and drive organizational performance.',
      features: ['Leadership Styles', 'Team Building', 'Conflict Resolution', 'Performance Management', 'Communication Skills', 'Decision Making'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 380,
      rating: 4.8,
      nextBatch: 'February 2025',
      instructor: 'Dr. Ravi Gupta, Organizational Behavior Expert'
    },
    {
      id: 7,
      title: 'Industrial Communication & Interpersonal Skills',
      category: 'affiliated-courses',
      duration: '6 weeks',
      level: 'Beginner',
      description: 'Master effective communication skills for industrial settings. Learn to communicate across hierarchies, present ideas clearly, and build professional relationships.',
      features: ['Verbal Communication', 'Written Communication', 'Presentation Skills', 'Cross-Cultural Communication', 'Negotiation Skills', 'Professional Etiquette'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 520,
      rating: 4.4,
      nextBatch: 'January 2025',
      instructor: 'Ms. Kavya Reddy, Communication Specialist'
    },
    {
      id: 8,
      title: 'Problem Solving & Critical Thinking',
      category: 'affiliated-courses',
      duration: '6 weeks',
      level: 'Intermediate',
      description: 'Develop analytical and problem-solving skills for industrial challenges. Learn systematic approaches to identify, analyze, and solve workplace problems.',
      features: ['Problem Identification', 'Root Cause Analysis', 'Critical Thinking Methods', 'Decision Making Tools', 'Innovation Techniques', 'Process Improvement'],
      aiciteAffiliated: true,
      certified: true,
      enrolledStudents: 350,
      rating: 4.7,
      nextBatch: 'March 2025',
      instructor: 'Dr. Amit Mehta, Process Excellence Expert'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Programs', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'me-courses', label: 'ME Courses', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'affiliated-courses', label: 'Other Affiliated Courses', icon: <Award className="w-5 h-5" /> },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
            Our <span className="text-brandGreen">Courses</span>
          </motion.h1>
          <motion.p
            className="text-xl text-darkCyanGreen/80 max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover our comprehensive range of AICITE affiliated courses and certified programs. 
            Transform your career with industry-leading education designed for the future of work.
          </motion.p>
          
          {/* AICTE Affiliation Banner */}
          <motion.div
            className="bg-gradient-to-r from-brandGreen/20 to-darkCyanGreen/20 backdrop-blur-md border border-brandGreen/30 rounded-lg p-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-3">
              <FileText className="w-8 h-8 text-brandGreen mr-3" />
              <h3 className="text-2xl font-bold text-darkCyanGreen">AICTE Affiliated Programs</h3>
            </div>
            <p className="text-darkCyanGreen/80">
              All our courses are affiliated with AICTE (All India Council for Technical Education) 
              and offer industry-recognized certifications to boost your professional credentials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brandGreen text-white shadow-lg'
                    : 'bg-white/20 backdrop-blur-md border border-white/30 text-darkCyanGreen hover:bg-white/30'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedCourse(course)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      {course.aiciteAffiliated && (
                        <div className="bg-brandGreen/20 text-brandGreen px-2 py-1 rounded-full text-xs font-semibold">
                          AICTE
                        </div>
                      )}
                      {course.certified && (
                        <div className="bg-darkCyanGreen/20 text-darkCyanGreen px-2 py-1 rounded-full text-xs font-semibold">
                          Certified
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-darkCyanGreen mb-3">{course.title}</h3>
                  <p className="text-darkCyanGreen/70 mb-4 text-sm line-clamp-3">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-darkCyanGreen/80">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{course.duration} • {course.level}</span>
                    </div>
                    <div className="flex items-center text-sm text-darkCyanGreen/80">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{course.enrolledStudents.toLocaleString()} students enrolled</span>
                    </div>
                    <div className="flex items-center text-sm text-darkCyanGreen/80">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Next batch: {course.nextBatch}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center">
                    <button 
                      className="bg-brandGreen text-white px-4 py-2 rounded-lg hover:bg-brandGreen/90 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        const subject = `Course Inquiry - ${course.title}`;
                        const body = `Dear INNOVEITY Team,\n\nI am interested in learning more about the ${course.title} program.\n\nPlease provide me with more information about the enrollment process, course fees, schedule, and any prerequisites.\n\nI would also appreciate details about the course curriculum and certification.\n\nThank you for your time. I look forward to hearing from you.\n\nBest regards,`;
                        window.location.href = `mailto:iinvtytraining@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md border border-white/30 rounded-xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <h2 className="text-3xl font-bold text-darkCyanGreen">{selectedCourse.title}</h2>
                  {selectedCourse.aiciteAffiliated && (
                    <div className="bg-brandGreen/20 text-brandGreen px-3 py-1 rounded-full text-sm font-semibold">
                      AICTE Affiliated
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-darkCyanGreen hover:text-darkCyanGreen/70 transition-colors"
                  title="Close"
                >
                  <BookOpen className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-darkCyanGreen/80 mb-6 text-lg leading-relaxed">{selectedCourse.description}</p>
                  
                  <h3 className="text-xl font-bold text-darkCyanGreen mb-4">Course Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {selectedCourse.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-darkCyanGreen/80">
                        <CheckCircle className="w-5 h-5 text-brandGreen mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-darkCyanGreen mb-4">AICTE Certification</h3>
                  <div className="bg-brandGreen/10 border border-brandGreen/30 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <FileText className="w-6 h-6 text-brandGreen mr-3" />
                      <h4 className="text-lg font-semibold text-darkCyanGreen">Industry-Recognized Certificate</h4>
                    </div>
                    <p className="text-darkCyanGreen/80">
                      Upon successful completion, you'll receive an AICTE affiliated certificate that is 
                      recognized across industries in India. This certification validates your skills and 
                      enhances your professional credibility in the job market.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center text-yellow-500 mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="ml-1 font-medium">{selectedCourse.rating} Rating</span>
                      </div>
                      <div className="text-sm text-darkCyanGreen/70">
                        {selectedCourse.enrolledStudents.toLocaleString()} students enrolled
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-darkCyanGreen/80">
                        <Clock className="w-5 h-5 mr-3" />
                        <span>Duration: {selectedCourse.duration}</span>
                      </div>
                      <div className="flex items-center text-darkCyanGreen/80">
                        <GraduationCap className="w-5 h-5 mr-3" />
                        <span>Level: {selectedCourse.level}</span>
                      </div>
                      <div className="flex items-center text-darkCyanGreen/80">
                        <Calendar className="w-5 h-5 mr-3" />
                        <span>Next batch: {selectedCourse.nextBatch}</span>
                      </div>
                      <div className="flex items-center text-darkCyanGreen/80">
                        <Users className="w-5 h-5 mr-3" />
                        <span>Instructor: {selectedCourse.instructor}</span>
                      </div>
                    </div>

                    <button 
                      className="w-full bg-brandGreen text-white py-3 rounded-lg hover:bg-brandGreen/90 transition-colors font-medium"
                      onClick={() => {
                        const subject = `Enrollment Inquiry - ${selectedCourse.title}`;
                        const body = `Dear INNOVEITY Team,\n\nI am interested in enrolling for the ${selectedCourse.title} program.\n\nPlease provide me with more information about the enrollment process, course fees, schedule, and any prerequisites.\n\nI would also appreciate details about the course curriculum and certification.\n\nThank you for your time. I look forward to hearing from you.\n\nBest regards,`;
                        window.location.href = `mailto:iinvtytraining@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      }}
                    >
                      Enroll Now
                    </button>
                    <button className="w-full mt-3 border border-brandGreen text-brandGreen py-3 rounded-lg hover:bg-brandGreen/10 transition-colors font-medium">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursesPage;