import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import { initLenis, destroyLenis } from './utils/lenis'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const seo = {
    title: 'Shoaib Khan - Content Creator & Entrepreneur',
    description: 'Shoaib Khan - Content Creator, Video Editor, Director & Entrepreneur from Hyderabad. Co-Founder of HH.',
    keywords: 'Shoaib Khan, Mohammed Shoaib Choudry, Content Creator, Director, Video Editor, Hyderabad Entrepreneurs, Hyderabad Hustlers, HH',
    imagePath: '/assets/skpic.webp'
  }
  const siteOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://shoaibkhan.in'
  const canonicalUrl = `${siteOrigin}/`
  const imageUrl = `${siteOrigin}${seo.imagePath}`

  useEffect(() => {
    // Initialize smooth scrolling after splash screen
    // Initialize Lenis immediately but it will start working after splash
    initLenis()
    
    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 9500)

    return () => {
      clearTimeout(timer)
      destroyLenis()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content="Mohammed Shoaib Choudry" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Shoaib Khan" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={imageUrl} />
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