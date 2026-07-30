import { VideoPlayer } from "@/components/ui/video-player";

export default function VideoPlayerDemo() {
  return (
    <div className="w-full max-w-md">
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        aria-label="Demo video"
      />
    </div>
  );
}
