import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/cookies"].map((path) => ({
    url: `https://waltx.ae${path || "/"}`,
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
  }));
}
