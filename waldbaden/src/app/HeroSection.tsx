"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ playfair }: { playfair: any }) {
    const [scale, setScale] = useState(1); // Startwert

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
            // Mobile: keine Animation
            setScale(1);
        } else if (width < 1200) {
            setScale(1.1);
        } else {
            setScale(1.15);
        }
        };

        handleResize(); // direkt beim Mount

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative w-screen h-screen overflow-hidden">
        {/* Überschrift */}
        <div className="w-screen flex justify-end-safe p-10 px-[8vw] pt-[10vh]">
            <h1
            className={`${playfair.className} z-10 text-white leading-[140%] text-6xl md:text-5xl lg:text-7xl drop-shadow-lg tracking-[2]`}
            >
            Achtsamkeit <br />im Wald
            </h1>
        </div>

        {/* Hintergrundbild */}
        <div className="absolute top-0 left-0 w-screen h-[120%] z-0">
            <Image
            src="/wald.webp"
            alt="Wald"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            style={{
                objectFit: "cover",
                objectPosition: "center",
                transform: `scale(${scale})`,
                transition: scale > 1 ? "transform 0.8s ease-out" : undefined,
            }}
            priority
            fetchPriority="high"
            />
        </div>
        </section>
    );
    }
