import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-52 mb-4">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
                     bg-[#556B2F]/40 hover:bg-[#556B2F]/60 rounded-full text-white transition-all
                     backdrop-blur-sm hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
                     bg-[#556B2F]/40 hover:bg-[#556B2F]/60 rounded-full text-white transition-all
                     backdrop-blur-sm hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all transform ${
              idx === currentIndex ? 'bg-[#556B2F] scale-125' : 'bg-[#C4A484]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  
  const projects = [
  {
    title: 'Deoapp HRIS',
    description: 'A Human Resource Information System (HRIS) platform for managing employees, attendance, payroll, and more',
    position: ['Frontend Developer'],
    link: 'https://hr.deoapp.com/',
    images: ['/assets/portof-pict/HR.png', '/assets/portof-pict/HR-1.png', '/assets/portof-pict/HR-2.png', '/assets/portof-pict/HR-3.png'],
    stack: ['React.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'Wealth Dynamic Assessment',
    description: 'An assessment module for employee evaluation within the HRIS system, featuring a responsive and interactive design.',
    position: ['Frontend Developer'],
    link: 'https://hr.deoapp.com/wealth-dynamic',
    images: ['/assets/portof-pict/WD-1.png', '/assets/portof-pict/WD-2.png'],
    stack: ['React.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'Deoapp Business',
    description: 'A productivity tool for businesses to manage projects and team collaboration',
    position: ['Support Frontend Developer Team'],
    link: 'https://business.deoapp.com/',
    images: [],
    stack: ['React.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'Forwarder.id',
    description: 'A marketplace for shipping service providers, allowing users to search for and compare delivery services',
    position: ['Support Frontend Developer Team'],
    link: 'https://www.forwarder.id/',
    images: [],
    stack: ['Next.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'Admin Forwarder',
    description: 'An admin system for the Forwarder.id marketplace, enabling the management and monitoring of transactions and services.',
    position: ['Support Frontend Developer Team'],
    link: 'https://www.forwarder.co.id/',
    images: [],
    stack: ['Next.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'WMS Autopilot',
    description: 'A Warehouse Management System (WMS) that streamlines inventory management and logistics processes with automation features',
    position: ['Project Manager', 'Fullstack Developer'],
    link: 'https://wms.autopilot.co.id/',
    images: [],
    stack: ['Next.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
  {
    title: 'WMS Autopilot Mobile',
    description: 'A mobile application for WMS Autopilot that helps monitor and manage inventory in real-time.',
    position: ['Project Manager', 'Fullstack Developer', 'Mobile Developer'],
    link: 'https://wms.autopilot.co.id/',
    images: [],
    stack: ['Flutter', 'Firebase']
  },
  {
    title: 'Interior AI',
    description: 'An AI-based platform for interior design and decoration, offering smart design solutions.',
    position: ['Frontend Developer'],
    link: 'https://interior.professionals.ai/',
    images: [],
    stack: ['Next.js', 'Shadcn UI', 'Zustand', 'Firebase']
  },
  {
    title: 'Nutrisionist AI',
    description: 'An AI-driven platform for personalized nutrition and meal planning, helping users make better food choices',
    position: ['Frontend Developer'],
    link: 'https://interior.professionals.ai/',
    images: [],
    stack: ['Next.js', 'Shadcn UI', 'Zustand', 'Firebase']
    },
  {
    title: 'Importir.com',
    description: 'A marketplace for shipping service providers, allowing users to search for and compare delivery services',
    position: ['Support Frontend Developer Team'],
    link: 'https://www.importir.com/',
    images: [],
    stack: ['Next.js', 'Chakra UI', 'Zustand', 'Firebase']
  },
];

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
        {/* Organic shapes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#556B2F" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#556B2F" strokeWidth="0.3" />
          <path d="M20,20 Q40,40 60,20 T100,20" fill="none" stroke="#556B2F" strokeWidth="0.4" />
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#556B2F]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C4A484]/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 pt-32">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <h1 className="text-8xl font-bold mb-6 text-[#F3E5D4] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Projects.
            </h1>
            <p className="text-xl text-[#556B2F]/80 font-light" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              A showcase of my professional projects and contributions
              that demonstrate my expertise in development.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full p-6 bg-[#F3E5D4]/80 backdrop-blur-lg border-[#556B2F]/20 
                                hover:bg-[#F3E5D4] transition-all duration-500 group 
                                hover:shadow-2xl hover:shadow-[#556B2F]/10 rounded-xl">
                  <div className="flex flex-col h-full">
                    {/* Project Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-[#3A4A1F] group-hover:text-[#556B2F] transition-colors"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {project.title}
                        </h3>
                        <p className="text-[#556B2F]/80 text-sm mt-1">
                          {project.description}
                        </p>
                      </div>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#556B2F] opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
                      >
                        <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2">
                          View Project →
                        </motion.span>
                      </a>
                    </div>

                    {/* Image Slider */}
                    <ImageSlider images={project.images} title={project.title} />

                    {/* Project Details */}
                    <div className="mt-auto">
                      {/* Position Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.position.map((pos, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-1.5 bg-[#556B2F]/10 text-[#3A4A1F] rounded-full text-sm font-medium
                                     hover:bg-[#556B2F]/20 transition-colors"
                          >
                            {pos}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="border-t border-[#556B2F]/20 pt-4">
                        <h4 className="text-sm font-medium text-[#3A4A1F] mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-[#556B2F]/5 text-[#556B2F] rounded-lg text-xs
                                       hover:bg-[#556B2F]/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-4xl mx-auto mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: "Total Projects", value: "9+" },
              { label: "Technologies", value: "6+" },
              { label: "Roles Performed", value: "3+" }
            ].map((stat) => (
              <motion.div
                key={stat.label} 
                whileHover={{ scale: 1.03 }}
                className="text-center p-8 backdrop-blur-sm bg-[#F3E5D4]/50 rounded-2xl 
                         border border-[#556B2F]/20 hover:border-[#556B2F]/40 transition-all
                         hover:shadow-xl hover:shadow-[#556B2F]/10"
              >
                <div className="text-5xl font-bold text-[#3A4A1F] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-[#556B2F]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}