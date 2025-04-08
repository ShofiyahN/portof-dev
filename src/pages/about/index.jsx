import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const timeline = [
  {
    title: "Graduated with a Bachelor's Degree - Landscape Architecture",
    description: "Completed studies at IPB with a degree in Landscape Architecture.",
    year: "2022",
    // icon: "🎓"
  },
  {
    title: "Management Trainee IT",
    description: "Started career as a Management Trainee IT, learning the basics of programming (HTML, CSS, JavaScript, etc.).",
    year: "January 2023",
    // icon: "💼"
  },
  {
    title: "Frontend Web Developer",
    description: "Graduated from the Management Trainee program and became a Frontend Web Developer.",
    year: "April 2023",
    // icon: "💻"
  },
  {
    title: "Project Manager & Fullstack Developer (WMS)",
    description: "Became Project Manager for the Warehouse Management System (WMS) project while also working as a full-stack developer.",
    year: "September 2024",
    // icon: "🏆"
  },
  {
    title: "Mobile Developer",
    description: "Started a mobile development project.",
    year: "October 2024",
    // icon: "📱"
  }
];



export default function About() {
  return (
    <div className="relative min-h-screen bg-[#E6D5C1] font-sans">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#E6D5C1] via-[#556B2F] to-[#E6D5C1]"
        animate={{
          background: [
            'linear-gradient(to right, rgb(230, 213, 193), rgb(85, 107, 47), rgb(230, 213, 193))',
            'linear-gradient(to right, rgb(85, 107, 47), rgb(230, 213, 193), rgb(85, 107, 47))',
            'linear-gradient(to right, rgb(230, 213, 193), rgb(85, 107, 47), rgb(230, 213, 193))'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#556B2F" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#556B2F" strokeWidth="0.3" />
          <path d="M20,20 Q40,40 60,20 T100,20" fill="none" stroke="#556B2F" strokeWidth="0.4" />
        </svg>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#556B2F]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C4A484]/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 pt-32">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-24 h-[60vh] flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-full overflow-hidden bg-[#F3E5D4]/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <img
                      src="/assets/profile-picture.jpg"
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -z-10 inset-0 border-2 border-dashed border-[#556B2F]/30 rounded-full"
                />
              </motion.div>

              {/* Intro Text */}
              <div className="md:flex-1">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 text-[#4A3728]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Frontend Web Developer
                  <br />
                  <span className="text-[#8B593E]">& Mobile Developer</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-[#6B4423]/80 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  with a focus on efficiency, problem-solving, and collaboration. I strive to optimize workflows, improve team performance, and ensure successful project execution.
                </motion.p>

                <motion.p 
                  className="text-lg text-[#6B4423]/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Currently crafting amazing experiences at{" "}
                  <span className="text-[#6B4423] font-semibold">Company Name</span>
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#3A4A1F] mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              My Career Journey
            </h2>
            
            <div className="relative">
              {/* Timeline central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#556B2F]/10 via-[#556B2F]/80 to-[#556B2F]/10 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline card */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-[#F3E5D4]/80 backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all 
                              border border-[#556B2F]/20 hover:border-[#556B2F]/40 relative overflow-hidden"
                    >
                      {/* Year label */}
                      <div className="absolute -top-1 -right-1 bg-[#556B2F] text-white py-1 px-3 rounded-bl-lg font-bold">
                        {item.year}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#3A4A1F] mb-3 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-[#556B2F]/80" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {item.description}
                      </p>
                      
                      {/* Decorative lines */}
                      <div className="absolute -bottom-2 -left-2 w-24 h-24">
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#556B2F" strokeWidth="2" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-[#F3E5D4] border-4 border-[#556B2F] flex items-center justify-center text-3xl z-10 shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + (0.1 * index), type: "spring" }}
                      whileHover={{ rotate: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="max-w-3xl mx-auto mt-24 text-center pb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#3A4A1F] mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML','CSS', 'Javascript','React.js', 'Next.js', 'Tailwind CSS','Chakra UI', 'Node.js', 'Firebase', 'Flutter', 'FlutterFlow'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-[#F3E5D4]/80 backdrop-blur-sm rounded-full 
                           text-[#556B2F] hover:bg-[#556B2F]/10 hover:text-[#3A4A1F] 
                           transition-colors cursor-default border border-[#556B2F]/20
                           hover:border-[#556B2F]/40"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}