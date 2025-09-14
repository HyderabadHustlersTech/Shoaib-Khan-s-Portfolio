import React from 'react'
import { motion } from 'framer-motion'

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-accent font-light">
            Video Editing, Content Ideation & Creative Direction
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-accent font-medium text-primary mb-4">Video Editing</h3>
              <p className="text-gray-300 font-body">Professional video editing services for content creators and businesses.</p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-accent font-medium text-primary mb-4">Content Ideation</h3>
              <p className="text-gray-300 font-body">Creative content strategies and ideation for social media and marketing.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection