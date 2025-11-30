
const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Waldbaden mit Christiane",
    "url": "https://waldbaden-mit-christiane.de",
    "description": "Anbieter für Waldbaden (Shinrin-yoku) zur Entspannung und Stressbewältigung in der Region Braunschweig und Gifhorn.",
    "priceRange": ["€€€", "€€"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ahlerfeld 29",
      "addressLocality": "Meine",
      "addressRegion": "DE-NI",
      "postalCode": "38527",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://www.instagram.com/christianeimwald/",
      "https://www.linkedin.com/in/christiane-thoroe-90477023a"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;