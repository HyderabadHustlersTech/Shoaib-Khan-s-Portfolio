import React from 'react'
import { motion } from 'framer-motion'

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-6 sm:mb-8" style={{ letterSpacing: '0.02em', color: '#FFFFFF' }}>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-accent font-light" style={{ letterSpacing: '0.02em', color: '#FFFFFF' }}>
            Video Editing, Content Ideation & Creative Direction
          </p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-accent font-semibold mb-3 sm:mb-4" style={{ letterSpacing: '0.02em', color: '#FEBD59' }}>Video Editing</h3>
              <p className="text-sm sm:text-base font-body" style={{ letterSpacing: '0', color: '#FFFFFF' }}>Professional video editing services for content creators and businesses.</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-accent font-semibold mb-3 sm:mb-4" style={{ letterSpacing: '0.02em', color: '#FEBD59' }}>Content Ideation</h3>
              <p className="text-sm sm:text-base font-body" style={{ letterSpacing: '0', color: '#FFFFFF' }}>Creative content strategies and ideation for social media and marketing.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection