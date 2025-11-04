import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mic, Film, Users, Building, HeartHandshake, Bot } from 'lucide-react';
import DarkVeil from './DarkVeil';

const experiences = [
  {
    title: "Co-founder and CEO",
    company: "Hyderabad Hustlers",
    period: "December 2023 - Present",
    description: "Founded Hyderabad Hustlers, a podcast platform born to tell authentic stories of entrepreneurs. What began as an experiment turned into a movement, covering 50+ entrepreneurs, reaching 1M+ audiences, collaborating with brands, and becoming a partner at August Fest.",
    icon: <Mic size={32} className="text-[#FEBD59]" />,
  },
  {
    title: "Campus Lead, Founders' Friday Lead, Founders' Fest Lead",
    company: "Edventure Park (former)",
    period: "2023",
    description: "Led campus initiatives and organized entrepreneurship events as Campus Lead, Founders' Friday Lead, and Founders' Fest Lead.",
    icon: <Building size={32} className="text-[#FEBD59]" />,
  },
  {
    title: "Content Creation Head",
    company: "Bioreform (former)",
    period: "2023",
    description: "Served as Content Creation Head, leading content initiatives and strategy. This role further deepened exposure to startups and innovation.",
    icon: <Users size={32} className="text-[#FEBD59]" />,
  },
  {
    title: "Terminator",
    company: "Terminator Hunger",
    period: "Present",
    description: "Working as a Terminator at Terminator Hunger, integrating cutting-edge technology with creative projects and driving innovation in startup environments.",
    icon: <HeartHandshake size={32} className="text-[#FEBD59]" />,
  },
  {
    title: "Video Editing Freelancer",
    company: "Freelance",
    period: "Present",
    description: "Providing professional video editing services to content creators and businesses. Combining technical expertise with creative storytelling skills to bring visions to life.",
    icon: <Film size={32} className="text-[#FEBD59]" />,
  },
  {
    title: "AI Engineer",
    company: "Various Projects",
    period: "Present",
    description: "Working as an AI Engineer, developing AI solutions and integrating them into creative projects.",
    icon: <Bot size={32} className="text-[#FEBD59]" />,
  },
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 lg:py-32"
    >
      {/* DarkVeil Background Effect */}
      <div className="absolute inset-0">
        <DarkVeil 
          hueShift={15} 
          noiseIntensity={0.08} 
          scanlineIntensity={0.25} 
          speed={0.2} 
          scanlineFrequency={0.04}
          warpAmount={0.15}
        />
      </div>

      {/* Subtle overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-4 leading-none tracking-tight text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
          <motion.div
            className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-[#FEBD59] to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg sm:text-xl font-body text-white/80 max-w-3xl mx-auto mt-6">
            A journey of entrepreneurship, content creation, and innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex group"
            >
              {/* Left decorative line */}
              <div className="hidden md:block w-1/12 flex justify-center">
                <div className="w-1 h-full bg-gradient-to-b from-[#FEBD59] to-transparent"></div>
              </div>
              
              {/* Experience content */}
              <div className="w-full md:w-11/12 pl-0 md:pl-8">
                <div className="relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 group-hover:scale-[1.02]"
                  style={{
                    border: '1px solid rgba(254, 189, 89, 0.3)',
                    background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.7), rgba(0, 0, 0, 0.7))',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(254, 189, 89, 0.05)'
                  }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 w-14 h-14 rounded-full flex items-center justify-center bg-black/40 border border-[#FEBD59]/30 backdrop-blur-sm group-hover:bg-[#FEBD59]/20 transition-colors duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-[#FEBD59]">{exp.company}</p>
                        </div>
                        <div className="md:text-right mt-2 md:mt-0">
                          <p className="text-sm text-white/70 font-medium">{exp.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-base text-white/80 mt-3">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FEBD59] to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative dot */}
              <div 
                className="absolute left-0 md:left-1/12 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, #FEBD59, #FF9D00)',
                  boxShadow: '0 0 12px rgba(254, 189, 89, 0.8)'
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;