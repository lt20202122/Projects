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
        <section className="relative w-full h-screen overflow-hidden">
        {/* Überschrift */}
        <div className="absolute inset-0 flex items-start justify-end p-8 sm:p-12 lg:p-16 z-10">
            <h1
            className={`${playfair.className} text-white leading-tight text-5xl sm:text-6xl lg:text-7xl drop-shadow-xl max-w-3xl text-right`}
            >
            Achtsamkeit <br />im Wald
            </h1>
        </div>

        {/* Hintergrundbild */}
        <div className="absolute inset-0">
            <Image
            src="/wald.webp"
            alt="Waldweg mit Sonnenlicht"
            fill
            sizes="100vw"
            className="object-cover"
            style={{
                transform: `scale(${scale})`,
                transition: scale > 1 ? "transform 0.8s ease-out" : "none",
            }}
            priority
            quality={90}
            />
        </div>
        </section>
    );
    }
