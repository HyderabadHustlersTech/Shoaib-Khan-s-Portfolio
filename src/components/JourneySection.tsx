import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'

interface JourneyEvent {
  date: string
  title: string
  description: string
  videoUrl?: string
}

// Enhanced Particle component for background effect
const Particle: React.FC<{ index: number }> = () => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 10 + Math.random() * 8
  const randomSize = 1 + Math.random() * 2
  const randomMovement = 40 + Math.random() * 60

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        background: '#FEBD59',
        boxShadow: '0 0 8px rgba(254, 189, 89, 0.9), 0 0 16px rgba(254, 189, 89, 0.5)'
      }}
      animate={{
        y: [0, -randomMovement, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.8, 1]
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut"
      }}
    />
  )
}

// Floating orb component for additional movement
const FloatingOrb: React.FC<{ index: number }> = () => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 3
  const randomDuration = 12 + Math.random() * 8
  const randomSize = 3 + Math.random() * 5

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        background: 'radial-gradient(circle, rgba(254, 189, 89, 0.6) 0%, rgba(254, 189, 89, 0.2) 100%)',
        filter: 'blur(2px)',
        boxShadow: '0 0 20px rgba(254, 189, 89, 0.6)'
      }}
      animate={{
        y: [0, -80, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.4, 0.9, 0.4],
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut"
      }}
    />
  )
}

const JourneySection: React.FC = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [particleCount, setParticleCount] = useState(40)
  const [orbCount, setOrbCount] = useState(12)

  useEffect(() => {
    const updateCounts = () => {
      const width = window.innerWidth
      // Reduced particle counts for better performance
      if (width < 640) {
        setParticleCount(15)
        setOrbCount(5)
      } else if (width < 768) {
        setParticleCount(20)
        setOrbCount(6)
      } else if (width < 1024) {
        setParticleCount(30)
        setOrbCount(10)
      } else {
        setParticleCount(40)
        setOrbCount(12)
      }
    }

    updateCounts()
    
    // Throttled resize handler
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updateCounts, 150)
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  const journeyEvents: JourneyEvent[] = [
    // 🎬 Early Creative Journey
    {
      date: 'Apr 17, 2017',
      title: 'The Beginning - Inspired by TBV',
      description: 'Created early YouTube sketches and short films, inspired by The Baigan Vines (TBV). The spark that ignited a creative journey.',
      videoUrl: 'https://www.youtube.com/embed/Z9qalRZfCi0'
    },
    {
      date: 'Feb 13, 2018',
      title: 'First Viral Success',
      description: 'Released a video that quickly went viral, earning early recognition and validation for creative storytelling.',
      videoUrl: 'https://www.youtube.com/embed/_D0blktc1hE'
    },
    {
      date: 'Apr 1, 2018',
      title: 'First Telugu Short Film',
      description: 'Directed his first Telugu short film, marking a significant milestone in cinematic storytelling.'
    },
    // 🎥 Experimentation & Growth
    {
      date: 'Jan 9, 2020',
      title: 'One of the Craziest Videos',
      description: 'Produced one of his most experimental and creative videos, pushing boundaries in content creation and exploring new storytelling techniques.',
      videoUrl: 'https://www.youtube.com/embed/gYuMT0itw9g'
    },
    {
      date: 'Feb 2020 - 2022',
      title: 'Skill Building & Growth',
      description: 'Continued building skills in video editing, storytelling, and content creation. This period was all about refining the craft and experimenting with different formats.'
    },
    {
      date: '2020 - 2022',
      title: 'Meeting Imad Ali at Founders\' Fest',
      description: 'Met Imad Ali at Founders\' Fest and recorded his vision. Loved his mission to terminate hunger and joined his team, marking the beginning of purpose-driven content creation.',
      videoUrl: 'https://www.youtube.com/embed/ou_aBdkTlI8'
    },
    // 🚀 Entrepreneurial Phase
    {
      date: 'Mar 15, 2023',
      title: 'Joined Edventure Park',
      description: 'Entered India\'s 1st and largest student-focused startup incubator, marking the official beginning of the entrepreneurial journey and startup ecosystem immersion.'
    },
    {
      date: 'Later 2023',
      title: 'BioReform & Content Creation',
      description: 'Joined BioReform as a content and media creator during the startup journey. Met Azhar Mohiuddin and continued building expertise in purpose-driven storytelling.'
    },
    {
      date: '2023',
      title: 'EdTalk Panelist',
      description: 'Became a panelist for EdTalk, sharing insights on entrepreneurship, content creation, and the startup ecosystem with aspiring entrepreneurs.',
      videoUrl: 'https://www.youtube.com/embed/YB8Jw19X5fY'
    },
    {
      date: 'Late 2023',
      title: 'Meeting Sayeeda Jabri',
      description: 'Met Sayeeda Jabri and a vision sparked: she wanted to bring entrepreneurial talks to media, and Shoaib wanted to cover authentic startup stories. This meeting laid the foundation for Hyderabad Hustlers.'
    },
    // 🎙️ Hyderabad Hustlers
    {
      date: 'Dec 21, 2023',
      title: 'Formation of Hyderabad Hustlers',
      description: 'Co-founded Hyderabad Hustlers with Sayeeda Jabri. Initially ran podcasts while still working with BioReform, then chose to fully dedicate himself to HH, leaving BioReform. Unlike other startups that go through long pre-incubation phases, HH received direct incubation at Edventure Park due to rapid traction and impact.'
    },
    // 🎭 Other Creative Milestones
    {
      date: 'Sept 18',
      title: 'Stand-Up Comedy Performance',
      description: 'Performed stand-up comedy, exploring a new creative avenue and connecting with audiences through humor and storytelling.',
      videoUrl: 'https://www.youtube.com/embed/3btEtcmv6GI'
    },
    {
      date: 'Ongoing',
      title: 'Content Format Experimentation',
      description: 'Continued experimenting with different content formats including vlogs, shorts, and podcasts, constantly evolving and adapting to new storytelling mediums.'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 lg:py-32"
      style={{ overflowX: 'hidden' }}
    >
      {/* Enhanced Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: particleCount }).map((_, i) => (
          <Particle key={`particle-${i}`} index={i} />
        ))}
        {Array.from({ length: orbCount }).map((_, i) => (
          <FloatingOrb key={`orb-${i}`} index={i} />
        ))}
      </div>

      {/* Ambient Background Orbs - Reduced blur for performance */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(254,189,89,0.06) 0%, transparent 70%)' }}
        animate={isInView ? {
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(254,189,89,0.04) 0%, transparent 70%)' }}
        animate={isInView ? {
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        } : {}}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-4 leading-none tracking-tight"
            style={{ fontWeight: 900 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">MY </span>
            <span className="gradient-text">JOURNEY</span>
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="w-32 h-1 mx-auto mt-6"
            style={{ 
              background: 'linear-gradient(90deg, transparent 0%, #FEBD59 50%, transparent 100%)',
              willChange: 'transform'
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Timeline Line - Desktop Only */}
          <div 
            className="hidden lg:block absolute top-0 bottom-0 w-0.5 bg-[#FEBD59]" 
            style={{ 
              left: 'calc(50% - 1px)',
              background: 'linear-gradient(180deg, transparent 0%, #FEBD59 10%, #FEBD59 90%, transparent 100%)'
            }}
          />

          {/* Timeline Events */}
          <div className="space-y-12 lg:space-y-20">
            {journeyEvents.map((event, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Side Content */}
                    {isLeft && (
                      <div className="text-right pr-10">
                        <motion.div whileHover={{ scale: 1.02 }} className="inline-block w-full">
                          {/* Date Badge */}
                          <div className="flex justify-end mb-4">
                            <motion.div
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                              style={{
                                background: 'rgba(254, 189, 89, 0.15)',
                                border: '2px solid rgba(254, 189, 89, 0.4)'
                              }}
                            >
                              <Calendar size={16} style={{ color: '#FEBD59' }} />
                              <span className="text-sm font-semibold text-[#FEBD59]">
                                {event.date}
                              </span>
                            </motion.div>
                          </div>

                          {/* Content Card */}
                          <motion.div
                            className="p-6 rounded-2xl backdrop-blur-xl text-left"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(254, 189, 89, 0.2)',
                              boxShadow: '0 8px 32px rgba(254, 189, 89, 0.1)'
                            }}
                            whileHover={{
                              boxShadow: '0 12px 48px rgba(254, 189, 89, 0.2)',
                              borderColor: 'rgba(254, 189, 89, 0.4)'
                            }}
                          >
                            <h3 className="text-xl font-display font-bold text-white leading-tight mb-3">
                              {event.title}
                            </h3>
                            <p className="text-white/80 font-body leading-relaxed">
                              {event.description}
                            </p>
                          </motion.div>
                        </motion.div>
                      </div>
                    )}

                    {/* Right Side Video */}
                    {isLeft && event.videoUrl && (
                      <div className="pl-10">
                        <motion.div
                          className="relative rounded-2xl overflow-hidden"
                          style={{
                            border: '2px solid rgba(254, 189, 89, 0.3)',
                            boxShadow: '0 8px 32px rgba(254, 189, 89, 0.15)'
                          }}
                          whileHover={{
                            boxShadow: '0 12px 48px rgba(254, 189, 89, 0.25)',
                            borderColor: 'rgba(254, 189, 89, 0.5)'
                          }}
                        >
                          <div className="aspect-video">
                            <iframe
                              src={`${event.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${event.videoUrl.split('/').pop()}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`}
                              title={event.title}
                              className="w-full h-full"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              style={{ opacity: 0.7 }}
                              allowFullScreen
                            />
                          </div>
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)'
                            }}
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* Left Side Video */}
                    {!isLeft && event.videoUrl && (
                      <div className="pr-10">
                        <motion.div
                          className="relative rounded-2xl overflow-hidden"
                          style={{
                            border: '2px solid rgba(254, 189, 89, 0.3)',
                            boxShadow: '0 8px 32px rgba(254, 189, 89, 0.15)'
                          }}
                          whileHover={{
                            boxShadow: '0 12px 48px rgba(254, 189, 89, 0.25)',
                            borderColor: 'rgba(254, 189, 89, 0.5)'
                          }}
                        >
                          <div className="aspect-video">
                            <iframe
                              src={`${event.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${event.videoUrl.split('/').pop()}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`}
                              title={event.title}
                              className="w-full h-full"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              style={{ opacity: 0.7 }}
                              allowFullScreen
                            />
                          </div>
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)'
                            }}
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* Right Side Content */}
                    {!isLeft && (
                      <div className="pl-10">
                        <motion.div whileHover={{ scale: 1.02 }} className="inline-block w-full">
                          {/* Date Badge */}
                          <div className="flex justify-start mb-4">
                            <motion.div
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                              style={{
                                background: 'rgba(254, 189, 89, 0.15)',
                                border: '2px solid rgba(254, 189, 89, 0.4)'
                              }}
                            >
                              <Calendar size={16} style={{ color: '#FEBD59' }} />
                              <span className="text-sm font-semibold text-[#FEBD59]">
                                {event.date}
                              </span>
                            </motion.div>
                          </div>

                          {/* Content Card */}
                          <motion.div
                            className="p-6 rounded-2xl backdrop-blur-xl"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(254, 189, 89, 0.2)',
                              boxShadow: '0 8px 32px rgba(254, 189, 89, 0.1)'
                            }}
                            whileHover={{
                              boxShadow: '0 12px 48px rgba(254, 189, 89, 0.2)',
                              borderColor: 'rgba(254, 189, 89, 0.4)'
                            }}
                          >
                            <h3 className="text-xl font-display font-bold text-white leading-tight mb-3">
                              {event.title}
                            </h3>
                            <p className="text-white/80 font-body leading-relaxed">
                              {event.description}
                            </p>
                          </motion.div>
                        </motion.div>
                      </div>
                    )}

                    {/* Center Timeline Dot - Perfectly Centered */}
                    <div
                      className="absolute z-20"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className="w-4 h-4 rounded-full border-4 border-black"
                        style={{
                          background: '#FEBD59',
                          boxShadow: '0 0 20px rgba(254, 189, 89, 0.8)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <motion.div whileHover={{ scale: 1.02 }} className="relative">
                      {/* Date Badge */}
                      <div className="mb-4">
                        <motion.div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                          style={{
                            background: 'rgba(254, 189, 89, 0.15)',
                            border: '2px solid rgba(254, 189, 89, 0.4)'
                          }}
                        >
                          <Calendar size={16} style={{ color: '#FEBD59' }} />
                          <span className="text-sm font-semibold text-[#FEBD59]">
                            {event.date}
                          </span>
                        </motion.div>
                      </div>

                      {/* Video (if exists) */}
                      {event.videoUrl && (
                        <motion.div
                          className="relative rounded-2xl overflow-hidden mb-4"
                          style={{
                            border: '2px solid rgba(254, 189, 89, 0.3)',
                            boxShadow: '0 8px 32px rgba(254, 189, 89, 0.15)'
                          }}
                        >
                          <div className="aspect-video">
                            <iframe
                              src={`${event.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${event.videoUrl.split('/').pop()}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`}
                              title={event.title}
                              className="w-full h-full"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              style={{ opacity: 0.7 }}
                              allowFullScreen
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Content Card */}
                      <motion.div
                        className="p-6 rounded-2xl backdrop-blur-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(254, 189, 89, 0.2)',
                          boxShadow: '0 8px 32px rgba(254, 189, 89, 0.1)'
                        }}
                      >
                        <h3 className="text-lg font-display font-bold text-white leading-tight mb-3">
                          {event.title}
                        </h3>
                        <p className="text-white/80 font-body leading-relaxed text-sm">
                          {event.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Impact So Far - Centered Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 max-w-5xl mx-auto"
        >
          <motion.div
            className="relative p-8 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(254,189,89,0.15) 0%, rgba(254,189,89,0.08) 100%)',
              border: '2px solid rgba(254, 189, 89, 0.4)',
              boxShadow: '0 8px 32px rgba(254, 189, 89, 0.2)'
            }}
          >
            {/* Heading */}
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Impact So Far</span>
            </motion.h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Stat 1 */}
              <motion.div
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(254, 189, 89, 0.2)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(254, 189, 89, 0.5)' }}
              >
                <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">90+</div>
                <div className="text-white/90 font-body text-sm sm:text-base">Entrepreneurs Covered</div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(254, 189, 89, 0.2)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(254, 189, 89, 0.5)' }}
              >
                <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">1M+</div>
                <div className="text-white/90 font-body text-sm sm:text-base">Audience Reached</div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="text-center p-6 rounded-2xl sm:col-span-2 lg:col-span-1"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(254, 189, 89, 0.2)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(254, 189, 89, 0.5)' }}
              >
                <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">Multiple</div>
                <div className="text-white/90 font-body text-sm sm:text-base">Brand Collaborations</div>
              </motion.div>
            </div>

            {/* Partnerships */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl sm:text-2xl font-display font-bold text-[#FEBD59] mb-4">
                Official Partners
              </h4>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {['August Fest', 'FFest', 'Founders Friday', 'Feel Giveaway', 'TGIC Project'].map((partner, index) => (
                  <motion.span
                    key={partner}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-body text-sm sm:text-base font-medium text-white"
                    style={{
                      background: 'rgba(254, 189, 89, 0.2)',
                      border: '1px solid rgba(254, 189, 89, 0.4)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      background: 'rgba(254, 189, 89, 0.3)',
                      borderColor: 'rgba(254, 189, 89, 0.6)'
                    }}
                  >
                    {partner}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <motion.blockquote
            className="relative p-8 sm:p-10 rounded-2xl backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(254,189,89,0.1) 0%, rgba(254,189,89,0.05) 100%)',
              border: '2px solid rgba(254, 189, 89, 0.3)',
              boxShadow: '0 8px 32px rgba(254, 189, 89, 0.15)'
            }}
          >
            <div className="text-4xl sm:text-5xl text-[#FEBD59] mb-4 font-display" style={{ lineHeight: 1 }}>"</div>
            <p className="text-xl sm:text-2xl md:text-3xl font-body italic text-white leading-relaxed font-medium">
              To inspire the youth of Hyderabad to pursue their passions, build something of their own, and not be afraid to follow the uncomfortable paths.
            </p>
            <div className="mt-6 text-center">
              <cite className="not-italic text-[#FEBD59] font-display font-bold text-lg tracking-wide">
                ~ Shoaib Khan
              </cite>
            </div>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection
