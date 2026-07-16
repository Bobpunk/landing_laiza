// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Bloqueia indexação de rotas internas de API se houver
        "/_next/", // Bloqueia pastas internas do framework
      ],
    },
    sitemap: "https://laizaadv.com.br/sitemap.xml",
  };
}