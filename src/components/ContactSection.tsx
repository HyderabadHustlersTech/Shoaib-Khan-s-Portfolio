import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react'

const ContactSection: React.FC = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 87906 87245',
      href: 'tel:+918790687245'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shoaib@hyderabadhustlers.com',
      href: 'mailto:shoaib@hyderabadhustlers.com'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@beingashoaib',
      href: 'https://www.instagram.com/beingashoaib'
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden bg-black"
      style={{ overflowX: 'hidden' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-4 leading-none tracking-tight"
            style={{ fontWeight: 900 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">GET IN </span>
            <span className="gradient-text">TOUCH</span>
          </motion.h2>

          {/* Glowing Divider Line */}
          <motion.div
            className="w-32 h-px mx-auto mt-6"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #FEBD59 50%, transparent 100%)',
              boxShadow: '0 0 20px rgba(254, 189, 89, 0.5)',
              willChange: 'transform'
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Contact Methods - Centered Stack Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 lg:space-y-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.6, 0.05, 0.01, 0.9]
                  }}
                  className="group relative block w-full"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Subtle Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, rgba(254, 189, 89, 0.05) 0%, transparent 100%)',
                      border: '1px solid rgba(254, 189, 89, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 flex items-center gap-3 sm:gap-4 lg:gap-8 p-4 sm:p-6 lg:p-8">
                    {/* Icon - Soft Glow Effect - Larger Size */}
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center relative"
                        style={{
                          background: 'rgba(254, 189, 89, 0.08)',
                          border: '1px solid rgba(254, 189, 89, 0.15)'
                        }}
                      >
                        <Icon
                          size={24}
                          className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#FEBD59] relative z-10"
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(254, 189, 89, 0.4))'
                          }}
                        />
                        {/* Icon Glow on Hover */}
                        <motion.div
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'radial-gradient(circle, rgba(254, 189, 89, 0.3) 0%, transparent 70%)',
                            filter: 'blur(8px)'
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-grow min-w-0 overflow-hidden text-left">
                      {/* Label */}
                      <motion.p
                        className="text-xs sm:text-sm font-body font-semibold mb-1 sm:mb-2 uppercase tracking-wider"
                        style={{ color: '#FEBD59' }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {method.label}
                      </motion.p>

                      {/* Value with Elegant Underline */}
                      <div className="relative inline-block w-full max-w-full">
                        <motion.h3
                          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-white group-hover:text-[#FEBD59] transition-colors duration-300 break-words ${method.label === 'Email' ? '' : 'sm:whitespace-nowrap'}`}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.3 }}
                        >
                          {method.value}
                        </motion.h3>

                        {/* Animated Underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-[#FEBD59]"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          style={{
                            boxShadow: '0 0 10px rgba(254, 189, 89, 0.6)'
                          }}
                        />
                      </div>
                    </div>

                    {/* Subtle Arrow Indicator - Hidden on mobile */}
                    <motion.div
                      className="hidden sm:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(254, 189, 89, 0.1)',
                          border: '1px solid rgba(254, 189, 89, 0.2)'
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 45, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          style={{
                            width: '6px',
                            height: '6px',
                            borderTop: '2px solid #FEBD59',
                            borderRight: '2px solid #FEBD59',
                            transform: 'rotate(45deg)'
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Divider Line */}
                  {index < contactMethods.length - 1 && (
                    <motion.div
                      className="h-px mt-6 lg:mt-8"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(254, 189, 89, 0.2) 50%, transparent 100%)'
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Developer Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20 pb-0"
        >
          <p className="text-sm sm:text-base text-white/60 font-body">
            Designed and Developed by -{' '}
            <a
              href="https://shoaibdev.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEBD59] hover:text-[#FFBC4C] transition-colors duration-300 underline decoration-[#FEBD59]/50 hover:decoration-[#FEBD59] underline-offset-4"
            >
              Mohammed Shoaib Choudry
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection