import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://waldbaden-mit-christiane.de"
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [""],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}