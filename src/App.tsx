import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import { initLenis } from './utils/lenis'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = initLenis()

    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 9500)

    return () => {
      clearTimeout(timer)
      lenis?.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Shoaib Khan - Content Creator & Entrepreneur</title>
        <meta name="description" content="Shoaib Khan - Content Creator, Video Editor, Director & Entrepreneur from Hyderabad. Co-Founder of HH." />
      </Helmet>

      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.div>
      )}
    </div>
  )
}

export default App