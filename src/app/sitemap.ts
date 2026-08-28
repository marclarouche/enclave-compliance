import type { MetadataRoute } from "next";

const BASE_URL = "https://enclavecompliance.com";
const ROUTES = ["", "/enclave-gap", "/enclave-ssp", "/enclave-ai", "/enterprise", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
