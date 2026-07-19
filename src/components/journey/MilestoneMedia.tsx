"use client";

import { useState } from "react";
import type { Milestone } from "@/lib/content";
import {
  getYouTubeVideoId,
  getYouTubeThumbnail,
  getYouTubeEmbedUrl,
  type ThumbQuality,
} from "@/lib/youtube";
import { Play, ArrowUpRight } from "@/components/ui/Icons";

const NEXT_QUALITY: Record<ThumbQuality, ThumbQuality> = {
  maxresdefault: "hqdefault",
  hqdefault: "mqdefault",
  mqdefault: "sddefault",
  sddefault: "default",
  default: "default",
};

function YouTubePlayer({
  videoUrl,
  title,
  startTime,
  endTime,
  customThumbnail,
  openInYouTube,
}: {
  videoUrl: string;
  title: string;
  startTime?: string;
  endTime?: string;
  customThumbnail?: string;
  openInYouTube?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [quality, setQuality] = useState<ThumbQuality>("maxresdefault");
  const videoId = getYouTubeVideoId(videoUrl);
  const thumb = customThumbnail || getYouTubeThumbnail(videoId, quality);

  const openTab = () => {
    const t = startTime ? `&t=${startTime.replace(":", "m")}s` : "";
    window.open(`https://www.youtube.com/watch?v=${videoId}${t}`, "_blank", "noopener");
  };

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
        <iframe
          src={getYouTubeEmbedUrl(videoId, { autoplay: true, start: startTime, end: endTime })}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => (openInYouTube ? openTab() : setPlaying(true))}
      data-cursor-hover
      aria-label={`Play: ${title}`}
      className="group/media relative block aspect-video w-full overflow-hidden rounded-xl bg-surface"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        onError={() => setQuality((q) => NEXT_QUALITY[q])}
        className="h-full w-full object-cover transition-transform duration-700 group-hover/media:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_40px_rgba(254,189,89,0.5)] transition-transform duration-300 group-hover/media:scale-110">
          {openInYouTube ? <ArrowUpRight className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </span>
      </span>
    </button>
  );
}

function LocalVideo({ videoFile, title }: { videoFile: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
      <video
        src={videoFile}
        title={title}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

function ImageMedia({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-gold/25 bg-surface/40">
        <span className="font-mono text-xs uppercase tracking-widest text-cream-faint">
          Media coming soon
        </span>
      </div>
    );
  }
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

export default function MilestoneMedia({ milestone }: { milestone: Milestone }) {
  switch (milestone.type) {
    case "video":
      return (
        <YouTubePlayer
          videoUrl={milestone.videoUrl}
          title={milestone.title}
          startTime={milestone.startTime}
          endTime={milestone.endTime}
          openInYouTube={milestone.openInYouTube}
        />
      );
    case "side-by-side":
      return (
        <div className="grid grid-cols-2 gap-2">
          <YouTubePlayer
            videoUrl={milestone.leftVideoUrl}
            title={`${milestone.title} — Part 1`}
            startTime={milestone.leftStartTime}
            endTime={milestone.leftEndTime}
            customThumbnail={milestone.leftThumbnail}
          />
          <YouTubePlayer
            videoUrl={milestone.rightVideoUrl}
            title={`${milestone.title} — Part 2`}
            startTime={milestone.rightStartTime}
            endTime={milestone.rightEndTime}
            customThumbnail={milestone.rightThumbnail}
          />
        </div>
      );
    case "video-file":
      return <LocalVideo videoFile={milestone.videoFile} title={milestone.title} />;
    case "image":
      return <ImageMedia src={milestone.imageUrl} alt={milestone.title} />;
    case "placeholder":
      return <ImageMedia alt={milestone.title} />;
  }
}
