import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 py-4"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center">
          {/* Combined Logo and Navigation Items in a single container */}
          <div className={`flex items-center gap-8 px-6 py-2 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-black/10 backdrop-blur-lg' : ''
          }`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-[#556B2F]"
            >
              <Link href="/">
                <Image
                  src="/assets/sofia-logo-creative.svg"
                  alt="Sofia Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </motion.div>
            
            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Navigation Items */}
            {['About', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-lg font-medium tracking-wide text-[#F3E5D4] hover:text-[#556B2F] transition-colors duration-300 hover:font-semibold"
                >
                  {item}
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#556B2F] group-hover:w-full transition-all duration-300 shadow-lg" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;