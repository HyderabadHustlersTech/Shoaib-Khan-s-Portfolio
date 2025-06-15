import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Youtube, PlayCircle, Sparkles, Zap, Star, Rocket, Camera, Mic, Video, Edit3, FileText, Radio } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth interactions
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  
  // Transform mouse position to parallax effects
  const parallaxX = useTransform(springX, [-500, 500], [-15, 15]);
  const parallaxY = useTransform(springY, [-500, 500], [-15, 15]);
  const imageX = useTransform(springX, [-500, 500], [-10, 10]);
  const imageY = useTransform(springY, [-500, 500], [-10, 10]);

  // Initialize particles and loading state
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
    
    // Trigger loading animation
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const heroTextVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 1.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0,
      y: 50,
      rotateY: -25
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 80,
        delay: 0.8,
        duration: 1.5
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(254,189,89,0.4)",
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 300
      }
    },
    tap: { scale: 0.95 }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
        delay: 1.5 + i * 0.1
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 15,
      y: -8,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 400
      }
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #febd59 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 40% 80%, #d97706 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #febd59 0%, transparent 50%), radial-gradient(circle at 20% 80%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 60% 20%, #d97706 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #febd59 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 40% 80%, #d97706 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-[#febd59] rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Floating Content Creation Icons */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[
          { Icon: Camera, position: "top-20 left-20", delay: 0.5 },
          { Icon: Mic, position: "top-1/3 right-24", delay: 1 },
          { Icon: Video, position: "bottom-32 left-16", delay: 1.5 },
          { Icon: Edit3, position: "top-1/2 left-12", delay: 2 },
          { Icon: FileText, position: "bottom-20 right-32", delay: 2.5 },
          { Icon: Radio, position: "top-40 right-16", delay: 3 }
        ].map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} p-4 bg-black/30 backdrop-blur-md rounded-2xl border-2 border-[#febd59]/40`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring" as const,
              damping: 15,
              stiffness: 100,
              delay: delay
            }}
            variants={floatingIconVariants}
            style={{
              x: parallaxX,
              y: parallaxY,
            }}
          >
            <Icon size={28} className="text-[#febd59] drop-shadow-lg" />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            className="relative z-10 min-h-screen flex items-center justify-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side - Text Content */}
                <motion.div 
                  className="text-center lg:text-left space-y-8"
                  variants={heroTextVariants}
                >
                  {/* Rocket Launch Icon */}
                  <motion.div
                    className="flex justify-center lg:justify-start mb-6"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring" as const,
                      damping: 15,
                      stiffness: 200,
                      delay: 0.3
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Rocket size={48} className="text-[#febd59] drop-shadow-lg" />
                      </motion.div>
                      <motion.div
                        className="absolute -inset-2 bg-[#febd59]/30 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Main Title with Spectacular Animation */}
                  <motion.div className="space-y-4">
                    <motion.h1 
                      className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#febd59] via-[#f59e0b] to-[#d97706] leading-tight"
                      style={{ 
                        fontFamily: "'Oswald', 'Arial Black', sans-serif",
                        fontWeight: 900,
                        letterSpacing: "-0.02em"
                      }}
                      initial={{ opacity: 0, y: 100, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring" as const,
                        damping: 20,
                        stiffness: 100,
                        delay: 0.6
                      }}
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 30px rgba(254,189,89,0.8)"
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, type: "spring" as const, damping: 15 }}
                        className="block"
                      >
                        SHOAIB
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, type: "spring" as const, damping: 15 }}
                        className="block"
                      >
                        KHAN
                      </motion.span>
                    </motion.h1>

                    {/* Animated Underline */}
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-[#febd59] to-[#f59e0b] rounded-full mx-auto lg:mx-0"
                      initial={{ width: 0 }}
                      animate={{ width: "200px" }}
                      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>

                  {/* Subtitle with Typewriter Effect */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <motion.p 
                      className="text-2xl md:text-3xl text-white font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      🎙️ Podcaster | 🎬 Content Creator
                    </motion.p>
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-300 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      🚀 Co-founder, Hyderabad Hustlers
                    </motion.p>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                    variants={buttonVariants}
                  >
                    <motion.button 
                      className="group relative px-8 py-4 bg-gradient-to-r from-[#febd59] to-[#f59e0b] text-black font-bold rounded-full overflow-hidden"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#d97706]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <PlayCircle size={20} />
                        Latest Episode
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles size={16} />
                        </motion.div>
                      </span>
                    </motion.button>
                    
                    <motion.button 
                      className="group px-8 py-4 border-2 border-[#febd59] text-[#febd59] font-bold rounded-full relative overflow-hidden backdrop-blur-sm"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#febd59]"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                        <Zap size={20} />
                        Get In Touch
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Social Media Icons */}
                  <motion.div 
                    className="flex justify-center lg:justify-start space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    {[
                      { icon: Instagram, href: "#", color: "#E4405F", name: "Instagram" },
                      { icon: Linkedin, href: "#", color: "#0077B5", name: "LinkedIn" },
                      { icon: Youtube, href: "#", color: "#FF0000", name: "YouTube" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="relative p-4 bg-black border-2 border-[#febd59]/30 rounded-full group"
                        custom={index}
                        variants={socialVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.9 }}
                        title={social.name}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          initial={{ backgroundColor: "transparent" }}
                          whileHover={{ backgroundColor: social.color }}
                          transition={{ duration: 0.3 }}
                        />
                        <social.icon 
                          size={24} 
                          className="text-white relative z-10 group-hover:text-white transition-colors duration-300" 
                        />
                        <motion.div
                          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100"
                          style={{ backgroundColor: social.color }}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.2, opacity: 0.3 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div 
                  className="flex justify-center lg:justify-end"
                  variants={imageVariants}
                >
                  <motion.div
                    className="relative"
                    style={{
                      x: imageX,
                      y: imageY,
                    }}
                  >
                    {/* Glowing Background */}
                    <motion.div
                      className="absolute -inset-8 bg-gradient-to-r from-[#febd59]/40 via-[#f59e0b]/40 to-[#d97706]/40 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main Image Container */}
                    <motion.div
                      className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#febd59]/50 backdrop-blur-sm"
                      whileHover={{
                        y: -8,
                        boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                      }}
                      animate={{
                        y: [-10, 10, -10],
                      }}
                      transition={{
                        y: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.img
                        src="/Assets/2.png"
                        alt="Shoaib Khan"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                      
                      {/* Overlay Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      />
                    </motion.div>

                    {/* Floating Stars */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + (i % 2) * 80}%`,
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          rotate: [0, 360],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2
                        }}
                      >
                        <Star size={16} className="text-[#febd59] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-[#febd59]/60 rounded-full flex justify-center cursor-pointer backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, borderColor: "#febd59" }}
        >
          <motion.div 
            className="w-1 h-4 bg-[#febd59] rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;