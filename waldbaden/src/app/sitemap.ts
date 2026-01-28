import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://waldbaden-mit-christiane.de";

    return [
        { url: baseUrl, changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/mein-angebot`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/ueber/waldbaden`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/ueber/mich`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/kontakt`, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/datenschutz`, changeFrequency: "yearly", priority: 0.1 },
        { url: `${baseUrl}/impressum`, changeFrequency: "yearly", priority: 0.1 },
        { url: `${baseUrl}/agb`, changeFrequency: "yearly", priority: 0.1 },
    ];
}