/**
 * Extracts the YouTube video ID from various YouTube URL formats
 * @param url - YouTube video URL
 * @returns The video ID or empty string if not found
 */
export const getYouTubeVideoId = (url: string): string => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return ''
}

/**
 * Generates YouTube thumbnail URL
 * @param videoId - YouTube video ID
 * @param quality - Thumbnail quality ('maxresdefault' | 'hqdefault' | 'mqdefault' | 'sddefault')
 * @returns Thumbnail URL
 */
export const getYouTubeThumbnail = (
  videoId: string,
  quality: 'maxresdefault' | 'hqdefault' | 'mqdefault' | 'sddefault' = 'maxresdefault'
): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

/**
 * Generates YouTube embed URL with specified options
 * @param videoId - YouTube video ID
 * @param options - Embed options
 * @returns Embed URL
 */
export const getYouTubeEmbedUrl = (
  videoId: string,
  options: {
    autoplay?: boolean
    controls?: boolean
    modestbranding?: boolean
    rel?: boolean
    enablejsapi?: boolean
  } = {}
): string => {
  const {
    autoplay = false,
    controls = true,
    modestbranding = true,
    rel = false,
    enablejsapi = true,
  } = options

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: controls ? '1' : '0',
    modestbranding: modestbranding ? '1' : '0',
    rel: rel ? '1' : '0',
    enablejsapi: enablejsapi ? '1' : '0',
  })

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}
