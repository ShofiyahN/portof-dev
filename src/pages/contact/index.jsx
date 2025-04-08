import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
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
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#A67B5B" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#A67B5B" strokeWidth="0.3" />
          <path d="M20,20 Q40,40 60,20 T100,20" fill="none" stroke="#A67B5B" strokeWidth="0.4" />
        </svg>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A67B5B]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C4A484]/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="relative">
                <h1 className="text-[15rem] font-bold text-[#A67B5B]/20 select-none absolute -top-32 left-0 backdrop-blur-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Contact
                </h1>
                <h2 className="text-5xl font-bold text-[#4A3728] relative"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Let's talk.
                </h2>
              </div>
              <p className="text-xl text-[#6B4423] mt-8 relative z-20"
                 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                New projects, collaboration opportunities, or just want to say hi?
                Feel free to reach out through any of these platforms.
              </p>
            </motion.div>

            {/* Contact Links */}
            <div className="space-y-6">
              {[
                {
                  platform: "Email",
                  value: "sofiyahnbs@gmail.com",
                  icon: Mail,
                  link: "mailto:sofiyahnbs@gmail.com"
                },
                {
                  platform: "LinkedIn",
                  value: "linkedin.com/in/shofiyah-nibras",
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/shofiyah-nibras-a8b90422a/"
                },
                {
                  platform: "GitHub",
                  value: "github.com/ShofiyahN",
                  icon: Github,
                  link: "https://github.com/ShofiyahN"
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.platform}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 
                                   backdrop-blur-lg bg-[#F3E5D4]/80 group hover:bg-[#F3E5D4] 
                                   rounded-xl border-[#A67B5B]/20 hover:border-[#A67B5B]/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#A67B5B]/20 backdrop-blur-sm 
                                        flex items-center justify-center group-hover:bg-[#A67B5B]/30 
                                        transition-colors">
                            <contact.icon className="w-6 h-6 text-[#8B593E]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#4A3728]"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              {contact.platform}
                            </h3>
                            <p className="text-[#6B4423]"
                               style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {contact.value}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          className="text-[#8B593E] opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 mb-16 text-center"
            >
              <p className="text-[#6B4423] text-sm backdrop-blur-lg bg-[#F3E5D4]/50 
                           inline-block px-6 py-3 rounded-full border border-[#A67B5B]/20"
                 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Based in West Jakarta • Available for Remote Work
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}