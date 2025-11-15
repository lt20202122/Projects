"use client";
import { useAnimation } from "../../AnimationContext";
import { useRef, useEffect } from "react";

export default function StockChartAnimation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { animationDone } = useAnimation(); // <-- Context auslesen
  const { setAnimationDone } = useAnimation();
  useEffect(() => {
    setTimeout(()=>{
      setAnimationDone(true);
    },1000)
    if (animationDone && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video konnte nicht automatisch gestartet werden:", err);
      });
    }
  }, [animationDone]); // reagiert auf Änderung von animationDone

  return (
    <div className="w-full h-full overflow-hidden z-2">
      <video
        ref={videoRef}
        src="/Stocks.mp4"
        muted
        playsInline
        className="w-full h-full object-cover -rotate-2"
      >
        Your browser does not support the video tag.
      </video>
    </div>

  );
}
