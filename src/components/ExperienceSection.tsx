import React from 'react'
import { motion } from 'framer-motion'

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-6 sm:mb-8" style={{ letterSpacing: '0.02em', color: '#FFFFFF' }}>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-body" style={{ letterSpacing: '0', color: '#FFFFFF' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection