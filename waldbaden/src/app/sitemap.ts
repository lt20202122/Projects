import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "waldbaden-mit-christiane.de"
    return [
        {url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1},
        {url: `${baseUrl}/mein-angebot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9},
        {url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "never", priority: 0.4},
        {url: `${baseUrl}/ueber/mich`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6},
        {url: `${baseUrl}/ueber/waldbaden`, lastModified: new Date(), changeFrequency: "never", priority: 0.5},
    ]
}