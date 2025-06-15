import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to blur and opacity values
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Animation variants for the navigation
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.6
      }
    }
  };

  // Staggered animation for menu items
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Mobile menu variants with morphing effect
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  // Magnetic hover effect for buttons
  const magneticHover = {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 400
    }
  };

  const menuItems = ['Home', 'About', 'Podcasts', 'Gallery', 'Contact'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        willChange: "transform"
      }}
    >
      <motion.div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backdropFilter: scrolled ? `blur(${backdropBlur}px)` : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? `blur(${backdropBlur}px)` : 'blur(0px)',
          backgroundColor: scrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(255, 255, 255, 0.1)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
            : 'none'
        }}
        animate={{
          backgroundColor: scrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with hover animation */}
          <motion.div 
            className="font-bold text-xl text-deep-black cursor-pointer"
            whileHover={{
              scale: 1.05,
              color: "#f59e0b",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            style={{ willChange: "transform" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring" as const, damping: 12 }}
            >
              Shoaib Khan
            </motion.span>
          </motion.div>
          
          {/* Desktop Navigation with staggered animation */}
          <motion.div 
            className="hidden md:flex space-x-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                variants={menuItemVariants}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-deep-black font-medium px-3 py-2 rounded-lg overflow-hidden group"
                whileHover={magneticHover}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform" }}
              >
                {/* Background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-warm-yellow to-orange-400 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: 1, 
                    opacity: 0.1,
                    transition: { duration: 0.2 }
                  }}
                />
                
                {/* Text with color transition */}
                <motion.span
                  className="relative z-10 group-hover:text-warm-yellow transition-colors duration-200"
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring" as const, damping: 20, stiffness: 300 }}
                >
                  {item}
                </motion.span>
                
                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-warm-yellow to-orange-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Navigation Button with morphing animation */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-deep-black p-2 rounded-lg"
              whileHover={magneticHover}
              whileTap={{ scale: 0.9 }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="absolute inset-0 bg-warm-yellow rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1, 
                  opacity: 0.1,
                  transition: { duration: 0.2 }
                }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu with glassmorphism */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 mx-4 rounded-2xl overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="px-4 py-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    variants={mobileItemVariants}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-3 text-deep-black font-medium rounded-xl relative overflow-hidden group"
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: { type: "spring" as const, damping: 20, stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ willChange: "transform" }}
                  >
                    {/* Background hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-warm-yellow to-orange-400 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 1, 
                        opacity: 0.1,
                        transition: { duration: 0.2 }
                      }}
                    />
                    
                    <span className="relative z-10 group-hover:text-warm-yellow transition-colors duration-200">
                      {item}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;