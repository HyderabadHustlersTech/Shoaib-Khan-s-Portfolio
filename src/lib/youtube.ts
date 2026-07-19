/** YouTube URL / thumbnail / embed helpers (ported from the original site). */

export type ThumbQuality =
  | "maxresdefault"
  | "hqdefault"
  | "mqdefault"
  | "sddefault"
  | "default";

export function getYouTubeVideoId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return "";
}

export function getYouTubeThumbnail(
  videoId: string,
  quality: ThumbQuality = "maxresdefault"
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export function timeToSeconds(timeStr: string): number {
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
}

export function getYouTubeEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean;
    controls?: boolean;
    modestbranding?: boolean;
    rel?: boolean;
    enablejsapi?: boolean;
    start?: number | string;
    end?: number | string;
  } = {}
): string {
  const {
    autoplay = false,
    controls = true,
    modestbranding = true,
    rel = false,
    enablejsapi = true,
    start,
    end,
  } = options;

  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    controls: controls ? "1" : "0",
    modestbranding: modestbranding ? "1" : "0",
    rel: rel ? "1" : "0",
    enablejsapi: enablejsapi ? "1" : "0",
  });

  if (start !== undefined) {
    const s = typeof start === "string" ? timeToSeconds(start) : start;
    params.set("start", s.toString());
  }
  if (end !== undefined) {
    const e = typeof end === "string" ? timeToSeconds(end) : end;
    params.set("end", e.toString());
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
