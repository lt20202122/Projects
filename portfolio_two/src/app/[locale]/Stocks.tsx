"use client";
import { useAnimation } from "../../AnimationContext";
import { useRef, useEffect } from "react";

export default function StockChartAnimation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { animationDone } = useAnimation(); // <-- Context auslesen
  const { setAnimationDone } = useAnimation();
  // Wenn animationDone auf true wechselt, Video abspielen
  useEffect(() => {
    if (animationDone && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video konnte nicht automatisch gestartet werden:", err);
      });
    }
  }, [animationDone]); // reagiert auf Änderung von animationDone

  return (
    <div className="w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src="/Stocks.mp4"
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>

  );
}
