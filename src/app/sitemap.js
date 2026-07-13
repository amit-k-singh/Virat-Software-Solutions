export default async function sitemap() {
  const baseUrl = "https://viratsoftwaresolutions.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/process",
    "/privacy-policy",
    "/terms-conditions",
    "/solutions",
    "/solutions/ai-automation-solutions",
    "/solutions/cloud-devops-transformation",
    "/solutions/data-analytics-solutions",
    "/solutions/digital-transformation",
    "/solutions/mvp-development",
    "/solutions/saas-product-development",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions/") ? 0.8 : 0.6,
  }));
}
