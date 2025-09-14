import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SplashScreen: React.FC = () => {
  const [currentText, setCurrentText] = useState(0)
  const [showFinal, setShowFinal] = useState(false)

  const texts = [
    "Content Creator",
    "Entrepreneur",
    "Co-Founder of HH"
  ]

  useEffect(() => {
    const intervals: ReturnType<typeof setTimeout>[] = []

    // Show each text with delay
    texts.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentText(index)
      }, index * 1000)
      intervals.push(timer)
    })

    // Show final text
    const finalTimer = setTimeout(() => {
      setShowFinal(true)
    }, 3200)
    intervals.push(finalTimer)

    return () => {
      intervals.forEach(clearTimeout)
    }
  }, [])

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const finalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {!showFinal ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-4xl md:text-6xl font-accent font-light text-white tracking-wide"
            >
              {texts[currentText]}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            variants={finalVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              className="text-2xl md:text-3xl text-gray-300 mb-4 font-accent font-light tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              It's
            </motion.div>
            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Shoaib Khan
            </motion.h1>
            <motion.div
              className="w-24 h-0.5 bg-primary mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </motion.div>
        )}
      </div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SplashScreen;