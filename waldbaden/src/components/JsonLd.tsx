
const JsonLd = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Waldbaden mit Christiane",
    "url": "https://waldbaden-mit-christiane.de",
    "description": "Erlebe Waldbaden in Braunschweig und Gifhorn. Christiane Thoroe bietet achtsame Naturführungen und Stressprävention.",
    "publisher": {
      "@type": "Organization",
      "name": "Waldbaden mit Christiane",
      "logo": {
        "@type": "ImageObject",
        "url": "https://waldbaden-mit-christiane.de/icon.png"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Waldbaden mit Christiane",
    "url": "https://waldbaden-mit-christiane.de",
    "logo": "https://waldbaden-mit-christiane.de/icon.png",
    "image": "https://waldbaden-mit-christiane.de/wald.webp",
    "description": "Anbieter für Waldbaden (Shinrin-yoku), Natur-Mentoring und Stressbewältigung in der Region Braunschweig und Gifhorn.",
    "email": "christianeimwald@gmx.de",
    "priceRange": ["€€", "€€€"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ahlerfeld 29",
      "addressLocality": "Meine",
      "addressRegion": "NI",
      "postalCode": "38527",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3833,
      "longitude": 10.5333
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/christianeimwald/",
      "https://www.linkedin.com/in/christiane-thoroe-90477023a"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://waldbaden-mit-christiane.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mein Angebot",
        "item": "https://waldbaden-mit-christiane.de/mein-angebot"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Über mich",
        "item": "https://waldbaden-mit-christiane.de/ueber/mich"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default JsonLd;