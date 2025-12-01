import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://waldbaden-mit-christiane.de";

    return [
        { url: baseUrl, changeFrequency: "monthly", priority: 1 },
        { url: `${baseUrl}/mein-angebot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/kontakt`, changeFrequency: "yearly", priority: 0.4 },
        { url: `${baseUrl}/ueber/mich`, changeFrequency: "yearly", priority: 0.6 },
        { url: `${baseUrl}/ueber/waldbaden`, changeFrequency: "yearly", priority: 0.7 },
        { url: `${baseUrl}/datenschutz`, changeFrequency: "yearly", priority: 0.1 },
        { url: `${baseUrl}/impressum`, changeFrequency: "yearly", priority: 0.1 },
        { url: `${baseUrl}/agb`, changeFrequency: "yearly", priority: 0.1 },
    ];
}