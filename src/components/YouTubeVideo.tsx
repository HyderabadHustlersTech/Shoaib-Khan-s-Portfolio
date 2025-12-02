import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface YouTubeVideoProps {
  videoUrl: string
  title: string
  className?: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl, title, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract video ID from URL
  const getVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/)
    return match ? match[1] : ''
  }

  const videoId = getVideoId(videoUrl)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  // Build the YouTube embed URL - autoplay only when user clicks play button
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&enablejsapi=1&autoplay=1`

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className={`aspect-video ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`relative aspect-video ${className}`} onClick={handlePlay}>
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback to a default thumbnail if YouTube thumbnail fails
          const target = e.target as HTMLImageElement
          target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group">
        {/* Play Button */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(254, 189, 89, 0.9)',
              boxShadow: '0 0 30px rgba(254, 189, 89, 0.6)',
            }}
          >
            <Play
              size={40}
              className="ml-1"
              style={{ color: '#000000' }}
              fill="#000000"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default YouTubeVideo

