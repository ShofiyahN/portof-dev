import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Sparkles, 
  Cloud,
  Palette,
  Rocket,
  Code,
  Database,
  Mail,
  Briefcase,
  File
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { useRouter } from 'next/dist/client/router';

const projectCards = [
  {
    title: 'About Me',
    category: 'About',
    bgColor: 'bg-[#F3E5D4]', 
    description: 'Hi! I\'m a passionate frontend web and mobile developer with experience in building responsive and dynamic applications. I specialize in JavaScript, React, and Flutter. Click here to know more about my journey!',
    image: '/api/placeholder/600/400',
    icons: [
      { Icon: Star, position: { top: -50, right: 25, bottom: 50 } },
    ],
    route: 'about'
  },
  {
    title: 'Experience',
    category: 'My Experience & Projects',
    bgColor: 'bg-[#F3E5D4]',
    description: 'Experienced in developing enterprise applications, digital commerce platforms, and AI-driven Platform. Passionate about building scalable and user-centric applications.',
    image: '/api/placeholder/600/400',
    icons: [
      { Icon: Briefcase, position: { bottom: -40, left: 120, top: -20 } },
    ],
    route: 'experience'
  },
  {
    title: 'Skills',
    category: 'My Skills',
    bgColor: 'bg-[#F3E5D4]',
    description: 'I am proficient in the following technologies: JavaScript, React, Next.js, Flutter, Firebase, and more. I am always learning and improving my skills to stay up to date with the latest trends.',
    image: '/api/placeholder/600/400',
    icons: [
      { Icon: Code, position: { top: -30, left: 20 } },
      { Icon: Database, position: { top: -10, right: -30 } }
    ],
    route: 'experience'
  },
  {
    title: 'Contact',
    category: 'Get in Touch',
    bgColor: 'bg-[#F3E5D4]',
    description: 'Feel free to reach out if you have any questions, collaboration ideas, or just want to chat! Im always happy to discussing new projects, sharing insights, and exploring innovative solutions together',
    image: '/api/placeholder/600/400',
    icons: [
      { Icon: Mail, position: { top: -20, left: -30 } },
    ],
    route: 'contact'
  }
];

export default function Home() {
  const router = useRouter()
  return (
    <div className="relative min-h-screen bg-[#E6D5C1] font-sans overflow-hidden">
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
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-center mb-24"
          >
            <div className="h-[70vh] flex items-center justify-center">
              <div className="flex flex-col items-center w-full">
                <div className="relative w-3/4">
                  <motion.h1 
                    className="text-8xl font-bold mb-6 text-[#F3E8CD]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Hi, I'm <span className="text-[#D2A76C]">Sofia !</span>
                    <br />Frontend Developer
                  </motion.h1>
                  
                  <motion.div 
                    className="absolute -top-16 right-0"
                    initial={{ rotate: -30, scale: 0, y: 20 }}
                    animate={{ rotate: 0, scale: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <Heart className="w-10 h-10" fill="#D2A76C" stroke="#D2A76C" />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-16 left-8"
                    initial={{ rotate: 30, scale: 0, y: -20 }}
                    animate={{ rotate: 0, scale: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <Sparkles className="w-10 h-10" stroke="#A67B5B" />
                  </motion.div>
                </div>

                <motion.p 
                  className="text-xl text-[#6B4423] mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  As a Frontend Developer, I create web and mobile experiences 
                  <br /> that are both functional and delightful.
                  <br />
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-8xl mx-auto px-6">
            {projectCards.map((card, index) => (
              <div
                key={card.title}
                className="relative group cursor-pointer"
                onClick={() => router.push(`${card.route}`)}
              >
                {/* Floating Icons */}
                {card.icons.map((IconData, iconIndex) => (
                  <motion.div
                    key={iconIndex}
                    style={{
                      ...IconData.position,
                      position: 'absolute'
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#D2A76C] z-20"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                    transition={{
                      duration: 0.6,
                      delay: iconIndex * 0.1,
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <IconData.Icon className="w-20 h-20" />
                  </motion.div>
                ))}

                {/* Card */}
                <Card 
                  className={`${card.bgColor} group-hover:shadow-xl transition-all duration-500 
                             overflow-visible rounded-xl relative border-[#A67B5B]/20
                             hover:border-[#A67B5B]/40 backdrop-blur-lg bg-opacity-80
                             hover:bg-opacity-100`}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#4A3728]/0 group-hover:bg-[#4A3728]/40 
                                transition-all duration-500 rounded-xl z-10
                                group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100">
                    <div className="h-full flex items-center justify-center">
                      <h2 className="text-5xl font-bold text-[#F3E5D4] transform translate-y-10 
                                   group-hover:translate-y-0 transition-all duration-500"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {card.title}
                      </h2>
                    </div>
                  </div>

                  <CardContent className="p-8 relative">
                    <div className="mb-4 text-sm font-medium text-[#6B4423]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {card.category}
                    </div>
                    <h2 className="text-4xl font-bold text-[#D2A76C] mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {card.title}
                    </h2>
                    <p className="text-[#6B4423]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}