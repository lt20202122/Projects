"use client"
import { useState } from "react";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/Zertifikat3.webp",
      alt: "Zertifikat – Naturmentorin",
      title: "Zertifizierung zur Naturmentorin",
      caption: "Abschluss der einjährigen Fortbildung mit Zertifikat am 5. Januar 2024",
      linkName: "",
      linkHref: "",
    },
    {
      src: "/Vortrag.webp",
      alt: "Vortrag – Uni Göttingen",
      title: "Kraftquelle Wald – Achtsamkeit und Naturverbindung für Körper und Geist",
      caption: "Vortrag bei der Veranstaltung 'Wald der Zukunft' der Universität Göttingen am 20. September 2025",
      linkName: "Zur Website der Uni Göttingen",
      linkHref: "https://www.uni-goettingen.de/de/690937.html",
    },
    {
      src: "/braun_zeit.webp",
      alt: "Artikel Braunschweiger Zeitung",
      title: "Megatrend in Braunschweig – Abtauchen in den Wald",
      caption: "Artikel der Wochenendausgabe der BZ vom 8. Juli 2023",
      linkName: "",
      linkHref: "",
    },
    {
      src: "/bibl_meine.webp",
      alt: "Bücherei Meine",
      title: "Achtsamkeit in der Natur",
      caption: "Vortrag in der Bücherei Meine — 15. März 2023",
      linkName: "",
      linkHref: "",
    },
    {
      src: "/KVHS_Gifhorn.webp",
      alt: "KVHS Gifhorn",
      title: "KVHS Gifhorn – Natur erleben",
      caption: "Workshop am 12. Mai 2023",
      linkName: "",
      linkHref: "",
    },
    {
      src: "/BZ.webp",
      alt: "Braunschweiger Zeitung",
      title: "Berichterstattung in der BZ",
      caption: "Artikel erschienen am 3. Juni 2023",
      linkName: "",
      linkHref: "",
    },
    {
      src: "/AZ.webp",
      alt: "Allerzeitung",
      title: "Allerzeitung – Special Waldbaden",
      caption: "Artikel vom 10. August 2023",
      linkName: "",
      linkHref: "",
    },
  ];

  const goToSlide = (index: number) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentSlide(index);
  };

  return (
    <section className="flex items-center justify-center w-full p-4 bg-gray-100">
      <div className="relative w-full max-w-4xl">
        {/* Slider Container */}
        <div className="overflow-hidden rounded-lg shadow-2xl bg-main" style={{ height: "75vh" }}>
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="shrink-0 w-full h-full flex flex-col items-center justify-center p-4 text-center"
              >
                {/* Titel */}
                <h2 className="text-2xl font-semibold mb-4 text-white">{slide.title}</h2>
                {/* Bild */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="max-w-full max-h-[50vh] object-contain mb-4"
                />
                {/* Caption */}
                <p className="text-white mb-2">{slide.caption}</p>
                {/* Optionaler Link */}
                {slide.linkName && slide.linkHref && (
                  <a
                    href={slide.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white before:absolute before:h-0.5 before:w-0 relative before:bg-white hover:before:w-full before:transition-all before:duration-300 before:bottom-0"
                  >
                    {slide.linkName}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer caret-transparent ${
                currentSlide === index ? "bg-main-light w-8" : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Gehe zu Bild ${index + 1}`}
            />
          ))}
        </div>

        {/* Pfeil Navigation */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-2xl transition-all cursor-pointer"
          aria-label="Vorheriges Bild"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-2xl transition-all cursor-pointer"
          aria-label="Nächstes Bild"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
