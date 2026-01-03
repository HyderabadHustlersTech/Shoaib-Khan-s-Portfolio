import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { journeyData, type Milestone, type YearData } from '../data/journeyData'
import YouTubeVideo from './YouTubeVideo'

// ============================================
// PLACEHOLDER COMPONENT
// ============================================

const PlaceholderCard: React.FC<{ text: string }> = ({ text }) => (
  <div
    className="relative aspect-video rounded-2xl flex items-center justify-center"
    style={{
      background: 'linear-gradient(135deg, rgba(254, 189, 89, 0.08) 0%, rgba(254, 189, 89, 0.03) 100%)',
      border: '2px dashed rgba(254, 189, 89, 0.3)',
    }}
  >
    <div className="text-center p-4">
      <div
        className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(254, 189, 89, 0.15)' }}
      >
        <Play size={20} style={{ color: '#FEBD59' }} />
      </div>
      <p className="text-white/50 font-body text-sm">{text}</p>
    </div>
  </div>
)

// ============================================
// MILESTONE RENDERER
// ============================================

const MilestoneRenderer: React.FC<{
  milestone: Milestone
  isReversed: boolean
}> = ({ milestone, isReversed }) => {
  // Side-by-side videos
  if (milestone.type === 'side-by-side') {
    return (
      <div className="space-y-4">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white text-center mb-6">
          {milestone.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {milestone.leftVideoUrl && (
            <YouTubeVideo videoUrl={milestone.leftVideoUrl} title={`${milestone.title} - Left`} className="rounded-2xl overflow-hidden border-2 border-[rgba(254,189,89,0.3)]" />
          )}
          {milestone.rightVideoUrl && (
            <YouTubeVideo videoUrl={milestone.rightVideoUrl} title={`${milestone.title} - Right`} className="rounded-2xl overflow-hidden border-2 border-[rgba(254,189,89,0.3)]" />
          )}
        </div>
      </div>
    )
  }

  // Single video
  if (milestone.type === 'video' && milestone.videoUrl) {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center`}>
        <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
          <YouTubeVideo videoUrl={milestone.videoUrl} title={milestone.title} className="rounded-2xl overflow-hidden border-2 border-[rgba(254,189,89,0.3)]" />
        </div>
        <div className={isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}>
          <div
            className="p-5 sm:p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(254, 189, 89, 0.15)',
            }}
          >
            <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white">
              {milestone.title}
            </h4>
          </div>
        </div>
      </div>
    )
  }

  // Placeholder or image
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center`}>
      <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
        {milestone.type === 'image' && milestone.imageUrl ? (
          <div
            className="aspect-video rounded-2xl overflow-hidden"
            style={{ border: '2px solid rgba(254, 189, 89, 0.3)' }}
          >
            <img src={milestone.imageUrl} alt={milestone.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <PlaceholderCard text={milestone.placeholderText || 'Coming soon...'} />
        )}
      </div>
      <div className={isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}>
        <div
          className="p-5 sm:p-6 rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(254, 189, 89, 0.15)',
          }}
        >
          <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white">
            {milestone.title}
          </h4>
        </div>
      </div>
    </div>
  )
}

// ============================================
// YEAR CONTENT COMPONENT
// ============================================

const YearContent: React.FC<{ data: YearData; index: number; direction: number }> = ({
  data,
  index,
  direction,
}) => {
  const isReversed = index % 2 === 1

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <motion.div
      key={data.year}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="w-full"
    >
      {/* Year Number */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h3
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight"
          style={{
            background: 'linear-gradient(180deg, #FEBD59 0%, rgba(254, 189, 89, 0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {data.year}
        </h3>
        <div
          className="w-16 sm:w-20 h-0.5 mx-auto mt-4"
          style={{ background: 'linear-gradient(90deg, transparent, #FEBD59, transparent)' }}
        />
      </div>

      {/* Milestones */}
      <div className="space-y-8">
        {data.milestones.map((milestone, mIndex) => (
          <div key={mIndex}>
            <MilestoneRenderer milestone={milestone} isReversed={isReversed} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ============================================
// NAVIGATION ARROW BUTTON
// ============================================

const NavArrow: React.FC<{
  direction: 'left' | 'right'
  onClick: () => void
  disabled: boolean
}> = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
        rounded-full flex items-center justify-center
        transition-all duration-300
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
      `}
      style={{
        background: disabled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(254, 189, 89, 0.15)',
        border: `2px solid ${disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(254, 189, 89, 0.4)'}`,
        boxShadow: disabled ? 'none' : '0 0 30px rgba(254, 189, 89, 0.2)',
      }}
      whileHover={disabled ? {} : { scale: 1.1, boxShadow: '0 0 40px rgba(254, 189, 89, 0.4)' }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      <Icon
        size={28}
        style={{ color: disabled ? 'rgba(255, 255, 255, 0.3)' : '#FEBD59' }}
      />
    </motion.button>
  )
}

// ============================================
// PROGRESS DOTS
// ============================================

const ProgressDots: React.FC<{
  total: number
  current: number
  onDotClick: (index: number) => void
}> = ({ total, current, onDotClick }) => (
  <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
    {Array.from({ length: total }).map((_, i) => (
      <motion.button
        key={i}
        onClick={() => onDotClick(i)}
        className="relative p-1"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
          style={{
            background: i === current ? '#FEBD59' : 'rgba(254, 189, 89, 0.25)',
            boxShadow: i === current ? '0 0 15px rgba(254, 189, 89, 0.8)' : 'none',
            transform: i === current ? 'scale(1.2)' : 'scale(1)',
          }}
        />
      </motion.button>
    ))}
  </div>
)

// ============================================
// FLOATING PARTICLE
// ============================================

const FloatingParticle: React.FC = () => {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${1 + Math.random() * 2}px`,
    height: `${1 + Math.random() * 2}px`,
  }

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        ...style,
        background: '#FEBD59',
        boxShadow: '0 0 8px rgba(254, 189, 89, 0.7)',
      }}
      animate={{
        y: [0, -50, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 12 + Math.random() * 8,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: 'easeInOut',
      }}
    />
  )
}

// ============================================
// MAIN JOURNEY SECTION
// ============================================

const JourneySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const totalYears = journeyData.length

  const goToNext = (): void => {
    if (activeIndex < totalYears - 1) {
      setDirection(1)
      setActiveIndex(activeIndex + 1)
    }
  }

  const goToPrev = (): void => {
    if (activeIndex > 0) {
      setDirection(-1)
      setActiveIndex(activeIndex - 1)
    }
  }

  const goToIndex = (index: number): void => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  // Handle swipe/drag gestures
  const handleDragEnd = (event: any, info: any): void => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      goToPrev()
    } else if (info.offset.x < -swipeThreshold) {
      goToNext()
    }
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  return (
    <section
      id="journey"
      className="relative bg-black py-20 sm:py-24 lg:py-32"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle key={i} />
        ))}
      </div>

      {/* Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(254, 189, 89, 0.15), transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(254, 189, 89, 0.1), transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight">
            <span className="text-white">MY </span>
            <span style={{ color: '#FEBD59' }}>JOURNEY</span>
          </h2>
          <p className="mt-4 text-white/50 font-body text-sm sm:text-base max-w-md mx-auto">
            Navigate using arrows, keyboard, or swipe on mobile
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          {/* Navigation Row */}
          <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            {/* Left Arrow */}
            <NavArrow direction="left" onClick={goToPrev} disabled={activeIndex === 0} />

            {/* Content Area with Swipe Support */}
            <motion.div
              className="flex-1 min-w-0 overflow-hidden cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <YearContent
                  key={activeIndex}
                  data={journeyData[activeIndex]}
                  index={activeIndex}
                  direction={direction}
                />
              </AnimatePresence>
            </motion.div>

            {/* Right Arrow */}
            <NavArrow direction="right" onClick={goToNext} disabled={activeIndex === totalYears - 1} />
          </div>

          {/* Progress Dots */}
          <ProgressDots total={totalYears} current={activeIndex} onDotClick={goToIndex} />

          {/* Year Counter */}
          <div className="text-center mt-6">
            <span className="text-white/40 font-body text-sm">
              <span className="text-[#FEBD59] font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(totalYears).padStart(2, '0')}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
