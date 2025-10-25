"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({playfair}:{playfair:any}) {
    const [scale, setScale] = useState(1.1);

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) setScale(1.0);
        else if (width < 1200) setScale(1.1);
        else setScale(1.15);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="relative w-screen h-screen overflow-hidden">
            {/* Überschrift */}
        <h1
            className={`${playfair.className} absolute top-7 left-10 z-10 text-white leading-[140%] text-6xl md:text-5xl lg:text-7xl drop-shadow-lg`}
        >
            Waldbaden mit <br />Christiane
        </h1>

        {/* Hintergrundbild */}
        <div className="absolute top-0 left-0 w-screen h-[120%] z-0">
            <Image
            src="/wald.webp"
            alt="Wald"
            fill
            style={{
                objectFit: "cover",
                objectPosition: "center", // oben fixiert
                transform: `scale(${scale})`,
                transition: "transform 0.8s ease-out",
            }}
            priority
            />
        </div>
        </section>
    )
}