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
    path: "/",
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

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
