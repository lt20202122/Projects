"use client"
import { useState, useRef } from 'react';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    { src: "/Zertifikat3.webp", alt: "Zertifikat zur Naturmentorin" },
    { src: "/Vortrag.webp", alt: "Vortrag an der Uni Göttingen" },
    { src: "/braun_zeit.webp", alt: "Artikel Braunschweiger Zeitung" },
    { src: "/bibl_meine.webp", alt: "Bücherei Meine" },
    { src: "/KVHS_Gifhorn.webp", alt: "KVHS Gifhorn" },
    { src: "/BZ.webp", alt: "Braunschweiger Zeitung" },
    { src: "/AZ.webp", alt: "Allerzeitung" }
  ];
  const captions = [
    {title: "Zertifizierung zur Naturmentorin", caption: "Abschluss der einjährigen Fortbildung mit Zertifikat am 5. Januar 2024", link: ""},
    {title: "Kraftquelle Wald – Achtsamkeit und Naturverbindung für Körper und Geist", caption: "Vortrag bei der Veranstaltung 'Wald der Zukunft' der Universität Göttingen am 20. September 2025", linkName: "Zur Website der Uni Göttingen", linkHref:"https://www.uni-goettingen.de/de/690937.html"},
    {title: "Megatrend in Braunschweig – Abtauchen in den Wald", caption: "Artikel der Wochenendausgabe der BZ vom 8. Juli 2023", linkName: "Zur Website der Uni Göttingen", linkHref:"https://www.uni-goettingen.de/de/690937.html"},
    {title: "", caption: "", linkName: "", linkHref:""},
  ]

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-4xl">
        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="overflow-hidden rounded-lg shadow-2xl bg-white"
          style={{ height: '75vh' }}
        >
          <div 
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="min-w-full h-full flex items-center justify-center p-8"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Gehe zu Bild ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        {currentSlide > 0 && (
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {currentSlide < images.length - 1 && (
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Nächstes Bild"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}