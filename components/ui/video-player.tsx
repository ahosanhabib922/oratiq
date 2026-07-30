"use client";

import * as React from "react";
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export interface VideoPlayerProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "controls"> {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * A themed player over the native <video>.
 *
 * The transport bar is pinned `dir="ltr"`: media time flows left-to-right as
 * a universal notation (like timestamps themselves), so the scrubber and the
 * 0:00 / 3:20 pair keep one orientation in every locale.
 */
export function VideoPlayer({ src, poster, className, ...props }: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  }

  function seekTo(fraction: number) {
    const video = videoRef.current;
    if (!video || !duration) return;
    video.currentTime = Math.min(1, Math.max(0, fraction)) * duration;
  }

  function handleSeekKey(e: React.KeyboardEvent) {
    // The bar is LTR, so physical arrows are correct here by design.
    if (e.key === "ArrowRight") {
      e.preventDefault();
      seekTo((time + 5) / duration);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      seekTo((time - 5) / duration);
    } else if (e.key === "Home") {
      e.preventDefault();
      seekTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      seekTo(1);
    }
  }

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-black",
        className,
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        className="block w-full cursor-pointer"
        {...props}
      />

      <div
        dir="ltr"
        className={cn(
          "absolute inset-x-0 bottom-0 flex items-center gap-2 p-3",
          "bg-gradient-to-t from-black/80 to-transparent text-white",
          "opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100",
          !playing && "opacity-100",
        )}
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-white/20 outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>

        <span className="font-mono text-xs tnum">{formatTime(time)}</span>

        <div
          role="slider"
          tabIndex={0}
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(time)}
          aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
          onKeyDown={handleSeekKey}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            seekTo((e.clientX - rect.left) / rect.width);
          }}
          className="group/bar relative h-6 flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/30" />
          <div
            className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary"
            style={{ left: 0, width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover/bar:opacity-100"
            style={{ left: `${progress}%` }}
          />
        </div>

        <span className="font-mono text-xs tnum">{formatTime(duration)}</span>

        <button
          type="button"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.muted = !video.muted;
            setMuted(video.muted);
          }}
          aria-label={muted ? "Unmute" : "Mute"}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-white/20 outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>

        <button
          type="button"
          onClick={() => wrapRef.current?.requestFullscreen?.()}
          aria-label="Fullscreen"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-white/20 outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Maximize className="size-4" />
        </button>
      </div>
    </div>
  );
}
