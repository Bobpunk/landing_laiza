// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://laizaadv.com.br";

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Route[] = [
  {
    path: "", // Alterado de "/" para vazio para evitar "laizaadv.com.br//" na rota principal
    priority: 1.0,
    changeFrequency: "monthly",
  },
  {
    path: "/atuacao/direito-criminal",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/atuacao/direito-da-familia",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/atuacao/direito-do-trabalho",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/atuacao/direito-bancario",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/links",
    priority: 0.5,
    changeFrequency: "yearly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => {
    // Garante que a URL final nunca tenha barras duplicadas (ex: https://laizaadv.com.br//atuacao)
    const cleanPath = route.path.startsWith("/") ? route.path : `/${route.path}`;
    const url = route.path === "" ? BASE_URL : `${BASE_URL}${cleanPath}`;

    return {
      url,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });
}